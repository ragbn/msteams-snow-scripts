    var request = new sn_ws.RESTMessageV2();
    request.setEndpoint(gs.getProperty('glide.servlet.uri') + "xmlstats.do");

    request.setHttpMethod('GET');

    request.setRequestHeader("Accept","application/xml");

    var response = request.execute();

    var xmlString = response.getBody();
    //var xmldoc = new global.XMLDocument(xmlString, true);
    var xmldoc = new global.XMLDocument2();
    xmldoc.parseXML(xmlString)
    var instance_version = xmldoc.getNodeText("//glide.build.name");

    //var xnList = xmldoc.getNode("//plugin");

    var node = xmldoc.getFirstNode( '/xmlstats/plugin' );
    //gs.info(node)
    j=1;
    while( node != null ) {
       // var value = xmldoc.getNodeText( '//plugin[' + j + ']');
        var value = node.getTextContent(node)
        //if(value == 'com.glide.cs.chatbot.lite')
        // gs.info('Virtual Agent lite is Available')
        gs.info( 'Value: ' + j + value);
        j++;
        node = xmldoc.getNextNode(node);
    }
    gs.info(instance_version);
//var iter = xnList.getChildNodeIterator();
//gs.info(iter.hasNext())

/*while(iter.hasNext()){

var n = iter.next();
    
  gs.info('Node name: ' +   n.getNodeName());
  
  //Outputs all child node values of each HOST
  
  gs.info('Node Text Content (values): ' + n.getTextContent());
  
  
  gs.info('Node value (xml string): ' + n);
  
}*/
  
  
//gs.info(xnList);




try{
    var rm = new sn_ws.RESTMessageV2();
    var endpoint = gs.getProperty('glide.servlet.uri') + "xmlstats.do";
    rm.setEndpoint(endpoint);
    rm.setHttpMethod('GET');
    rm.setRequestHeader('content-type', 'application/json');
    var response = rm.execute();
    var responseObj = new XMLHelper(response.getBody()).toObject();
    gs.print("response=" + response.getBody());
    gs.print("errorMsg=" + response.getErrorMessage());
    }
    catch(err){
    gs.print("err=" + err);
    }