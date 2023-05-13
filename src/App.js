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
      <nav class="navbar">

        <ul class="navbar-list">

          <li class="navbar-item">
            <button class="navbar-link  active" data-nav-link>About</button>
          </li>

          <li class="navbar-item">
            <button class="navbar-link" data-nav-link>Resume</button>
          </li>

          <li class="navbar-item">
            <button class="navbar-link" data-nav-link>Portfolio</button>
          </li>

          <li class="navbar-item">
            <button class="navbar-link" data-nav-link>Blog</button>
          </li>
  
          <li class="navbar-item">
            <button class="navbar-link" data-nav-link>Contact</button>
          </li>

        </ul>
      </nav>
  
      <article class="about active" data-page="about">

        <header>
          <h2 class="h2 article-title">About me</h2>
        </header>

        <section class="about-text">
          <p>
            Welcome!
          </p>
        </section>
    <query>
      It looks like your yearly salary is about {yearly} dollars.
      That places you in the {bracket} income bracket.
    </query>
    </div>;

}


export default App;
