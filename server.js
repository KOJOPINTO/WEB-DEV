    const path = require('path');
    const express = require('express');
    const app = express();
    const port = 3000;

    app.use(express.static(path.join(__dirname, "/")));

    app.listen(port,() =>{
        console.log(`Server listerning on port ${port}`);

    });