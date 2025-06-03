import './Header.css';

function Header() {
    return (
        <div className='headeralign'>
            <div className='headerizquierda'>
                <h3 className='saludo'>Hi there! I'm</h3>
                <h1 className='minombre'>Jaime Ezpeleta</h1>
                <h2 className='quesoy'>Software developer</h2>
                <div className="headerskills">
                    <img src="/react.svg" draggable='false' />
                    <img src="/css.svg" draggable='false' />
                    <img src="/javascript.svg" draggable='false' />
                    <img src="/djs.svg" draggable='false' />
                    <img src="/typescript.svg" draggable='false' />
                    <img src="/figma.svg" draggable='false' />
                    <img src="/vite.svg" draggable='false' />
                </div>
                <button
                    className='headerboton'
                    onClick={() => window.location.href = 'mailto:info@jaimezpe.com'}
                >
                    Get a book
                </button>
            </div>


            <div className='headerderecha'>
                <img src='/headerderecha.png' draggable="false" alt="Logo" />
            </div>
        </div>
    );
}

export default Header;
