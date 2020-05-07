

exports.getErrorPage = (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: ":/", 
        pageNotFound: "We were unable to find what you wanted. Probably 'cuz the page doesn't exist.",
        path: ""
    } );
}