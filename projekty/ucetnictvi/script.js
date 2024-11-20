document.getElementById('toggleFormBtn').addEventListener('click', function() {
    const form = document.getElementById('form');
    if (form.style.display === 'none') {
        form.style.display = 'block';
        this.classList.remove('plus');
        this.classList.add('cross');
    } else {
        form.style.display = 'none';
        this.classList.remove('cross');
        this.classList.add('plus');
    }
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
            <button class="menu-btn">⋮</button>
            <div class="menu">
                <button class="delete">Smazat</button>
                <button class="edit">Upravit</button>
            </div>
        `;

        li.querySelector('.checkbox').addEventListener('change', function() {
            li.classList.toggle('completed');
        });

        li.querySelector('.menu-btn').addEventListener('click', function() {
            const menu = li.querySelector('.menu');
            menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'flex' : 'none';
        });

        li.querySelector('.delete').addEventListener('click', function() {
            if (confirm('Opravdu chcete odstranit tuto položku?')) {
                li.remove();
            }
        });

        li.querySelector('.edit').addEventListener('click', function() {
            alert('Funkce Upravit zatím není implementována.');
        });

        document.getElementById('seznam').appendChild(li);

        document.getElementById('datum').value = '';
        document.getElementById('jmeno').value = '';
        document.getElementById('castka').value = '';
        document.getElementById('popis').value = '';

        const toggleFormBtn = document.getElementById('toggleFormBtn');
        form.style.display = 'none';
        toggleFormBtn.classList.remove('cross');
        toggleFormBtn.classList.add('plus');
    } else {
        alert('Vyplňte všechny údaje.');
    }
});
