const index = (app) => {
    app.get("/portfolio", (req, res) => {
        let responseMessage = `
        <nav>
            <ul>
                <li><a href=#p1>Project 1</a></li>
                <li><a href=#p2>Project 2</a></li>
                <li><a href=#p3>Project 3</a></li>
                <li><a href='https://github.com/cannapy'>Github</a></li>
            </ul>
        </nav>
        <h1>David Moyer</h1>
        <br>
           
        <section>
            <h2 id='p1'>Data Mining</h2>
            <h3>Description:</h3>
            <p>Mining a 24,000 row, 24 column excel CSV for descriptive, predictive, and prescriptive analytics</p>
            <h3>Programming languages:</h3>
            <ul>
                <li>Python</li>
                <ul>
                    <li>Numpy</li>
                    <li>Pandas</li>
                    <li>MatPlotLib</li>
                    <li>SciPy</li>
                    <li>Sci-Kit Learn</li>
                </ul>
            </ul>
        </section>
        <section>
            <h2 id='p2'>Computer Vision</h2>
            <h3>Description:</h3>
            <p>Image classification, object detection, image segmentation, video classification, action detection</p>
            <h3>Programming languages:</h3>
            <ul>
                <li>Python</li>
                <ul>
                    <li>Numpy</li>
                    <li>Pandas</li>
                    <li>PyTorch</li>
                </ul>
            </ul>
        </section>

        <section>
            <h2 id='p3'>React Blog</h2>
            <h3>Description:</h3>
            <p>Blog and terminal resume</p>
            <h3>Programming languages:</h3>
            <ul>
                <li>JavaScript</li>
                <ul>
                    <li>Mongo</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Node</li>
                </ul>
            </ul>
        </section>`;

        res
            .status(200)
            .send(responseMessage)
    })
}
module.exports = index;