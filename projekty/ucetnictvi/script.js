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
            <div class="settings">•••
                <div class="settings-menu">
                    <button class="settings-option" onclick="editItem(this)">Upravit</button>
                    <button class="settings-option" onclick="deleteItem(this)">Odstranit</button>
                </div>
            </div>
        `;
        document.getElementById('seznam').appendChild(li);
        document.getElementById('form').style.display = 'none';
        document.getElementById('toggleFormBtn').classList.remove('cross');
    } else {
        alert('Vyplňte všechny údaje.');
    }
});

document.getElementById('sortArrow').addEventListener('click', function () {
    const order = this.dataset.order;
    this.dataset.order = order === 'asc' ? 'desc' : 'asc';
    this.textContent = order === 'asc' ? '▼' : '▲';
});

function deleteItem(btn) {
    if (confirm('Opravdu chcete odstranit tuto položku?')) {
        btn.closest('li').remove();
    }
}

function editItem(btn) {
    const li = btn.closest('li');
    const [datum, jmeno, castka, popis] = li.querySelector('span').textContent.split(' - ')[1].split(' dluží ')[0].split(': ');

    document.getElementById('datum').value = datum.trim();
    document.getElementById('jmeno').value = jmeno.trim();
    document.getElementById('castka').value = castka.trim();
    document.getElementById('popis').value = popis.trim();

    li.remove();
    document.getElementById('form').style.display = 'block';
}
