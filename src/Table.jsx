function Table()
{
    return(
        <>
        <div className="tablecontainer">
            <h1>Electricity Unit Per Rate Table</h1>
            <p>Our detailed electricity unit per rate table breaks down the cost per unit of electricity. This table is a valuable resource to see how much you’re paying for each unit and identify opportunities for savings.</p>
        </div>
        <div>
            <table>
                <tr>
                    <th>Consumption up to 500 units</th>
                </tr>
                <tr>
                    <th>Units</th>
                    <th>Cost</th>
                </tr>
                <tr>
                    <td>0-100</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>101-200</td>
                    <td>2.25</td>
                </tr>
                <tr>
                    <td>201-400</td>
                    <td>4.5</td>
                </tr>
                <tr>
                    <td>401-500</td>
                    <td>6</td>
                </tr>
            </table>
        </div>

        <div>
            <table>
                <tr>
                    <th>Consumption above 500 units</th>
                </tr>
                <tr>
                    <th>Units</th>
                    <th>Cost</th>
                </tr>
                <tr>
                    <td>0-100</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>101-400</td>
                    <td>4.5</td>
                </tr>
                <tr>
                    <td>401-500</td>
                    <td>6.00</td>
                </tr>
                <tr>
                    <td>501-600</td>
                    <td>8.00</td>
                </tr>
                <tr>
                    <td>601-800</td>
                    <td>9.00</td>
                </tr>
                <tr>
                    <td>801-1000</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Above 1000 units</td>
                    <td>11</td>
                </tr>
            </table>
        </div>
        </>
    )
}
export default Table