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


class Joseph extends Component {
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

  daniel() {
    return (
      <div className="maincontainer">

        <div className="mainTextContainer">
          <img width="800px" src="https://ap.rdcpix.com/1036509265/417b016b4e6aeb084d753cc5f7d23832g-c0od-w1200_h400_q100.jpg"/>
          <br/>
          <br/>
          <br/>
          <p className="font-weight-bold"><i>Step 1: Insert description below, then click Copy</i></p>
        </div>

        <textarea className="textareacontainer" id="review" rows="5" cols="70" placeholder="Write your review here. . ."></textarea>

        <div className="buttonContainer">
          <button onClick={() => this.copyText()} className={this.state.copied == false ? "btn btn-lg btn-primary" : "btn btn-success"}>{this.state.copied == false ? "Copy" : "Copied"}</button>
        </div>

        <hr/>

        <div className="reviewButtonContainer d-flex flex-column justify-content-between">
          <br/>
          <br/>
          <p className="font-weight-bold"><i>Step 2: Click the images below to route to the review websites, then paste the message you copied above.</i></p>
          <div className="p2">
            <a href="https://www.google.com/search?q=The+Del+Real+Group+%7C+PMZ&ludocid=16470356922505957134&lsig=AB86z5X2s57l3O7n7VKcHsKRhQC_#lrd=0x80905179bdeeba05:0xe492765b79dd0f0e,3" target="_blank">
              <img width="300px" src="https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"/>
            </a>
          </div>
          <div className="p2">
            <a href="https://www.zillow.com/reviews/write/?s=X1-ZU10bjllk3cl53d_agge9" target="_blank">
              <img width="300px" src="https://zillow.mediaroom.com/download/Zillow_Wordmark_Blue_RGB+lrg.png" />
            </a>
          </div>
          <div className="p2">
            <a href="https://www.realtor.com/realestateagents/joseph-bondi_modesto_ca_1242557_437994348" target="_blank">
              <img width="350px" src="https://tnrealtors.com/wp-content/uploads/2017/03/Realtor-dot-com-logo-F_RDC_RGB_Red_Black-2.jpg" />
            </a>
          </div>
          <div className="p2">
            <a href="https://www.yelp.com/writeareview/biz/q7ImrPf7UA61gH5zFhSrFA?return_url=%2Fbiz%2Fq7ImrPf7UA61gH5zFhSrFA&source=biz_details_war_button" target="_blank">
              <img width="300px" src="https://www.dwrl.utexas.edu/wp-content/uploads/2017/02/yelp-logo-vector.jpg" />
            </a>
          </div>
        </div>
        
        <hr/>

        <div className="footerContainer">
          <p className="finalText"><i>Your Reviews and Referrals are greatly appreciated! Thank you for taking the time of day to leave us reviews!
            <br/>
            <br/>
            -The Del Real Group</i></p>
        </div>
      </div>
    )
  }

  render() {
      return (
        <div>
          {this.daniel()}
        </div>
      );
    }
}


export default Joseph;
