module.exports = function(app, User)
{
    app.get('/api/users', function(req, res){
        User.find(function(err, users){
            if(err){
                return res.status(500).send({error: err});
            }
            res.json(users);
        })
    });
    app.get('/api/users/:user_id', function(req, res){
        User.findOne({id: req.params.user_id}, function(err, user){
            if(err){
                return res.status(500).send({error: err});
            }
            if(!user){
                return res.status(404).json({error: "not found"});
            }
            res.json(user);
        });
    });
    app.post('/api/users', function(req, res){
        var user = new User();
        user.id = req.body.id;
        user.name = req.body.name;
        user.password = req.body.password;
        user.regdate = new Date(req.body.regdate);

        // check req validity
        if(!req.body["id"] || !req.body["name"] || !req.body["password"]){
            return res.status(400).json({error: "invalid request"});
        }

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