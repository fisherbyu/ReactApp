import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



import data from "./TeamList.json";
const teams = data.teams;

class TeamCard extends React.Component<{ school: string; name: string; city: string; state: string }> {
  render() {
    const team = this.props;
    return (
      <div>
        <h2>{team.school}:</h2>
        <h4>Mascot: {team.name}</h4>
        <h3>{team.city}, {team.state}</h3>
        <br />
      </div>
    )
  }
}

function TeamList() {
  return (
    <div>
      {teams.map(x => <TeamCard {...x} />)}
    </div>
  )
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"

    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <TeamList />
    </div>
  );
}

export default App;
