    var request = new sn_ws.RESTMessageV2();
    request.setEndpoint(gs.getProperty('glide.servlet.uri') + "xmlstats.do");

    request.setHttpMethod('GET');

    request.setRequestHeader("Accept","application/xml");

    var response = request.execute();

    var xmlString = response.getBody();

    var xmldoc = new global.XMLDocument2();
    xmldoc.parseXML(xmlString)
    var instance_version = xmldoc.getNodeText("//glide.build.name");
    gs.info('Your ServiceNow version is ' + instance_version);
    gs.info('-------------------------------------------------------');
    gs.info('Checking for Microsoft Teams Integration Prerequisites');
    gs.info('-------------------------------------------------------');
    var node = xmldoc.getFirstNode( '/xmlstats/plugin' );

    j=1;
    while( node != null ) {

        var value = node.getTextContent(node)
        if(value == 'com.glide.cs.chatbot.lite')
         gs.info('Virtual Agent lite is Available - Now Bot on Teams can be enabled')
        if(value == 'com.glide.cs.chatbot')
         gs.info('Virtual Agent is Available')
        if(value == 'com.snc.itsm.virtualagent.lite')
         gs.info('ITSM Virtual Agent Conversation Topics Lite are Available')
        if( value == 'com.sn_hr_virtual_agent')
         gs.info( 'HR Service Delivery Virtual Agent Topics are Available');
        if( value == 'com.snc.notify')
         gs.info( 'Notify connector is Available');
        j++;
        node = xmldoc.getNextNode(node);
    }
    

