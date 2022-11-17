const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
var items=["Biriyani","Egg Rice","Noodles"];
var workItems=["Apple juice","Orange juice","Grape juice"];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  let day=date();
  res.render("list",{listTitle:day,addedItems:items});
});
app.post("/",function(req,res){
  var item=req.body.newItem;
  if(req.body.list=="Juice"){
    workItems.push(item);
    res.redirect("/juice");
  }
  else{
    items.push(item);
    res.redirect("/");
  }

})
app.get("/juice",function(req,res){
  res.render("list",{listTitle:"Juice",addedItems:workItems});
});
app.get("/about",function(req,res){
  res.render("about");
});
app.post("/juice",function(req,res){
  res.redirect("/juice");
})
app.post("/about",function(req,res){
  res.redirect("/about");
});
app.listen("3000",function(){
  console.log("server is ruuning on 3000");
});
