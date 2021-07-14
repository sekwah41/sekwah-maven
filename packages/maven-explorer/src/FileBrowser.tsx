import React, {useEffect, useState} from "react";
import {Breadcrumb, Layout, Table} from "antd";
import {Link, useLocation,} from "react-router-dom";
import Column from 'antd/lib/table/Column';

const {Content, Footer} = Layout;


function FileBrowser() {


    let location = useLocation();
    let path = location.pathname.split("/").filter(a => a !== "");

    let [files, setFiles] = useState<string[]>([]);

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
    ];

    const data = [
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    useEffect(() => {
        console.log("SOMETHING CHANGED");
        fetch('./testdata/data.json').then(async file => {
            let info = await file.text();
            setFiles(["HELLO"]);
        });
    }, [location.pathname]);

    return (<Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                {folders.map((ele, i) => {
                    return (<Breadcrumb.Item key={ele.link}>
                        <Link to={ele.link}>{ele.text}</Link>
                    </Breadcrumb.Item>)
                })}
            </Breadcrumb>
            <div className="site-layout-content">
                <Table dataSource={data}>
                    <Column title="Name" dataIndex="name" key="name" />
                </Table>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Sekwah Maven - Want to ask about a library? <a href={"http://discord.sekwah.com/"}>Join the Discord!</a></Footer>
    </Layout>);
}

export default FileBrowser;
