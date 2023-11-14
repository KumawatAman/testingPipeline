 try{
    var contentType = context.getVariable("request.header.Content-Type");
    var verb = context.getVariable("request.verb");

    if((verb == "GET") && (contentType !== null)){
        context.setVariable("triggerError", "true");
        context.setVariable("triggerErrorStatus", "415");
        context.setVariable("triggerErrorMsg","error:Unsupported Media Type");
    }else if((verb !== "GET") && (contentType !== "application/json") && (contentType !== "*/*")){
        context.setVariable("triggerError", "true");
        context.setVariable("triggerErrorStatus", "415");
        context.setVariable("triggerErrorMsg","error:Unsupported Media Type");
    }
}catch(err){
    context.setVariable("triggerError", "true");
    context.setVariable("triggerErrorStatus", "500");
    context.setVariable("triggerErrorMsg","error:Server Error");

}