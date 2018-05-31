context.data = context.data || {};

switch (msg.topic) {
    case "roomTime":
        context.data.sensetime = msg.payload;
        msg = null;
        break;
    case "roomTemperature":
        context.data.temperature = msg.payload;
        msg = null;
        break;
    default:
        msg = null;
    	break;
}

if(context.data.sensetime !== null && context.data.temperature !== null) {
		res = {};
    res.payload = JSON.stringify(context.data);
    res.topic = "roomTemperature";
    context.data = null;
		return res;
}
