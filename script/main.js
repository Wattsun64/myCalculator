// Main Variables
(function(){
    var display = document.getElementById('display'),
        out = document.getElementById('out'),
        num = document.querySelectorAll('.number'),
        clear = document.getElementById('clear'),
        op = document.querySelectorAll('.operator'),
        equal = document.getElementById('equal'),
        numberDiv = document.getElementById('calc-num-btn'),
        i;

    clear.onclick = function() {
        out.value = '';
        display.innerText = '';
    }

// Input numbers

    numberDiv.addEventListener('click', function(e) {
        if ( e.target && e.target.nodeName === 'INPUT' ) {
            out.value += e.target.value;
            console.log(e.target.value + ' has been clicked');
        }
    })


// Retrieve first number variable, clear out value and add event listener in order to retrieve numTwo value

    for ( i = 0; i < op.length; i++ ) {
        op[i].onclick = function() {
            var numOne = parseInt(out.value),
                opVal = this.value,
                numTwo;

            out.value = '';

            display.innerText = numOne + ' ' + opVal;


            document.addEventListener('click', function() {
                numTwo = parseInt(out.value);

                sortVal(opVal,numOne,numTwo);
            })

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
            display.innerText = i + ' ' + o + ' ' + t + ' = ' + total;
        }
    }
}())


