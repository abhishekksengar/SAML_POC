const parser = require('saml20');

class ParserController {

    handle(req, res) {
        const requestBody = req.body;
        parser.parse(requestBody, (err, profile) => {
            res.send(requestBody);
        });
    }
}

module.exports = ParserController;