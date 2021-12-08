import React from 'react';
import Player from '../Player/Player';
import Scroll from '../Scroll/Scroll';

import './PlayerList.css';

let mapPos = (data) => {
    if (data === 1) {
        return "GKP";
    } else if (data === 2) {
        return "DEF"
    } else if (data === 3) {
        return "MID"
    } else {
        return "FWD"
    }
}

let mapTeam = (data) => {
    //switch case to associate team
    switch(data) {
        case 1:
            return "ARS";
        case 2:
            return "AVL";
        case 3:
            return "BHA";
        case 4:
            return "BUR";
        case 5:
            return "CHE";
        case 6:
            return "CRY";
        case 7:
            return "EVE";
        case 8:
            return "FUL";
        case 9:
            return "LEI";
        case 10:
            return "LEE";
        case 11:
            return "LIV";
        case 12:
            return "MCI";
        case 13:
            return "MUN";
        case 14:
            return "NEW";
        case 15:
            return "SHU";
        case 16:
            return "SOU";
        case 17:
            return "TOT";
        case 18:
            return "WBA";
        case 19:
            return "WHU";
        case 20:
            return "WOL";
    }
}

function pointSort(a, b){
    // a should come before b in the sorted order
    if(a.pts < b.pts){
        return 1;
    // a should come after b in the sorted order
    }else if(a.pts > b.pts){
        return -1;
    // a and b are the same
    }else{
        return 0;
    }
}

// function to sort the table/object - the only way for this to work is to pass sort field
// when clubTable is created => there has to be a separate button for sorting to make this work
// we have to retun a sorted table object for render    
function gsSort(a, b){
    // a should come before b in the sorted order
    if(a.gscored < b.gscored){
        return 1;
    // a should come after b in the sorted order
    }else if(a.gscored > b.gscored){
        return -1;
    // a and b are the same
    }else{
        return 0;
    }
}

// function to sort the table/object - the only way for this to work is to pass sort field
// when clubTable is created => there has to be a separate button for sorting to make this work
// we have to retun a sorted table object for render    
function aSort(a, b){
    // a should come before b in the sorted order
    if(a.assist < b.assist){
        return 1;
    // a should come after b in the sorted order
    }else if(a.assist > b.assist){
        return -1;
    // a and b are the same
    }else{
        return 0;
    }
}

// function to sort the table/object - the only way for this to work is to pass sort field
// when clubTable is created => there has to be a separate button for sorting to make this work
// we have to retun a sorted table object for render    
function saveSort(a, b){
    // a should come before b in the sorted order
    if(a.saves < b.saves){
        return 1;
    // a should come after b in the sorted order
    }else if(a.saves > b.saves){
        return -1;
    // a and b are the same
    }else{
        return 0;
    }
}

//Data renderer
let computeTable = (playerData, sortPointData, sortGSData, sortAData, sortSavesData) => {
    //map around the player data and compute rest of stuff
    //Points','Min','GS','A','Pen Missed','Saves','GC','OG','Yellow Cards', 'Pen order'
    if (sortPointData === true) {
        let tempTable = playerData.map((data, index) => {
            let name = data.web_name
            let position = mapPos(data.element_type)
            let pTeam = mapTeam(data.team)
            let value = data.now_cost/10        
            let points = data.total_points
            let minutes = data.minutes
            let gs = data.goals_scored
            let assist = data.assists
            let pMiss = data.penalties_missed
            let saves = data.saves
            let gc = data.goals_conceded
            let og = data.own_goals
            let yc = data.yellow_cards       
            let ptsgame = (data.total_points/38).toFixed(2)
            let gsgame = (data.goals_scored/38).toFixed(2)
            let agame = (data.assists/38).toFixed(2)
            let gsaratio = ((data.goals_scored+data.assists)/38).toFixed(2)
    
            console.log(sortPointData);
    
            return {
                key: index,
                name: name,
                pos: position,
                team: pTeam,
                val: value,
                pts: points,
                min: minutes,
                gscored: gs,
                assist: assist,
                penmiss: pMiss,
                saves: saves,
                gconcede: gc,
                owngoal: og,
                yellow: yc,
                ptpergame: ptsgame,
                gspergame: gsgame,
                apergame: agame,
                gstoassist: gsaratio
            }
        })
        return tempTable.sort(pointSort)
    } else if (sortGSData === true) {
        let tempTable = playerData.map((data, index) => {
            let name = data.web_name
            let position = mapPos(data.element_type)
            let pTeam = mapTeam(data.team)
            let value = data.now_cost/10        
            let points = data.total_points
            let minutes = data.minutes
            let gs = data.goals_scored
            let assist = data.assists
            let pMiss = data.penalties_missed
            let saves = data.saves
            let gc = data.goals_conceded
            let og = data.own_goals
            let yc = data.yellow_cards       
            let ptsgame = (data.total_points/38).toFixed(2)
            let gsgame = (data.goals_scored/38).toFixed(2)
            let agame = (data.assists/38).toFixed(2)
            let gsaratio = ((data.goals_scored+data.assists)/38).toFixed(2)
    
            console.log(sortGSData);
    
            return {
                key: index,
                name: name,
                pos: position,
                team: pTeam,
                val: value,
                pts: points,
                min: minutes,
                gscored: gs,
                assist: assist,
                penmiss: pMiss,
                saves: saves,
                gconcede: gc,
                owngoal: og,
                yellow: yc,
                ptpergame: ptsgame,
                gspergame: gsgame,
                apergame: agame,
                gstoassist: gsaratio
            }
        })
        return tempTable.sort(gsSort)
    } else if (sortAData === true) {
        let tempTable = playerData.map((data, index) => {
            let name = data.web_name
            let position = mapPos(data.element_type)
            let pTeam = mapTeam(data.team)
            let value = data.now_cost/10        
            let points = data.total_points
            let minutes = data.minutes
            let gs = data.goals_scored
            let assist = data.assists
            let pMiss = data.penalties_missed
            let saves = data.saves
            let gc = data.goals_conceded
            let og = data.own_goals
            let yc = data.yellow_cards       
            let ptsgame = (data.total_points/38).toFixed(2)
            let gsgame = (data.goals_scored/38).toFixed(2)
            let agame = (data.assists/38).toFixed(2)
            let gsaratio = ((data.goals_scored+data.assists)/38).toFixed(2)
    
            console.log(sortAData);
    
            return {
                key: index,
                name: name,
                pos: position,
                team: pTeam,
                val: value,
                pts: points,
                min: minutes,
                gscored: gs,
                assist: assist,
                penmiss: pMiss,
                saves: saves,
                gconcede: gc,
                owngoal: og,
                yellow: yc,
                ptpergame: ptsgame,
                gspergame: gsgame,
                apergame: agame,
                gstoassist: gsaratio
            }
        })
        return tempTable.sort(aSort)
    } else if (sortSavesData === true) {
        let tempTable = playerData.map((data, index) => {
            let name = data.web_name
            let position = mapPos(data.element_type)
            let pTeam = mapTeam(data.team)
            let value = data.now_cost/10        
            let points = data.total_points
            let minutes = data.minutes
            let gs = data.goals_scored
            let assist = data.assists
            let pMiss = data.penalties_missed
            let saves = data.saves
            let gc = data.goals_conceded
            let og = data.own_goals
            let yc = data.yellow_cards       
            let ptsgame = (data.total_points/38).toFixed(2)
            let gsgame = (data.goals_scored/38).toFixed(2)
            let agame = (data.assists/38).toFixed(2)
            let gsaratio = ((data.goals_scored+data.assists)/38).toFixed(2)
    
            console.log(sortSavesData);
    
            return {
                key: index,
                name: name,
                pos: position,
                team: pTeam,
                val: value,
                pts: points,
                min: minutes,
                gscored: gs,
                assist: assist,
                penmiss: pMiss,
                saves: saves,
                gconcede: gc,
                owngoal: og,
                yellow: yc,
                ptpergame: ptsgame,
                gspergame: gsgame,
                apergame: agame,
                gstoassist: gsaratio
            }
        })
        return tempTable.sort(saveSort)
    } else {
        return playerData.map((data, index) => {
            let name = data.web_name
            let position = mapPos(data.element_type)
            let pTeam = mapTeam(data.team)
            let value = data.now_cost/10        
            let points = data.total_points
            let minutes = data.minutes
            let gs = data.goals_scored
            let assist = data.assists
            let pMiss = data.penalties_missed
            let saves = data.saves
            let gc = data.goals_conceded
            let og = data.own_goals
            let yc = data.yellow_cards       
            let ptsgame = (data.total_points/38).toFixed(2)
            let gsgame = (data.goals_scored/38).toFixed(2)
            let agame = (data.assists/38).toFixed(2)
            let gsaratio = ((data.goals_scored+data.assists)/38).toFixed(2)
    
            console.log(sortPointData);
    
            return {
                key: index,
                name: name,
                pos: position,
                team: pTeam,
                val: value,
                pts: points,
                min: minutes,
                gscored: gs,
                assist: assist,
                penmiss: pMiss,
                saves: saves,
                gconcede: gc,
                owngoal: og,
                yellow: yc,
                ptpergame: ptsgame,
                gspergame: gsgame,
                apergame: agame,
                gstoassist: gsaratio
            }
        })
    }
}

let computeStat = (playerTable) => {
    let playerPts = playerTable.map((data) => {
        data.ptpergame = Number(data.ptpergame) || 0
        // data.ptpermin = (Number(data.ptpermin) === 1) ? 0 : data.ptpermin
        return Number(data.ptpergame)
    })

    let playerG = playerTable.map((data) => {
        data.gspergame = Number(data.gspergame) || 0
        // data.gspermin = (Number(data.gspermin) === 1) ? 0 : data.gspermin
        return Number(data.gspergame)
    })

    let playerA = playerTable.map((data) => {
        data.apergame = Number(data.apergame) || 0
        // data.apermin = (Number(data.apermin) === 1) ? 0 : data.apermin
        return Number(data.apergame)
    })

    let playerO = playerTable.map((data) => {
        data.gstoassist = Number(data.gstoassist) || 0
        data.gstoassist = isFinite(Number(data.gstoassist)) ? Number(data.gstoassist) : 0;
        // data.gstoassist = (Number(data.gstoassist) === 1) ? 0 : data.gstoassist
        return Number(data.gstoassist)
    })

    // get the index of all the min ratios
    let indexPP = playerPts.indexOf(Math.max(...playerPts));
    let indexPG = playerG.indexOf(Math.max(...playerG));
    let indexPA = playerA.indexOf(Math.max(...playerA));
    let indexPO = playerO.indexOf(Math.max(...playerO));

    // get players corresponding to the indices
    let PP = playerTable[indexPP].name;
    let PG = playerTable[indexPG].name;
    let PA = playerTable[indexPA].name;
    let PO = playerTable[indexPO].name;
    
    return {
        maxPP: Math.max(...playerPts), // note that Math.min works with arrays by ... destructuring
        playerPP: PP,
        maxPG: Math.max(...playerG),
        playerPG: PG,
        maxPA: Math.max(...playerA),
        playerPA: PA, 
        maxPO: Math.max(...playerO),
        playerPO: PO
    }
} 

//sort elements would vary, to add separate sorts
//to add view filter by roles to render seperate table, appjs to use role state
const PlayerList = ({players, sortPts, sortGS, sortA, sortSaves, route}) => {
    
    //Create the table as an object to be passed to Card Component
    let playerTable = computeTable(players, sortPts, sortGS, sortA, sortSaves)
    // console.log(playerTable)
    const playertbHead = ['Name','Pos','Team','Val','Points','Min','GS','A','Pen Missed','Saves','GC','OG','Yellow Cards']
    
    //The array stores name of the analysis perspective to understand team and player impact
    let playerStat = computeStat(playerTable)
    console.log(playerStat)

    //Rendering the Player table
    return (
        <div className = 'fpl_playerInfo'>
            <div className = 'fpl_playerReport'>
                <div className = 'fpl_playerAtt'>
                    <span><p>{playerStat.playerPP}</p><p>{playerStat.maxPP}</p></span>
                    <span><p>{playerStat.playerPG}</p><p>{playerStat.maxPG}</p></span>
                </div>
                <div className = 'fpl_playerAtt2'>
                    <span><p>{playerStat.playerPA}</p><p>{playerStat.maxPA}</p></span>
                    <span><p>{playerStat.playerPO}</p><p>{playerStat.maxPO}</p></span>
                </div>
            </div>
        <Scroll route = {route}>
            <table>
                <thead>
                    <tr>
                        <th className = 'tb_text'>{playertbHead[0]}</th>
                        <th className = 'tb_text'>{playertbHead[1]}</th>
                        <th className = 'tb_text'>{playertbHead[2]}</th>
                        <th className = 'tb_num'>{playertbHead[3]}</th>
                        <th className = 'tb_num'>{playertbHead[4]}</th>
                        <th className = 'tb_num'>{playertbHead[5]}</th>
                        <th className = 'tb_num'>{playertbHead[6]}</th>
                        <th className = 'tb_num'>{playertbHead[7]}</th>
                        <th className = 'tb_num'>{playertbHead[8]}</th>
                        <th className = 'tb_num'>{playertbHead[9]}</th>
                        <th className = 'tb_num'>{playertbHead[10]}</th>
                        <th className = 'tb_num'>{playertbHead[11]}</th>
                        <th className = 'tb_num'>{playertbHead[12]}</th>
                    </tr>
                </thead>
                <tbody>  
                    <Player playerData = {playerTable} />
                </tbody>
            </table>
        </Scroll>
        </div>
    )
}

export default PlayerList;