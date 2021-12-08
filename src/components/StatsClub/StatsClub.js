import React from 'react'; 
import Scroll from '../Scroll/Scroll';


const StatsClub = ({statData}) => {
    return (
        statData.map((data) => {
            return (
            <tr key={data.key}>
                <td className = 'club-name tb_text'>{data.name}</td>
                <td className = 'tb_text'>{data.csPercentage}</td>
            </tr>
            )
        })
    );
}


export default StatsClub;