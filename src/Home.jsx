import HomeTipSectionList from './HomeTipSectionList'
import HomeBonusSection from './HomeBonusSection'
import Footer from './Footer.jsx'
function Home()
{
    return(
        <div>
<div className="homePage">
<div className="img">
    <img src="./src/assets/homeImg.avif" alt="" />
</div>
<div className = "homeContent">
    <h1>Welcome to Techniques to Reduce Electricity Bill</h1>
    <h6>Save Energy, Save Money</h6>
    <p>Welcome to our comprehensive guide on how to reduce your electricity bill. Our goal is to provide you with the knowledge and tools you need to lower your energy consumption and save money. Explore our resources and take control of your energy usage today</p>
</div>
</div>
<HomeTipSectionList/>
<div>
    <HomeBonusSection/>
</div>
<div>
    <Footer/>
</div>
</div>
    )
}
export default Home