context.data = context.data || {};

switch (msg.topic) {
  case "incomingTime":
      context.data.recvtime = msg.payload;
      msg = null;
      break;
  case "roomTemperature":
      context.data.room = msg.payload;
      msg = null;
      break;

  default:
      msg = null;
  	break;
}

if(context.data.recvtime != null && context.data.room != null) {
  res = {};
  res.payload = context.data;
  res.topic = "roomTemperature"
  context.data = null;
  return res;
}
