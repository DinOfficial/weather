// load data 

const loadData = async () => {
      // input field data collect
      const cityInput = document.getElementById('city-search');
      var cityName = cityInput.value;
      // validation
      if (!isNaN(cityInput.value)){
            const errMsg = window.alert('Please Input A City Name');
            cityInput.value = '';
            return errMsg;
      }

      // api fetch
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9f8b15de3a424f48d19da7d2ea4b5c1d`)
            .then(res => res.json())
            .then(data => displayData(data))
      
      // clear input data 
      cityInput.value = '';
}
      // display api data in ui
const displayData = weather => {
      // city name

      if (document.getElementById('city-search').value !== weather.name) {
            const errorM = window.alert('please Input City Name');
            return errorM;
      } else {
            document.getElementById('city').innerText = weather.name;
      }
      // weather temparature convert from kelvin to celcius
      document.getElementById('temp').innerText = parseInt(weather.main.temp - 273.15);
      // weather cloudy check
      document.getElementById('clouds').innerText = weather.weather[0].main;
      // weather icon set
      const url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
      document.getElementById('icon').setAttribute('src', url);
}


