const day = document.getElementById('day');
const steps = document.getElementById('steps');
const tbody = document.querySelector('tbody');
const form = document.querySelector('form');
const p = document.querySelector('p');

const stepsArr = JSON.parse(localStorage.getItem('steps')) || [];

const generateRow = (day, steps) => {
    const row = document.createElement('tr');
    const dayCell = document.createElement('td');
    dayCell.textContent = day;
    const stepsCell = document.createElement('td');
    stepsCell.textContent = steps;
    row.append(dayCell, stepsCell);
    tbody.appendChild(row);
}

const generateTable = () => {
    stepsArr.forEach(r => generateRow(r.day, r.steps));
}

generateTable();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!day.value || !steps.value) {
        p.textContent = 'Day or steps cannot be empty'
        return;
    }
    if (stepsArr.find(r => r.day === Number(day.value))) {
        p.textContent = 'Day cannot be duplicated';
        return;
    }
    p.textContent = '';
    stepsArr.push({ day: Number(day.value), steps: Number(steps.value) })
    localStorage.setItem('steps', JSON.stringify(stepsArr))
    generateRow(day.value, steps.value);
})

