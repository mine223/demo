function timedText() {
    'use strict';
    var x = document.getElementById('changeText'),
        index = 0,
        arry = ['Planning', 'Desinging', 'Development'];

    setInterval(function () {

        x.innerHTML = arry[index];
        index += 1;
        if (index >= arry.length) {
            index = 0;
        }


    }, 5000);


}

timedText();
