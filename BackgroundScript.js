var request = new sn_ws.RESTMessageV2();

gs.getProperty('instance_name')

request.setEndpoint("https://" + gs.getProperty('instance_name')+ ".service-now.com/xmlstats.do");

request.setHttpMethod('GET');

request.setRequestHeader("Accept","application/xml");

var response = request.execute();

var xmlString = response.getBody();

var xmldoc = new global.XMLDocument(xmlString, true);

var instance_version = xmldoc.getNodeText("//glide.build.name");

gs.info(instance_version);


