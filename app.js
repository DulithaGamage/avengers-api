const express = require('express');
const app = express(); // create a express application
app.listen(3000, () => { console.log("Connected Listening on port 3000...."); });

//call back function here is route handler
app.get('/', (req, res) => {
    res.send("You are Welcome to Home Page");
});

//get all
app.get('/api/avengers', (req, res) => {
    let avengers = ['batman', 'spider man', 'soro', 'iron man', 'thor', 'black widow', 'captain arerica'];
    res.send(avengers);
});

//get with params
/* app.get('/api/avengers/1', (req,res)=>{
    let avenger = {name:'iron man',id:1};
    res.send(avenger);
});
 */

app.get('/api/avengers/:avengerId', (req, res) => {
    let optional = req.query.filterBy;  //acsessing optional parameter
    res.send("You are requesting avenger id : " + req.params.avengerId + ' and optional parameter passed for filterby is ' + optional);
});