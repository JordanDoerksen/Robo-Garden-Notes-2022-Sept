const e = require('express');
var express = require('express');
var router = express.Router();
const GuestBookEntry = require('../models/index').GuestBookEntry;

// const { promisify } = require('util');
// const sleep = promisify(setTimeout);
// sleep(500).then(()=>{
// });


/* GET guestbook listing. */
router.get('/', function (req, res, next) {
    GuestBookEntry.findAll().then((result)=>{
            res.status(200).send((result));
    }).catch((e)=>{
        //TODO: Remove returning error to client in Production
        res.status(500).send(e);
    })
});

router.post('/sign-guestbook', function (req, res, next) {
    let currentFirstName = req.body.firstName;
    let currentLastName = req.body.lastName;
    let currentDisplayName = req.body.displayName;
    let currentEmail = req.body.email;
    let currentMessage = req.body.message;

    GuestBookEntry.create({
        firstName: currentFirstName,
        lastName: currentLastName,
        displayName: currentDisplayName,
        email: currentEmail,
        message: currentMessage
    }).then((result)=>{
        res.status(201).send(result);
    }).catch((e)=>{
        //TODO: Remove returning error to client in Production
        res.status(500).send(e);
    });

});

module.exports = router;

// HTTP Status Codes
// Every code is 3 digits
// 1## - Informational, Example: "102 Still Processing"
// 2## - Success, Example: "200 OK"
// 3## - Redirection, Example: "301 Moved Permanently"
// 4## - Client Errors, "404 Not Found"
// 5## - Server Errors, "500 Internal Server Error", "418 I'm a teapot"
