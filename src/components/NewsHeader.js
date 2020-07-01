import React from "react";
import { Row, Col, Divider, Form, Select, Input } from 'antd';

import arrTags from '../utils/getTags';

const { Option } = Select;
const { Search } = Input;

export default function NewsItem(props) {
  return (
    <div>
      <Divider />
      <Form initialValues = {{order: props.order}} >
      <Row gutter='16'>
        <Col xs={24} md={24} xl={8} >
          <Form.Item>
            <Search
              placeholder = "Search"
              onSearch = { props.searchText }
              allowClear
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={8} >
          <Form.Item name = "order">
            <Select
              placeholder = "Select order"
              onChange = {props.onOrderChange}
            >
              <Option value = "date">Order by date</Option>
              <Option value = "abc">Order by ABC</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={8} >
          <Form.Item name = "filter">
            <Select
              placeholder = "Filter by category"
              onChange = {props.onFilterChange}
              allowClear
            >
              { arrTags.map( (v,i) => <Option key = {i} value = {v} >{v}</Option> ) } {/* набор опций составляем из тегов новостей */}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      </Form>
    </div>
  )
}