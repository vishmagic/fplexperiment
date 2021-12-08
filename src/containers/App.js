import React, { useState, useEffect } from 'react';
import ClubList from '../components/ClubList/ClubList';
import PlayerList from '../components/PlayerList/PlayerList';
import Navigation from '../components/Navigation/Navigation';

import './App.css';

function App () {

  const [clubs, setUsers] = useState([])
  const [players, setPlayers] = useState([])
  const [route, setRoute] = useState('club')
  const [sortPoints, setsortPoints] = useState(false)
  const [sortCS, setsortCS] = useState(false)
  const [sortSaves, setsortSaves] = useState(false)
  const [sortAttR, setsortAttR] = useState(false)
  const [sortGS, setsortGS] = useState(false)
  const [sortA, setsortA] = useState(false)

  useEffect(() => {
      // const url = 'https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/';
      const url = './fpl_bootstrap_json.json';
      fetch(url)
          .then(response => response.json())
          .then(userList => {
            setUsers(userList.teams)
            setPlayers(userList.elements)
          })
  },[])

  // function to manage sort states - sort onClick to call this function
  let onRouteChange = (route) => {
      setRoute(route);
    } 
  
  return !clubs.length ? 
      <div>
        <h1 className = 'f1'>Loading...</h1>
      </div> :
  (
      <div className = 'fpl_container'>
        <div className = 'fpl_nav'>
          <Navigation route = {route} onRouteChange = {onRouteChange} />
        </div>
        { route === 'club'
        ?
        <div className = 'fpl_clubs'>
          <div className = 'fpl_head'>
          <h1>CLUBS/</h1>
          </div>
          <span className = 'fpl_sort'>
            <p className = {sortPoints ? "sort_active" : "sort_inactive"} onClick={() => setsortPoints(!sortPoints)}>Points</p>
            <p className = {sortCS ? "sort_active" : "sort_inactive"} onClick={() => setsortCS(!sortCS)}>%CS</p>
            <p className = {sortSaves ? "sort_active" : "sort_inactive"} onClick={() => setsortSaves(!sortSaves)}>%Saves</p>
            <p className = {sortAttR ? "sort_active" : "sort_inactive"} onClick={() => setsortAttR(!sortAttR)}>AttRatio</p>
          </span>
          <ClubList clubs = {clubs} players = {players} sortPts = {sortPoints} sortCS = {sortCS} sortS = {sortSaves} sortAR = {sortAttR} route = {route}/>
        </div>
        :
        <div className = 'fpl_players'>
          <div className = 'fpl_head'>
          <h1>PLAYERS/</h1>
          </div>
          <span className = 'fpl_sort'>
            <p className = {sortPoints ? "sort_active" : "sort_inactive"} onClick={() => setsortPoints(!sortPoints)}>Points</p>
            <p className = {sortGS ? "sort_active" : "sort_inactive"} onClick={() => setsortGS(!sortGS)}>GS</p>
            <p className = {sortA ? "sort_active" : "sort_inactive"} onClick={() => setsortA(!sortA)}>Assists</p>
            <p className = {sortSaves ? "sort_active" : "sort_inactive"} onClick={() => setsortSaves(!sortSaves)}>Saves</p>
          </span>
          <PlayerList players = {players} sortPts = {sortPoints} sortGS = {sortGS} sortA = {sortA} sortSaves = {sortSaves} route = {route}/>
        </div>
        }
      </div>
  );
}

export default App;