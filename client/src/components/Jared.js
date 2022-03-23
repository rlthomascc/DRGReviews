/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Redirect, Route, HashRouter, Link,
} from 'react-router-dom';


class Jared extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      copied: false
    };
  }

  copiedText(e) {
    console.log(e)
    this.setState({
      copied: e
    })
  }

  copyText() {
    /* Get the text field */
    var copyText = document.getElementById("review");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");

    this.copiedText(true);
    
    setTimeout(() => this.copiedText(false), 1000);
  }

  jared() {
    return (
      <div className="maincontainer">

        <div className="mainTextContainer">
          {/* <img width="800px" src="https://ap.rdcpix.com/1036509265/417b016b4e6aeb084d753cc5f7d23832g-c0od-w1200_h400_q100.jpg"/> */}
          <img width="800px" src="https://images.unsplash.com/photo-1544933863-582aca697094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80" />
          <br/>
          <br/>
          <br/>
          <br/>
          <p className="h1 font-weight-bold finalText" >Want to win a Tropical Getaway?!</p>
          <p className="h5"><i>Its simple! Leave us a review on Google & Zillow to enter!</i></p>
          <br/>
          <hr/>
          <br/>
          <p><b>Step 1:</b> Insert description below, then click Copy</p>
        </div>

        <textarea className="textareacontainer" id="review" rows="5" cols="70" placeholder="Write your review here. . ."></textarea>

        <div className="buttonContainer">
          <button onClick={() => this.copyText()} className={this.state.copied == false ? "btn btn-lg btn-primary" : "btn btn-success"}>{this.state.copied == false ? "Copy" : "Copied"}</button>
        </div>

        <hr/>

        <div className="reviewButtonContainer d-flex flex-column justify-content-between">
          <br/>
          <br/>
          <p><b>Step 2:</b> Click the images below to route to the review websites, 
            <br/>then paste the message you copied above.</p>
          <div className="p2">
            <a href="https://www.google.com/search?q=The+Del+Real+Group+%7C+PMZ&ludocid=16470356922505957134&lsig=AB86z5X2s57l3O7n7VKcHsKRhQC_#lrd=0x80905179bdeeba05:0xe492765b79dd0f0e,3" target="_blank">
              <img width="300px" src="https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"/>
            </a>
          </div>
          <div className="p2">
            <a href="https://www.zillow.com/reviews/write/?s=X1-ZUt0cr3mtztxc9_11xcg" target="_blank">
              <img width="300px" src="https://zillow.mediaroom.com/download/Zillow_Wordmark_Blue_RGB+lrg.png" />
            </a>
          </div>
          <br/>
          <div className="footerContainer">
          <p className="finalText"><i>Your Reviews and Referrals are greatly appreciated! 
            <br/>Thank you for taking the time of day to leave us reviews!
            <br/>
            -The Del Real Group</i></p>
            <hr/>
        </div>
          <br/>
          <div className="mainTextContainer">
            <img  width="600" src="https://images.unsplash.com/photo-1487252743978-58058cd2fc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1692&q=80" />
          </div>
          <br/>
            <p><i>For additional Entries:</i></p>
          <div className='d-flex flex-row justify-content-center'>
          <div className="p2 realtorLogo">
            <a href="https://www.realtor.com/realestateagents/daniel-del-real_modesto_ca_1204657_073494348#" target="_blank">
              <img width="150" src="https://tnrealtors.com/wp-content/uploads/2017/03/Realtor-dot-com-logo-F_RDC_RGB_Red_Black-2.jpg" />
            </a>
          </div>
          <div className="p2">
            <a href="https://www.yelp.com/writeareview/biz/q7ImrPf7UA61gH5zFhSrFA?return_url=%2Fbiz%2Fq7ImrPf7UA61gH5zFhSrFA&source=biz_details_war_button" target="_blank">
              <img width="100px" src="https://www.dwrl.utexas.edu/wp-content/uploads/2017/02/yelp-logo-vector.jpg" />
            </a>
          </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
      return (
        <div>
          {this.jared()}
        </div>
      );
    }
}


export default Jared;
