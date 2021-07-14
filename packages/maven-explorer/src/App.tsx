import React from 'react';
import './App.scss';
import {Breadcrumb, Layout} from "antd";
import {Content} from 'antd/lib/layout/layout';
import {Footer} from "antd/es/layout/layout";
import {
  Link,
  useLocation,
} from "react-router-dom";

function App() {
  let location = useLocation();
  let path = location.pathname.split("/").filter(a => a !== "");

  const folders: ({ link: string; text: string })[] = [
    {
      link: "/",
      text: "Home"
    },
    ...path.map((folder, i) => {
      return {
        link: `/${path.slice(0, i + 1).join("/")}/`,
        text: folder
      }
    })
  ]

  ;

  return (
    <div className="App">
        <Layout className="layout">
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {folders.map(ele => {
                return (<Breadcrumb.Item>
                  <Link to={ele.link} key={ele.link}>{ele.text}</Link>
                </Breadcrumb.Item>)
              })}
            </Breadcrumb>
            <div className="site-layout-content">Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Sekwah Maven - Want to ask about a library? <a href={"http://discord.sekwah.com/"}>Join the Discord!</a></Footer>
        </Layout>
    </div>
  );
}

export default App;
