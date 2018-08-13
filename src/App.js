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
              <p className="slogan">Empire Built Extracts & Genetics</p>
            </div>

            <div className="wave d-block"></div>
          </div>

          <div id="fixer" className="fixed-element">

            <div id="parent-content" className="">
              <div id="content" className="content-container t-align-left hor-container-margin">
                <div id="inner-content" className="d-inline-block w-main">
                  <div className="d-inline-block vert-align-top">

                    <div id="text-content" className="">

                      <div>
                        <div>
                          <h2>What We Do</h2>
                          <p>Our mission is simple. Produce clean green certified, sun-grown cannabis for the modern day consumer.</p>
                          <p>Specialty strains, hand-crafted, from Mendocino County.</p>
                        </div>

                        <div>
                          <h2>Who We Are</h2>
                          <p>Integer nunc leo, efficitur sit amet nibh sit amet, accumsan feugiat diam. Sed risus purus, elementum a lobortis eget, finibus non nisi.</p>
                          <p>Nulla egestas euismod justo. Suspendisse felis ligula, tempor sit amet feugiat eget, porttitor a felis.</p>
                        </div>
                      </div>

                    </div>

                  </div>
                  <div id="social" className="social-container">
                    {/*<div className="d-inline-block w-8">*/}
                      {/*<a href="" title=""><i id="phone-button" className="fa fa-phone-square social-icon"/></a>*/}
                    {/*</div>*/}

                    <div className="d-inline-block w-8">
                      <a href="https://www.instagram.com/cowboychronicbrand/" title="Cowboy Chronic on Instagram" rel="noopener noreferrer" target="_blank"><i id="instagram-button" className="fa fa-instagram social-icon"/></a>
                    </div>

                    <div className="d-inline-block w-8">
                      <a href="mailto:cowboychronic@gmail.com" title="cowboychronic@gmail.com"><i id="email-button" className="fa fa-envelope-square social-icon"/></a>
                    </div>

                    <div className="d-inline-block w-8">
                      <a href="https://goo.gl/maps/ruspuyZ1NPr" rel="noopener noreferrer" target="_blank" title="P.O. Box 292, Redwood Valley, CA 95470"><i id="address-button" className="fa fa-globe social-icon"/></a>
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
                      <img src={leafIcon} alt="" className="certification-icons"/>
                      <p>Flowers, Extracts, & Genetics</p>
                    </div>
                    <div className="certification-pair">
                      <img src={certIcon} alt="" className="certification-icons"/>
                      <p>Clean Green Certified</p>
                    </div>
                  </div>
                  <footer id="foot" className="text-gray">
                    <p className="footer-element">2018 &copy; Cowboy Chronic Brand&trade;</p>
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
                {/*<tr>*/}
                  {/*<td className="table-label">Phone</td>*/}
                  {/*<td></td>*/}
                {/*</tr>*/}
                <tr>
                  <td className="table-label">Instagram</td>
                  <td>@cowboychronicbrand</td>
                </tr>
                <tr>
                  <td className="table-label">Email</td>
                  <td>cowboychronic@gmail.com</td>
                </tr>
                <tr>
                  <td className="table-label">Address</td>
                  <td>
                    <table>
                      <tbody>
                      <tr>
                        <td className="d-block">Cowboy Chronic Brand</td>
                        <td className="d-block">P.O. Box 292</td>
                        <td className="d-block">Redwood Valley, CA 95470</td>
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
