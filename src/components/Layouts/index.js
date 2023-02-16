import React, { useState } from "react";
import { Layout, Row, Col, Input, Typography } from "antd";
import "./layout.css";
import Weather from "../weather";
import { Switch } from "antd";

const { Header, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;

const DesignLayout = () => {
  const [searchValue, setSearchValue] = useState("kathmandu");
  const [checked, setChecked] = useState("");

  const onSearch = (value) => {
    setSearchValue(value);
  };

  const onChange = (checked) => {
    setChecked(checked);
  };

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Row>
          <Col span={8} style={{ marginTop: "6px" }}>
            <Title style={{ color: "white" }}>Weather App</Title>
          </Col>
          <Col span={8}>
            <Switch onChange={onChange} />
          </Col>
          <Col span={8} style={{ marginTop: "15px" }}>
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
          <Weather searchValue={searchValue} checked={checked} />
        </div>
      </Content>
    </Layout>
  );
};

export default DesignLayout;
