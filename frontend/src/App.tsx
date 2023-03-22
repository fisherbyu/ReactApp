import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



import data from "./TeamList.json";
const teams = data.teams;

function Header() {
  return (
    <div>

    </div>
  );
}

class TeamCard extends React.Component<{ school: string; name: string; city: string; state: string }> {
  render() {
    const team = this.props;
    return (
      <div className='card'>
        <h2>{team.school}:</h2>
        <h3>Mascot: {team.name}</h3>
        <h4>{team.city}, {team.state}</h4>
        <br /><br />
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
    <body>
      <div className="bg-dark text-white p-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col navbar-brand">March Madness Team List</div>
          </div>
        </div>
      </div>
      <div className="row m-1 p-1">
        <div className="col-9">
          <div>
            <TeamList />
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
