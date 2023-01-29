const index = (app) => {
    app.get("/", (req, res) => {
        let responseMessage = "Hello, World!";
        res
            .status(200)
            .send(responseMessage)
    })
}
module.exports = index;