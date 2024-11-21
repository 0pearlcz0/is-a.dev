document.getElementById('toggleFormBtn').addEventListener('click', function() {
    const form = document.getElementById('form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    this.classList.toggle('cross');
});

document.getElementById('addBtn').addEventListener('click', function() {
    const datum = document.getElementById('datum').value || new Date().toISOString().split('T')[0];
    const jmeno = document.getElementById('jmeno').value;
    const castka = document.getElementById('castka').value;
    const popis = document.getElementById('popis').value;

    if (jmeno && castka && popis) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${datum} - ${jmeno} dluží ${castka} Kč: ${popis}</span>`;
        document.getElementById('seznam').appendChild(li);

        document.getElementById('datum').value = '';
        document.getElementById('jmeno').value = '';
        document.getElementById('castka').value = '';
        document.getElementById('popis').value = '';
    } else {
        alert('Vyplňte všechny údaje.');
    }
});

document.querySelectorAll('.sort-group').forEach(group => {
    const button = group.querySelector('.sort-btn');
    const arrow = group.querySelector('.arrow');

    button.addEventListener('click', function() {
        const sortKey = button.dataset.sort;
        const order = arrow.dataset.order;
        const ul = document.getElementById('seznam');
        const items = Array.from(ul.children);

        items.sort((a, b) => {
            const [fieldA, fieldB] = sortKey === 'datum'
                ? [new Date(a.textContent.split(' - ')[0]), new Date(b.textContent.split(' - ')[0])]
                : sortKey === 'castka'
                ? [parseFloat(a.textContent.split('dluží')[1]), parseFloat(b.textContent.split('dluží')[1])]
                : [a.textContent.split(' - ')[1], b.textContent.split(' - ')[1]];
            return order === 'asc' ? fieldA > fieldB ? 1 : -1 : fieldA < fieldB ? 1 : -1;
        });

        ul.innerHTML = '';
        items.forEach(item => ul.appendChild(item));
        arrow.dataset.order = order === 'asc' ? 'desc' : 'asc';
    });
});
