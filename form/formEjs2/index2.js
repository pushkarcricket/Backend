const server=require("express")
const app=server();

app.get("/", function(req,res){
    res.send("welcome to homepage")
})


app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
  });
  
  app.post("/register", (req, res) => {
    //Do something with the data
    res.sendStatus(201);
  });
  
  app.put("/user/pushkar", (req, res) => {
    res.sendStatus(200);
  });
  
  app.patch("/user/pushkar", (req, res) => {
    res.sendStatus(200);
  });
  
  app.delete("/user/pushkar", (req, res) => {
    //Deleting
    res.sendStatus(200);
  });
  
  

app.listen(4050)