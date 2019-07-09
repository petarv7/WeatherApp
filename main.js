let btnSearch = document.querySelector('#btnSearch');
let input = document.querySelector('#text');
let info = document.querySelector('.info');



btnSearch.addEventListener('click',getData)
function getData() {
  let xml = new XMLHttpRequest();
  let search = input.value;
  xml.open('get',"http://api.openweathermap.org/data/2.5/weather?q="+search+"&APPID=bee0f761da270fbed6a1bffb48633d35");
  xml.onreadystatechange = function() {
    if(xml.readyState == 4 && xml.status == 200){
      display(xml);
    }
  }
  xml.send();
}


function display(xml) {
  info.innerHTML = "";
  let data = JSON.parse(xml.responseText);
  let text = "";
  text +='<h2> Pritisak: '+data.main.pressure+' </h2>';
  text +='<h2> Temperatura: '+data.main.temp+' </h2>';
  text +='<h2> Oblaci: '+data.weather[0].description+' </h2>';
  text +='<h2> Brzina vetra: '+data.wind.speed+' m/s.</h2>';
  info.innerHTML = text;
}
