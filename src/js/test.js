console.log('hello');
let temp = document.querySelector("#temperature");
let loc = document.querySelector("#location");
let wind = document.querySelector("#wind");
let icon = document.querySelector("#icon");
let hum = document.querySelector("#humidity");
let dir = document.querySelector("#direction");
let botao1 = document.querySelector("#myDropdown")
let botao2 = document.querySelector("#myDropdown2")

let dolar = 0;
let dolares = [];
let valorNeg = 0;
let valorPos = 0;
let largest = 0;
let minimum = 4;
let lat;
let long;

let weekday = new Array(7);
weekday[0] =  "Dom";
weekday[1] = "Seg";
weekday[2] = "Ter";
weekday[3] = "Qua";
weekday[4] = "Qui";
weekday[5] = "Sex";
weekday[6] = "Sab";

function relDiff(a, b) {
    if(a > b){
        valorPos = 100 * Math.abs( ( a - b ) / ( (a+b)/2 ) );
        valorPos = valorPos.toFixed(3);
        document.querySelector(".variacaoNum").innerHTML = valorPos + "%";
        document.querySelector(".arrow").src = "img/Up_green_arrow.png";
        document.querySelector(".variacaoNum").style.color = "green";
        document.querySelector(".dolar").style.color = "#004d00"
    }
    else{
        valorNeg = 100 * Math.abs( ( a - b ) / ( (a+b)/2 ) );
        valorNeg = valorNeg.toFixed(3);
        valorNeg = "-" + valorNeg;
        document.querySelector(".variacaoNum").innerHTML = valorNeg + "%";
        document.querySelector(".arrow").src = "img/Down_red_arrow.png";
        document.querySelector(".variacaoNum").style.color = "red";
        document.querySelector(".dolar").style.color = "#990000"
    }
}

function startTime(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=74e797830f0ca7012b64bb5a964f3339`).then(extract).then(insertInfo9);
setInterval(piscar, 2000);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    startTime();
}

getLocation();

function extract(dados){
    return dados.json();
}
function voltar(){
    document.querySelector(".data2 span").style.opacity = "1"
}
function piscar(){
    document.querySelector(".data2 span").style.opacity = "0"
    setTimeout(voltar, 500)
}
let da = new Date();
let options3 = {hour: 'numeric', minute: 'numeric', second: 'numeric'}
document.querySelector(".data2").innerHTML = da.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'}).replace(':', '<span>:</span>');

function updateTime(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=74e797830f0ca7012b64bb5a964f3339`).then(extract).then(insertInfo9);
    document.querySelector(".data2").innerHTML = da.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'}).replace(':', '<span>:</span>');
    console.log("functionei")
}
function insertInfo9(json){
    console.log(json)
    wind.innerHTML = json.wind.speed;
    temp.innerHTML = Math.round(json.main.temp_max - 273);
    loc.innerHTML = json.name;
    hum.innerHTML = json.main.humidity;
}
/*fetch('http://api.openweathermap.org/data/2.5/forecast?id=3448439&APPID=74e797830f0ca7012b64bb5a964f3339').then(extract).then(insertInfo9);
setInterval(piscar, 2000);
setInterval(updateTime, 60000);*/

setInterval(updateTime, 60000);

let d = new Date();
let options2 = {weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric'}
document.querySelector(".data").innerHTML = d.toLocaleDateString('pt-BR', options2);

// para data do grafico
let controlDate = new Date()
controlDate = controlDate.toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric'});
controlDate = controlDate.replace("/", "-");
controlDate = controlDate.replace("/", "-");
let localDate = controlDate.split("-").reverse().join("-");

let controlDate1 = new Date()
controlDate1.setDate(controlDate1.getDate() - 1);
controlDate1 = controlDate1.toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric'});
controlDate1 = controlDate1.replace("/", "-");
controlDate1 = controlDate1.replace("/", "-");
let localDate1 = controlDate1.split("-").reverse().join("-");

let controlDate2 = new Date()
controlDate2.setDate(controlDate2.getDate() - 2);
controlDate2 = controlDate2.toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric'});
controlDate2 = controlDate2.replace("/", "-");
controlDate2 = controlDate2.replace("/", "-");
let localDate2 = controlDate2.split("-").reverse().join("-");

let controlDate3 = new Date()
controlDate3.setDate(controlDate3.getDate() - 3);
controlDate3 = controlDate3.toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric'});
controlDate3 = controlDate3.replace("/", "-");
controlDate3 = controlDate3.replace("/", "-");
let localDate3 = controlDate3.split("-").reverse().join("-");

let controlDate4 = new Date()
controlDate4.setDate(controlDate4.getDate() - 4);
controlDate4 = controlDate4.toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric'});
controlDate4 = controlDate4.replace("/", "-");
controlDate4 = controlDate4.replace("/", "-");
let localDate4 = controlDate4.split("-").reverse().join("-");

let controlDate5 = new Date()
controlDate5.setDate(controlDate5.getDate() - 5);
controlDate5 = controlDate5.toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric'});
controlDate5 = controlDate5.replace("/", "-");
controlDate5 = controlDate5.replace("/", "-");
let localDate5 = controlDate5.split("-").reverse().join("-");

let controlDate6 = new Date()
controlDate6.setDate(controlDate6.getDate() - 6);
controlDate6 = controlDate6.toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric'});
controlDate6 = controlDate6.replace("/", "-");
controlDate6 = controlDate6.replace("/", "-");
let localDate6 = controlDate6.split("-").reverse().join("-");
//Para LAbel
let controlDate9 = new Date()
controlDate9.setDate(controlDate9.getDate() - 1);
let controlDate10 = new Date()
controlDate10.setDate(controlDate10.getDate() - 2);
let controlDate11 = new Date()
controlDate11.setDate(controlDate11.getDate() - 3);
let controlDate12 = new Date()
controlDate12.setDate(controlDate12.getDate() - 4);
let controlDate13 = new Date()
controlDate13.setDate(controlDate13.getDate() - 5);
let controlDate14 = new Date()
controlDate14.setDate(controlDate14.getDate() - 6);

let label1 = weekday[controlDate9.getDay()];
let label2 = weekday[controlDate10.getDay()];
let label3 = weekday[controlDate11.getDay()];
let label4 = weekday[controlDate12.getDay()];
let label5 = weekday[controlDate13.getDay()];
let label6 = weekday[controlDate14.getDay()];


function insertInfo(json){
    console.log(json);
    dolar = document.querySelector(".dolar").innerHTML = json.quotes.USDBRL;
    document.querySelector(".dolar").innerHTML = dolar.toFixed(3);
    dolares.push(dolar);
}

function insertInfo3(json){
    console.log(json);
    dolar1 = json.quotes.USDBRL;
}

function insertDolar(json){
    dolares = [dolar1, dolar2, document.querySelector(".dolar").innerHTML]
}


let promises = [];
let todayPromise = fetch(`http://apilayer.net/api/live?access_key=146091af93aa3d1a99f3b6b1117ea1b8`)
.then(extract)
.then(insertInfo); 

for(let i = 1; i < 7; i++){
    let controlDate = new Date();
    controlDate.setDate(controlDate.getDate() - i);
    controlDate = controlDate.toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric'});
    controlDate = controlDate.replace("/", "-");
    controlDate = controlDate.replace("/", "-");
    
    let localDate = controlDate.split("-").reverse().join("-");
    let promise = fetch(`http://apilayer.net/api/historical?access_key=146091af93aa3d1a99f3b6b1117ea1b8&date=${localDate}`).then(extract);
    promises.push(promise);
}

Promise.all(promises).then((values) => {
    for(let json of values){
        dolares.unshift(json.quotes.USDBRL);
    }
    relDiff(dolares[5], dolares[6]);

    for(let i=0;i < dolares.length; i++){
        if(dolares[i] > largest){
            largest = dolares[i];
        }
        else if (dolares[i] < minimum){
            minimum = dolares[i]
        }
    }
    myChart.options.scales.yAxes[0].ticks.max = largest + 0.10;
    myChart.options.scales.yAxes[0].ticks.min = minimum - 0.10;
    myChart.data.datasets[0].data.push(dolares);
    myChart.update();
});

function myFunction() {
    if(botao1.style.display === "none"){
        botao1.style = "display: block";
    }
    else{
        botao1.style = "display: none";
    }
    
}
function myFunction2() {
    if(botao2.style.display === "none"){
        botao2.style = "display: block";
    }
    else{
        botao2.style = "display: none";
    }
    
}

botao1.onclick = myFunction()

var ctx = document.querySelector("canvas");



var data = {
    labels: [label6, label5, label4, label3, label2, label1, "hoje"],
    datasets: [{
        fontColor: "white",
        label: "Dolar na Semana",
        backgroundColor: "rgba(0, 65, 106,0.8)",
        borderColor: "rgba(0, 81, 132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: dolares
    }]
};

var options = {
    maintainAspectRatio: false,
    legend: {
        labels: {
            fontColor: "white",
        },
        fontColor: "white", 
    },
    scales: {
        yAxes: [{
            stacked: true,
            ticks: {
                fontColor: "white",
                beginAtZero: true,
                steps: 10,
                stepValue: 0.4,
                min: 3.2,
                max: 4
            },
            gridLines: {
                
                display: true,
                color: "rgba(0, 65, 106,0.8)"
            }
        }],
        xAxes: [{
            ticks: {
                fontColor: "white",
            },
            gridLines: {
                display: false
            }
        }]
    }
};

var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
    
}); 
