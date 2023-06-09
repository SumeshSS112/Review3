import React from 'react';
import "./online.css"

function Online() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="online.css" />
      <main className="maim-container">
        <div className="banner-container">
          <div className="banner-img-container">
            <img src="https://www.muscleandfitness.com/wp-content/uploads/2019/04/men-yoga-group-class-1109.jpg?quality=86&strip=all" />
          </div>
          <div className="banner-content-container">
            <div className="banner-content">
              <h1 className="banner-title">Live Sessions</h1><br />
              <p className="banner-desc">Workout online from the comfort of your home with Rashmi on the Zoom app. The sessions regular sessions, three times a week. Each session is unique and it will work on improving your asana practice, strength, flexibility, balance, overall fitness and knowledge of Yoga Theory. 
              </p>
              <a href="#" className="banner-cta">For More</a>
            </div>
          </div>
        </div>
        <div className="banner-container">
          <div className="banner-content-container">
            <div className="banner-content">
              <h1 className="banner-title">Options to Explore</h1><br />
              <p className="banner-desc">One of the problems with the physical Yoga session- we cannot explore. Some of us are comfortable with basic Asanas, and some of us like doing difficult Yoga poses. And this demand is fulfilled with Online Yoga courses. These sessions offer versatility.
              </p>
            </div>
          </div>
          <div className="banner-img-container">
            <img src="https://i.pinimg.com/originals/a0/9d/99/a09d99cfee4b64b60ee33e6311d5f375.jpg" alt="" className="banner-img" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Online;
