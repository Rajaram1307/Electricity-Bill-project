import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Nav()
{
    let navigate = useNavigate();
    return(
        <div>
    <div className="nav d-flex flex-row">
    <div className ="logo">
        <img src="./src/assets/logo.png" alt="" />
    </div>
    <div className="NavBar">
        <p onClick={() =>{navigate("/")}}>Home</p>
        <p onClick={() =>{navigate("/Calculator")}}>Calculator</p>
        <p onClick={() =>{navigate("/Tablepage")}}>table</p>
        
    </div>

        </div>
        <hr />
        </div>
        );

}
export default Nav