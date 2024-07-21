const http = require("http")

http.createServer((req, res) => {
    res.end(`The server running with ${process.pid}`)
}).listen(8000, () => {
    console.log(`server listening on port`);
})