import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './styles.css';
import content from '../assets/content.png';

export default class Content extends Component {
    render() {
        return (
            <div>
                <Row className="content">
                    <Col lg={6} md={12} sm={12}>
                        <div className="content-text">
                        <p id="title">CONECTING THE DISCONNECTED</p>
                        <h1><span style={{color:"#ed7d31"}}>Vyorius</span> brings unmanned robots <span style={{color:"#ed7d31"}}>together</span>, wherever they are</h1>
                        <p>With all of the operations, commanding and maintenance tools in one place, unmanned vehicles will stay connected and productive no matter where you’re Delivering</p> 
                        </div>
                        <Row className="content-buttons">
                            <Col>
                                <Button id="try-button">Try Vyorius</Button>
                            </Col>
                            <Col>
                                <Button id="learn-button">Learn More</Button>
                            </Col>
                        </Row>
                        <p id="get-started">Need to order a delivery?  <span style={{textDecoration: "underline"}}><a href="#">Get Started</a></span></p>
                    </Col>
                    <Col  lg={6} md={12} sm={12} className="content-image">
                        <img src={content} style={{width: "inherit"}}/>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
