var ip = context.getVariable('appWhitelistedIPs');
var ips = ip.split(",");

var clientIp = context.getVariable("request.header.x-forwarded-for.1");


var found = ips.find(function(item) {
    return item == clientIp;
    });
context.setVariable('AllowedIp',found);

if (!found) {

    context.setVariable("triggerError", "true");
    context.setVariable("triggerErrorStatus", "500");
    context.setVariable("triggerErrorMsg","error:The client IP address is not on the allowlist");
}