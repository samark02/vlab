let b = 3.60; // give initial value for b
let hvoltage = 0;
let magi = 0;
let halli = 0;
let e = 1.6 * Math.pow(10, -19);
let c = 0;
let concentration;
// let option;
// let b_values=0;
let magcount = -1;
let hallcount = -1;
let sampleXarray = [];
let sampleYarray = [];
let blurr;
let pcheck;
let table;
let row;
let rH = 0;
let raisedtoTen;
function blurring() {
    if (blurr == true) {
        document.getElementById("simoptions").style.filter = 'blur(2px)';
        document.getElementById("mainsimulation").style.filter = 'blur(2px)';
        document.getElementById("buttondown").style.filter = 'blur(2px)';
    }
    else if (blurr == false) {
        document.getElementById("simoptions").style.filter = 'blur(0px)';
        document.getElementById("mainsimulation").style.filter = 'blur(0px)';
        document.getElementById("buttondown").style.filter = 'blur(0px)';
    }
}

// Next button
let a = 1;
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
        document.getElementById("buttonup").style.display = 'block';
        document.getElementById("content").style.display = 'block';
        document.getElementById("content2").style.display = 'none';
        document.getElementById("IBgraphbutton").style.display = 'none';
    }
    else if (a == 2) {
        document.getElementById("buttondown").style.display = 'block';
        // document.getElementById("buttonup").style.display = 'block';
        document.getElementById("content").style.display = 'none';
        document.getElementById("content2").style.display = 'block';
        document.getElementById("content3").style.display = 'none';
        document.getElementById("buttonup").style.display = 'none';
        document.getElementById("observation").style.display = 'none';
        if (pcheck == true) {
            document.getElementById("IBgraphbutton").style.display = 'block';
        }
    }
    else if (a == 3) {
        document.getElementById("buttonup").style.display = 'none';
        document.getElementById("content2").style.display = 'none';
        document.getElementById("content3").style.display = 'block';
        document.getElementById("IBgraphbutton").style.display = 'none';
        closeobservation()
        plotting()
    }
}

// procedure selection
function update() {
    let select = document.getElementById('exp');
    let option = select.options[select.selectedIndex].value;

    if (option == 'mfield vs current') {
        document.getElementById("circuit1").style.display = 'block';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit3").style.display = 'none';
        document.getElementById("circuit4").style.display = 'none';
        document.getElementById("fieldvalue").style.display = 'block';
        document.getElementById("voltagevalue").style.display = 'none';
        document.getElementById("IBgraphbutton").style.display = 'block';
        document.getElementById("insert").disabled = false;
        pcheck = true;
        slider_reset();
        disable();
        remove();
    }
    else if (option == 'Hall Effect') {
        document.getElementById("insert").disabled = false;
        document.getElementById("circuit1").style.display = 'none';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit3").style.display = 'block';
        document.getElementById("circuit4").style.display = 'none';
        document.getElementById("fieldvalue").style.display = 'none';
        document.getElementById("voltagevalue").style.display = 'block';
        document.getElementById("IBgraphbutton").style.display = 'none';
        pcheck = false;
        slider_reset();
        remove()
    }
}

function enable() {
    // document.getElementById("tslider").style.opacity = '1';
    // document.getElementById("hcslider").style.opacity = '1';

    document.getElementById("materials").disabled = false;
    // document.getElementById("tslider").disabled = false;
    // document.getElementById("hcslider").disabled = false;
}

function disable() {
    // document.getElementById("tslider").style.opacity = '0.5';
    // document.getElementById("hcslider").style.opacity = '0.5';

    document.getElementById("materials").disabled = true;
    // document.getElementById("tslider").disabled = true;
    // document.getElementById("hcslider").disabled = true;
}

// probe button
function insert() {
    document.getElementById("insert").style.display = 'none';
    document.getElementById("remove").style.display = 'block';

    document.getElementById("addbutton").disabled = false;
    document.getElementById("observationbutton").disabled = false;

    document.getElementById("cslider").style.opacity = '1';
    document.getElementById("cslider").disabled = false;

    if (pcheck == true) {
        document.getElementById("circuit1").style.display = 'none';
        document.getElementById("circuit2").style.display = 'block';
        document.getElementById("circuit4").style.display = 'none';
        document.getElementById("circuit3").style.display = 'none';
        // document.getElementById("cslider").style.opacity = '1';
        // document.getElementById("cslider").disabled = false;

        document.getElementById("probe").style.display = 'block';
        document.getElementById("wire").style.display = 'block';
        document.getElementById("probe").style.animationName = 'probeslideup';
        document.getElementById("wire").style.animationName = 'wireslideup';
        document.getElementById("fieldvalue").innerText = b;
    }
    else if (pcheck == false) {
        document.getElementById("circuit1").style.display = 'none';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit4").style.display = 'block';
        document.getElementById("circuit3").style.display = 'none';
        document.getElementById("hallprobe").style.display = 'block';
        document.getElementById("hallwire").style.display = 'block';
        // document.getElementById("cslider").style.opacity = '0.5';
        // document.getElementById("cslider").disabled = true;
        document.getElementById("hallprobe").style.animationName = 'hallprobeslideup';
        document.getElementById("hallwire").style.animationName = 'hallwireslideup';
        document.getElementById("voltagevalue").innerText = hvoltage;

        enable()
    }
}

function remove() {
    document.getElementById("remove").style.display = 'none';
    document.getElementById("insert").style.display = 'block';

    document.getElementById("fieldvalue").innerText = '0';
    document.getElementById("observationbutton").disabled = true;
    document.getElementById("addbutton").disabled = true;


    if (pcheck == true) {
        document.getElementById("circuit1").style.display = 'block';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit3").style.display = 'none';
        document.getElementById("circuit4").style.display = 'none';
        document.getElementById("cslider").style.opacity = '0.5';
        document.getElementById("cslider").disabled = true;

        document.getElementById("probe").style.display = 'none';
        document.getElementById("probe").style.animation = '';
        document.getElementById("wire").style.display = 'none';
        document.getElementById("wire").style.animation = '';

        document.getElementById("hallprobe").style.display = 'none';
        document.getElementById("hallprobe").style.animation = '';
        document.getElementById("hallwire").style.display = 'none';
        document.getElementById("hallwire").style.animation = '';
    }
    else if (pcheck == false) {
        document.getElementById("circuit1").style.display = 'none';
        document.getElementById("circuit2").style.display = 'none';
        document.getElementById("circuit3").style.display = 'block';
        document.getElementById("circuit4").style.display = 'none';
        document.getElementById("cslider").style.opacity = '0.5';
        document.getElementById("cslider").disabled = true;

        document.getElementById("probe").style.display = 'none';
        document.getElementById("probe").style.animation = '';
        document.getElementById("wire").style.display = 'none';
        document.getElementById("wire").style.animation = '';

        document.getElementById("hallprobe").style.display = 'none';
        document.getElementById("hallprobe").style.animation = '';
        document.getElementById("hallwire").style.display = 'none';
        document.getElementById("hallwire").style.animation = '';

        document.getElementById("voltagevalue").innerText = '0';
        disable()
    }
}

// current slider
let cslider = document.getElementById("cslider");
let coutput = document.getElementById("currentvalue");
coutput.innerHTML = cslider.value;
cslider.oninput = function () {
    coutput.innerHTML = this.value;
}
function slider_reset() {
    document.getElementById('currentvalue').innerText = "200";
    document.getElementById('cslider').value = 200;
    if (pcheck == true) {
        b = 3.60;
    } else if (pcheck == false) {
        optionmaterial();
    }
}

document.getElementById("materials").addEventListener("change", slider_reset);
function optionmaterial() {
    let select = document.getElementById('materials');
    let option = select.options[select.selectedIndex].value;
    if (option == 'Germanium') {
        hvoltage = 0.0006;
        document.getElementById("voltagevalue").innerHTML = hvoltage;
    } else if (option == 'Silicon') {
        hvoltage = 0.0079;
        document.getElementById("voltagevalue").innerHTML = hvoltage;
    } else if (option == 'Copper') {
        hvoltage = 0.0287;
        document.getElementById("voltagevalue").innerHTML = hvoltage;
    } else {
        document.getElementById("voltagevalue").innerHTML = 0;
    }
}

document.getElementById("cslider").addEventListener("change", slidercurrent);
function slidercurrent() {
    // if (pcheck == true) {
    document.getElementById("currentvalue").innerHTML = cslider.value;
    magi = cslider.value;
    let n = 200;
    let r = 0.01;
    let meu = ((4 * Math.PI) * (Math.pow(10, -7)));
    let multi = ((8) / (5 * (Math.sqrt(5))));
    b = (multi * ((meu * n * magi) / r));
    b = b.toFixed(2);
    document.getElementById("fieldvalue").innerHTML = b;
    // magrepeat();
    // }
    // else if (pcheck == false) {
    if (document.getElementById("materials").value == "Empty") {
        window.alert("Please select a material");
        slider_reset();
    }
    else {
        material()
        // document.getElementById("currentvalue").innerHTML = cslider.value;
        // halli = parseInt(cslider.value);
        let ib = 60 * b * Math.pow(10, -7);
        let qnd = e * c * (0.01);
        hvoltage = (ib / qnd)
        hvoltage = hvoltage.toFixed(4);
        document.getElementById("voltagevalue").innerHTML = hvoltage;
    }
    // }
};

document.getElementById("materials").addEventListener("change", material);
function material() {
    let select = document.getElementById('materials');
    let option = select.options[select.selectedIndex].value;
    if (option == 'Germanium') {
        c = 2.33 * Math.pow(10, 19);
        rH = (1 / (c * e)).toFixed(2);
        raisedtoTen = " x 10^ -11";
        concentration = "2.33 x 10^ 19";
    } else if (option == 'Silicon') {
        // doped silicon 
        c = 1.7 * Math.pow(10, 18);
        rH = (1 / (c * e)).toFixed(2);
        raisedtoTen = " x 10^ -4";
        concentration = "1.7 x 10^ 18";
    } else if (option == 'Copper') {
        c = 4.7 * Math.pow(10, 17);
        rH = (1 / (c * e)).toFixed(2);
        raisedtoTen = " x 10^ -11";
        concentration = "4.7 x 10^ 17";
    }
}

// function magrepeat() {
//     document.getElementById('text').value = b;
// }

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

function Refresh() {
    window.location = window.location.href;
    // document.getElementById('reset').onclick = function(){
    //     document.getElementById('cslider').value = 200;
    //     // document.getElementById('exp').value = "Empty";
    //     document.getElementById('materials').value = "Empty";
    //     document.getElementById('currentvalue').innerText = "200";
    //     document.getElementById('fieldvalue').innerText = "3.60";  
};

// show button
// function voltage() {
//     document.getElementById("showvoltage").style.display = 'none';
//     document.getElementById("showcurrent").style.display = 'block';
// }
// function current() {
//     document.getElementById("showcurrent").style.display = 'none';
//     document.getElementById("showvoltage").style.display = 'block';
// }

function openobservation() {
    // document.getElementById("content2").style.opacity = '0.5';
    // document.getElementById("observation").style.filter = 'blur(0px)';
    if (document.getElementById('observation').style.display == 'none') {
        document.getElementById("observation").style.display = 'block';
        document.getElementById('blocker').style.display = 'block';
    }
    else {
        closeobservation();
    }
    blurr = true;
    blurring();
}

function closeobservation() {
    document.getElementById("observation").style.display = 'none';
    document.getElementById('blocker').style.display = 'none';
    document.getElementById('IBgraph').style.display = 'none';
    document.getElementById('myChart').style.display = 'none';
    document.getElementById('instructions').style.display = 'none';
    blurr = false;
    blurring();
}

function plotgraph() {
    // third page
    a = 3;
    next()
    document.getElementById("finalresult").disabled = false;
}


// 3rd page
function plotting() {
    let xArray = [];
    let yArray = [];

    sampleXarray = sortingArray(sampleXarray);
    sampleYarray = sortingArray(sampleYarray);

    xArray = sampleXarray.slice();
    yArray = sampleYarray.slice();

    // Define Data
    var data = [{
        x: xArray,
        y: yArray,
        type: 'scatter'
    }];

    // Define Layout
    var layout = {
        xaxis: { title: "Magnetic field (mT)" },
        yaxis: { title: "Hall Voltage (mV)" },
        title: "Hall Voltage vs Magnetic field"
    };

    // Display using Plotly
    Plotly.newPlot("graph", data, layout);
}


function AddingToArray() {
    if (document.getElementById("materials").value == 'Empty') {
        window.alert("Please change the procedure to Hall Effect and select a material");
    } else {
        sampleXarray.push(parseFloat(b));
        sampleYarray.push(parseFloat(hvoltage));
        // }
        document.getElementById('add').style.display = 'block';
        setTimeout(timer, 2000);
        addobservation();
    }
    // if (pcheck == false) {
    // if (pcheck == true) {
    //     sampleXarray.push(parseFloat(b));
    //     sampleYarray.push(parseFloat(hvoltage));
    //     // sampleYarray.push(11);
    // }
    // else if (pcheck == false){

    // sampleXarray.push(parseFloat(b));
    // sampleYarray.push(parseFloat(hvoltage));
    // // }
    // document.getElementById('add').style.display = 'block';
    // setTimeout(timer, 2000);
    // addobservation();

    // }
    // else if (pcheck == true) {
    //     window.alert("Please change the procedure to Hall Effect and complete it.");
    // }
}

function addobservation() {
    magcount += 1;
    table = document.getElementById("observationTable");
    row = table.insertRow(magcount + 1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = sampleXarray[sampleXarray.length - 1];
    cell2.innerHTML = sampleYarray[sampleYarray.length - 1];
    // console.log(sampleXarray);
}

function clearing() {
    for (var i = 1; i < table.rows.length;) {
        table.deleteRow(i);
    }
    magcount = -1;
    // console.log(sampleXarray);
    // sampleXarray.shift();
    sampleXarray.length = 0;
    sampleYarray.length = 0;
    // console.log(sampleXarray);
    document.getElementById("finalresult").disabled = true;
    document.getElementById('coefficientvalue').innerHTML = 0;
    document.getElementById('carriercon').innerHTML = 0;
}

function timer() {
    document.getElementById('add').style.display = 'none';
}

function IBgraph() {
    document.getElementById('IBgraph').style.display = 'block'
    document.getElementById('myChart').style.display = 'block'
    document.getElementById('blocker').style.display = 'block';
    var xValues = [200, 250, 300, 350, 400, 450, 500];
    var yValues = [3.6, 4.5, 5.4, 6.29, 7.19, 8.09, 8.99];

    new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: yValues
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "I/B Graph",
                fontSize: 16
            },
            scales: {
                yAxes: [{ ticks: { min: 2, max: 10 }, scaleLabel: { display: true, labelString: "Magnetic Field (mT)" } }],
                xAxes: [{ ticks: { min: 150, max: 550 }, scaleLabel: { display: true, labelString: "Current (mA)" } }],
            }
        }
    });
}

function help() {
    document.getElementById('instructions').style.display = 'block';
    document.getElementById('blocker').style.display = 'block';
}

function sortingArray(sortarray) {
    const points = sortarray;
    return points.sort(function (a, b) { return a - b });
}

function hallcovalue() {
    document.getElementById('coefficientvalue').innerHTML = rH + raisedtoTen;
    document.getElementById('carriercon').innerHTML = concentration;
}