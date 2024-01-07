import { Link } from "react-router-dom";
import "./barstyle.css"
export default function bar() {
    return(
        <>
        <div className="bar">
            <ul>
                {/* <li><a>Teste</a></li>
                <li><a href="/">Dev</a></li>
                <li><a href="/secret">Secret</a></li> */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="secret">Secret</Link></li>
            </ul>
        </div>
        </>
    )
}