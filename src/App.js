import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import wave from "./images/wave2.png";


class App extends Component {
  // showContactInfo(e) {
  //   let infoWindow = document.getElementById('info-window');
  //
  //   if (infoWindow.childNodes.length > 0) {
  //     for (let i = 0; i < infoWindow.childNodes.length; i++) {
  //       infoWindow.removeChild(infoWindow.childNodes[i]);
  //     }
  //   }
  //
  //   let phone = document.createElement('p');
  //   phone.innerText = '(555) 555-5555';
  //
  //   let email = document.createElement('p');
  //   email.innerText = 'companyemail@email.com';
  //
  //
  //   let address = document.createElement('div');
  //
  //   let first = document.createElement('p');
  //   first.innerText = "[COMPANY NAME]";
  //
  //   let second = document.createElement('p');
  //   second.innerText = "[COMPANY STREET]";
  //
  //   let third = document.createElement('p');
  //   third.innerText = "[COMPANY CITY]";
  //
  //   phone.className += " window-item";
  //   email.className += " window-item";
  //   address.className += " window-item";
  //   first.className = "no-line-height";
  //   second.className = "no-line-height";
  //   third.className = "no-line-height";
  //
  //   address.appendChild(first);
  //   address.appendChild(document.createElement('br'));
  //   address.appendChild(second);
  //   address.appendChild(document.createElement('br'));
  //   address.appendChild(third);
  //
  //   if (e.target.id === 'phone-button') {
  //
  //   }
  //   switch (e.target.id) {
  //     case "phone-button":
  //       infoWindow.appendChild(phone);
  //       setTimeout(() => {
  //         phone.className += " fade-in";
  //       }, 50);
  //       break;
  //     case "email-button":
  //       infoWindow.appendChild(email);
  //       setTimeout(() => {
  //         email.className += " fade-in";
  //       }, 50);
  //       break;
  //     case "address-button":
  //       infoWindow.appendChild(address);
  //       setTimeout(() => {
  //         address.className += " fade-in";
  //       }, 50);
  //       break;
  //     default:
  //       console.log('oops, hit the default. see line 25 of App.js');
  //   }
  //
  // }

  // hideContactInfo(e) {
  //   let infoWindow = document.getElementById('info-window');
  //
  //   for (let i = 0; i < infoWindow.childNodes.length; i++) {
  //     infoWindow.removeChild(infoWindow.childNodes[i]);
  //   }
  // }
  componentDidMount() {
    let foot = document.getElementById('foot');
    // if (window.innerHeight)
    let footRect = document.getElementById('foot').getBoundingClientRect();
    let windowHeight = window.innerHeight;

    if (windowHeight > footRect.y) {
      foot.style.position = "absolute";
      foot.style.left = "0";
      foot.style.right = "0";
      foot.style.bottom = "0";

    }
  }
  render() {
    return (
      <div id="app-container" className="ta-center">


        <header className="hor-pad-20 bg-gray">
          <p className="text-gray vert-pad-10">full website coming soon!</p>
        </header>


        <div id="app-body" className="text-gray">

          <div id="identity" className="brand-container">
            <img src={logo} className="logo" alt="logo" />
            {/*<h1>[COMPANY NAME]</h1>*/}
          </div>

          <img src={wave} alt="" className="wave d-block"/>

          <div id="parent-content" className="bg-light-gray">
            <div id="content" className="content-container t-align-left hor-container-margin">
              <div id="inner-content" className="">
                <div className="d-inline-block w-main vert-align-middle">

                  <div className="r-margin">

                    <div>
                      <div>
                        <h2>Who We Are</h2>
                        <p>dflkgsjdf;lkgsjdf;lgkjsdl kajdflkasjdfla sdjfas djlaksdj haklsj dhfalksdj fhaksjd fhaskld jfhaskd jhsdak</p>
                        <p>dflkgsjdf;lkgsjdf;lgkjsdl kajdflkasjdfla sdjfas djlaksdj</p>
                      </div>

                      <div>
                        <h2>What We Do</h2>
                        <p>sdfjah kjahsdfkj haksdjfh aksjdhf kajsdhf ajhdsfkj ahsdlkfj halksjdfh laksjdhf k kajsdhf laksjdhflk asjdhf alksdj fhalkdj hfa lksdjhf lakjdfh.</p>
                      </div>
                    </div>

                    {/*<hr className="vert-margin"/>*/}

                    {/*<div id="contact" className="contact-container vert-margin">*/}


                    {/*<div className="contact-info-window-container">*/}
                    {/*/!*<p id="info-window-label">contact info</p>*!/*/}
                    {/*<div id="info-window"></div>*/}
                    {/*</div>*/}

                    {/*</div>*/}


                  </div>

                </div>
                <div className="d-inline-block w-side vert-align-middle hidden-mobile">
                  <div className="bg-dark-gray text-light-gray b-rad-8">
                    <p className="placeholder">instagram thing</p>
                  </div>
                </div>
              </div>

              <hr/>

              {/*<div className="info-bar">*/}
                {/*<h3 className="contact-info">contact info:</h3>*/}
                {/*<p>(707) 684-9999</p>*/}
                {/*<p>companyemail@gmail.com</p>*/}
                {/*<p>790 Port Rd, Point Arena, CA</p>*/}
              {/*</div>*/}

              <div id="social" className="social-container">
                <div className="d-inline-block w-8">
                  <a href="tel:+15555555555"><i id="phone-button" className="fa fa-phone-square social-icon"/></a>
                </div>

                <div className="d-inline-block w-8">
                  <a href="mailto:companyname@gmail.com"><i id="email-button" className="fa fa-envelope-square social-icon"/></a>
                </div>

                <div className="d-inline-block w-8">
                  <a href="https://www.google.com/maps/place/Point+Arena,+CA+95468/@38.9111833,-123.7104193,15z/data=!3m1!4b1!4m5!3m4!1s0x808118d7d648777d:0x755ce630f0324829!8m2!3d38.9088009!4d-123.6930943" rel="noopener noreferrer" target="_blank"><i id="address-button" className="fa fa-map-pin social-icon"/></a>
                </div>
                <div className="social-icon text-medium-gray pipe">|</div>
                <div className="d-inline-block w-8">
                  <a href=""><i className="fa fa-facebook-square social-icon"/></a>
                </div>
                <div className="d-inline-block w-8">
                  <a href=""><i className="fa fa-twitter-square social-icon"/></a>
                </div>
                <div className="d-inline-block w-8">
                  <a href=""><i className="fa fa-instagram social-icon"/></a>
                </div>
                <div className="d-inline-block w-8">
                  <a href=""><i className="fa fa-linkedin social-icon"/></a>
                </div>
                <div className="d-inline-block w-8">
                  <a href=""><i className="fa fa-snapchat-square social-icon"/></a>
                </div>
              </div>
            </div>
          </div>

        </div>


        <footer id="foot" className="bg-gray text-gray">
          <p className="footer-element">2018 &copy; [YOUR NAME HERE]</p>
          <p className="footer-element">powered by <a className="ams-plug" href="https://andmoorestudios.xyz">And Moore Studios</a></p>
        </footer>


      </div>
    );
  }
}

export default App;
