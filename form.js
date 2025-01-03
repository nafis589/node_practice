var http = require('http');
var url = require('url');
var nodemailer = require('nodemailer');
http.createServer(function(req, res){
    res.writeHead(200);
    q = url.parse(req.url, true).query;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'your email address',
            pass:'your password'
        }
    })
    var mailoptions = {
        from: 'toureprince513@gmail.com',
        to: q.formulaire,
        subject: 'un petit message pour toi!!',
        text: 'hello handsome how are you?'
    }
    transporter.sendMail(mailoptions, function(error, info){
        if (error){
            res.end(error.message);
        }
        else{
            res.end(info.res);
        }
    })
}).listen(8080);
