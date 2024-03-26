exports.contactus=(req,res,next)=>{
    //res.sendFile(path.join(rootDir , "views" ,"contactus.html"));
    res.render('contactus',{
        pageTitle: 'contact us',
        path:'/contactus',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
}

exports.success = (req,res,next)=>{
    res.render( 'success' ,{
        pageTitle: 'success',
        path:'/success',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
}