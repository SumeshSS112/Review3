import React from 'react';

function Pose() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="pose.css" />
      <div className="card-container"><br />
        <p className="main-card-title">POSES</p>
        <div className="card-content">
          <div className="card">
            <div className="card-img-container">
              <img src="https://www.keralatourism.org/images/yoga/category/thumb/vrschikasana_thumb.jpg" alt="" className="card-img" />
            </div>
            <p className="card-title">VRSCHIKASANA <span className="card-span">(Scorpion Pose)</span></p>
          </div>
          <div className="card">
            <div className="card-img-container">
              <img src="https://fitsri.com/wp-content/uploads/2020/09/Padangusthasana-Big-Toe-Pose.jpg" alt="" className="card-img" />
            </div>
            <p className="card-title">PADANGUSTHASANA <span className="card-span">(Big Toe Pose)</span></p>
          </div>
          <div className="card">
            <div className="card-img-container">
              <img src="https://rishikeshashtangayogaschool.com/blog/wp-content/uploads/2021/11/cobra-pose_11zon.jpg" alt="" className="card-img" />
            </div>
            <p className="card-title">BHUJANGASANA<span className="card-span">(Cobra Pose)</span></p>
          </div><br></br>
         
        </div>

      </div>
      <div className="card-container"><br />
        <div className="card-content">
          <div className="card">
            <div className="card-img-container">
              <img src="https://images.squarespace-cdn.com/content/v1/594a696c20099ea9e1fcb37e/1518703887913-DLPS0S5DDH19HBU2KBOE/shavasana?format=1000w" alt="" className="card-img" />
            </div>
            <p className="card-title">SHAVASANA <span className="card-span">(Corpse Pose)</span></p>
          </div>
          <div className="card">
            <div className="card-img-container">
              <img src="https://www.kreedon.com/wp-content/uploads/2022/06/the-meaning-and-origin-of-vajrasana.jpg" alt="" className="card-img" />
            </div>
            <p className="card-title">VAJRASANA <span className="card-span">(Diamond Pose)</span></p>
          </div>
          <div className="card">
            <div className="card-img-container">
              <img src="https://cdn.cdnparenting.com/articles/2019/04/09113309/747285775-H.webp" alt="" className="card-img" />
            </div>
            <p className="card-title">TADASANA<span className="card-span">(Mountain Pose)</span></p>
          </div><br></br>
         
        </div>

      </div>

    </div>
  );
}

export default Pose;
