import React from 'react';
import './Club.css';

const Club = ({clubData}) => {
    return (
        clubData.map((data) => {
            return (
            <tr key={data.key}>
                <td className = 'club-name tb_text'>{data.name}</td>
                <td className = 'tb_text'>{data.short}</td>
                <td className = 'tb_num'>{data.points}</td>
                <td className = 'tb_num'>{data.fdr}</td>
                <td className = 'tb_num'>{data.attack}</td>
                <td className = 'tb_num'>{data.gscored}</td>
                <td className = 'tb_num'>{data.assist}</td> 
                <td className = 'tb_num'>{data.defence}</td>
                <td className = 'tb_num'>{data.saves}</td>
                <td className = 'tb_num'>{data.cleansht}</td>
                <td className = 'tb_num'>{data.gconcede}</td>
                <td className = 'tb_num'>{data.yellow}</td>
                <td className = 'tb_num'>{data.csPercentage}</td>
                <td className = 'tb_num'>{data.gcPercentage}</td>
                <td className = 'tb_num'>{data.savePercentage}</td>
                <td className = 'tb_num'>{data.attgR}</td>
            </tr>
            )
        })
    );
}

export default Club;