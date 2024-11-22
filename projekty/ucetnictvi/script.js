document.getElementById('toggleFormBtn').addEventListener('click', function () {
    const form = document.getElementById('form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    this.classList.toggle('cross');
});

document.getElementById('addBtn').addEventListener('click', function () {
    const datum = document.getElementById('datum').value || new Date().toISOString().split('T')[0];
    const jmeno = document.getElementById('jmeno').value;
    const castka = document.getElementById('castka').value;
    const popis = document.getElementById('popis').value;

    if (jmeno && castka && popis) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${datum} - ${jmeno} dluží ${castka} Kč: ${popis}</span>
            <span class="settings">•••</span>
        `;

        li.querySelector('.settings').addEventListener('click', function () {
            const action = confirm('Odstranit tuto položku?');
            if (action) li.remove();
        });

        document.getElementById('seznam').appendChild(li);
        document.getElementById('form').style.display = 'none';
        document.getElementById('toggleFormBtn').classList.remove('cross');
    } else {
        alert('Vyplňte všechny údaje.');
    }
});

