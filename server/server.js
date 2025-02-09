const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const url = "https://test.api.amadeus.com/v1/security/oauth2/token";
const axios = require("axios");
const PORT = 3000 || process.env.PORT;
const date = new Date();
date.setDate(date.getDate() + 1)
console.log(date.toISOString().split("T")[0])
date.setDate(date.getDate() + 2)
console.log(date.toISOString().split("T")[0])
const client_id = process.env.API_KEY;
const client_secret = process.env.API_SECRET;
const data = 
{
    grant_type: "client_credentials",
    client_id: client_id,
    client_secret: client_secret
};
let token = ""
let getToken = async() => {
const response = await axios.post(url,data,{ headers: {"Content-Type":"application/x-www-form-urlencoded" }})

return response.data.access_token;
}


const main = async () => {
    token = await getToken();
    console.log(token)
}
main();

const url2 = "https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city"
const city = {
    cityCode:"MIA",
}



app.use(cors())
app.get("/", async(req, res) => {
    
    const response  = await axios.get(url2,{params: city, headers: {"Authorization":"Bearer " + token }})
    res.send(response.data)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})