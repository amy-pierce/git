import React from 'react';
import BarChart from './BarChart';

let x = [];
let i = '';


const LanguageList = (props) => {
    if (props.langslist) {
        return (
            <ul>
                {Object.entries(props.langslist).map(([key, value]) =>
                    <li key={key}>
                        {key} - {value}
                        {console.log(i=i+value)}
                   
                    </li>
                    
                )}
                <div className='App-header'>
                    <h2>d3ia dashboard</h2>
                </div>
                <div>
                    <BarChart data={[1,2,3]} size={[500, 500]} />
                </div>

            </ul>

        )
    } else { return null; }
};
export default LanguageList;