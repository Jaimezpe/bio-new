import './AboutMe.css';

function AboutMe() {
    return (

        <div className="aboutme">
            <div className="aboutmesobremi">
                <div className="aboutmecontenido">
                    <h1>Aboutme</h1>
                    <span>Hi👋! I'm Jaime, <span className="azul">FrontEnd developer</span>. I have always been curious about technology and eager to create. 2 years ago, I started with <span className="orange">web programming
                    </span> after <span className="orange">developing</span> JavaScript on
                        <span className='orange'> discord</span> and since then, I have been learning more and more. Using <span className="orange">
                            creativity for create technology</span> has become a very important part of my life. I love
                        <span className="orange"> experimenting</span> with both <span className=''>hardware</span> and <span className="orange">software</span>
                    </span>
                    <h3>"Think different"😉</h3>
                </div>
                <div className="aboutmeimagen">

                </div>
            </div>
            <div className="aboutmexp">
                <div className="timeline-item">
                    <div className="timeline-year">2020-2022</div>
                    <div className="timeline-title">Coding discord bots</div>
                    <div className="timeline-desc">
                        I developed custom Discord bots using Discord.js for both my own servers and those of other users. Additionally, I handled server setup and customization, including role creation, channel organization, visual design, and server administration. I actively managed and prepared a total of 8 servers.
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-year">2023-2024</div>
                    <div className="timeline-title">Creating and designing SaaS</div>
                    <div className="timeline-desc">
                        I focused on designing and developing Software as a Service (SaaS) products, prioritizing functionality and user experience. This included implementing automation through bots and configuring server environments as part of the overall product ecosystem.
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-year">2024-2025</div>
                    <div className="timeline-title">Coding web pages</div>
                    <div className="timeline-desc" id='conocimientos'>
                        I built websites for clients and for my own projects, including the main landing page for my SaaS. I used HTML, CSS, and JavaScript for basic static pages, and React, TypeScript, Vite, and other modern tools for more advanced, dynamic web applications.
                    </div>
                </div>
            </div>
        </div>


    );
}

export default AboutMe;
