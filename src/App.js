import React, { Component } from 'react';
import logo from './images/Logo.svg';
import './App.css';

import '../node_modules/font-awesome/css/font-awesome.min.css';
// import InstagramEmbed from 'react-instagram-embed';

// import globeIcon from "./images/GlobeIcon.svg";
import certIcon from "./images/CertIcon.svg";
import leafIcon from "./images/LeafIcon.svg";

// const theWindow=window,
//   theDoc=document,
//   theEle=theDoc.documentElement,
//   theBody=theDoc.getElementsByTagName('body')[0],
//   // theWindowWidth=theWindow.innerWidth||theEle.clientWidth||theBody.clientWidth,
//   theWindowHeight=theWindow.innerHeight||theEle.clientHeight||theBody.clientHeight;

class InstagramPost extends Component {
  render() {
    let date = new Date(this.props.postDate*1000);
    let month = null;
    let year = date.getFullYear();
    switch (date.getMonth() + 1) {
      case 1:
        month = 'JAN';
        break;
      case 2:
        month = 'FEB';
        break;
      case 3:
        month = 'MAR';
        break;
      case 4:
        month = 'APR';
        break;
      case 5:
        month = 'MAY';
        break;
      case 6:
        month = 'JUN';
        break;
      case 7:
        month = 'JUL';
        break;
      case 8:
        month = 'AUG';
        break;
      case 9:
        month = 'SEPT';
        break;
      case 10:
        month = 'OCT';
        break;
      case 11:
        month = 'NOV';
        break;
      case 12:
        month = 'DEC';
        break;
      default:
        console.log('fell to the default case in the InstagramPost component');
    }
    // let shortDate = (date.getMonth() + 1) + "." + date.getDate() + "." + date.getFullYear();
    return (
      <div className="instagram-post">
        <div className="instagram-heading-container">
          <div className="instagram-account-info">
            <img src={this.props.accountPicture} alt={this.props.accountPicture} />
            <p>{this.props.accountName}</p>
          </div>
          <div>
            {<p className="instagram-date">{month + " " + year}</p>}
          </div>
        </div>
        {this.props.visualContent}
        <p className="instagram-caption">{this.props.captionContent}</p>
        <div className="instagram-incidentals">
          {<p className="instagram-likes">{this.props.postLikes} likes</p>}
          <a className="instagram-link" href="https://www.instagram.com/cowboychronicbrand/" target="_blank" rel="noopener noreferrer">View More on Instagram</a>
        </div>


      </div>
    );
  }
}

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      posts: [],
      lastFixer: 0,
      currentFixer: 0,
      lastFeed: 0,
      currentFeed: 0
    };

  }
  componentWillUnmount() {

    window.scrollTo(0, 0);
    window.removeEventListener("scroll", this.checkPosition.bind(this));
    window.removeEventListener("resize", this.setDimensions.bind(this));

  }
  componentDidMount() {

    if (window.innerWidth > 900) {
      this.setDimensions();

      window.addEventListener("scroll", this.checkPosition.bind(this));
      window.addEventListener("resize", this.setDimensions.bind(this));

      let myThis = this;

      fetch(process.env.REACT_APP_API_ENDPOINT)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          myThis.setState({ posts: data.data, lastFixer: myThis.state.lastFixer, currentFixer: myThis.state.currentFixer, lastFeed: myThis.state.lastFeed, currentFeed: myThis.state.currentFeed});
        })
        .catch((err) => {
          console.log(err, 'error caught in fetch process, check componentDidMount() function block for debugging…');
        });
    }
  }

  showInformation(e) {

    let overlay = document.getElementById('overlay');
    let card = document.getElementById('card');

    overlay.style.zIndex = 10;
    overlay.style.opacity = 1;
    card.style.transform = 'translateY(0)';

  }
  hideInformation(e) {

    let overlay = document.getElementById('overlay');
    let card = document.getElementById('card');
    let overlayButton = document.getElementById('overlay-button');

    if (e.target === overlay || e.target === overlayButton) {
      overlay.style.opacity = 0;
      card.style.transform = 'translateY(-10px)';
      setTimeout(function() {
        overlay.style.zIndex = -1;
      }, 200);
    }

  }

  setDimensions() {

    let textContent = document.getElementById('text-content');
    let textRect = textContent.getBoundingClientRect();
    let feed = document.getElementById('feed-shell');
    let content = document.getElementById('content');
    let contentRect = content.getBoundingClientRect();
    let smallGoldenRatio = 0.382;

    feed.style.top = textRect.y + "px";
    feed.style.left = textRect.left + textRect.width + 30 + "px";
    feed.style.width = (contentRect.width * smallGoldenRatio) + "px";

  }
  checkPosition() {

    let fixer = document.getElementById('fixer');
    let fixerRect = fixer.getBoundingClientRect();

    let feedShell = document.getElementById('feed-shell');
    let feedRect = feedShell.getBoundingClientRect();

    let textContent = document.getElementById('text-content');
    let textRect = textContent.getBoundingClientRect();

    this.setState({ posts: this.state.posts, lastFixer: this.state.currentFixer, currentFixer: fixerRect.y, lastFeed: this.state.currentFeed, currentFeed: feedRect.y });

    if (this.state.lastFeed !== null && this.state.lastFeed < feedRect.y && this.state.lastFeed >= textRect.y) {
      fixer.style.top = 0;
      fixer.style.position = "static";
    } else if (fixerRect.height > window.innerHeight && Math.abs(fixerRect.y) >= (fixerRect.height - window.innerHeight)) {
      fixer.style.top = (window.innerHeight - fixerRect.height) + "px";
      fixer.style.position = "fixed";

    }

  }

  render() {
    return (
      <div id="app-container" className="ta-center">


        {/*<header className="hor-pad-20 bg-gray">*/}
          {/*<p className="text-white vert-pad-10">full website coming soon!</p>*/}
        {/*</header>*/}


        <div id="app-body" className="text-gray">

          <div id="fixer" className="fixed-element">
            <div id="identity" className="brand-container">
              <img src={logo} className="logo" alt="logo" />
              <p className="slogan">“Reppin' the Emerald Empire”</p>
            </div>

            <div className="wave d-block"></div>

            <div id="parent-content" className="">
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

                    <div className="d-inline-block w-8 hidden-desktop">
                      <a href="mailto:companyname@gmail.com" title="companyname@gmail.com"><i id="instagram-button" className="fa fa-instagram social-icon"/></a>
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
                      <p>Clean Green Certified</p>
                    </div>
                    <div className="certification-pair">
                      <img src={leafIcon} alt="" className="certification-icons"/>
                      <p>Flowers, Extracts, & Genetics</p>
                    </div>
                  </div>
                  <footer id="foot" className="text-gray">
                    <p className="footer-element">2018 &copy; Cowboy Chronic Brand&trade;</p>
                    <p className="footer-element">powered by <a className="ams-plug" href="https://andmoorestudios.xyz">And Moore Studios</a></p>
                  </footer>
                </div>
              </div>
            </div>

          </div>


          <div id="feed-shell" className="d-inline-block w-side vert-align-top instagram-feed-container hidden-mobile">
            {/*<div id="instagram-window" className=""></div>*/}
            {/*<div id="instagram-window" className=""><InstagramEmbed url="https://www.instagram.com/p/BerunZvhGG6/" maxWidth={false} hideCaption={true} containerTagName="div" protocol='' injectScript onLoading={() => {}} onSuccess={() => {}} onAfterRender={() => {}} onFailure={() => {}}/></div>*/}
            <ul id="instagram-feed">
              {this.state.posts !== undefined ? this.state.posts.map((post, i) => {
                let visualContent = null;
                let captionContent = null;
                let accountName = null;
                let accountPicture = null;
                let postDate = null;
                let postLikes = null;

                if (post) {
                  postDate = post.created_time;
                  postLikes = post.likes.count;
                }
                if (post.type === 'video') {
                  visualContent = <video className="instagram-image" controls={true} src={post.videos.low_bandwidth.url} width="100%" alt={post.videos.low_bandwidth.url} />;
                } else {
                  visualContent = <img className="instagram-image" src={post.images.low_resolution.url} width="100%" alt={post.images.low_resolution.url} />;
                }
                if (post.caption) {
                  captionContent = post.caption.text;
                }
                if (post.user) {
                  accountName = post.user.full_name;
                  accountPicture = post.user.profile_picture;
                }
                return <InstagramPost key={i} accountName={accountName !== null ? accountName : false} accountPicture={accountPicture !== null ? accountPicture : false} postDate={postDate !== null ? postDate : false} visualContent={visualContent !== null ? visualContent : false} captionContent={captionContent !== null ? captionContent : false} postLikes={postLikes !== null ? postLikes : false} />

              }) : console.log("DAMN NOT AGAIN")}
            </ul>
          </div>


          <div id="overlay" onClick={this.hideInformation.bind(this)}>
            <div id="card">
              <h2 className="overlay-heading">Contact Information</h2>
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
    );
  }
}

export default App;
