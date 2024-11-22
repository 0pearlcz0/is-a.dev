// Obsluha zobrazení/skrytí formuláře
document.getElementById('toggleFormBtn').addEventListener('click', function () {
    const form = document.getElementById('form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

// Přidání nové položky
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
            <div class="settings">
                <span>⋮</span>
                <div class="settings-menu">
                    <button class="settings-option settings-edit">Upravit</button>
                    <button class="settings-option settings-delete">Smazat</button>
                </div>
            </div>
        `;

        document.getElementById('seznam').appendChild(li);

        // Reset formuláře
        document.getElementById('datum').value = '';
        document.getElementById('jmeno').value = '';
        document.getElementById('castka').value = '';
        document.getElementById('popis').value = '';
    } else {
        alert('Vyplňte všechny údaje.');
    }
});

// Funkce pro označení řádku jako přečteného
document.getElementById('seznam').addEventListener('change', function (e) {
    if (e.target.classList.contains('checkbox')) {
        const li = e.target.closest('li');
        li.classList.toggle('completed');
    }
});

// Funkce pro tlačítko Upravit
document.getElementById('seznam').addEventListener('click', function (e) {
    if (e.target.classList.contains('settings-edit')) {
        const li = e.target.closest('li');
        const content = li.querySelector('span').textContent;

        const [datum, jmenoCastka] = content.split(' - ');
        const [jmeno, castkaPopis] = jmenoCastka.split(' dluží ');
        const [castka, popis] = castkaPopis.split(': ');

        document.getElementById('datum').value = datum.trim();
        document.getElementById('jmeno').value = jmeno.trim();
        document.getElementById('castka').value = castka.trim();
        document.getElementById('popis').value = popis.trim();

        li.remove();
    }
});

// Funkce pro tlačítko Smazat
document.getElementById('seznam').addEventListener('click', function (e) {
    if (e.target.classList.contains('settings-delete')) {
        const li = e.target.closest('li');
        if (confirm('Opravdu chcete tuto položku smazat?')) {
            li.remove();
        }
    }
});

