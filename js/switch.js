( function () {
    let small, big, normal;

    small = document.querySelector('#small');
    big = document.querySelector('#big');

    small.onclick = function () {        
        if (document.querySelector('.bigText')) {
            normal = document.querySelectorAll('.bigText');
            normal.forEach( (el) => {
                el.classList.replace('bigText', 'normal');
            });
        }
    }

    big.onclick = function () {        
        if (document.querySelector('.normal')) {
            normal = document.querySelectorAll('.normal');
            normal.forEach( (el) => {
                el.classList.replace('normal', 'bigText');
            });
        }
    }
})();