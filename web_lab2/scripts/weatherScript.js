function loadData() {
    var xhr = new XMLHttpRequest();
      let state =  document.getElementById('state').value;

      xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + state + '&appid=e0cf2f5d69c9c7e30070e9b07f63b0ec', true);

      xhr.send();

      xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
          alert(xhr.status + ': ' + xhr.statusText);
        } else {

          data = JSON.parse(xhr.response);
          console.log(data);

          const name = document.getElementById('name');
          name.innerText = data.name;
          const temp = document.getElementById('temp');
          temp.innerText = (parseFloat(data.main.temp) - 273).toFixed(2) + " C";
          const pos = document.getElementById('pos');
          pos.innerText = "lon: " + data.coord.lon + " lat: " + data.coord.lat;
        }        
      }
}