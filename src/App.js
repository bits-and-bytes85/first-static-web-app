import React from 'react';

function App() {
  var name = prompt("What is your name?");
  var wage = prompt("What is your hourly wage?");
  var hours = prompt("How many hours do you typically work per week?");

  return <div>
    <title>
      Let's learn to budget{name} !
    </title>
    <query>
      It looks like your yearly salary is about {wage*hours*52}. 
    </query>
    </div>;


}

export default App;
