const http = require("http");
const app = require("./app");
const PORT = 8080;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`server is runing on port ${8080}`);
});
