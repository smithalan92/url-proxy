const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

const port = 3400

app.use(cors())

const imageRegex = /(\.jpg|\.jpeg|\.gif|\.png)$/i

app.get('/image', async (req, res) => {
    const url = req.query.url;

    if (!url || !imageRegex.test(url)) {
        res.send(400);
        return;
    }

    const { data } = await axios.get(url,{ 
        responseType: 'arraybuffer'
    });

    const base64Img = Buffer.from(data, 'binary').toString('base64');

    const imageExt = url.match(imageRegex)[0].replace('.', '');

    res.json({
        img: `data:image/${imageExt};base64, ` + base64Img,
    });
})

app.get('/json', async (req, res) => {
    const url = req.query.url;

    if (!url) {
        res.send(400);
        return;
    }

    const { data } = await axios.get(url);

    res.json(data);
})

app.listen(port);