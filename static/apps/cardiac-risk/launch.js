var fhirServiceUrl = getParameterByName("fhir_service_url");

var client = {
  "client_name": "SMART Cardiac Risk",
  "client_uri": "http://smartplatforms.org/smart-app-gallery/cardiac-risk/",
  "logo_uri": "http://smartplatforms.org/wp-content/uploads/2012/09/cardiac-risk-216x300.png",
  "contacts": [ "info@smartplatforms.org" ],
  "redirect_uris": [ relative("index.html")],
  "response_types": ["token"],
  "grant_types": ["implicit"],
  "token_endpoint_auth_method": "none",
  "scope":  "summary search launch/patient launch/id",
  "access_scope":  "summary search launch/patient launch/id:" + getParameterByName("launch_id")
};


FHIR.oauth2.providers(fhirServiceUrl, function(provider){
  FHIR.oauth2.authorize({
    client: client, 
    provider: provider
  });
});

function relative(url){
  return (window.location.protocol + "//" + window.location.host + window.location.pathname).match(/(.*\/)[^\/]*/)[1] + url;
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}
