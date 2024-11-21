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

        li.querySelector('.menu-btn').addEventListener('mouseover', function() {
            li.querySelector('.menu').style.display = 'flex';
        });

        li.addEventListener('mouseleave', function() {
            li.querySelector('.menu').style.display = 'none';
        });

        li.querySelector('.delete').addEventListener('click', function() {
            if (confirm('Opravdu chcete odstranit tuto položku?')) {
                li.remove();
            }
        });

        li.querySelector('.edit').addEventListener('click', function() {
            document.getElementById('datum').value = datum;
            document.getElementById('jmeno').value = jmeno;
            document.getElementById('castka').value = castka;
            document.getElementById('popis').value = popis;

            document.getElementById('form').style.display = 'block';
            document.getElementById('toggleFormBtn').classList.add('cross');
            
            li.remove();
        });

        document.getElementById('seznam').appendChild(li);

        document.getElementById('datum').value = '';
        document.getElementById('jmeno').value = '';
        document.getElementById('castka').value = '';
        document.getElementById('popis').value = '';

        const toggleFormBtn = document.getElementById('toggleFormBtn');
        document.getElementById('form').style.display = 'none';
        toggleFormBtn.classList.remove('cross');
    } else {
        alert('Vyplňte všechny údaje.');
    }
});

document.getElementById('sortBtn').addEventListener('click', function() {
    const sortOptions = document.querySelector('.sort-options');
    sortOptions.style.display = sortOptions.style.display === 'none' || sortOptions.style.display === '' ? 'flex' : 'none';
});

document.querySelectorAll('.sort-options button[data-sort]').forEach(button => {
    button.addEventListener('click', function() {
        const sortBy = this.dataset
