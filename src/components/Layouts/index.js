import React, { useState } from "react";
import { Layout, Row, Col, Input, Typography, Select } from "antd";
import "./layout.css";
import Weather from "../weather";

const { Header, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;
const { Option } = Select;

const daysList = [{ value: 3 }, { value: 5 }, { value: 7 }, { value: 14 }];

const DesignLayout = () => {
  const [searchValue, setSearchValue] = useState("kathmandu");
  const [days, setDays] = useState(7);

  const onSearch = (value) => {
    setSearchValue(value);
  };

  const handleDayChange = (value) => {
    setDays(value);
  };

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Row>
          <Col span={12} style={{ marginTop: "6px" }}>
            <Title style={{ color: "white" }}>Weather App</Title>
          </Col>
          <Col span={6}>
            <Row style={{ marginTop: "15px" }}>
              <Title
                value={3}
                style={{ color: "white", margin: 0, lineHeight: 0.8 }}
              >
                Display Days
              </Title>
              <Select
                onChange={handleDayChange}
                style={{
                  width: "100px",
                  marginRight: "20px",
                  marginLeft: "20px",
                }}
              >
                {daysList.map((day) => (
                  <Option value={day?.value} key={day?.value}>
                    {day.value}
                  </Option>
                ))}
              </Select>
            </Row>
          </Col>
          <Col span={6} style={{ marginTop: "15px" }}>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </Col>
        </Row>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 910 }}
        >
          <Weather searchValue={searchValue} days={days} />
        </div>
      </Content>
    </Layout>
  );
};

export default DesignLayout;
