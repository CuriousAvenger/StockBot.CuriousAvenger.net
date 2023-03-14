async function getStockInfo() {
    const url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo';
    const response = await fetch(url);
    const text = await response.text();
    const obj = JSON.parse(text)
    
    const SymbolName = String(obj["Symbol"]).concat(" : ").concat(String(obj["Name"]))
    document.getElementById("SymbolName").innerHTML = SymbolName;

    const SectorExchange = String(obj["Sector"]).concat(" & Exchange:  ").concat(String(obj["Exchange"]))
    document.getElementById("SectorExchange").innerHTML = SectorExchange;

    document.getElementById("FiscalYearEnd").innerHTML = obj["FiscalYearEnd"];
    document.getElementById("LatestQuarter").innerHTML = obj["LatestQuarter"];
    document.getElementById("MarketCapitalization").innerHTML = obj["MarketCapitalization"];
    document.getElementById("PERatio").innerHTML = obj["PERatio"];
    document.getElementById("PEGRatio").innerHTML = obj["PEGRatio"];
    document.getElementById("BookValue").innerHTML = obj["BookValue"];
    document.getElementById("EBITDA").innerHTML = obj["EBITDA"];
    document.getElementById("DividendPerShare").innerHTML = obj["DividendPerShare"];
    document.getElementById("DividendYield").innerHTML = obj["DividendYield"];
    document.getElementById("EPS").innerHTML = obj["EPS"];
    document.getElementById("RevenuePerShareTTM").innerHTML = obj["RevenuePerShareTTM"];
    document.getElementById("ProfitMargin").innerHTML = obj["ProfitMargin"];
    document.getElementById("OperatingMarginTTM").innerHTML = obj["OperatingMarginTTM"];
    document.getElementById("ReturnOnAssetsTTM").innerHTML = obj["ReturnOnAssetsTTM"];
    document.getElementById("ReturnOnEquityTTM").innerHTML = obj["ReturnOnEquityTTM"];
    document.getElementById("RevenueTTM").innerHTML = obj["RevenueTTM"];
    document.getElementById("GrossProfitTTM").innerHTML = obj["GrossProfitTTM"];
    document.getElementById("AnalystTargetPrice").innerHTML = obj["AnalystTargetPrice"];
    document.getElementById("TrailingPE").innerHTML = obj["TrailingPE"];
    document.getElementById("ForwardPE").innerHTML = obj["ForwardPE"];
    document.getElementById("PriceToSalesRatioTTM").innerHTML = obj["PriceToSalesRatioTTM"];
    document.getElementById("PriceToBookRatio").innerHTML = obj["PriceToBookRatio"];
    document.getElementById("EVToRevenue").innerHTML = obj["EVToRevenue"];
    document.getElementById("EVToEBITDA").innerHTML = obj["EVToEBITDA"];
    document.getElementById("Beta").innerHTML = obj["Beta"];
    document.getElementById("52WeekHigh").innerHTML = obj["52WeekHigh"];
    document.getElementById("52WeekLow").innerHTML = obj["52WeekLow"];
    document.getElementById("50DayMovingAverage").innerHTML = obj["50DayMovingAverage"];
    document.getElementById("200DayMovingAverage").innerHTML = obj["200DayMovingAverage"];
    document.getElementById("DividendDate").innerHTML = obj["DividendDate"];



    
  }

getStockInfo();