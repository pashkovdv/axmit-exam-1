import React from "react";
import { Row, Col, Divider, Tag, } from 'antd';
import Highlighter from 'react-highlight-words';

import arrImg from '../utils/getImages';

export default function NewsItem(props) {


  return (
    <article>
      <Row>
        <Col
          xs={24} sm={7} md={6} lg={6} xl={4} xxl={3}
        >
          <img
            alt =''
            src = { arrImg.filter( val => val.id === props.img )[0].url }
            style = {{ objectFit: 'cover', width: '100%', maxHeight: '100%', marginBottom: '16px' }}
          />
          
        </Col>
        <Col
          xs={23} sm={16} md={17} lg={17} xl={19} xxl={20}
          offset={1}
        >
          <h2>
            <Highlighter
              highlightStyle = {{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords = {props.searchWords}
              autoEscape = {true}
              textToHighlight = {props.title}
            />
          </h2>
          <p style = {{ fontWeight: '500', fontSize: '16px' }} >
            { new Date(+props.date).toLocaleString() }
            <span style = {{ marginLeft: '8px' }} >
              { props.tags.map( val => <Tag key={val}>{val}</Tag> )}
            </span>
          </p>
          <p>
            <Highlighter
              highlightStyle = {{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords = {props.searchWords}
              autoEscape = {true}
              textToHighlight = {props.caption}
            />
          </p>  
        </Col>
      </Row>
      <Divider />
    </article>
  );
}