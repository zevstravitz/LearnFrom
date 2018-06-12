const express = require("express");
const app     = express();
const path    = require("path");

app.use(express.static(path.join(__dirname, 'public'))); // STATIC ASSETS

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
