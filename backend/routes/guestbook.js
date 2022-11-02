var express = require('express');
var router = express.Router();
const GuestBookEntry = require('../models/GuestBookEntry');

// const guestBook = [new GuestBookEntry("firstName", "lastName", "displayName", "email", "message")];
const guestBook = [];

/* GET guestbook listing. */
router.get('/', function(req, res, next) {
    if(guestBook.length > 0){
        res.status(200).send(guestBook);
    }else{
        res.status(204).send();
    }
});

router.post('/sign-guestbook', function(req, res, next){
    let currentFirstName = req.body.firstName;
    let currentLastName = req.body.lastName;
    let currentDisplayName = req.body.displayName;
    let currentEmail = req.body.email;
    let currentMessage = req.body.message;

    let currentGuestBookEntry = new GuestBookEntry(currentFirstName,currentLastName,currentDisplayName,currentEmail,currentMessage);

    guestBook.push(currentGuestBookEntry);

    res.status(201).send(currentGuestBookEntry);

});

module.exports = router;

// HTTP Status Codes
// Every code is 3 digits
// 1## - Informational, Example: "102 Still Processing"
// 2## - Success, Example: "200 OK"
// 3## - Redirection, Example: "301 Moved Permanently"
// 4## - Client Errors, "404 Not Found"
// 5## - Server Errors, "500 Internal Server Error", "418 I'm a teapot"
