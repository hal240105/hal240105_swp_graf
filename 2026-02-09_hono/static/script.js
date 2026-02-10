const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const stepInput = document.getElementById("step");
const tableBody = document.getElementById("table-body");
const button = document.getElementById("calculate");

function f(x) {
    return x * x;
}
function g(x) {
    return x * x / 4;
}
function h(x) {
    return x * x - 4;
}
function i(x) {
    return x * x / 4 - 4;
}

function calculateValues() {
    const start = Number(startInput.value);
    const end = Number(endInput.value);
    const step = Number(stepInput.value);

    tableBody.innerHTML = "";

    if (step <= 0 || start > end) {
        alert("Bitte gültige Werte eingeben!");
        return;
    }

    for (let x = start; x <= end; x += step) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${x}</td>
            <td>${f(x)}</td>
            <td>${g(x)}</td>
            <td>${h(x)}</td>
            <td>${i(x)}</td>
        `;

        tableBody.appendChild(row);
    }
}

button.addEventListener("click", calculateValues);
