import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Modal} from 'antd';

import "./Carousel.css";

import arrImg from '../utils/getImages';

const DELTA = 0;
const IMG_WIDTH = 350;

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

    const _blocks = arrImg.map( val =>
      <div
        key = { val.id }
        onClick = { () => this.handleImgClick(val.url) }
        className = 'img-container'
        style = {{ width: IMG_WIDTH+'px' }}
      >
        <img
          alt = '' // т.к. ругаются валидаторы
          src = {val.url}
          className = 'img-carousel'
          style = {{ width: IMG_WIDTH+'px' }}
        />
      </div>
    )

    return (
      <header>
        <Slider {...settings}>
          {_blocks}
        </Slider>
        <Modal
          visible = {this.state.showModal}
          maskClosable = {true}
          onCancel = {this.handleClose}
          footer = {null}
          destroyOnClose = {true}
          style = {{ top: '40px' }}
        >
          <img
            alt = ''
            src = {this.state.imgModal} 
            style = {{ width: '100%', height: '100%'}}
          />
        </Modal>
      </header>
    );
  }
}