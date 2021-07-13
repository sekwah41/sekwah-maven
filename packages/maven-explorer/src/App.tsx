import React from 'react';
import './App.scss';
import {Breadcrumb, Layout} from "antd";
import {Content} from 'antd/lib/layout/layout';
import {Footer} from "antd/es/layout/layout";

function App() {

  return (
    <div className="App">

      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>com</Breadcrumb.Item>
            <Breadcrumb.Item>sekwah</Breadcrumb.Item>
            <Breadcrumb.Item>SekCLib</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Sekwah Maven - Want to ask about a library? <a href={"http://discord.sekwah.com/"}>Join the Discord!</a></Footer>
      </Layout>
    </div>
  );
}

export default App;
