const express = require("express");
const app     = express();
const path    = require("path");

app.use(express.static(path.join(__dirname, 'public'))); // STATIC ASSETS

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/views/about.html'));
});

app.get('/algebra',function(req,res){
  res.sendFile(path.join(__dirname+'/views/algebra.html'));
});

app.get('/logic',function(req,res){
  res.sendFile(path.join(__dirname+'/views/logic.html'));
});

app.get('/statistics',function(req,res){
  res.sendFile(path.join(__dirname+'/views/statistics.html'));
});

app.get('/AI',function(req,res){
  res.sendFile(path.join(__dirname+'/views/AI.html'));
});

app.listen(process.env.PORT || 3000, function(){
console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
