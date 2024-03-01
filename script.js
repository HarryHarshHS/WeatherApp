async function api(city) {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  const url2 =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai";
  const url3 =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune";
  const url4 =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore";
  const url5 =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shahdol";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bbe13d5ddfmsh2b65971e4a29c68p12de79jsn210b1ff20964",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const response2 = await fetch(url2, options);
    const response3 = await fetch(url3, options);
    const response4 = await fetch(url4, options);
    const response5 = await fetch(url5, options);
    const result = await response.json();
    const result2 = await response2.json();
    const result3 = await response3.json();
    const result4 = await response4.json();
    const result5 = await response5.json();
    cityName.innerHTML = city;
    temp1.innerHTML = result.temp;
    temp.innerHTML = result.temp;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    cloud_pct.innerHTML = result.cloud_pct;
    feels_like.innerHTML = result.feels_like;
    feels_like2.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;

    const sunriseTime = new Date(result.sunrise * 1000);
    sunrise.innerHTML = sunriseTime.toLocaleTimeString();

    const sunsetTime = new Date(result.sunset * 1000);

    sunset.innerHTML = sunsetTime.toLocaleTimeString();
    temp.innerHTML = result.temp;
    wind_degrees.innerHTML = result.wind_degrees;
    wind_speed.innerHTML = result.wind_speed;

    for (const key in result) {
      if (Object.hasOwnProperty.call(result, key)) {
        let value = result[key];
        if (key == "sunset") {
          const samay = new Date(value * 1000);
          value = samay.toLocaleTimeString();
        }
        if (key == "sunrise") {
          const samay = new Date(value * 1000);
          value = samay.toLocaleTimeString();
        }
        const id = key + "Delhi";
        const li = document.getElementById(id);
        li.textContent = value;
      }
    }
    for (const key in result2) {
      if (Object.hasOwnProperty.call(result2, key)) {
        let value = result2[key];
        if (key == "sunset") {
          const samay = new Date(value * 1000);
          value = samay.toLocaleTimeString();
        }
        if (key == "sunrise") {
          const samay = new Date(value * 1000);
          value = samay.toLocaleTimeString();
        }
        const id = key + "Mumbai";
        const li = document.getElementById(id);
        li.textContent = value;
      }
    }
    for (const key in result3) {
      if (Object.hasOwnProperty.call(result3, key)) {
        let value = result3[key];
        if (key == "sunset") {
          const samay = new Date(value * 1000);
          value = samay.toLocaleTimeString();
        }
        if (key == "sunrise") {
          const samay = new Date(value * 1000);
          value = samay.toLocaleTimeString();
        }
        const id = key + "Pune";
        const li = document.getElementById(id);
        li.textContent = value;
      }
    }
    for (const key in result4) {
      if (Object.hasOwnProperty.call(result4, key)) {
        let value = result4[key];
        if (key == "sunset") {
          const samay = new Date(value * 1000);
          value = samay.toLocaleTimeString();
        }
        if (key == "sunrise") {
          const samay = new Date(value * 1000);
          value = samay.toLocaleTimeString();
        }
        const id = key + "Bangalore";
        const li = document.getElementById(id);
        li.textContent = value;
      }
    }
    for (const key in result5) {
      if (Object.hasOwnProperty.call(result5, key)) {
        let value = result5[key];
        if (key == "sunset") {
          const samay = new Date(value * 1000);
          value = samay.toLocaleTimeString();
        }
        if (key == "sunrise") {
          const samay = new Date(value * 1000);
          value = samay.toLocaleTimeString();
        }
        const id = key + "Shahdol";
        const li = document.getElementById(id);
        li.textContent = value;
      }
    }

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  api(city.value);
});

api("Delhi");
