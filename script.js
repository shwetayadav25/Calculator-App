
let display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value.trim() === "") return;

        const expression = display.value;

        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            throw new Error("Invalid");
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid");
        }

        display.value = result;
    } catch {
        display.value = "Error";
    }
}
