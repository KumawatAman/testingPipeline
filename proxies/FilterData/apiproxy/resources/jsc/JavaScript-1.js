
var requestPayload = JSON.parse(context.getVariable('request.content'));

var selectedLogpoints = [];

for (var i = 0; i < requestPayload.Logpoints.length; i++) {
    var logpoint = requestPayload.Logpoints[i];

    if (logpoint.logpoint === "request-in" || logpoint.logpoint === "response-out") {
        selectedLogpoints.push(logpoint);
    }
}

var responsePayload = {
    "Logpoints": selectedLogpoints
};

var responsePayloadString = JSON.stringify(responsePayload, null, 2);
print(responsePayloadString);
context.setVariable('response.content', responsePayloadString);


