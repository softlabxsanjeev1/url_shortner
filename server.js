const express = require('express')
const urlRoute = require('./routes/urlRoutes');
const connectDB = require('./dbConnect');
const URL = require('./models/url')

connectDB()
const app = express()
app.use(express.json())


app.use("/url", urlRoute);
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            },
        },
    }
    );
    res.redirect(entry.redirectURL);
})



const PORT = 8080;

app.listen(PORT, () => {
    console.log("Server is running on 8080.......")
})