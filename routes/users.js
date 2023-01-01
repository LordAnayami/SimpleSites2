const express = require('express'); //import expressa
const res = require('express/lib/response');
const { send } = require('express/lib/response');
const router = express.Router();
const Users = require('../models/User');
//let users = require('../models/User');

function poprawna(param){
    return param.a + param.h;
}

poprawna({
    a: '2',
    h: '4',
})

//Create
// router.post('/', (req,resp)=>
// {
//     console.log('req', req);
//     resp.json(req.body);
// })
router.post("/", (req,res)=>{
console.log (req.body);
const user = new Users({
    name: req.body.name,
    description: req.body.description,
    });
    user 
    .save()
    .then((data) =>
    {
        res.json(data);
    })
    .catch((err) =>{
        res.json({ messege: err});
    });
});










// READ ALL
router.get('/', (req,resp)=>
{
    resp.send("Users get");
})


//READ ONE BY ID
router.get('/:id', function(req,resp) //jak ()=>
{
    resp.send("User id " + req.params.id);
})



//UPDATE
router.get('/', (req,resp)=>
{
    console.log('req', req.body);
    resp.send("Users get");
})


//DELETE
router.delete('/:id', function(req,resp) //jak ()=>
{
    resp.send("User id " + req.params.id);
})

//EXPORT MODULE
module.exports = router;