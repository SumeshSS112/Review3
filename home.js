import React from 'react';
import './home.css'
function Home() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="index.css" />
      <header className="main-header">
        <div className="header-nav">
          <a href="#" className="logo link">" ZenFlow : Unleash Your Serenity with Yoga "</a>
          <nav className="main-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link link">Home</a>
              </li>
              <li className="nav-item">
                <a href="online" className="nav-link link">Sessions</a>
              </li>
              <li className="nav-item">
                <a href="pose" className="nav-link link">Poses</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link">
                  <i
                    className="fa-duotone fa-magnifying-glass fa-beat"
                    style={{ "--faPrimaryColor": "#000000", "--faSecondaryColor": "#e06806", "--faSecondaryOpacity": 1 }}
                  />
                </a>
              </li>
              <li className="nav-item">
                <a href="about" className="nav-link link">Contact</a>
              </li>
              <li className="nav-item">
                <a href="contact" className="nav-link link">Login</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hero-content">
          <h1 className="main-heading">
             <span className="main-heading-focus"><br />"YOGA" is not just repetition of few postures-<br />
            it is more about the <br />Exploration!</span>
          </h1>
        </div>
      </header>
    </div>
  );
}

export default Home;
