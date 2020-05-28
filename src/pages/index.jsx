import React from 'react';
import background from '../asset/background.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import FrontPage from './front'

const Green = styled.span`
  color:#70DBB8;
`;

const Page = styled.div`
  background:url(${background}) no-repeat fixed center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
`;

const Title = styled.h1`
  font-family: Impact;
  text-align: center;
  color:palevioletred;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -200%);
`;

const HoveredButton = styled.button`
  font-family: Impact;
  color: #70DBB8;
  background: transparent;
  font-size: 1.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border: 3px solid #70DBB8;
  height: 50px;
  width: 120px;
`;

const UnhoveredButton = styled.button`
  font-family: Impact;
  color: palevioletred;
  background: transparent;
  font-size: 1.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border: 3px solid palevioletred;
  height: 50px;
  width: 120px;
`;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
        this.enter = this.enter.bind(this);
        this.leave = this.leave.bind(this);
    }

    enter() {
        this.setState({
            hover: true
        })
    }

    leave() {
        this.setState({
            hover: false
        })
    }

    render() {
        let changingButton;
        if (this.state.hover) {
            changingButton = <HoveredButton onMouseLeave={this.leave}>Start</HoveredButton>;
        } else {
            changingButton = <UnhoveredButton onMouseEnter={this.enter}>Start</UnhoveredButton>;
        }

        return (
            <Page>
                <div>
                    <Title>Start the <Green>Journal</Green>.</Title>
                </div>
                <div>
                    <Link to="/front">
                        {changingButton}
                    </Link>
                </div>
            </Page>
        )
    }
}

export default Home;