import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const positionsList = [
    {id: 1, assetName: "Apple", price: 108.22, sharesHeld: 100},
    {id: 2, assetName: "Tesla", price: 398.79, sharesHeld: 10}
]

function StockPortfolioGrid({gridTitle,positions}) {
    console.log(gridTitle);
    console.log(positions);
    return (
        //TODO Add Table Formatting to Stock Portfolio Grid
        <div className="StockPortfolioGrid">
            <h2>{gridTitle}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Shares Held</th>
                        <th>Market Value</th>
                    </tr>
                </thead>
                <tbody>
                    {positions.map(position => (
                        <tr>
                            <td>{position.assetName}</td>
                            <td>{position.price}</td>
                            <td>{position.sharesHeld}</td>
                            <td>calculation here</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(
    <StockPortfolioGrid gridTitle={"Jim's Stock Portfolio"} positions={positionsList} />,
    document.getElementById('root')
);

