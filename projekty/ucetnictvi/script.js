// Tlačítko + / x pro zobrazení formuláře
document.getElementById('toggleFormBtn').addEventListener('click', function () {
    const form = document.getElementById('form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    this.classList.toggle('cross');
});

// Přidání nové položky do seznamu
document.getElementById('addBtn').addEventListener('click', function () {
    const datum = document.getElementById('datum').value || new Date().toISOString().split('T')[0];
    const jmeno = document.getElementById('jmeno').value;
    const castka = document.getElementById('castka').value;
    const popis = document.getElementById('popis').value;

    if (jmeno && castka && popis) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${datum} - ${jmeno} dluží ${castka} Kč: ${popis}</span>
            <input type="checkbox" class="checkbox">
            <span class="settings">•••</span>
        `;

        // Zaškrtnutí položky jako splněné
        li.querySelector('.checkbox').addEventListener('change', function () {
            li.classList.toggle('completed');
        });

        // Nastavení (úprava/smazání)
        li.querySelector('.settings').addEventListener('click', function () {
            alert('Nastavení této položky není implementováno.');
        });

        document.getElementById('seznam').appendChild(li);

        // Vyčištění formuláře
        document.getElementById('datum').value = '';
        document.getElementById('jmeno').value = '';
        document.getElementById('castka').value = '';
        document.getElementById('popis').value = '';

        // Zavření formuláře
        document.getElementById('form').style.display = 'none';
        document.getElementById('toggleFormBtn').classList.remove('cross');
    } else {
        alert('Vyplňte všechny údaje.');
    }
});
