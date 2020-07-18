const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoute = require('./routes/wishlist');
const adminRoute = require('./routes/administration');
const errorPage = require('./controllers/404');
const fs = require('fs');
const app = express();
console.log("Wishlist");
console.log("(C) Karl-Erik Kald. All Rights Reserved")
console.log("node.JS version ", process.version);

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');
if (!fs.existsSync(path.join(__dirname, 'data'))){
    console.log("The directory named 'data' is not present. Adding a directory named data...");
    fs.mkdirSync(path.join(__dirname, 'data'));
    console.log("Done.")
}
app.use(userRoute);
app.use('/admin', adminRoute);
app.use(errorPage.getErrorPage);

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started");
})