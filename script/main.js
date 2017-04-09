// Main Variables

var display = document.getElementById('display'),
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

// Input numbers

for ( i = 0; i < num.length; i++) {
    num[i].onclick = function() {
        out.value += this.value;
    }
}

for ( i = 0; i < op.length; i++ ) {
    op[i].onclick = function() {
        var numOne = parseInt(out.value),
            opVal = this.value,
            numTwo;

        out.value = '';

        for ( i = 0; i < num.length; i++ ) {
            num[i].addEventListener('click', function() {
                numTwo = parseInt(out.value);
                sortVal(opVal,numOne,numTwo);
            })
        }
    }
}

function sortVal(o,i,t) {
    var total;

    if ( o === '+' ) {
        total = i + t;
    } else if ( o === '-' ) {
        total = i - t;
    } else if ( o === 'x' ) {
        total = i * t;
    } else if ( o === '÷' ) {
        total = i / t;
    }

    equal.onclick = function() {
        out.value = total;
    }
}

