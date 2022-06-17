
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
        document.getElementById("buttondown").style.display = 'none';
        document.getElementById("content").style.display = 'block';
        document.getElementById("content2").style.display = 'none';
    }
    else if (a == 2) {
        document.getElementById("buttondown").style.display = 'block';
        document.getElementById("buttonup").style.display = 'block';
        document.getElementById("content").style.display = 'none';
        document.getElementById("content2").style.display = 'block';
        document.getElementById("content3").style.display = 'none';
    }
    else if (a == 3) {
        document.getElementById("buttonup").style.display = 'none';
        document.getElementById("content2").style.display = 'none';
        document.getElementById("content3").style.display = 'block';
        // document.getElementById("content4").style.display = 'none';
    }
}
