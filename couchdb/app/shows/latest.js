function(doc, req)
{ 
  if(doc.docType == 'plugin' && doc.defaultVersion)
  {
    var fields = doc._id.split('-');

    var plugin = fields.pop();
    var user = fields.join('-');

    return { 
      'code': '307', 
      'headers': {
        'Location': 'http://plugins-v3.jquery.com/'+user+'/'+plugin+'-'+doc.defaultVersion+'.js'
      } 
    };
  }

  return { 'code': '404' }; 
}