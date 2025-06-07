import './Header.css';

function Header() {
    return (
        <div className='headeralign'>
            <div className='headerizquierda'>
                <h3 className='saludo'>Hi there! I'm</h3>
                <h1 className='minombre'>Jaime Ezpeleta</h1>
                <h2 className='quesoy'>Frontend developer</h2>
                <div className='locationdiv'>
                    <h3>🌍 </h3>
                    <h3> Madrid,</h3>
                    <h3> Spain</h3>
                </div>

                <div className="headerskills">
                    <a href="https://react.dev"><img src="/react.svg" draggable='false' /></a>
                    <a href="https://www.w3schools.com/css/"><img src="/css.svg" draggable='false' /></a>
                    <a href="https://developer.mozilla.org/es/docs/Web/JavaScript"><img src="/javascript.svg" draggable='false' /></a>
                    <a href="https://discord.js.org/"><img src="/djs.svg" draggable='false' /></a>
                    <a href="https://www.typescriptlang.org/"><img src="/typescript.svg" draggable='false' /></a>
                    <a href="http://figma.com/"><img src="/figma.svg" draggable='false' /></a>
                    <a href="https://vite.dev/"><img src="/vite.svg" draggable='false' /></a>
                </div>

                <div className="headercontact">
                    <button
                        className='headerboton'
                        onClick={() => window.location.href = 'mailto:info@jaimezpe.com'} id='sobremi'>
                        Get in touch

                    </button>
                    <button
                        className='headerboton'
                        onClick={() => window.location.href = 'https://calendly.com/jaimezpe-info/30min'}>
                        🗓️

                    </button>
                    
                </div>

            </div>


            <div className='headerderecha'>
                <img src='/ey.png' draggable="false" alt="Logo" />
                <button className="animated-button">Disponible para trabajar</button>
            </div>
        </div>
    );
}

export default Header;
