var res = {};

res.payload = new Date(msg.payload);
res.topic = msg.topic;

return res;
