module.exports = function(app, User)
{
    app.get('/',function(req, res){
        res.render('index', {
            title: "MY HOMEPAGE",
            length: 5
        })
    });
}