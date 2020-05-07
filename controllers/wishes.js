//const products = [];
const Wish = require('../models/wishes');

exports.getAddWishPage = 
    (req, res) => {
    res.render('add-product', {
        pageTitle: "Add New Wish",
        path: "/admin/add-wish"
    });
}

exports.postWishes = (req, res) => {
    console.log(req.body.title);
    //products.push({title: req.body.title});
    const product = new Wish(req.body.title);
    product.saveProduct();
    res.redirect('/');
}

exports.getWishes = (req, res) => {
    
    Product.fetchAllProducts((products)=>{
        res.render('shop', {
        pageTitle: 'Welcome to My Shop!',
        products: products,
        path: '/'
        });
    })
    
   // res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
}