import React, { Component } from 'react';
import logo from './images/Logo.svg';
import './App.css';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import InstagramEmbed from 'react-instagram-embed';

// import globeIcon from "./images/GlobeIcon.svg";
import certIcon from "./images/CertIcon.svg";
import leafIcon from "./images/LeafIcon.svg";

// const theWindow=window,
//   theDoc=document,
//   theEle=theDoc.documentElement,
//   theBody=theDoc.getElementsByTagName('body')[0],
//   // theWindowWidth=theWindow.innerWidth||theEle.clientWidth||theBody.clientWidth,
//   theWindowHeight=theWindow.innerHeight||theEle.clientHeight||theBody.clientHeight;

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
    // let foot = document.getElementById('foot');
    // let instagram = document.getElementById('instagram-window');
    // let rootRect = document.getElementById('root').getBoundingClientRect();
    // let textContent = document.getElementById("text-content");
    // // if (window.innerHeight)
    // let footRect = document.getElementById('foot').getBoundingClientRect();


    // this.updateDimensionsAndPositioning();
    // window.addEventListener("resize", this.updateDimensionsAndPositioning.bind(this));
    //


    // if (theWindowHeight > footRect.y && theWindowHeight < rootRect.height) {
    //   console.log(footRect, theWindowHeight);
    //   foot.style.position = "absolute";
    //   foot.style.left = "0";
    //   foot.style.right = "0";
    //   foot.style.top = (rootRect.height - footRect.height) + "px";
    // } else if (theWindowHeight > footRect.y && theWindowHeight > rootRect.height) {
    //   foot.style.position = "absolute";
    //   foot.style.left = "0";
    //   foot.style.right = "0";
    //   foot.style.bottom = "0";
    // }

    // instagram.style.cssText = "height: " + textContent.getBoundingClientRect().height + "px;";
  }
  componentWillUnmount() {
    // window.removeEventListener("resize", this.updateDimensionsAndPositioning.bind(this));
  }

  // updateDimensionsAndPositioning() {
  //   let foot = document.getElementById('foot');
  //   // let instagram = document.getElementById('instagram-window');
  //   let rootRect = document.getElementById('root').getBoundingClientRect();
  //   // let textContent = document.getElementById("text-content");
  //   // if (window.innerHeight)
  //   let footRect = document.getElementById('foot').getBoundingClientRect();
  //
  //   if (theWindowHeight > footRect.y && theWindowHeight < rootRect.height) {
  //     console.log(footRect, theWindowHeight);
  //     foot.style.position = "absolute";
  //     foot.style.left = "0";
  //     foot.style.right = "0";
  //     foot.style.top = (rootRect.height - footRect.height) + "px";
  //   } else if (theWindowHeight > footRect.y && theWindowHeight > rootRect.height) {
  //     foot.style.position = "absolute";
  //     foot.style.left = "0";
  //     foot.style.right = "0";
  //     foot.style.bottom = "0";
  //   }
  //
  //   // instagram.style.cssText = "height: " + textContent.getBoundingClientRect().height + "px;";
  // }

  showInformation(e) {
    let overlay = document.getElementById('overlay');
    let card = document.getElementById('card');
    // overlay.style.display = "flex";
    overlay.style.zIndex = 10;
    overlay.style.opacity = 1;
    card.style.transform = 'translateY(0)';
  }
  hideInformation(e) {
    let overlay = document.getElementById('overlay');
    let card = document.getElementById('card');
    let overlayButton = document.getElementById('overlay-button');
    if (e.target === overlay || e.target === overlayButton) {
      // overlay.style.display = "none";
      overlay.style.opacity = 0;
      card.style.transform = 'translateY(-10px)';
      setTimeout(function() {
        overlay.style.zIndex = -1;
      }, 200);
    }
  }
  render() {
    return (
      <div id="app-container" className="ta-center">


        {/*<header className="hor-pad-20 bg-gray">*/}
          {/*<p className="text-white vert-pad-10">full website coming soon!</p>*/}
        {/*</header>*/}


        <div id="app-body" className="text-gray">

          <div id="identity" className="brand-container">
            <img src={logo} className="logo" alt="logo" />
            <p className="slogan">“Reppin' the Emerald Empire”</p>
          </div>

          {/*<img src={companyLandscape} alt="" className="wave d-block"/>*/}
          <div className="wave d-block"></div>

          <div id="parent-content" className="bg-light-gray">
            <div id="content" className="content-container t-align-left hor-container-margin">
              <div id="inner-content" className="d-inline-block w-main">
                <div className="d-inline-block vert-align-top">

                  <div id="text-content" className="">

                    <div>
                      <div>
                        <h2>Who We Are</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum eget mauris id consequat. Ut porta mattis finibus. Phasellus mattis eget nibh sit amet congue.</p>
                        <p>Nullam vel suscipit turpis, eu mollis turpis.</p>
                      </div>

                      <div>
                        <h2>What We Do</h2>
                        <p>Integer nunc leo, efficitur sit amet nibh sit amet, accumsan feugiat diam. Sed risus purus, elementum a lobortis eget, finibus non nisi.</p>
                        <p>Nulla egestas euismod justo. Suspendisse felis ligula, tempor sit amet feugiat eget, porttitor a felis.</p>
                      </div>
                    </div>

                  </div>

                </div>
                <div id="social" className="social-container">
                  <div className="d-inline-block w-8">
                    <a href="tel:+15555555555" title="(555) 555-5555"><i id="phone-button" className="fa fa-phone-square social-icon"/></a>
                  </div>

                  <div className="d-inline-block w-8">
                    <a href="mailto:companyname@gmail.com" title="companyname@gmail.com"><i id="email-button" className="fa fa-envelope-square social-icon"/></a>
                  </div>

                  <div className="d-inline-block w-8">
                    <a href="https://www.google.com/maps/place/Point+Arena,+CA+95468/@38.9111833,-123.7104193,15z/data=!3m1!4b1!4m5!3m4!1s0x808118d7d648777d:0x755ce630f0324829!8m2!3d38.9088009!4d-123.6930943" rel="noopener noreferrer" target="_blank" title="790 Port Rd, Point Arena, CA 95468"><i id="address-button" className="fa fa-map-pin social-icon"/></a>
                  </div>
                  {/*<div className="social-icon pipe">|</div>*/}
                  {/*<div className="d-inline-block w-8">*/}
                  {/*<a href=""><i className="fa fa-facebook-square social-icon"/></a>*/}
                  {/*</div>*/}
                  {/*<div className="d-inline-block w-8">*/}
                  {/*<a href=""><i className="fa fa-twitter-square social-icon"/></a>*/}
                  {/*</div>*/}
                  {/*<div className="d-inline-block w-8">*/}
                  {/*<a href=""><i className="fa fa-instagram social-icon"/></a>*/}
                  {/*</div>*/}
                  {/*<div className="d-inline-block w-8">*/}
                  {/*<a href=""><i className="fa fa-linkedin social-icon"/></a>*/}
                  {/*</div>*/}
                  {/*<div className="d-inline-block w-8">*/}
                  {/*<a href=""><i className="fa fa-snapchat-square social-icon"/></a>*/}
                  {/*</div>*/}
                  <p id="contact-expander" onClick={this.showInformation.bind(this)}>SHOW CONTACT INFO</p>
                </div>
                <div className="certification-pairs-container">
                  <div className="certification-pair">
                    <img src={certIcon} alt="" className="certification-icons"/>
                    <p>Certified Organic</p>
                  </div>
                  <div className="certification-pair">
                    <img src={leafIcon} alt="" className="certification-icons"/>
                    <p>Grade A</p>
                  </div>
                </div>
              </div>
              <div className="d-inline-block w-side vert-align-top hidden-mobile">
                {/*<div id="instagram-window" className=""></div>*/}
                <div id="instagram-window" className=""><InstagramEmbed url="https://www.instagram.com/p/BerunZvhGG6/" maxWidth={false} hideCaption={true} containerTagName="div" protocol='' injectScript onLoading={() => {}} onSuccess={() => {}} onAfterRender={() => {}} onFailure={() => {}}/></div>
              </div>





              <div id="overlay" onClick={this.hideInformation.bind(this)}>
                <div id="card">
                  <h2 className="overlay-heading">contact information</h2>
                  <table>
                    <tbody>
                    <tr>
                      <td className="table-label">phone</td>
                      <td>(707) 882-5555</td>
                    </tr>
                    <tr>
                      <td className="table-label">email</td>
                      <td>companyemail@gmail.com</td>
                    </tr>
                    <tr>
                      <td className="table-label">address</td>
                      <td>
                        <table>
                          <tbody>
                          <tr>
                            <td className="d-block">[Company Name]</td>
                            <td className="d-block">[Street Address]</td>
                            <td className="d-block">[City, State, & Zip]</td>
                          </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <div id="overlay-button" onClick={this.hideInformation.bind(this)}>close window</div>
                </div>

              </div>

            </div>
          </div>

        </div>


        <footer id="foot" className="text-gray">
          <p className="footer-element">2018 &copy; Cowboy Chronic Brand&trade;</p>
          <p className="footer-element">powered by <a className="ams-plug" href="https://andmoorestudios.xyz">And Moore Studios</a></p>
        </footer>


      </div>
    );
  }
}

export default App;
