var b = 0;
var magi = 0;
// var thick=0;
// var hallc=0;

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

    if (option == 'mfield vs current') {
        document.getElementById("circuit1").style.display = 'block';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit3").style.display = 'none';
        document.getElementById("circuit4").style.display = 'none';
        document.getElementById("fieldvalue").style.display = 'block';
        pcheck = true;
        disable()
        remove()
    }
    else if (option == 'Hall Effect') {
        document.getElementById("circuit1").style.display = 'none';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit3").style.display = 'block';
        document.getElementById("circuit4").style.display = 'none';
        document.getElementById("fieldvalue").style.display = 'none';
        pcheck = false;
        remove()
    }
}

function enable() {
    // document.getElementById("tslider").style.opacity = '1';
    // document.getElementById("hcslider").style.opacity = '1';

    document.getElementById("materials").disabled = false;
    // document.getElementById("tslider").disabled = false;
    // document.getElementById("hcslider").disabled = false;
    document.getElementById("showvoltage").disabled = false;
    document.getElementById("showcurrent").disabled = false;
}

function disable() {
    // document.getElementById("tslider").style.opacity = '0.5';
    // document.getElementById("hcslider").style.opacity = '0.5';

    document.getElementById("materials").disabled = true;
    // document.getElementById("tslider").disabled = true;
    // document.getElementById("hcslider").disabled = true;
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

        document.getElementById("probe").style.display = 'block';
        document.getElementById("wire").style.display = 'block';
        document.getElementById("probe").style.animationName = 'slideup';
        document.getElementById("wire").style.animationName = 'slideup';
        document.getElementById("fieldvalue").innerText = '0.29';
    }
    else if (pcheck == false) {
        document.getElementById("circuit1").style.display = 'none';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit4").style.display = 'block';
        document.getElementById("circuit3").style.display = 'none';
        document.getElementById("hallprobe").style.display = 'block';
        document.getElementById("hallwire").style.display = 'block';
        document.getElementById("hallprobe").style.animationName = 'slideup';
        document.getElementById("hallwire").style.animationName = 'slideup';

        enable()
    }
}

function remove() {
    document.getElementById("remove").style.display = 'none';
    document.getElementById("insert").style.display = 'block';

    document.getElementById("cslider").style.opacity = '0.5';
    document.getElementById("cslider").disabled = true;
    document.getElementById("fieldvalue").innerText = '0';


    if (pcheck == true) {
        document.getElementById("circuit1").style.display = 'block';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit3").style.display = 'none';
        document.getElementById("circuit4").style.display = 'none';

        document.getElementById("probe").style.display = 'none';
        document.getElementById("wire").style.display = 'none';

        document.getElementById("hallprobe").style.display = 'none';
        document.getElementById("hallwire").style.display = 'none';
    }
    else if (pcheck == false) {
        document.getElementById("circuit1").style.display = 'none';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit3").style.display = 'block';
        document.getElementById("circuit4").style.display = 'none';

        document.getElementById("probe").style.display = 'none';
        document.getElementById("wire").style.display = 'none';

        document.getElementById("hallprobe").style.display = 'none';
        document.getElementById("hallwire").style.display = 'none';
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

document.getElementById("cslider").addEventListener("change", slidercurrent);
function slidercurrent() {
    document.getElementById("currentvalue").innerHTML = cslider.value;
    magi = cslider.value;
    var n = 200;
    var r = 0.01;
    var meu = ((1.03) * (Math.pow(10, -7)));
    var multi = ((8) / (5 * (Math.sqrt(5))));
    b = (multi*((meu * n * magi) / r));
    b=b.toFixed(2);
    document.getElementById("fieldvalue").innerHTML = b;
    magrepeat();
};

// thickness slider
// var tslider = document.getElementById("tslider");
// var toutput = document.getElementById("thickness");
// toutput.innerHTML = tslider.value;
// tslider.oninput = function () {
//     toutput.innerHTML = this.value;
// }

// document.getElementById("tslider").addEventListener("change", sliderthickness);
// function sliderthickness() {
//     document.getElementById("thickness").innerHTML = tslider.value;
//     thick = tslider.value;
//     // var meu = ((4 * (Math.PI)) * (Math.pow(10, -7)));
//     // var deno = ((2 * (Math.PI)) * (0.1));
//     // b = ((parseFloat(magi) + meu) / deno).toFixed(2);
//     repeat();
// };

// hall current slider
// var hcslider = document.getElementById("hcslider");
// var hcoutput = document.getElementById("hallcurrent");
// hcoutput.innerHTML = hcslider.value;
// hcslider.oninput = function () {
//     hcoutput.innerHTML = this.value;
// }

// document.getElementById("hcslider").addEventListener("change", hallslider);
// function hallslider() {
//     document.getElementById("hallcurrent").innerHTML = hcslider.value;
//     hallc = hcslider.value;
//     // var meu = ((4 * (Math.PI)) * (Math.pow(10, -7)));
//     // var deno = ((2 * (Math.PI)) * (0.1));
//     // b = ((parseFloat(magi) + meu) / deno).toFixed(2);
//     repeat();
// };

function magrepeat() {
    // console.log(b);
    document.getElementById('text').value = b;
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

function openobservation(){
    document.getElementById("observation").style.display = 'block';
}

function closeobservation(){
    document.getElementById("observation").style.display = 'none';
}



// 3rd page
var xArray = [200,250,300,350];
var yArray = [8,9,10,11];
// xArray.push(450) adding values
// yArray.push(12)
// xArray.length = 0 clearing array
// yArray.length = 0

// Define Data
var data = [{
  x: xArray,
  y: yArray,
  mode:"lines"
}];

// Define Layout
var layout = {
  xaxis: {range: [150, 550], title: "Magnetic field"},
  yaxis: {range: [5, 16], title: "Hall Voltage"},  
  title: "Hall Voltage vs Magnetic field"
};

// Display using Plotly
Plotly.newPlot("graph", data, layout);