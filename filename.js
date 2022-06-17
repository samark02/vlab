
// Next button
var a = 1;
function up() {
    a += 1;
    next()
}
function down() {
    a -= 1;
    next()
}

function next() {
    if (a == 1) {
        document.querySelector('#buttondown').disabled = true;
        document.querySelector('#buttonup').disabled = false;
        document.getElementById("content").style.display = 'block';
        document.getElementById("content2").style.display = 'none';
    }
    else if (a == 2) {
        document.querySelector('#buttondown').disabled = false;
        document.querySelector('#buttonup').disabled = false;
        document.getElementById("content").style.display = 'none';
        document.getElementById("content2").style.display = 'block';
        document.getElementById("content3").style.display = 'none';
    }
    else if (a == 3) {
        document.querySelector('#buttondown').disabled = false;
        document.querySelector('#buttonup').disabled = true;
        document.getElementById("content2").style.display = 'none';
        document.getElementById("content3").style.display = 'block';
        // document.getElementById("content4").style.display = 'none';
    }
}
