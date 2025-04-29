import Logo from "./assets/logo.png"
function Footer()
{
    return(
  <div>
    <div className="footerContainer" style={{height:"300px",backgroundColor:"rgb(221, 224, 224)"}}>
        <img src={Logo} alt="" height={"100px"} width={"100px"} />
        <h4 style={{marginLeft:"730px"}}>contact as</h4>
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/rajaram08/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-linkedin"></i>
    </a>
    <a href="https://mail.google.com/mail" target="_blank" rel="noopener noreferrer">
    <i className="bi bi-envelope"></i>
    </a>
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-instagram" ></i>
        </div>
        
    </div>
    <p style={{textAlign:"center"}}> <b>Copyright 2024. All rights reserved.</b> </p>
  </div>
    )
}
export default Footer