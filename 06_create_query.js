var res = {};
res.skip = 0;
res.limit = 60;
var signal = msg.payload;

var maxtime = new Date(Date.now() - 1*60*1000).toISOString();
var query = {'room.sensetime':{$gte: maxtime}};

if(signal === true) {
    res.payload = query;
    res.topic = "mongoQuery"
    return res;
}
