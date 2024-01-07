import './secretStyle.css';

export default function Secret() {
    function nada() {
        let text = document.getElementById("será?");
        text.value = "";
    }
    return(
        <>
        <div className="container">
            <h1 className="header">HELLO FRIEND.</h1>
            <p className="content">Página destinada aos VIPs.</p>
        </div>
        <div id="secret">
            <input id="será?" type="password"/>
            <button onClick={nada}>Entrar</button>
        </div>
        </>
    )
}