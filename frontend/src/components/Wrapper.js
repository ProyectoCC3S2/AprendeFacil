import {Layout, Menu } from 'antd';
import { MailOutlined, UserOutlined, CloseOutlined, SketchOutlined  } from '@ant-design/icons';
import * as React from "react";
import {Link} from "react-router-dom";
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;

function Wrapper(props) {
  return (
    <Layout className="custom-layout">
      <Header>
        <Link to={"/Inicio2"}>
          <h1 className="title">
            Aprende-Facil
          </h1>
        </Link>
      </Header>
    <div>
    <Menu theme="dark" mode="horizontal" className="split-menu">
      <Menu.Item key="1">
        <Link to={"/Inicio2"}>
        HOME
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
      <Link to={"/CrearPublicacion"}>
        Crear Publicación
      </Link>
      </Menu.Item>
      <Menu.Item key="3">
      <Link to={"/RecargarMonedas"}>
        Recargar Monedas
      </Link>
      </Menu.Item>
      <Menu.Item key="4">
      <Link to={"/ConvertirMonedas"}>
        Convertir Monedas
      </Link>
      </Menu.Item>
      <SubMenu title={<span> Usuario</span>}>
        <Menu.Item key="5">
          <Link to={"/VerPerfil"}>
          <UserOutlined /> Perfil
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to={"/Inicio2"}>
          <MailOutlined /> Mensajes
          </Link>
        </Menu.Item>
        <Menu.Item key="7">
          <SketchOutlined />Monedas: 100
        </Menu.Item>
        <Menu.Item key="8">
          <Link to={"/IniciarSesion"}>
          <CloseOutlined /> Salir
          </Link>
        </Menu.Item>
      </SubMenu>
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

export default Wrapper
