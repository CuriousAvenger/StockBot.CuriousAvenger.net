async function getFamousStocksOne() {
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SHOP.TRT&outputsize=full&apikey=demo';
    const response = await fetch(url);
    const text = await response.text();
    const obj = JSON.parse(text)
    
    const symbol = obj["Meta Data"]["2. Symbol"];
    const latestOpen = Object.values(obj["Time Series (Daily)"])[0]["1. open"];
    const secondOpen = Object.values(obj["Time Series (Daily)"])[1]["1. open"];
    const changeOpen = Math.round((latestOpen - secondOpen)* 100 + Number.EPSILON)/ 100;

    if (changeOpen < 0) {
      document.getElementById("changePriceOne").innerHTML = Math.round(latestOpen * 100 + Number.EPSILON)/ 100;
      document.getElementById("changeNameOne").innerHTML = symbol;
      document.getElementById("changePercentOne").innerHTML = changeOpen;
      document.getElementById("changePercentOne").classList.add("text-danger");
      document.getElementById("changeArrowOne").classList.add("mdi-arrow-bottom-right")
      document.getElementById("changeArrowColorOne").classList.add("icon-box-danger")
    } else {
      document.getElementById("changePriceOne").innerHTML = Math.round(latestOpen * 100 + Number.EPSILON)/ 100;
      document.getElementById("changeNameOne").innerHTML = symbol;
      document.getElementById("changePercentOne").innerHTML = changeOpen;
      document.getElementById("changePercentOne").classList.add("text-success");
      document.getElementById("changeArrowOne").classList.add("mdi-arrow-top-right")
      document.getElementById("changeArrowColorOne").classList.add("icon-box-success")
    }
    
  }

  async function getFamousStocksTwo() {
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo';
    const response = await fetch(url);
    const text = await response.text();
    const obj = JSON.parse(text)
    
    const symbol = obj["Meta Data"]["2. Symbol"];
    const latestOpen = Object.values(obj["Time Series (Daily)"])[0]["1. open"];
    const secondOpen = Object.values(obj["Time Series (Daily)"])[1]["1. open"];
    const changeOpen = Math.round((latestOpen - secondOpen)* 100 + Number.EPSILON)/ 100;

    if (changeOpen < 0) {
      document.getElementById("changePriceTwo").innerHTML = Math.round(latestOpen * 100 + Number.EPSILON)/ 100;
      document.getElementById("changeNameTwo").innerHTML = symbol;
      document.getElementById("changePercentTwo").innerHTML = changeOpen;
      document.getElementById("changePercentTwo").classList.add("text-danger");
      document.getElementById("changeArrowTwo").classList.add("mdi-arrow-bottom-right")
      document.getElementById("changeArrowColorTwo").classList.add("icon-box-danger")
    } else {
      document.getElementById("changePriceTwo").innerHTML = Math.round(latestOpen * 100 + Number.EPSILON)/ 100;
      document.getElementById("changeNameTwo").innerHTML = symbol;
      document.getElementById("changePercentTwo").innerHTML = changeOpen;
      document.getElementById("changePercentTwo").classList.add("text-success");
      document.getElementById("changeArrowTwo").classList.add("mdi-arrow-top-right")
      document.getElementById("changeArrowColorTwo").classList.add("icon-box-success")
    }
    
  }

  async function getFamousStocksThree() {
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=demo';
    const response = await fetch(url);
    const text = await response.text();
    const obj = JSON.parse(text)
    
    const symbol = obj["Meta Data"]["2. Symbol"];
    const latestOpen = Object.values(obj["Time Series (Daily)"])[0]["1. open"];
    const secondOpen = Object.values(obj["Time Series (Daily)"])[1]["1. open"];
    const changeOpen = Math.round((latestOpen - secondOpen)* 100 + Number.EPSILON)/ 100;

    if (changeOpen < 0) {
      document.getElementById("changePriceThree").innerHTML = Math.round(latestOpen * 100 + Number.EPSILON)/ 100;
      document.getElementById("changeNameThree").innerHTML = symbol;
      document.getElementById("changePercentThree").innerHTML = changeOpen;
      document.getElementById("changePercentThree").classList.add("text-danger");
      document.getElementById("changeArrowThree").classList.add("mdi-arrow-bottom-right")
      document.getElementById("changeArrowColorThree").classList.add("icon-box-danger")
    } else {
      document.getElementById("changePriceThree").innerHTML = Math.round(latestOpen * 100 + Number.EPSILON)/ 100;
      document.getElementById("changeNameThree").innerHTML = symbol;
      document.getElementById("changePercentThree").innerHTML = changeOpen;
      document.getElementById("changePercentThree").classList.add("text-success");
      document.getElementById("changeArrowThree").classList.add("mdi-arrow-top-right")
      document.getElementById("changeArrowColorThree").classList.add("icon-box-success")
    }
    
  }

  async function getFamousStocksFour() {
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=demo';
    const response = await fetch(url);
    const text = await response.text();
    const obj = JSON.parse(text)
    
    const symbol = obj["Meta Data"]["2. Symbol"];
    const latestOpen = Object.values(obj["Time Series (Daily)"])[0]["1. open"];
    const secondOpen = Object.values(obj["Time Series (Daily)"])[1]["1. open"];
    const changeOpen = Math.round((latestOpen - secondOpen)* 100 + Number.EPSILON)/ 100;

    if (changeOpen < 0) {
      document.getElementById("changePriceFour").innerHTML = Math.round(latestOpen * 100 + Number.EPSILON)/ 100;
      document.getElementById("changeNameFour").innerHTML = symbol;
      document.getElementById("changePercentFour").innerHTML = changeOpen;
      document.getElementById("changePercentFour").classList.add("text-danger");
      document.getElementById("changeArrowFour").classList.add("mdi-arrow-bottom-right")
      document.getElementById("changeArrowColorFour").classList.add("icon-box-danger")
    } else {
      document.getElementById("changePriceFour").innerHTML = Math.round(latestOpen * 100 + Number.EPSILON)/ 100;
      document.getElementById("changeNameFour").innerHTML = symbol;
      document.getElementById("changePercentFour").innerHTML = changeOpen;
      document.getElementById("changePercentFour").classList.add("text-success");
      document.getElementById("changeArrowFour").classList.add("mdi-arrow-top-right")
      document.getElementById("changeArrowColorFour").classList.add("icon-box-success")
    }
    
  }
  getFamousStocksOne();
  getFamousStocksTwo();
  getFamousStocksThree();
  getFamousStocksFour();