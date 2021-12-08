import React from 'react';
import './Player.css';

const Player = ({playerData}) => {
    return (
        playerData.map((data) => {
            return (
            <tr key={data.key}>
                <td className = 'club-name tb_text'>{data.name}</td>
                <td className = 'tb_text'>{data.pos}</td>
                <td className = 'tb_text'>{data.team}</td>
                <td className = 'tb_num'>{data.val}</td>
                <td className = 'tb_num'>{data.pts}</td>
                <td className = 'tb_num'>{data.min}</td>
                <td className = 'tb_num'>{data.gscored}</td>
                <td className = 'tb_num'>{data.assist}</td> 
                <td className = 'tb_num'>{data.penmiss}</td>
                <td className = 'tb_num'>{data.saves}</td>
                <td className = 'tb_num'>{data.gconcede}</td>
                <td className = 'tb_num'>{data.owngoal}</td>
                <td className = 'tb_num'>{data.yellow}</td>
            </tr>
            )
        })
    );
}

export default Player;