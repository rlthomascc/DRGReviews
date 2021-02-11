/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Route, HashRouter, BrowserRouter, Redirect, Router,
} from 'react-router-dom';
import Daniel from './components/Daniel';
import Andy from './components/Andy';
import Carlos from './components/Carlos';
import Don from './components/Don';
import Patty from './components/Patty';
import Amanda from './components/Amanda';
import Randy from './components/Randy';
import Michael from './components/Michael';
import Jennifer from './components/Jennifer';
import Joseph from './components/Joseph';
import Home from './components/Home';
import Matt from './components/Matt';
import Nathan from './components/Nathan'

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    };
  }

  changeAddress(address) {
    this.setState({
      address,
    });
  }

  render() {
    return (
      <HashRouter>
        <div>
        <div>
            <Route
              path="/"
              exact
              strict
              render={() => (
                <Home />
              )}
            />
          </div>
          <div>
            <Route
              path="/Daniel-Del-Real"
              exact
              strict
              render={() => (
                <Daniel />
              )}
            />
          </div>
          <div>
            <Route
              path="/Indalecio-Del-Real"
              exact
              strict
              render={() => (
                <Andy />
              )}
            />
          </div>
          <div>
            <Route
              path="/Carlos-Gutierrez"
              exact
              strict
              render={() => (
                <Carlos changeAddress={this.changeAddress.bind(this)} />
              )}
            />
          </div>
          <div>
            <Route
              path="/Don-Wright"
              exact
              strict
              render={() => (
                <Don changeAddress={this.changeAddress.bind(this)} />
              )}
            />
          </div>
          <div>
            <Route
              path="/Patty-Servin-Martinez"
              exact
              strict
              render={() => (
                <Patty changeAddress={this.changeAddress.bind(this)} />
              )}
            />
          </div>
          <div>
            <Route
              path="/Amanda-Stallcup"
              exact
              strict
              render={() => (
                <Amanda changeAddress={this.changeAddress.bind(this)} />
              )}
            />
          </div>
          <div>
            <Route
              path="/Randy-Thomas"
              exact
              strict
              render={() => (
                <Randy changeAddress={this.changeAddress.bind(this)} />
              )}
            />
          </div>
          <div>
            <Route
              path="/Michael-Meneses"
              exact
              strict
              render={() => (
                <Michael changeAddress={this.changeAddress.bind(this)} />
              )}
            />
          </div>
          <div>
            <Route
              path="/Jennifer-Gonzales"
              exact
              strict
              render={() => (
                <Jennifer changeAddress={this.changeAddress.bind(this)} />
              )}
            />
          </div>
          <div>
            <Route
              path="/Joseph-Bondi"
              exact
              strict
              render={() => (
                <Joseph changeAddress={this.changeAddress.bind(this)} />
              )}
            />
          </div>
          <div>
            <Route
              path="/Matt-Foster"
              exact
              strict
              render={() => (
                <Matt changeAddress={this.changeAddress.bind(this)} />
              )}
            />
          </div>
          <div>
            <Route
              path="/Nathan-Steingrebe"
              exact
              strict
              render={() => (
                <Nathan changeAddress={this.changeAddress.bind(this)} />
              )}
            />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
