const server=require("express")
const app= server();
const ejs=("ejs")

app.set('view engine', 'ejs')


app.get("/home",function(req,res){
    res.send("welcome to homepage")
})



app.get("/", (req, res) => {
    const runData= {
      title: "EJS Tags",
      seconds: new Date().getSeconds(),
      items: ["apple", "banana", "cherry"],
      htmlContent: "<strong>This is some strong text</strong>",
    };
    res.render("data1.ejs", runData);
  });
  
  app.listen(6060)