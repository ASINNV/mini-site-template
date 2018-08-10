import React, { Component } from 'react';
import logo from './images/hagaman_logo.svg';
import './App.css';

import '../node_modules/font-awesome/css/font-awesome.min.css';
// import InstagramEmbed from 'react-instagram-embed';

import rolfIcon from "./images/ROLF_logo.svg";

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
      let failedLoader = document.getElementById('failed-loader');
      let loader = document.getElementById('loader');

      fetch(process.env.REACT_APP_API_ENDPOINT)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (loader.style.display === "" || loader.style.display === "block") {
            loader.style.display = "none";
          }
          if (failedLoader.style.display === "block") {
            failedLoader.style.display = "none";
          }
          myThis.setState({ posts: data.data, lastFixer: myThis.state.lastFixer, currentFixer: myThis.state.currentFixer, lastFeed: myThis.state.lastFeed, currentFeed: myThis.state.currentFeed});
        })
        .catch((err) => {
          if (loader.style.display === "" || loader.style.display === "block") {
            loader.style.display = "none";
          }
          if (failedLoader.style.display === "" || failedLoader.style.display === "none") {
            failedLoader.style.display = "block";
          }
          // console.log(err, 'error caught in fetch process, check componentDidMount() function block for debugging…');
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

    let innerContent = document.getElementById('inner-content');
    let innerContentRect = innerContent.getBoundingClientRect();

    let feed = document.getElementById('feed-shell');
    let content = document.getElementById('content');
    let contentRect = content.getBoundingClientRect();
    let banner = document.getElementById('banner');
    let bannerRect = banner.getBoundingClientRect();
    let fixer = document.getElementById('fixer');
    let fixerRect = fixer.getBoundingClientRect();

    let smallGoldenRatio = 0.382;

    // banner.style.top = 0;
    // banner.style.position = "fixed";
    // fixer.style.marginTop = bannerRect.height + "px";

    if (window.innerHeight > (fixerRect.height + bannerRect.height)) {
      // fixer.style.marginTop = '';
      banner.style.top = 0;
      banner.style.position = "fixed";
      fixer.style.top = bannerRect.height + "px";
      fixer.style.position = "fixed";
    }

    feed.style.top = bannerRect.height + "px";
    feed.style.left = innerContentRect.left + innerContentRect.width + "px";
    feed.style.width = (contentRect.width * smallGoldenRatio) + "px";

  }
  checkPosition() {

    let fixer = document.getElementById('fixer');
    let fixerRect = fixer.getBoundingClientRect();

    let banner = document.getElementById('banner');
    let bannerRect = banner.getBoundingClientRect();

    // let combinedElementHeight = bannerRect.height + fixerRect.height + 30;

    let feedShell = document.getElementById('feed-shell');
    let feedRect = feedShell.getBoundingClientRect();

    // let innerContent = document.getElementById('inner-content');
    // let innerContentRect = innerContent.getBoundingClientRect();

    this.setState({ posts: this.state.posts, lastFixer: this.state.currentFixer, currentFixer: fixerRect.y, lastFeed: this.state.currentFeed, currentFeed: feedRect.y });

    if ((bannerRect.height + fixerRect.height) <= window.innerHeight) {
      banner.style.top = 0;
      banner.style.position = "fixed";
      // fixer.style.marginTop = '';
      fixer.style.top = bannerRect.height + "px";
      fixer.style.position = "fixed";
    }
    let combinedHeight = bannerRect.height + fixerRect.height;

    if (combinedHeight > window.innerHeight) {

      let heightDifference = (bannerRect.height + fixerRect.height) - window.innerHeight;
      if (Math.abs(bannerRect.y) >= heightDifference && feedRect.height > combinedHeight) { // check if Instagram feed is taller than other content before absolutely positioning other content
        banner.style.top = (combinedHeight - window.innerHeight)*(-1) + "px";
        banner.style.position = "fixed";
        // fixer.style.marginTop = '';
        fixer.style.top = bannerRect.height + bannerRect.y + "px";
        fixer.style.position = "fixed";
      }
      if (feedRect.y >= fixerRect.y && this.state.lastFeed < feedRect.y) {
        // fixer.style.marginTop = bannerRect.height + "px";
        banner.style.top = '';
        banner.style.position = "static";
        fixer.style.top = '';
        fixer.style.position = "static";
      }

    }


  }

  refetch() {
    let myThis = this;
    let failedLoader = document.getElementById('failed-loader');
    let loader = document.getElementById('loader');


    if (failedLoader.style.display === "block") {
      failedLoader.style.display = "none";
    }
    if (loader.style.display === "none") {
      loader.style.display = "";
    }
    fetch(process.env.REACT_APP_API_ENDPOINT)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (loader.style.display === "" || loader.style.display === "block") {
          loader.style.display = "none";
        }
        if (failedLoader.style.display === "block") {
          failedLoader.style.display = "none";
        }
        myThis.setState({ posts: data.data, lastFixer: myThis.state.lastFixer, currentFixer: myThis.state.currentFixer, lastFeed: myThis.state.lastFeed, currentFeed: myThis.state.currentFeed});
      })
      .catch((err) => {
        if (loader.style.display === "" || loader.style.display === "block") {
          loader.style.display = "none";
        }
        if (failedLoader.style.display === "" || failedLoader.style.display === "none") {
          failedLoader.style.display = "block";
        }
        // console.log(err, 'error caught in fetch process, check componentDidMount() function block for debugging…');
      });
  }

  render() {
    return (
      <div id="app-container" className="ta-center">


        {/*<header className="hor-pad-20 bg-gray">*/}
          {/*<p className="text-white vert-pad-10">full website coming soon!</p>*/}
        {/*</header>*/}


        <div id="app-body" className="text-gray">

          <div id="banner">
            <div id="identity" className="brand-container">
              <img src={logo} className="logo" alt="logo" />
            </div>

            {/*<div className="wave d-block"></div>*/}
          </div>

          <div id="fixer" className="fixed-element">

            <div id="parent-content" className="">
              <div id="content" className="content-container t-align-left hor-container-margin">
                <div id="inner-content" className="d-inline-block w-main">
                  <div className="d-inline-block vert-align-top">

                    <div id="text-content" className="">

                      <div>
                        <div>
                          <h2>My Practice</h2>
                          <p>Edge and Center Bodywork offers the ten-session structural integration process of re-educating the body through movement and touch, systematically releasing patterns of stress and impaired function, allowing humans to find their full potential as their most powerful and authentic self.</p>
                        </div>

                        <div>
                          <h2>Greg Hagaman</h2>
                          <p>I was a member of the U.S. Bobsled and Skeleton team from 1985 to 1997. My interest in holistic health began while working as a bridge painter and a commercial fisherman. Both occupations put a great demand on my body and many times I worked in pain.</p>
                          <p>My search for ways to become pain-free lead to Structural Integration. I have been a practicing since 1998, certified by The Guild for Structural Integration in Boulder, Colorado being from the first graduating class from Kauai, Hawaii. Previously I had private instruction in Bangalore, India.</p>
                          <p>Since my time in Boulder and Kuai, I have practiced in Europe, New York, Rhode Island, and California. I enjoy yoga, hiking, music, and biking, when I am not spending time with my son Shane.</p>
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
                      <a href="https://www.google.com/maps/place/Point+Arena,+CA+95468/@38.9111833,-123.7104193,15z/data=!3m1!4b1!4m5!3m4!1s0x808118d7d648777d:0x755ce630f0324829!8m2!3d38.9088009!4d-123.6930943" rel="noopener noreferrer" target="_blank" title="790 Port Rd, Point Arena, CA 95468"><i id="address-button" className="fa fa-globe social-icon"/></a>
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
                    {/*<div className="certification-pair">*/}
                      {/*<img src={leafIcon} alt="" className="certification-icons"/>*/}
                      {/*<p>Structural Integration</p>*/}
                    {/*</div>*/}
                    <div className="certification-pair">
                      <a href="https://rolf.org/"><img src={rolfIcon} alt="" className="certification-icons"/></a>
                      <p>Certified Practitioner</p>
                    </div>
                  </div>
                  <footer id="foot" className="text-gray">
                    <p className="footer-element">2018 &copy; Edge & Center Bodywork&trade;</p>
                    <p className="footer-element">Powered by <a className="ams-plug" href="https://andmoorestudios.xyz">And Moore Studios&#8480;</a></p>
                  </footer>
                </div>
              </div>
            </div>

          </div>


          <div id="feed-shell" className="d-inline-block w-side vert-align-top instagram-feed-container hidden-mobile">
            <div id="loader">
              <p>Initializing Instagram feed…</p>
            </div>
            <div id="failed-loader">
              <p>Instagram is not responding.</p>
              <p id="failed-loader-button" onClick={this.refetch.bind(this)}>Refresh Feed</p>
            </div>
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
                  visualContent = <video className="instagram-image" controls="controls" src={post.videos.low_bandwidth.url} width="100%" alt={post.videos.low_bandwidth.url} />;
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
                  <td className="table-label">Phone</td>
                  <td>(707) 882-5555</td>
                </tr>
                <tr>
                  <td className="table-label">Email</td>
                  <td>companyemail@gmail.com</td>
                </tr>
                <tr>
                  <td className="table-label">Address</td>
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
              <div id="overlay-button" onClick={this.hideInformation.bind(this)}>Close Window</div>
            </div>

          </div>

        </div>





      </div>
    );
  }
}

export default App;
