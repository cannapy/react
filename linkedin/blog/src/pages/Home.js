import imgVar from '../components/img/dmoy.jpg'
const Home=()=>{
    return(
        <div>
            <h1>Hello, welcome to my blog!</h1>
            <header>


            </header>


            <section class="home" id="home">
                <div>
                    <img src={imgVar} alt="Headshot"/>
                </div>

                <div>
                    <h1>I'm David Moyer!</h1>
                </div> 
            
                <div>
                    <a href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:a9aeb310-b695-3770-8f8c-b79abec88946"><img src="./images/Resume Picture.png" alt="Resume"/></a>
                    <a href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:a9aeb310-b695-3770-8f8c-b79abec88946"><p><strong><u>Here is my Resume: </u></strong></p></a>
                </div>
            </section>

            <section class="about" id="about">
                <div>
                    <h1>About Me</h1>
                    <p>Senior studying computer science and entrepreneurship at Penn State</p>
                    <div><img src="./images/LOGO.png" alt="LOGO"></img></div>
                </div>   

                <div>
                    <img src="./images/Dana .jpg" alt="Dana"></img>
                    <h2>Family</h2>
                    <p>With the Best</p>

                    <img src="./images/Cannabis Causes Climate Change.jpg" alt="climate change"/>
                    <h2>Cannabis Causes Climate Change</h2>
                    <p>dreams are made</p>
                </div> 
            </section>

            <section id="activities" class="activities">
                <h1>Activities</h1> 
                <div class="activities-container">
                    <div>
                        <img class="logos" src="./images/LOGO.png" alt="Logo"/>
                        <h2>GreenTents</h2>
                        <p>For Budding Cannasioeurs who Micro-Manage Marijuana, 
                            we Provide Smart-Phone Controlled Greenhouse Tents,
                            to Sow and Grow before Munching on Cookie Dough
                        </p>
                    </div>   

                    <div>
                        <img src="./images/UI.png" alt="Headshot"/>
                        <h2>GreenSense</h2>
                        <p>User-Interface</p>
                    </div>

                    <div>
                        <img class="logos" src="./images/420moro Logo.jpg" alt="Headshot"/>
                        <h2>42MORO (For Tomorrow)</h2>
                        <p>Recycle Today, Food Security For Tomorrow</p>
                    </div>
                </div>
            </section>
            
            <section id="contact" class="contact">
                <div><img src="./images/5 Tent Startup.png" alt="5Tent"></img></div>
                <div>
                    <h1>Contact</h1>               
                    <form action="mailto:dmoyer8888@gmail.com" method="post" enctype="text/plain">
                        <label>Name:</label>
                        <input type="text" name="Your name" placeholder="Enter your name here"></input> <br></br>
                        <label>Email:</label>
                        <input type="email" name="Your name" placeholder="Enter your email here"></input><br></br>
                        <label>Message:</label><br></br>
                        <textarea name="Your message" cols="50" rows="10" placeholder="Enter your message here"></textarea>
                        <br></br>
                        <input type="submit"></input>
                    </form>
                </div>
                
            </section>     

            <footer>         
                <a href="https://cannapytents.com/"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/dmoyer88/?hl=en"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/cannapy"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/dem1/"><i class="fa-brands fa-linkedin"></i></a>
                <p>215-872-2008 | dem5634@psu.edu</p>
            </footer>
        </div>
    );
}

export default Home;