const wishes = [];
const Wish = require('../models/wish');

var homeLink = {url: "/", title: "Home" };
var addWish = {url: "/admin/add-wish", title: "Add Wish"};
var navArray = [homeLink, addWish];
var MFG = "Manufacturer"
var Model = "Model"
var Color = "Color";
var Price = "Price";
var Type = "Type";



exports.getAddWishPage = 
    (req, res) => {
    res.render('admin', {
        pageTitle: "Add New Wish",
        navItemArray: navArray,
        path: "/admin/add-wish",
        showModal: false,
        messageTitle: "Unable to complete the request",
        messageContent: "Error message goes here"
    });
}

exports.postWishes = (req, res) => {
    console.log(req.body.wishMFG);
    var NwishMFG = req.body.wishMFG;
    var NwishName = req.body.wishName;
    var NwishColor = req.body.wishColor;
    var NwishPrice = req.body.wishPrice;
    var NwishType = req.body.wishType;
    //products.push({title: req.body.title});
    if (NwishType != "")
    {
        if (NwishName == "")
        {
            NwishName = "Unspecified"
        }
        if (NwishPrice == "")
        {
            NwishPrice = "Unspecified"
        }
        if (NwishMFG == "")
        {
            NwishMFG = "Unspecified"
        }
        if (NwishColor == "")
        {
            NwishColor = "Unspecified"
        }
        const wish = new Wish(NwishType, NwishMFG, NwishName, NwishColor, NwishPrice);
        wish.saveWish();
        res.redirect('/');
    }
    else 
    {
        res.render('admin', {
            pageTitle: "Add New Wish",
            navItemArray: navArray,
            path: "/admin/add-wish",
            showModal: true,
            messageTitle: "Unable to complete the request",
            messageContent: "You need to specify the item's type (this indicates what kind of item it is)."
        });
        
    }
}

exports.getWishes = (req, res) => {
    
    Wish.fetchAllWishes((wishes)=>{
        res.render('wishlist', {
        pageTitle: 'Your Wishlist',
        navItemArray: navArray,
        wishTypeTitle: Type,
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