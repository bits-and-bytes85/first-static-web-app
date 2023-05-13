import React from 'react';

function App() {
  var name = prompt("What is your name?");
  var wage = prompt("What is your hourly wage?");
  var hours = prompt("How many hours do you typically work per week?");
  var bracket;
  var yearly = wage*hurs*52;

  if (yearly > 120000){
    bracket = 'high';
  } else if (yearly > 50000){
    bracket = 'middle';
  } else {
    bracket = 'low'
  }

  return <div>
    <title>
      Let's learn to budget {name} !
    </title>
    <query>
      It looks like your yearly salary is about {yearly} dollars.
      That places you in the {bracket} income bracket.
    </query>
    </div>;


}


export default App;
