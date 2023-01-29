const brew = (app) => {
    app.get("/brew", (req, res) => {
        let responseMessage = "<h1>I'm a teapot, so I cannot brew coffee!</h1>";

        res
            .status(418) // HTTP Status Code 418: I'm a teapot
            .send(responseMessage);
    });
}

module.exports = brew;