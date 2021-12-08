import React from 'react';
import Club from '../Club/Club';
import StatsClub from '../StatsClub/StatsClub';
import Scroll from '../Scroll/Scroll';

import './ClubList.css';

//function to return total goals scored by players from a club
let computeGoals = (teamid, data) => {
    let sumGoal = 0
    let cList = data.filter(item => {
            return item.team === teamid;
        })
    for(let j=0;j<cList.length;j++) {
        sumGoal = sumGoal + cList[j].goals_scored;
    }
    return sumGoal;
}

//function to return total assists given by players from a club
let computeAssists = (teamid, data) => {
    let sumAssist = 0
    let cList = data.filter(item => {
            return item.team === teamid;
        })
    for(let j=0;j<cList.length;j++) {
        sumAssist = sumAssist + cList[j].assists;
    }
    return sumAssist;
}

//function to return total points earned by players from a club
let computePoints = (teamid, data) => {
    let sumPoints = 0
    let cList = data.filter(item => {
            return item.team === teamid;
        })
    for(let j=0;j<cList.length;j++) {
        sumPoints = sumPoints + cList[j].total_points;
    }
    return sumPoints;
}

//function to return total saves by players(gk) from a club
let computeSaves = (teamid, data) => {
    let sumSaves = 0
    let cList = data.filter(item => {
            return (item.team === teamid && item.element_type === 1);
        })
    for(let j=0;j<cList.length;j++) {
        sumSaves = sumSaves + cList[j].saves;
    }
    return sumSaves;
}

//function to return total clean sheets by players(gk) from a club
let computeCSheet = (teamid, data) => {
    let sumCSheet = 0
    let cList = data.filter(item => {
            return (item.team === teamid && item.element_type === 1);
        })
    for(let j=0;j<cList.length;j++) {
        sumCSheet = sumCSheet + cList[j].clean_sheets;
    }
    return sumCSheet;
}

// function to return total clean sheets by players(gk) from a club in percentage
// count of CS/38 * 100
let computeCSP = (teamid, data) => {
    let sumCSheet = 0
    let cList = data.filter(item => {
            return (item.team === teamid && item.element_type === 1);
        })
    for(let j=0;j<cList.length;j++) {
        sumCSheet = sumCSheet + cList[j].clean_sheets;
    }
    return Math.round((sumCSheet/38)*100);
}

// function to return total goals conceded by players(gk) from a club
let computeGC = (teamid, data) => {
    let sumGC = 0
    let cList = data.filter(item => {
            return (item.team === teamid && item.element_type === 1);
        })
    for(let j=0;j<cList.length;j++) {
        sumGC = sumGC + cList[j].goals_conceded;
    }
    return sumGC;
}

// function to return total goals conceded by players(gk) from a club in percentage
// count of GC/sum of GC + Saves * 100
let computeGCP = (teamid, data) => {
    let sumGC = 0
    let sumSaves = 0
    let cList = data.filter(item => {
            return (item.team === teamid && item.element_type === 1);
        })
    for(let j=0;j<cList.length;j++) {
        sumGC = sumGC + cList[j].goals_conceded;
        sumSaves = sumSaves + cList[j].saves;
    }
    return Math.round((sumGC/(sumGC + sumSaves))*100);
}

// function to return total saves by players(gk) from a club in percentage
// 100% - percentage GC
let computeSavP = (teamid, data) => {
    let sumGC = 0
    let sumSaves = 0
    let cList = data.filter(item => {
            return (item.team === teamid && item.element_type === 1);
        })
    for(let j=0;j<cList.length;j++) {
        sumGC = sumGC + cList[j].goals_conceded;
        sumSaves = sumSaves + cList[j].saves;
    }
    return (100 - Math.round((sumGC/(sumGC + sumSaves))*100));
}

// function to return total yellowcards conceded by players from a club
let computeYelo = (teamid, data) => {
    let sumYellow = 0
    let cList = data.filter(item => {
        return (item.team === teamid);
    })
    for(let j=0;j<cList.length;j++) {
        sumYellow = sumYellow + cList[j].yellow_cards;
    }
    return sumYellow
}

// function to sort the table/object - the only way for this to work is to pass sort field
// when clubTable is created => there has to be a separate button for sorting to make this work
// we have to retun a sorted table object for render    
function pointSort(a, b){
    // a should come before b in the sorted order
    if(a.points < b.points){
        return 1;
    // a should come after b in the sorted order
    }else if(a.points > b.points){
        return -1;
    // a and b are the same
    }else{
        return 0;
    }
}

// function to sort the table/object - the only way for this to work is to pass sort field
// when clubTable is created => there has to be a separate button for sorting to make this work
// we have to retun a sorted table object for render    
function csSort(a, b){
    // a should come before b in the sorted order
    if(a.csPercentage < b.csPercentage){
        return 1;
    // a should come after b in the sorted order
    }else if(a.csPercentage > b.csPercentage){
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
    if(a.savePercentage < b.savePercentage){
        return 1;
    // a should come after b in the sorted order
    }else if(a.savePercentage > b.savePercentage){
        return -1;
    // a and b are the same
    }else{
        return 0;
    }
}

// function to sort the table/object - the only way for this to work is to pass sort field
// when clubTable is created => there has to be a separate button for sorting to make this work
// we have to retun a sorted table object for render    
function attRSort(a, b){
    // a should come before b in the sorted order
    if(a.attgR > b.attgR){
        return 1;
    // a should come after b in the sorted order
    }else if(a.attgR < b.attgR){
        return -1;
    // a and b are the same
    }else{
        return 0;
    }
}

//Compute and store club table data into an object
//sortCS, sortSave, sortAttR
let computeTable = (clubData, playerData, sortPointData, sortCSData, sortSaveData, sortAttRData) => {
    //map around the club data and compute rest of stuff
    if (sortPointData === true) {
        let tempTable = clubData.map((data, index) => {
            let ovrGoal = computeGoals(data.id, playerData)
            let ovrAssist = computeAssists(data.id, playerData)
            let ovrPoint = computePoints(data.id, playerData)
            let ovrSaves = computeSaves(data.id, playerData)
            let ovrCleanSheets = computeCSheet(data.id, playerData)
            let ovrGC = computeGC(data.id, playerData)
            let numYellow = computeYelo(data.id, playerData)
            let percentCS = computeCSP(data.id, playerData)
            let percentGC = computeGCP(data.id, playerData)
            let percentSav = computeSavP(data.id, playerData)
            let agr = (((data.strength_attack_home+data.strength_attack_away)/2)/ovrGoal).toFixed(2)
            let aar = (((data.strength_attack_home+data.strength_attack_away)/2)/ovrAssist).toFixed(2)
            let dcr = (((data.strength_defence_home+data.strength_defence_away)/2)/ovrCleanSheets).toFixed(2)
            let dsr = (((data.strength_defence_home+data.strength_defence_away)/2)/ovrSaves).toFixed(2)
    
            return {
                key: index,
                name: data.name,
                short: data.short_name,
                fdr: data.strength,
                attack: Math.ceil((data.strength_attack_home+data.strength_attack_away)/2),
                defence: Math.ceil((data.strength_defence_home+data.strength_defence_away)/2),
                gscored: ovrGoal,
                assist: ovrAssist,
                points: ovrPoint,
                saves: ovrSaves,
                cleansht: ovrCleanSheets,
                gconcede: ovrGC,
                yellow: numYellow,
                csPercentage: percentCS,
                gcPercentage: percentGC,
                savePercentage: percentSav,
                attgR: agr,
                attaR: aar,
                defcR: dcr,
                defsR: dsr
            }
        })
        return tempTable.sort(pointSort)
    } else if (sortCSData === true) {
        let tempTable = clubData.map((data, index) => {
            let ovrGoal = computeGoals(data.id, playerData)
            let ovrAssist = computeAssists(data.id, playerData)
            let ovrPoint = computePoints(data.id, playerData)
            let ovrSaves = computeSaves(data.id, playerData)
            let ovrCleanSheets = computeCSheet(data.id, playerData)
            let ovrGC = computeGC(data.id, playerData)
            let numYellow = computeYelo(data.id, playerData)
            let percentCS = computeCSP(data.id, playerData)
            let percentGC = computeGCP(data.id, playerData)
            let percentSav = computeSavP(data.id, playerData)
            let agr = (((data.strength_attack_home+data.strength_attack_away)/2)/ovrGoal).toFixed(2)
            let aar = (((data.strength_attack_home+data.strength_attack_away)/2)/ovrAssist).toFixed(2)
            let dcr = (((data.strength_defence_home+data.strength_defence_away)/2)/ovrCleanSheets).toFixed(2)
            let dsr = (((data.strength_defence_home+data.strength_defence_away)/2)/ovrSaves).toFixed(2)
    
            return {
                key: index,
                name: data.name,
                short: data.short_name,
                fdr: data.strength,
                attack: Math.ceil((data.strength_attack_home+data.strength_attack_away)/2),
                defence: Math.ceil((data.strength_defence_home+data.strength_defence_away)/2),
                gscored: ovrGoal,
                assist: ovrAssist,
                points: ovrPoint,
                saves: ovrSaves,
                cleansht: ovrCleanSheets,
                gconcede: ovrGC,
                yellow: numYellow,
                csPercentage: percentCS,
                gcPercentage: percentGC,
                savePercentage: percentSav,
                attgR: agr,
                attaR: aar,
                defcR: dcr,
                defsR: dsr
            }
        })
        return tempTable.sort(csSort)
    } else if (sortSaveData === true) {
        let tempTable = clubData.map((data, index) => {
            let ovrGoal = computeGoals(data.id, playerData)
            let ovrAssist = computeAssists(data.id, playerData)
            let ovrPoint = computePoints(data.id, playerData)
            let ovrSaves = computeSaves(data.id, playerData)
            let ovrCleanSheets = computeCSheet(data.id, playerData)
            let ovrGC = computeGC(data.id, playerData)
            let numYellow = computeYelo(data.id, playerData)
            let percentCS = computeCSP(data.id, playerData)
            let percentGC = computeGCP(data.id, playerData)
            let percentSav = computeSavP(data.id, playerData)
            let agr = (((data.strength_attack_home+data.strength_attack_away)/2)/ovrGoal).toFixed(2)
            let aar = (((data.strength_attack_home+data.strength_attack_away)/2)/ovrAssist).toFixed(2)
            let dcr = (((data.strength_defence_home+data.strength_defence_away)/2)/ovrCleanSheets).toFixed(2)
            let dsr = (((data.strength_defence_home+data.strength_defence_away)/2)/ovrSaves).toFixed(2)
    
            return {
                key: index,
                name: data.name,
                short: data.short_name,
                fdr: data.strength,
                attack: Math.ceil((data.strength_attack_home+data.strength_attack_away)/2),
                defence: Math.ceil((data.strength_defence_home+data.strength_defence_away)/2),
                gscored: ovrGoal,
                assist: ovrAssist,
                points: ovrPoint,
                saves: ovrSaves,
                cleansht: ovrCleanSheets,
                gconcede: ovrGC,
                yellow: numYellow,
                csPercentage: percentCS,
                gcPercentage: percentGC,
                savePercentage: percentSav,
                attgR: agr,
                attaR: aar,
                defcR: dcr,
                defsR: dsr
            }
        })
        return tempTable.sort(saveSort)
    } else if (sortAttRData === true) {
        let tempTable = clubData.map((data, index) => {
            let ovrGoal = computeGoals(data.id, playerData)
            let ovrAssist = computeAssists(data.id, playerData)
            let ovrPoint = computePoints(data.id, playerData)
            let ovrSaves = computeSaves(data.id, playerData)
            let ovrCleanSheets = computeCSheet(data.id, playerData)
            let ovrGC = computeGC(data.id, playerData)
            let numYellow = computeYelo(data.id, playerData)
            let percentCS = computeCSP(data.id, playerData)
            let percentGC = computeGCP(data.id, playerData)
            let percentSav = computeSavP(data.id, playerData)
            let agr = (((data.strength_attack_home+data.strength_attack_away)/2)/ovrGoal).toFixed(2)
            let aar = (((data.strength_attack_home+data.strength_attack_away)/2)/ovrAssist).toFixed(2)
            let dcr = (((data.strength_defence_home+data.strength_defence_away)/2)/ovrCleanSheets).toFixed(2)
            let dsr = (((data.strength_defence_home+data.strength_defence_away)/2)/ovrSaves).toFixed(2)
    
            return {
                key: index,
                name: data.name,
                short: data.short_name,
                fdr: data.strength,
                attack: Math.ceil((data.strength_attack_home+data.strength_attack_away)/2),
                defence: Math.ceil((data.strength_defence_home+data.strength_defence_away)/2),
                gscored: ovrGoal,
                assist: ovrAssist,
                points: ovrPoint,
                saves: ovrSaves,
                cleansht: ovrCleanSheets,
                gconcede: ovrGC,
                yellow: numYellow,
                csPercentage: percentCS,
                gcPercentage: percentGC,
                savePercentage: percentSav,
                attgR: agr,
                attaR: aar,
                defcR: dcr,
                defsR: dsr
            }
        })
        return tempTable.sort(attRSort)
    } else {
        return clubData.map((data, index) => {
            let ovrGoal = computeGoals(data.id, playerData)
            let ovrAssist = computeAssists(data.id, playerData)
            let ovrPoint = computePoints(data.id, playerData)
            let ovrSaves = computeSaves(data.id, playerData)
            let ovrCleanSheets = computeCSheet(data.id, playerData)
            let ovrGC = computeGC(data.id, playerData)
            let numYellow = computeYelo(data.id, playerData)
            let percentCS = computeCSP(data.id, playerData)
            let percentGC = computeGCP(data.id, playerData)
            let percentSav = computeSavP(data.id, playerData)
            let agr = (((data.strength_attack_home+data.strength_attack_away)/2)/ovrGoal).toFixed(2)
            let aar = (((data.strength_attack_home+data.strength_attack_away)/2)/ovrAssist).toFixed(2)
            let dcr = (((data.strength_defence_home+data.strength_defence_away)/2)/ovrCleanSheets).toFixed(2)
            let dsr = (((data.strength_defence_home+data.strength_defence_away)/2)/ovrSaves).toFixed(2)

            return {
                key: index,
                name: data.name,
                short: data.short_name,
                fdr: data.strength,
                attack: Math.ceil((data.strength_attack_home+data.strength_attack_away)/2),
                defence: Math.ceil((data.strength_defence_home+data.strength_defence_away)/2),
                gscored: ovrGoal,
                assist: ovrAssist,
                points: ovrPoint,
                saves: ovrSaves,
                cleansht: ovrCleanSheets,
                gconcede: ovrGC,
                yellow: numYellow,
                csPercentage: percentCS,
                gcPercentage: percentGC,
                savePercentage: percentSav,
                attgR: agr,
                attaR: aar,
                defcR: dcr,
                defsR: dsr
            }
        })
    }
}

//Computing min and max values for specific columns - for report card
let computeStat = (clubTable) => {
    // get array of attack goal ratio
    let attackG = clubTable.map((data) => {
        return Number(data.attgR);
    })
    
    // get array of attack assist ratio
    let attackA = clubTable.map((data) => {
        return Number(data.attaR)
    })

    // get array of defence cs ratio
    let defenceC = clubTable.map((data) => {
        return Number(data.defcR)
    })

    // get array of defence save ratio
    let defenceS = clubTable.map((data) => {
        return Number(data.defsR)
    })

    // get the index of all the min ratios
    let indexAAR = attackA.indexOf(Math.min(...attackA));
    let indexAGR = attackG.indexOf(Math.min(...attackG));
    let indexDSR = defenceS.indexOf(Math.min(...defenceS));
    let indexDCR = defenceC.indexOf(Math.min(...defenceC));

    // get team corresponding to the indices
    let teamGR = clubTable[indexAGR].short;
    let teamAR = clubTable[indexAAR].short;
    let teamCR = clubTable[indexDCR].short;
    let teamSR = clubTable[indexDSR].short;

    // now that we have the arrays, compute corresponding min, max and index
    // return just attack and defence team name, short name, min and max values
    return {
        minattgR: Math.min(...attackG), // note that Math.min works with arrays by ... destructuring
        teamAttGR: teamGR,
        minattaR: Math.min(...attackA),
        teamAttAR: teamAR,
        mindefcR: Math.min(...defenceC),
        teamDefCR: teamCR, 
        mindefsR: Math.min(...defenceS),
        teamDefSR: teamSR
    }
}

//Data renderer
const ClubList = ({clubs, players, sortPts, sortCS, sortS, sortAR, route}) => {
    
    //Create the table as an object to be passed to Card Component
    let clubTable = computeTable(clubs, players, sortPts, sortCS, sortS, sortAR)
    const clubtbHead = ['Club','Short','Points','FDR','Attack','GS','A','Defence','Saves','CS','GC','Yellow Cards', '% CS', '% GC', '% Saves', 'Attack Ratio']
    
    //The array stores name of the analysis perspective to understand team and player impact
    let clubStat = computeStat(clubTable)
    console.log(clubStat)

    //Rendering the Club table
    return (
        <div className = 'fpl_clubInfo'>
            <div className = 'fpl_clubReport'>
                <div className = 'fpl_clubAtt'>
                    <span><p>{clubStat.teamAttGR}</p><p>{clubStat.minattgR}</p></span>
                    <span><p>{clubStat.teamAttAR}</p><p>{clubStat.minattaR}</p></span>
                </div>
                <div className = 'fpl_clubDef'>
                    <span><p>{clubStat.teamDefCR}</p><p>{clubStat.mindefcR}</p></span>
                    <span><p>{clubStat.teamDefSR}</p><p>{clubStat.mindefsR}</p></span>
                </div>
            </div>
        <Scroll route = {route}>
            <table>
                <thead>
                    <tr>
                        <th className = 'tb_text'>{clubtbHead[0]}</th>
                        <th className = 'tb_text'>{clubtbHead[1]}</th>
                        <th className = 'tb_num' >{clubtbHead[2]}</th>
                        <th className = 'tb_num'>{clubtbHead[3]}</th>
                        <th className = 'tb_num'>{clubtbHead[4]}</th>
                        <th className = 'tb_num'>{clubtbHead[5]}</th>
                        <th className = 'tb_num'>{clubtbHead[6]}</th>
                        <th className = 'tb_num'>{clubtbHead[7]}</th>
                        <th className = 'tb_num'>{clubtbHead[8]}</th>
                        <th className = 'tb_num'>{clubtbHead[9]}</th>
                        <th className = 'tb_num'>{clubtbHead[10]}</th>
                        <th className = 'tb_num'>{clubtbHead[11]}</th>
                        <th className = 'tb_num'>{clubtbHead[12]}</th>
                        <th className = 'tb_num'>{clubtbHead[13]}</th>
                        <th className = 'tb_num'>{clubtbHead[14]}</th>
                        <th className = 'tb_num'>{clubtbHead[15]}</th>
                    </tr>
                </thead>
                <tbody>  
                    <Club clubData = {clubTable} />
                </tbody>
            </table>
        </Scroll>
        </div>
    )
}

export default ClubList;