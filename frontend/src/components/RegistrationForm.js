import React, {useState} from 'react';
import {
  Form,
  Input,
  Tooltip,
  Select,
  Checkbox,
  Button,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import Wrapper2 from "./Wrapper2";
import Axios from 'axios';


const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 5,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 15,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 4,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const [first_name, setfirst] = React.useState('');
  const [last_name, setlast] = React.useState('');
  const [email, setemail] = React.useState('');
  const [nickname, setnickname] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [phone, setphone] = React.useState('');

  //const registrar = async() => {
    //const NuevoUsuario = {first_name, last_name, email, nickname, password, phone}
    //const respuesta = await Axios.post('http://localhost:4000/api', NuevoUsuario)
   // console.log(respuesta)
    //console.log(NuevoUsuario)
  //};

  const onFinish = (values) => {
    return fetch(
      
      `http://localhost:4000/api/auth/signup`,
      {
          crossDomain:true,
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(values),
      })
    .then(response => {
      window.location.href="/IniciarSesion"
      return response.json()
    })
    .catch(err => console.log(err));
    };

  const [nseguridad, setCount] = useState(0);

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="51">+51</Option>
      </Select>
    </Form.Item>
  );

  var letras="abcdefghyjklmnñopqrstuvwxyz";

  function tiene_letras(texto){
    texto = texto.toLowerCase();
    for(var i= 0; i<texto.length; i++){
        if (letras.indexOf(texto.charAt(i),0)!=-1){
          return 1;
        }
    }
    return 0;
  }

  var numeros="0123456789";

  function tiene_numeros(texto){
    for(var i=0; i<texto.length; i++){
        if (numeros.indexOf(texto.charAt(i),0)!=-1){
          return 1;
        }
    }
    return 0;
  }

  var letras="abcdefghyjklmnñopqrstuvwxyz";

  function tiene_minusculas(texto){
    for(var i=0; i<texto.length; i++){
        if (letras.indexOf(texto.charAt(i),0)!=-1){
          return 1;
        }
    }
    return 0;
  }

  var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

  function tiene_mayusculas(texto){
    for(var i=0; i<texto.length; i++){
        if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
          return 1;
        }
    }
    return 0;
  }

  function seguridad_clave(clave){
    var seguridad = 0;
    if (clave.length!=0){
       if (tiene_numeros(clave) && tiene_letras(clave)){
          seguridad += 30;
       }
       if (tiene_minusculas(clave) && tiene_mayusculas(clave)){
          seguridad += 30;
       }
       if (clave.length >= 5 && clave.length <= 6){
          seguridad += 10;
       }else{
          if (clave.length >= 7 && clave.length <= 8){
             seguridad += 30;
          }else{
             if (clave.length > 8){
                seguridad += 40;
             }
          }
       }
    }
    return seguridad            
 }   

 function seguridad_clave_valor(clave){
    if(seguridad_clave(clave)>=0 && seguridad_clave(clave)<10){
      return 'Nulo';
    }
    else{
      if(seguridad_clave(clave)>=10 && seguridad_clave(clave)<30){
        return 'Muy Bajo';
      }
      else{
        if(seguridad_clave(clave)>=30 && seguridad_clave(clave)<50){
          return 'Bajo';
        }
        else{
          if(seguridad_clave(clave)>=50 && seguridad_clave(clave)<80){
            return 'Medio';
          }
          else{
            if(seguridad_clave(clave)>=80 && seguridad_clave(clave)<100 ){
              return 'Alto';
            }
            else{
              if(seguridad_clave(clave)==100){
                return 'Muy Alto';
              }     
            }         
          }         
        }         
      }        
    }       
}   
 
 const security = (
  <Form.Item name="afterix" style ={{width: "210px", height: "6px"}}>
    <i
     
    >
      Nivel de Seguridad: {seguridad_clave_valor(nseguridad)}
    </i>
  </Form.Item>
);


  return (
    <Wrapper2>
      <div>
          <h2>Registrarse</h2>
      </div>  

      <Form
        {...formItemLayout}
        form={form}
        name="register"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        scrollToFirstError
        className="register-form"
      >
        <Form.Item
          name="first_name"
          label="Nombre"
          rules={[
            {
              required: true,
              message: 'Es necesario ingresar su nombre',
            },
          ]}
          onChange = {e=>setfirst(e.target.value)}
        >
          <Input />
        </Form.Item>
        

        <Form.Item
          name="last_name"
          label="Apellidos"
          rules={[
            {
              required: true,
              message: 'Es necesario ingresar sus apellidos',
            },
          ]}
          onChange = {e=>setlast(e.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'Ingresaste un correo no valido',
            },
            {
              required: true,
              message: '¡Por favor, ingrese su email!',
            },
          ]}
          onChange = {e=>setemail(e.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Contraseña"
          rules={[
            {
              required: true,
              message: '¡Por favor, ingrese su contraseña!',
            },
            () => ({
              validator(rule, value) {
                setCount(value)
                if(value.length>4){
                  return Promise.resolve();
                }
                return Promise.reject('Su contraseña debe tener mínimo 5 caracteres');
              },
            }),
          ]}
          hasFeedback
          onChange = {e=>setpassword(e.target.value)}
        >
        <Input.Password 
          addonAfter = {security}
        /> 
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirmar Contraseña"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Por favor confirma tu contraseña',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('Las contraseñas que has ingresado no coinciden');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nickname"
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title="¿Con que nombre te gustaría que te conozcan en nuestra app?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: 'Ingresa tu nickname',
              whitespace: true,
            },
          ]}
          onChange = {e=>setnickname(e.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Telefono"
          
          rules={[
            {
              required: false,
              message: 'Ingresa tu número de telefono',
            },
          ]}
          onChange = {e=>setphone(e.target.value)}
        >
          <Input
          required pattern="\d{9}"
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
            
          />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('Acepta los términos y condiciones'),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            He leído los <a href="">Términos y Condiciones</a>.
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </Wrapper2>
  );
};

export default RegistrationForm;