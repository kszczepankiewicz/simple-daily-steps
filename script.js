const day = document.getElementById('day');
const steps = document.getElementById('steps');
const button = document.querySelector('button');
const tbody = document.querySelector('tbody');
const form = document.querySelector('form');

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
    stepsArr.push({ day: day.value, steps: steps.value })
    localStorage.setItem('steps', JSON.stringify(stepsArr))
    generateRow(day.value, steps.value);
})

