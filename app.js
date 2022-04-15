const express = require("express");
const app = express();

const hostname = "0.0.0.0";
const port = "8080";

const def_router = require('./routers/root')

app.get("/", (req, res) => {
    res.end(`Pid ${process.pid}`);
})

app.use("/default", def_router);

//подключение обработчика для статических файлов
app.use('/static', express.static(__dirname + '/static'));

app.listen(port, hostname, () => {
    console.log(`server is listening on ${hostname + ":" + port} \n`);
});