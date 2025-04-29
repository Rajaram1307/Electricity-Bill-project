import { useRef, useState } from "react"

function Calculatorcontent()
{

    const [energyConsumed,setEneryConsumed] = useState("");
    const [fixedCharges,setFixedCharges] = useState("");
    let refTotal = useRef(0);
    const[finalAmT,setFinalAmt] = useState(0);
let handlepower = (e)=>
{
    setEneryConsumed(e.target.value)
    
}
let handleFixedCharges = (e) =>
{
    setFixedCharges(e.target.value)
}
function calculateBill()
{
    const totalAmt = refTotal.current + Number(fixedCharges);
    setFinalAmt(totalAmt)
}
function calculateReading()
{
    let total = 0;
    const energy = Number(energyConsumed);
    if(energy <=100)
    {
        total = 0;
    }
    else if(energy >100 && energy <=200)
    {
        let balance = energy - 100;
        total= balance * 2.25;
    }
    else if(energy >200 && energy <=400)
    {
        let balance = energy - 100;
        total= balance * 4.5;
    }
    else{
        let balance = energy - 100;
        total= balance * 6;
    }
    refTotal.current = total;
    calculateBill();   
}
const handleClear = () => {
    setEnergyConsumed("");
    setFixedCharges("");
    setFinalAmt(0);
    refTotal.current = 0;
}
    return(
<div className="calculatorContainer">
    <h1>Electricity Bill Calculator</h1>
    <p>Use our interactive electricity bill calculator to get an accurate estimate of your monthly electricity costs. Simply input your usage details, and our calculator will do the rest. This tool helps you understand where your money is going and how you can start saving.</p>

    <div className="CalculatorReading">
    <h1>EB Calculator</h1>
    <input type="number" name="" value={energyConsumed} onChange={handlepower} id="" placeholder="Current Reading"/>
    <input type="number" name="" id="" value={fixedCharges} onChange={handleFixedCharges} placeholder="Fixed Charges" />
    <button onClick={calculateReading}>Calculate</button>
    <button onClick={handleClear} style={{backgroundColor:"white",color:"black"}}>Clear</button>
   <p id="result">Total Electricity Bill: ₹{finalAmT}</p>
    </div>
        <div>
            <h1>Guidelines</h1>
            <div style={{textAlign:"center"}}>
            <ul style={{display:"inline-block",textAlign:"left"}}>
                <li>Put last month's reading as the previous reading.</li>
                <li>Check the current reading on your meter and put it in the current reading.</li>
                <li>This will only calculate for home use.</li>
            </ul>
            </div>
            
        </div>
    </div>
    )
}
export default Calculatorcontent