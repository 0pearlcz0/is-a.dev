document.getElementById('toggleFormBtn').addEventListener('click', function() {
    const form = document.getElementById('form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('addBtn').addEventListener('click', function() {
    const datum = document.getElementById('datum').value || new Date().toISOString().split('T')[0];
    const jmeno = document.getElementById('jmeno').value;
    const castka = document.getElementById('castka').value;
    const popis = document.getElementById('popis').value;

    if (jmeno && castka && popis) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${datum} - ${jmeno} dluží ${castka} Kč: ${popis}</span>
            <input type="checkbox" class="checkbox">
            <button class="delete-btn">Odstranit</button>
        `;

        li.querySelector('.checkbox').addEventListener('change', function() {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete-btn').addEventListener('click', function() {
            if (confirm('Opravdu chcete odstranit tuto položku?')) {
                li.remove();
            }
        });

        document.getElementById('seznam').appendChild(li);

        document.getElementById('datum').value = '';
        document.getElementById('jmeno').value = '';
        document.getElementById('castka').value = '';
        document.getElementById('popis').value = '';

        document.getElementById('form').style.display = 'none';
    } else {
        alert('Vyplňte všechny údaje.');
    }
});
