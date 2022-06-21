
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

// procedure selection
let pcheck;
function update() {
    var select = document.getElementById('exp');
    var option = select.options[select.selectedIndex].value;
    // document.getElementById('value').value = option;
    // document.getElementById('text').value = option;

    if (option == 'mfield vs current') {
        document.getElementById("circuit1").style.display = 'block';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit3").style.display = 'none';
        document.getElementById("circuit4").style.display = 'none';
        pcheck = true;
        disable()
        remove()
    }
    else if (option == 'Hall Effect') {
        document.getElementById("circuit1").style.display = 'none';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit3").style.display = 'block';
        document.getElementById("circuit4").style.display = 'none';
        pcheck = false;
        remove()
    }
}

function enable() {
    document.getElementById("tslider").style.opacity = '1';
    document.getElementById("hcslider").style.opacity = '1';

    document.getElementById("materials").disabled = false;
    document.getElementById("tslider").disabled = false;
    document.getElementById("hcslider").disabled = false;
    document.getElementById("showvoltage").disabled = false;
    document.getElementById("showcurrent").disabled = false;
}

function disable() {
    document.getElementById("tslider").style.opacity = '0.5';
    document.getElementById("hcslider").style.opacity = '0.5';

    document.getElementById("materials").disabled = true;
    document.getElementById("tslider").disabled = true;
    document.getElementById("hcslider").disabled = true;
    document.getElementById("showvoltage").disabled = true;
    document.getElementById("showcurrent").disabled = true;
}

// probe button
function insert() {
    document.getElementById("insert").style.display = 'none';
    document.getElementById("remove").style.display = 'block';

    document.getElementById("cslider").style.opacity = '1';
    document.getElementById("cslider").disabled = false;

    if (pcheck == true) {
        document.getElementById("circuit1").style.display = 'none';
        document.getElementById("circuit2").style.display = 'block';
        document.getElementById("circuit4").style.display = 'none';
        document.getElementById("circuit3").style.display = 'none';
    }
    else if (pcheck == false) {
        document.getElementById("circuit1").style.display = 'none';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit4").style.display = 'block';
        document.getElementById("circuit3").style.display = 'none';
        enable()
    }
}

function remove() {
    document.getElementById("remove").style.display = 'none';
    document.getElementById("insert").style.display = 'block';

    document.getElementById("cslider").style.opacity = '0.5';
    document.getElementById("cslider").disabled = true;


    if (pcheck == true) {
        document.getElementById("circuit1").style.display = 'block';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit3").style.display = 'none';
        document.getElementById("circuit4").style.display = 'none';
    }
    else if (pcheck == false) {
        document.getElementById("circuit1").style.display = 'none';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit3").style.display = 'block';
        document.getElementById("circuit4").style.display = 'none';
        disable()
    }
}


// current slider
var cslider = document.getElementById("cslider");
var coutput = document.getElementById("currentvalue");
coutput.innerHTML = cslider.value;

cslider.oninput = function () {
    coutput.innerHTML = this.value;
}

// thickness slider
var tslider = document.getElementById("tslider");
var toutput = document.getElementById("thickness");
toutput.innerHTML = tslider.value;

tslider.oninput = function () {
    toutput.innerHTML = this.value;
}

// hall current slider
var hcslider = document.getElementById("hcslider");
var hcoutput = document.getElementById("hallcurrent");
hcoutput.innerHTML = hcslider.value;

hcslider.oninput = function () {
    hcoutput.innerHTML = this.value;
}

function Refresh() {
    window.location = window.location.href;
}

// show button
function voltage() {
    document.getElementById("showvoltage").style.display = 'none';
    document.getElementById("showcurrent").style.display = 'block';
}
function current() {
    document.getElementById("showcurrent").style.display = 'none';
    document.getElementById("showvoltage").style.display = 'block';
}
function updateDiv() {
    document.getElementById("content2").innerHTML = document.getElementById("content2").innerHTML;
    document.getElementById("circuit1").style.display = 'none';
    document.getElementById("circuit2").style.display = 'none';
    document.getElementById("circuit3").style.display = 'none';
    document.getElementById("circuit4").style.display = 'none';
    document.getElementById("remove").style.display = 'none';
    document.getElementById("insert").style.display = 'block';
} 
