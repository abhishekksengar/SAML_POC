const fs = require('fs');

module.exports = {

    sp_options : {
        entity_id: "https://sp.example.com/metadata.xml",
        private_key: fs.readFileSync("key-file.pem").toString(),
        certificate: fs.readFileSync("cert-file.crt").toString(),
        assert_endpoint: "https://sp.example.com/assert"
    },

    idp_options : {
        sso_login_url: "https://idp.example.com/login",
        sso_logout_url: "https://idp.example.com/logout",
        certificates: [fs.readFileSync("cert-file1.crt").toString(), fs.readFileSync("cert-file2.crt").toString()]
    }
};