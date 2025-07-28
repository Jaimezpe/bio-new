import './NavBar.css';

function NavBar() {
  return (
    <div className="barra">
      <a href="https://jaimezpe.com" className='enlacenombrebarra'>
        <div className="barra-izquierda">
          <img src="/logo1.png" draggable="false" alt="Logo" />
          <p className="Nombrebarra">Jaime Ezpeleta</p>
        </div>
      </a>

      <div className="barra-derecha">
        {/* 
        <a href="https://jaimezpe.com/en">🇬🇧</a> 
        <p>|</p>
        */}
        <a href="#sobremi">About me</a>
        <a href="#conocimientos">Knowledge</a>
        <a href="#proyectos">Projects</a>
        <a href="#contacto">Contact</a>
      </div>
    </div>
  );
}

export default NavBar;
  