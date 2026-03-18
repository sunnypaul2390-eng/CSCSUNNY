const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔐 Your Twilio Credentials
const accountSid = "YOUR_TWILIO_SID";
const authToken = "YOUR_TWILIO_AUTH_TOKEN";
const client = new twilio(accountSid, authToken);

app.post("/send-sms", (req, res) => {

    const message = req.body.message;

    client.messages.create({
        body: message,
        from: "+15703644379",   // Your Twilio number
        to: "+919435091694"     // Your number
    })
    .then(() => {
        res.send("SMS Sent");
    })
    .catch(err => {
        res.status(500).send("Error: " + err.message);
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
