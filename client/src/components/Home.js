import React, { Component } from 'react';

class Agent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daniel1: 'https://i.imgur.com/ZJTmOVT.png',
            andy1: 'https://i.imgur.com/oI1rYR1.png',
            carlos1: "https://i.imgur.com/zUw70nm.png",
            don1: 'https://i.imgur.com/1opwNKq.png',
            patty1: "https://i.imgur.com/BkqWKjC.png",
            amanda1: "https://i.imgur.com/NFJgzHz.png",
            joseph1: "https://i.imgur.com/NC56MmH.png",
            jennifer1: "https://i.imgur.com/LQmUbpf.jpg",
            randy1: "https://i.imgur.com/4XmxoVF.png",
            michael1: "https://i.imgur.com/rxtf6II.jpg",
            matt1: 'https://i.imgur.com/H0yBkuw.png',
            nathan1: 'https://i.imgur.com/gsLF5Ba.png',
            jennapher1: 'https://i.imgur.com/ynyxlaK.png',
            jared1: 'https://i.imgur.com/RmAcRZo.png',
            james1: 'https://i.imgur.com/SJ3N2ac.png',
            eddie1: 'https://i.imgur.com/0EPgCic.png',
            reroute: '-'
        }
    }

    agentChoice() {
        return (
            <div className="homecontainer">
                <h1 className="font-weight-bold">Which Group Member <br />would you like to leave a Review for?</h1>
                <p><i>Select your Realtor® below.</i></p>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <a id="danielAgent" href="/#/Daniel-Del-Real"><img src={this.state.daniel1} width="300px" height="300px" /></a>
                        <p><b>Daniel Del Real, CRS </b><br />Broker Associate</p>
                        </div>
                        <div className="col">
                        <a id="andyAgent" href="/#/Indalecio-Del-Real"><img src={this.state.andy1} width="300px" height="300px" /></a>
                        <p><b>Indalecio 'Andy' Del Real, CRS </b><br />Broker Associate</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <a id="carlosAgent" href="/#/Carlos-Gutierrez"><img src={this.state.carlos1} width="300px" height="300px" /></a>
                        <p><b>Carlos Gutierrez</b> <br />Realtor®</p>
                        </div>
                        <div className="col">
                        <a id="donAgent" href="/#/Don-Wright"><img src={this.state.don1} width="300px" height="300px" /></a>
                        <p><b>Don Wright</b> <br />Realtor®</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <a id="pattyAgent" href="/#/Patty-Servin-Martinez"><img src={this.state.patty1} width="300px" height="300px" /></a>
                        <p><b>Patricia Servin-Martinez</b> <br />Realtor®</p>
                        </div>
                        <div className="col">
                        <a id="amandaAgent" href="/#/Amanda-Stallcup"><img src={this.state.amanda1} width="300px" height="300px" /></a>
                        <p><b>Amanda Stallcup</b> <br />Realtor®</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                        <a id="randyAgent" href="/#/Randy-Thomas"><img src={this.state.randy1} width="250px" height="250px" /></a>
                        <br />
                        <br />
                        <p><b>Randy Thomas</b> <br />Realtor®</p>
                        </div>
                        <div className="col">
                        <a id="michaelAgent" href="/#/Michael-Meneses"><img src={this.state.michael1} width="250px" height="250px" /></a>
                        <br />
                        <br />

                        <p><b>Michael Meneses</b> <br />Realtor®</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                        <a id="jennyAgent" href="/#/Jenny-Bell"><img src={this.state.jennapher1} width="250px" height="250px" /></a>
                        <br />
                        <br />
                        <p><b>Jennapher Bell</b> <br />Realtor®</p>
                        </div>
                        <div className="col">
                        <a id="jaredAgent" href="/#/Jared-Howell"><img src={this.state.jared1} width="250px" height="250px" /></a>
                        <br />
                        <br />

                        <p><b>Jared Howell</b> <br />Realtor®</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                        <a id="nathanAgent" href="/#/Nathan-Steingrebe"><img src={this.state.nathan1} width="250px" height="250px" /></a>
                        <p><b><br />Nathan Steingrebe</b> <br />Realtor®</p>
                        </div>
                        <div className="col">
                        <a id="mattAgent" href="/#/Matt-Foster"><img src={this.state.matt1} width="250px" height="250px" /></a>
                        <p><b><br />Matt Foster</b> <br />Realtor®</p>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                        <a id="eddieAgent" href="/#/Eddie-Sanchez"><img src={this.state.eddie1} width="250px" height="250px" /></a>
                        <p><b><br />Eddie Sanchez</b> <br />Realtor®</p>
                        </div>
                        <div className="col">
                        <a id="jamesAgent" href="/#/James-Garcia"><img src={this.state.james1} width="250px" height="250px" /></a>
                        <p><b><br />James Garcia</b> <br />Realtor®</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                        <a id="jenniferAgent" href="/#/Jennifer-Gonzales"><img src={this.state.jennifer1} width="250px" height="250px" /></a>
                        <p><b><br />Jennifer Edwards</b> <br />Realtor®</p>
                        </div>
                        <div className="col">
                        <a id="josephAgent" href="/#/Joseph-Bondi"><img src={this.state.joseph1} width="250px" height="250px" /></a>
                        <p><b><br />Joseph Bondi, CRS</b> <br />Senior Advisor</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    render() {
        return (
            this.agentChoice()
        );
    }
}

export default Agent;