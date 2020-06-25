import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './styles.css';
import content from '../assets/content.png';
import Water from '../assets/Water.jpg';
import Air from '../assets/Air.png';
import Indoor from '../assets/Indoor.png';
import Land from '../assets/Land.png';

export default class Content extends Component {
    render() {
        return (
            <div>
                <Row className="content">
                    <Col>
                        <div className="content-text">
                        <h4>CONECTING THE DISCONNECTED</h4>
                        <h1>Vyorius brings unmanned robots together, wherever they are</h1>
                        <p>With all of the operations, commanding and maintenance tools in one place, unmanned vehicles will stay connected and productive no matter where you’re Delivering</p>
                            
                        </div>
                        <Row className="content-buttons">
                            <Col>
                                <Button>Try Vyorius</Button>
                            </Col>
                            <Col>
                                <Button>Learn More</Button>
                            </Col>
                        </Row>
                        <p>Need to order a delivery?  <span><a href="#">Get Started</a></span></p>
                    </Col>
                    <Col className="content-image">
                        <img src={content} style={{width: "inherit"}}/>
                        {/* <div id="images">
                        <Row>
                            <Col md={4}>
                                <img src={Water} />
                            </Col>
                            <Col md={{ span: 4, offset: 4 }}>
                                <img src={Air} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <img src={Indoor} />
                            </Col>
                            <Col md={{ span: 4, offset: 4 }}>
                                <img src={Land} />
                            </Col>
                        </Row>   
                        </div>                         */}
                    </Col>
                </Row>
                
            </div>
        )
    }
}
