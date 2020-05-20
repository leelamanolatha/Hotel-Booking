var mongoose = require('mongoose');

var NameInfo = mongoose.model('NameInfo');

exports.processRequest = function(req, res) {
    
        //res.send("Hello")
        
        setname(req,res)
      
      
    };

    function setname(req,res)
    {
        //console.log(req.sessionID)
    let name1 = req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.name ? req.body.queryResult.parameters.name : 0;
    let number1 = req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.name ? req.body.queryResult.parameters.number : 0;
    let date1 = req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.name ? req.body.queryResult.parameters.date : 0;

    //res.send("Status is "+name)
    if(name1 && number1 && date1)
    {
        //res.send("Hello")
        const user = new NameInfo({session_id:req.sessionID,name:name1,number:number1,date:date1})
        user.save()
        
        
    }
    else{
      res.send("Error")
    }
    }
