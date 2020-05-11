const wishes = [];
const Wish = require('../models/wish');
var homeLink = {url: "/", title: "Home" };
var addWish = {url: "/admin/add-wish", title: "Add Wish"};
var navArray = [homeLink, addWish];
var MFG = "Manufacturer"
var Model = "Model"
var Color = "Color";
var Price = "Price";



exports.getAddWishPage = 
    (req, res) => {
    res.render('admin', {
        pageTitle: "Add New Wish",
        navItemArray: navArray,
        path: "/admin/add-wish"
    });
}

exports.postWishes = (req, res) => {
    console.log(req.body.wishMFG);
    //products.push({title: req.body.title});
    const wish = new Wish(req.body.wishMFG, req.body.wishName, req.body.wishColor, req.body.wishPrice );
    wish.saveWish();
    res.redirect('/');
}

exports.getWishes = (req, res) => {
    
    Wish.fetchAllWishes((wishes)=>{
        res.render('wishlist', {
        pageTitle: 'Welcome to the wishlist!',
        navItemArray: navArray,
        wishMFGTitle: MFG,
        wishNameTitle: Model,
        wishColorTitle: Color,
        wishPriceTitle: Price,
        wishes: wishes,
        path: '/'
        });
    })
    
   // res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
}