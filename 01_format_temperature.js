var res = {};
var tempArray = [];
var tempUnit = "";

tempString = msg.payload;
tempArray = tempString.split("\t");
tempUnit = tempArray[1].replace("\r\n", "");
res.topic = "roomTemperature";
res.payload = {};

res.payload = {"data": parseInt(tempArray[0]), "unit": tempUnit, "place": "Deposito Externo"}

return res;
