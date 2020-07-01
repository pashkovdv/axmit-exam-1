import React from 'react';
import './App.css';
import { Row, Col, } from 'antd';

import Carousel from './components/Carousel'
import NewsFeed from './components/NewsFeed'

function App() {
  return (
    <div className='app-container'>
      <Row>
        <Col span={22} offset={1}>
          <Carousel />
        </Col>
      </Row>
      <Row>
        <Col span={22} offset={1}>
          <NewsFeed />
        </Col>
      </Row>
    </div>
  );
}

export default App;
