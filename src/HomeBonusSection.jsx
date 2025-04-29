import BonusImg from './assets/bonus-img.png'
function HomeBonusSection()
{
    return(
        <div>
           
            <div className="card1" style={{backgroundColor:"rgb(221, 224, 224)"}}>
            <div className="cardDetails  pt-5 ">
                <h1>Bonus Tips</h1>
            <ul>
                <li><p>Check the reading meter weekly once and use this Calculator for calculating a weekly payable amount it may be very useful to you know your eb bill without consulting others</p></li>
                <li><p>This Chart is clearly describe the units and its rate this helps you to reduce your eb bill. This chart aware you the usage of electricity. With the help of this chart you itself know the amount according to the units you consumed</p></li>
            </ul>
            </div>
            <div className="md-2"style={{marginLeft:"50px" ,margin:"20px"}}>
                <img src={BonusImg} alt="" height={"200px"}/>
            </div>
           </div>
           <div className="container1">
            <h1>Start Saving Today</h1>
            <p style={{ textAlign:"center"}}>Implement these strategies and make use of our tools to see a noticeable difference in your electricity bill. Every small change adds up to significant savings over time. Let's work together to make your home more energy-efficient and your bills more manageable.</p>
           </div>
        </div>
    );
}
export default HomeBonusSection