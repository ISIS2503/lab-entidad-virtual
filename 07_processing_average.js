var res = {payload:null};
var query = msg.payload;
var avgUnit = query[0].room.temperature.unit;
var avgPlace = query[0].room.temperature.place;
var tempData = 0;
var avgTemp = 0;
var avgTime = 0;

// procesa la temperatura promedio del intervalo
for(var i = 0; i < query.length; i++) {    
    tempData = tempData + query[i].room.temperature.data;
}

avgTemp = parseInt(tempData/query.length);
tempData = 0;eee

// calcula el tiempo estimado del intervalo
for(var i = 0; i < query.length; i++) {
    tempData = tempData + new Date(query[i].room.sensetime).getTime();
}

avgTime = Math.round(tempData/query.length);
avgTime = new Date(avgTime);

res.payload = {protime:new Date(Date.now()), sensetime:avgTime, temperature:{data:avgTemp, unit:avgUnit, place:avgPlace}};
res.topic = "avgpminTemperature";
return res;
