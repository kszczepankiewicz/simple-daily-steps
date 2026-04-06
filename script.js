const day = document.getElementById('day');
const steps = document.getElementById('steps');
const button = document.querySelector('button');
const tbody = document.querySelector('tbody');
const stepsArr = JSON.parse(localStorage.getItem('steps')) || [];

const generateTable = () => {
    stepsArr.forEach(r => {
        const row = document.createElement('tr');
        const dayCell = document.createElement('td');
        dayCell.textContent = r.day;
        row.appendChild(dayCell);
        const stepsCell = document.createElement('td');
        stepsCell.textContent = r.steps;
        row.appendChild(stepsCell);
        tbody.appendChild(row);
    });

}

generateTable();

button.addEventListener('click', (e) => {
    stepsArr.push({ day: day.value, steps: steps.value })
    console.log(stepsArr);
    localStorage.setItem('steps', JSON.stringify(stepsArr))
    tbody.innerHTML = ``;
    generateTable();
})

