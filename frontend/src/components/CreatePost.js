import { Form, Input, Button, Checkbox, Select, Alert } from 'antd';
import Wrapper from "./Wrapper";
import TextArea from 'antd/lib/input/TextArea';
import React, {useState} from 'react';
import axios from 'axios';

const CreatePost = () => {
  
 
  const [monedas, setCount] = useState(0);
  let usuariobj = localStorage.getItem("usuario");
  if( !usuariobj){
    window.location.href = "/IniciarSesion"
  }
  let usuario = JSON.parse(usuariobj);
  const onFinish = (values) => {

    let enviar = {
      ...values,
      ...{"user": usuario.nickname,
        "userPhoto": usuario.photo
    }
    }

   
    
    return fetch(
      `http://localhost:4000/api/publicacion/createpublicacion`,
      {
          crossDomain: true,
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(enviar)
      })
    .then(response => {
      let money = usuario.coins - monedas
      axios.put(`http://localhost:4000/api/Auth/${usuario._id}`, 
      {
        coins: money,
      }).then(response => {
        localStorage.clear()
        localStorage.setItem("usuario",JSON.stringify(response.data.money))
      }).then(
        () => window.location.href="/PublicacionRealizada"
      )
      //window.location.reload();
      return response.json()
  })
  .catch(err => console.log(err));
  };

  // Sección para los tags, que van hacer cursos que puede elegir el usuario
  const { Option } = Select;
  const cursos = ['Lenguaje','Literatura','Historia','Geografía','Psicología','Filosofía','Lógica','Aritmética','Álgebra','Trigonometría','Geometría','Química','Física','Biología','Anatomía','Ingles'];
  const tags =[]
  for (let i = 0; i < cursos.length; i++) {
    tags.push(<Option key={cursos[i]}>{cursos[i]}</Option>);
  }
  
  return (     
    
    <Wrapper>
      <div>
          <h2>Crear Publicación</h2>
      </div>  
      <Form 
        name="create_login"
        className="create-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        {/* Sección para el titulo */}
        <Form.Item
          name="tittle"
          className="create-form-input"
          rules={[
            {
              required: true,
              message: '¡Escribe tu titulo!',
            },
          ]}>
        <Input 
        maxLength="80"
        placeholder="Titulo" />
        </Form.Item>
        <Form.Item
          name="comment"
          className="create-form-input"
          rules={[
            {
              required: true,
              message: '¡Escribe tu publicación!',
            },
          ]}>
          {/* Sección para la descripción */}          
          <TextArea
          placeholder="Describe tu publicación usando menos de 1500 caracteres"
          rows="12"
          maxLength="1500"
          />
        </Form.Item>
        {/* Sección para las monedas */}
        <div className="coins">
        <p>Monedas:</p>
        <Form.Item 
          name="coins"
          rules={[
            {
              required: true,
              message: '¡Inserte una cantidad de monedas válidas!',
            },
            () => ({
              validator(rule, value) {
                if (value > 0){
                  if (value <= usuario.coins ) {
                    setCount(value)
                    return Promise.resolve();
                  }
                  return Promise.reject('No tiene esa cantidad de monedas disponibles ');
                }
                return Promise.reject('Debes poner una cantidad positiva');
              },
            }),
          ]}>
          <Input
            type="number"
            name="coins"
            placeholder="Ingrese sus Monedas"
          />
        </Form.Item>        
        <i>Cantidad de Monedas Disponible: {usuario.coins}</i>
        </div>
        <div className="tags">
        <p>Tags: </p>
        {/* Sección para los tags */}
        <Form.Item name="tags" className="tags__select">
        <Select
          mode="multiple"
          allowClear
          placeholder="Selecciona tus tags"
          maxTagCount={3}
        >
          {tags}
        </Select>
        </Form.Item>
        </div>
        <Form.Item>
          <Button   type="primary" htmlType="submit" className="create-form-button"  >
            Publicar
          </Button>
        </Form.Item>
      </Form>
      
    </Wrapper> 
      
    );
};

export default CreatePost;