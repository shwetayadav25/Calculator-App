const display = document.getElementById("display");

function appendValue(value) {
    display.value = display.value + value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value === "") {
            return;
        }

        const result = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        display.value = Number.isFinite(result)
            ? result
            : "Error";

    } catch (error) {
        display.value = "Error";
    }
}
