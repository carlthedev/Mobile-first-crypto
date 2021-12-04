var xmlhttp = new XMLHttpRequest();
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function parseJson(json) {
      var time = "<b>Last Updated : " + json["time"]["updated"] + "</b>";
      var usdValue = "$" + json["bpi"]["USD"]["rate"];
      var gbpValue = "&pound;" + json["bpi"]["GBP"]["rate"];
      var euroValue = "&euro;" + json["bpi"]["EUR"]["rate"];

      usdValue = usdValue.substring(0, usdValue.length - 5);
      gbpValue = gbpValue.substring(0, gbpValue.length - 5);
      euroValue = euroValue.substring(0, euroValue.length - 5);

      document.getElementById("data").innerHTML = time +
        "<br /><br />" + usdValue +
        "<br />" + gbpValue +
        "<br />" + euroValue;
      document.getElementById('output').innerHTML = gbpValue;
      document.getElementById('output2').innerHTML = usdValue;
      document.getElementById('output3').innerHTML = euroValue;
    }