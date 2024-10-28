import express from "express";
import path from "path";

const app = express();
const port = 3800;

app.set("view engine", "ejs")
app.use(express.static("public"))

/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */


app.get("/", function(req,res){
  res.render("index.ejs")
  res.send("server is started")
})

app.get("/about", function(req,res){
  
  res.render('about.ejs')
})
app.get("/contact", function(req,res){
  res.render('contact.ejs')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});