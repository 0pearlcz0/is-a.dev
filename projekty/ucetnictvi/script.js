document.getElementById('toggleFormBtn').addEventListener('click', function() {
    const form = document.getElementById('form');
    if (form.style.display === 'none') {
        form.style.display = 'block';
        this.textContent = '+';
    } else {
        const datum = document.getElementById('datum').value || new Date().toISOString().split('T')[0];
        const jmeno = document.getElementById('jmeno').value;
        const castka = document.getElementById('castka').value;
        const popis = document.getElementById('popis').value;

        if (jmeno && castka && popis) {
            const li = document.createElement('li');
            li.innerHTML = `<span>${datum} - ${jmeno} dluží ${castka} Kč: ${popis}</span> <input type="checkbox" class="checkbox">`;

            li.querySelector('.checkbox').addEventListener('change', function() {
                li.classList.toggle('completed');
            });

            document.getElementById('seznam').appendChild(li);

            document.getElementById('datum').value = '';
            document.getElementById('jmeno').value = '';
            document.getElementById('castka').value = '';
            document.getElementById('popis').value = '';

            form.style.display = 'none';
            this.textContent = '+';
        } else {
            alert('Vyplňte všechny údaje.');
        }
    }
});
