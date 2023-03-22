import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


//Import JSON
import data from "./TeamList.json";
const teams = data.teams;

//Card Info for Each Team, Accept JSON Params
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
//Compile Team  List and Cards
function TeamList() {
  return (
    <div>
      {teams.map(x => <TeamCard {...x} />)}
    </div>
  )
}
//Create Header Code
function HeaderBlock() {
  return (
    <div className="bg-dark text-white p-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col navbar-brand">March Madness Team List</div>
        </div>
      </div>
    </div>
  )
}


//Define App to return all DOM Objects
function App() {
  return (
    //Format Body
    <body>
      <HeaderBlock />
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
