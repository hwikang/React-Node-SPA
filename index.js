const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send({'bye':'buddy'});
});
//HEROKU 쓰면 || 안쓰면
const PORT = process.env.PORT || 5000
app.listen(PORT);
