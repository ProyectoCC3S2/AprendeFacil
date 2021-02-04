import {Layout, Menu } from 'antd';
import { MailOutlined, UserOutlined, CloseOutlined, SketchOutlined  } from '@ant-design/icons';
import * as React from "react";
import {Link} from "react-router-dom";
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;

function Wrapper2(props) {
  return (
    <Layout className="custom-layout">
      <Header>
        <Link to={"/"}>
          <h1 className="title">
            Aprende-Facil
          </h1>
        </Link>
      </Header>
    <div>
    <Menu theme="dark" mode="horizontal" className="split-menu">
      <Menu.Item key="1">
        <Link to={"/"}>
        Inicio
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={"/IniciarSesion"}>
        Iniciar Sesión
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
      <Link to={"/Registrarse"}>
        Registrarse
        </Link>
      </Menu.Item>
    </Menu>
    </div>
      <Content style={{ padding: '0 50px', marginTop: '50px' }}>
        <div className="site-layout-content">
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Desarrollado por: Cesar, Rosa, Danilo y Gabriel.</Footer>
    </Layout>
  )
}

export default Wrapper2