const express = require('express');
const app = express();

const prepareAndStartServer = () => {

    app.listen(3001, () => {
        console.log(`server started at`);
    });
}

prepareAndStartServer();