import HomeTipSection from "./HomeTipSection"
import Img1 from './assets/home-img-2.jpg'
import Img2 from './assets/home-img-1.jpg'
import Img3 from './assets/home-img-3.jpg'
import Img4 from './assets/home-img-4.jpg'
import Img5 from './assets/home-img-5.jpg'
function HomeTipSectionList()
{
    const container = [
        {
            image:Img1,
            title:"Switch to LED Bulbs: ",
            content:" LED bulbs are more energy-efficient and have a longer lifespan compared to conventional incandescent bulbs. They consume far less energy while providing the same level of brightness, making them a great choice for reducing electricity usage."
        },
        {
            image:Img2,
            title:"Unplug Devices: ",
            content:" Even when switched off, many devices still draw a small amount of power, known as phantom or standby power. To reduce unnecessary energy usage, unplug electronics, chargers, and appliances when they’re not in use. Alternatively, use power strips to easily disconnect multiple devices at once."
        },
        {
            image:Img3,
            title:"Seal Leaks: ",
            content:" Proper insulation is key to preventing drafts and air leaks that can cause energy loss. By sealing gaps and insulating your home effectively, you’ll help your heating and cooling systems run more efficiently, saving energy and reducing costs."
        },
        {
            image:Img4,
            title:"Cook Efficiently: ",
            content:" To conserve energy while cooking, use lids on pots to trap heat and cook with the appropriately sized cookware. For smaller meals, consider using a microwave or toaster oven, as they consume less energy than a conventional oven."
        },
        {
            image:Img5,
            title:"Maximize Daylight Usage: ",
            content:" Open your curtains and blinds during daylight hours to allow natural sunlight to brighten your space. This not only cuts down on the need for artificial lighting but also helps maintain a comfortable temperature by letting in some warmth during cooler seasons."
        }
    ]
    const result = container.map(val =>
    {
        return(
            <HomeTipSection
            image = {val.image}
            title = {val.title}
            content = {val.content}/>
        )
       
    }
    )
    return(
        <div>
             <div className="sectionTips m-5">
                <h1>Tips to Reduce Your Electricity Bill</h1>
            </div>
<div>
    {result}</div>
        </div>
        

    )

}
export default HomeTipSectionList