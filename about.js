import React from 'react';

function About() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="about.css" />
      <div className="contact-container">
        <div className="contact-info-container">
          <table className="contact-info">
            <tbody>
              <tr>
                <td>E-mail:</td>
                <td>sumeshss21@gmail.com</td>
              </tr>
              <tr>
                <td>Contact no:</td>
                <td>7089901668</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  2/60, kovaipudhur<br />
                  Coimbatore-636144<br />
                  Tamilnadu.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default About;
