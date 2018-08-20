module.exports = function(app, User)
{
    app.post('/api/users', function(req, res){
        var user = new User();
        user.id = req.body.id;
        user.name = req.body.name;
        user.password = req.body.password;
        user.regdate = new Date(req.body.regdate);
    
        user.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
            res.json({result: 1});
        });
    });
}