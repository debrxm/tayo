//mailchimp code:
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const fetch = require("node-fetch");
const { json } = require("express");
dotenv.config({
  path: "./config.env",
});

const app = express();

app.use(json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("We are live");
});
app.post("/signup", (req, res) => {
  const { fullName, email } = req.body;
  if (!fullName || !email) {
    alert("please input a correct email");
  }

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FULLNAME: fullName,
        },
      },
    ],
  };
  const postData = JSON.stringify(data);
  fetch("https://us6.api.mailchimp.com/3.0/lists/747c01ec67", {
    method: "POST",
    headers: {
      Authorization: "auth 93fd299468e204c05c93919e9ea815c4-us6",
    },
    body: postData,
  })
    // .then(res.statusCode === 200 ?
    //   res.redirect('/') :
    //   console.log('works? '))
    .catch((err) => console.log(err));
});

app.use(express.static(path.join(__dirname + "/public")));
// app.use('/]public', express.static(path.join(__dirname, "public")));
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));
