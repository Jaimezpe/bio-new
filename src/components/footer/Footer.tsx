import './Footer.css';

function Footer() {
    return (
        <div>
            <div className="divfooter">
                <div className="footerizq">
                    <h1>Jaime Ezpeleta</h1>
                    <h3>Software developer</h3>
                </div>
                <div className="footerder">
                    <a href="https://github.com/jaimezpe"><img src="/skills/github.svg" draggable="false" /></a>
                    <a href="https://x.com/jaimezpe_"><img src="/skills/x.svg" draggable="false" /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;