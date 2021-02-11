import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Wrapper2 from "./Wrapper2";


const NormalLoginForm = () => {
  const onFinish = (values) => {
   return fetch(
      `http://localhost:4000/api/auth/signin`,
      {
          crossDomain:true,
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(values),
      })
    .then(response => { 
      response.json().then(data => localStorage.setItem("usuario",JSON.stringify(data)))
      let usuariobj = localStorage.getItem("usuario")
      let user = JSON.parse(usuariobj)
      if(user.nickname==null){
        alert('usuario no encontrado')
      }else{
        window.location.href = "/Inicio2"
      }

    })
    .catch(error => console.log(error))
  };
  

  return (     
    <Wrapper2>
      <div>
          <h2>Iniciar sesión</h2>
      </div>  
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="nickname"
          rules={[
            {
              required: true,
              message: '¡Ingresa tu nombre de usuario!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '¡Ingresa tu contraseña!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Contraseña"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recuerdame</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Recordar contraseña
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Ingresar
          </Button>
          O <a href="/Registrarse">¡Registrarse Ahora!</a>
        </Form.Item>
      </Form>
    </Wrapper2> 

  );
};

export default NormalLoginForm;