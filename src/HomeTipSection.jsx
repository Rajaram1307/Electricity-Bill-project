
function HomeTipSection(props)
{
    return(
       props.content && <div>
           <div className="card1">
            <div className="md-2 "style={{marginLeft:"50px" ,margin:"20px"}}>
                <img src={props.image} alt="" height={"200px"}/>
            </div>
            <div className="cardDetails md-8 pt-5 ">
                <p> <b>{props.title}</b>{props.content}</p>
            </div>
           </div>
        </div>
    )
}
export default HomeTipSection