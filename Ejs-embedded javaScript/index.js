const server=require("express")
const app= server()
const ejs=require("ejs")

app.set('view engine', 'ejs')

app.get("/", function(req,res){
    res.send("welcome to home")
})

app.get("/homme", function(req,res){

    const today = new Date();
    const day= today.getDay();

    let type="a weekday, ";
    let adv="it's time to work hard";
    if(day === 0 || day === 6){
        type="the weekend";
        adv="it's time have some fun";

    }
    res.render("index.ejs",
        {dayType: type,
         advice: adv })
})


app.listen(5050)