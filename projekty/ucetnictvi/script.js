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
            <input type="checkbox" class="checkbox">
        `;

        li.querySelector('.checkbox').addEventListener('change', function () {
            li.classList.toggle('completed');
        });

        document.getElementById('seznam').appendChild(li);

        // Reset form inputs
        document.getElementById('datum').value = '';
        document.getElementById('jmeno').value = '';
        document.getElementById('castka').value = '';
        document.getElementById('popis').value = '';

        // Hide form and menu
        document.getElementById('form').style.display = 'none';
        document.getElementById('toggleFormBtn').classList.remove('cross');
        document.getElementById('sortMenu').style.display = 'none';
    } else {
        alert('Vyplňte všechny údaje.');
    }
});

// Handle sort arrow click
document.getElementById('sortArrow').addEventListener('click', function () {
    const order = this.dataset.order;
    this.dataset.order = order === 'asc' ? 'desc' : 'asc';
});

// Handle sort menu options
document.querySelectorAll('.sort-option').forEach(option => {
    option.addEventListener('click', function () {
        const sortKey = this.dataset.sort;
        const order = document.getElementById('sortArrow').dataset.order;
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

        // Hide sort menu after sorting
        document.getElementById('sortMenu').style.display = 'none';
    });
});

// Hide menu when mouse leaves the sort area
const sortContainer = document.getElementById('sortContainer');
sortContainer.addEventListener('mouseleave', function () {
    document.getElementById('sortMenu').style.display = 'none';
});
