const express = require('express');
const path = require('path');

const app = express();
//const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname+'/dist/project-angular'));
app.get('/*',function(req,res){
res.sendFile(path.join(__dirname+'/dist/project-angular/index.html'));
});

/*
app.listen(PORT,()=> {
    console.log("start server at port" + PORT);
});
*/
