// script.js

function changeColor() {
    var content = document.getElementById('content');
    content.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// This function seems to be missing in the provided code
function calculateTemp() {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.querySelector('#temp_diff');
    const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celTOfah = (cel) => {
        let fahrenheit = (cel * (9 / 5) + 32);
        return fahrenheit;
    }

    const fahTOcel = (fehr) => {
        let celsius = ((fehr - 32) * 5 / 9);
        return celsius;
    }

    let result;
    if (valeTemp == "cel") {
        result = celTOfah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    } else {
        result = fahTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    }

    setTimeout(() => {
        window.location.reload();
    }, 3000);
}
