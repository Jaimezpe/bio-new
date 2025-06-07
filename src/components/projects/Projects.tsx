import './Projects.css';

function Projects() {
    return (
        <div className='todoprojects'>
            <h1>Projects</h1>
            <div className='projects'>

                <div className="proyecto">
                    <img src="/foundascreenshot.png" draggable='false' />
                    <p>Founda</p>
                    <p>Founda is a website that provides you SaaS for helping people to make their life easier</p>
                    <div className='lenguaje'>
                        <img src="/skills/html.svg" draggable='false' className='lenguajeimagen' />
                        <img src="/skills/css.svg" draggable='false' className='lenguajeimagen2' />
                        <img src="/skills/js.svg" draggable='false' className='lenguajeimagen2' />
                    </div>


                </div>

                <div className="proyecto">
                    <img src="/tisklastscreenshot.png" draggable='false' />
                    <p>Tisklast</p>
                    <p>Founda is a website that provides you SaaS for helping people to make their life easier</p>
                    <div className='lenguaje'>
                        <img src="/skills/html.svg" draggable='false' className='lenguajeimagen' />
                        <img src="/skills/css.svg" draggable='false' className='lenguajeimagen2' />
                        <img src="/skills/js.svg" draggable='false' className='lenguajeimagen2' />
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Projects;