// Main Variables

var numOne,
    numTwo,
    display = document.getElementById('display'),
    out = document.getElementById('out'),
    num = document.querySelectorAll('.number'),
    clear = document.getElementById('clear'),
    op = document.querySelectorAll('.operator'),
    equal = document.getElementById('equal'),
    i;

clear.onclick = function() {
    out.value = '';
    display.innerText = '';
}

numOutput();

function numOutput() {
    for ( i = 0; i < num.length; i++ ) {
        num[i].onclick = function() {
            out.value += this.value;
        }
    }
}

// Addition Function

addition();

function addition() {
    op[0].onclick = function() {
        numOne = out.value;
        display.innerText = numOne + ' + ';
        out.value = '';

        equal.onclick = function() {
            numTwo = out.value;
            var total = parseInt(numOne) + parseInt(numTwo);
            out.value = total;
            display.innerText = numOne + ' + ' + numTwo + ' = ' + total;
        }

    }
}

// Subtraction Function

subtraction();

function subtraction() {
    op[1].onclick = function() {
        numOne = out.value;
        display.innerText = numOne + ' - ';
        out.value = '';

        equal.onclick = function() {
            numTwo = out.value;
            var total = parseInt(numOne) - parseInt(numTwo);
            out.value = total;
            display.innerText = numOne + ' - ' + numTwo + ' = ' + total;
        }

    }
}

// Multiplication Function

multiplication();

function multiplication() {
    op[2].onclick = function() {
        numOne = out.value;
        display.innerText = numOne + ' x ';
        out.value = '';

        equal.onclick = function() {
            numTwo = out.value;
            var total = parseInt(numOne) * parseInt(numTwo);
            out.value = total;
            display.innerText = numOne + ' x ' + numTwo + ' = ' + total;
        }

    }
}

// Division Function

division();

function division() {
    op[3].onclick = function() {
        numOne = out.value;
        display.innerText = numOne + ' ÷ ';
        out.value = '';

        equal.onclick = function() {
            numTwo = out.value;
            var total = parseInt(numOne) / parseInt(numTwo);
            out.value = total;
            display.innerText = numOne + ' ÷ ' + numTwo + ' = ' + total;
        }

    }
}