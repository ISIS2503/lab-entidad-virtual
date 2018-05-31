var input = msg.payload;
var time = null;
var temperature = 0;
var res1 = {payload:null};
var res2 = {payload:null};

time = input.room.sensetime;
temp = input.room.temperature.data;

res1.payload = temp;
res1.topic = "temperature";
res2.payload = time;
res2.topic = "time";

return [res1, res2];
