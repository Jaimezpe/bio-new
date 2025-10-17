import './Projects.css';

function Projects() {
    return (
        <div className='todoprojects' id='proyectos'>
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

                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4012851759330872" crossorigin="anonymous"></script>


                </div>

                <div className="proyecto">
                    <img src="/tisklastscreenshot.png" draggable='false' />
                    <p>TiskLast</p>
                    <p>TiskLast is a minimalistic task manager that helps you stay focused and organized, with a clean interface and a built-in notes box.</p>
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
