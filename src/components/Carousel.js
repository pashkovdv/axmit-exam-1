import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Modal} from 'antd';

import "./Carousel.css";

import arrImg from '../utils/getImages';

const DELTA = 0;
const IMG_WIDTH = 350;

const getWindowWidth = function() {
  let w = window,
  d = document,
  documentElement = d.documentElement,
  body = d.getElementsByTagName('body')[0];
  
  return w.innerWidth || documentElement.clientWidth || body.clientWidth;
}

export default class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      imgModal: undefined,
    }
  }

  handleImgClick = (imgUrl) => {
    this.setState({
      showModal: true,
      imgModal: imgUrl,
    });
  }

  handleClose = () => {
    this.setState({
      showModal: false,
      imgModal: undefined,
    });
  }

  render() {

    const settings = {
      infinite: true,
      arrows: true,
      autoplay: true,
      pauseOnHover: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 5*IMG_WIDTH - DELTA,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 4*IMG_WIDTH - DELTA,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 3*IMG_WIDTH - DELTA,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 2*IMG_WIDTH - DELTA,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: IMG_WIDTH - DELTA,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const _blocks = arrImg.map( (v,i) =>
      <div
        key = {i}
        onClick = { () => this.handleImgClick(v) }
        style = {{ overflow: 'hidden', width: IMG_WIDTH+'px', height: '200px'}}
      >
        <img
          alt = ''
          src = {v}
          style = {{ objectFit: 'cover', width: IMG_WIDTH+'px', height: '200px'}}
        />
      </div>
    )

    return (
      <div>
        <Slider {...settings}>
          {_blocks}
        </Slider>
        <Modal
          visible = {this.state.showModal}
          onOk = {this.handleClose}
          onCancel = {this.handleClose}
          width = { getWindowWidth() * 0.75 }
          maskClosable = {true}
          destroyOnClose = {true}
          style = {{ top: '40px' }}
        >
          <img
            alt = ''
            src = {this.state.imgModal} 
            style = {{ width: '100%', height: '100%'}}
          />
        </Modal>
      </div>
    );
  }
}