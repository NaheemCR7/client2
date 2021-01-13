const axios = require('axios');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('coming...');
  // res.json({data:"connected..."});
  res.render('index', { title: 'Client 2' });
}); 

router.get('/abc',function(req,res){
  let mobiles =[
    {
      name:"IPHONE 11",
      price: 60000,
      description:"This is a good phone",
    },
    {
      name:"IPHONE 12",
      price: 80000,
      description:"This is a better new edition phone",
    },
    {
      name:"IPHONE 10x",
      price: 50000 ,
      description:"This is a good phone",
    },
    {
      
      name:"Samsung galaxy",
      price: 40000,
      description:"This is a good phone",
    },
    {
      name:"Oppo promax",
      price: 25000 ,
      description:"This is a good phone",
    },  
    {
      name:"Oppo As",
      price: 30000 ,
      description:"This is a good phone",
    },
    {
      name:"Vivo",
      price: 35000 ,
      description:"This is a good phone",
    },  
  ]
  res.send(mobiles)
  console.log(mobiles)
})


// axios({
//   method:'post',
//   url:'/abc',
//   data:{
//      mobiles =[
//       {
//         name:"IPHONE 11",
//         price: 60000,
//         description:"This is a good phone",
//       },
//       {
//         name:"IPHONE 12",
//         price: 80000,
//         description:"This is a better new edition phone",
//       },
//       {
//         name:"IPHONE 10x",
//         price: 50000 ,
//         description:"This is a good phone",
//       },
//       {
        
//         name:"Samsung galaxy",
//         price: 40000,
//         description:"This is a good phone",
//       },
//       {
//         name:"Oppo promax",
//         price: 25000 ,
//         description:"This is a good phone",
//       },  
//       {
//         name:"Oppo As",
//         price: 30000 ,
//         description:"This is a good phone",
//       },
//       {
//         name:"Vivo",
//         price: 35000 ,
//         description:"This is a good phone",
//       },  
//     ]
//   }

// })

module.exports = router;
