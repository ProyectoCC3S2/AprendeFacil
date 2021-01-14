import { Form, Input, Button, Checkbox, Select } from 'antd';
import Wrapper from "./Wrapper";
import TextArea from 'antd/lib/input/TextArea';
import {Link} from "react-router-dom";
import apiCore from './apiCore';
import postPublicacion from './apiCore';

const CreatePost = () => {
  const onFinish = (values) => {
    return fetch(
      `http://localhost:4000/api/publicacion/createpublicacion`,
      {
          crossDomain:true,
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(values),
      })
    .then(response => {
      console.log(response)
      return response.json()
  })
  .catch(err => console.log(err));
  };

  const { Option } = Select;
  const cursos = ['Lenguaje','Literatura','Historia','Geografía','Psicología','Filosofía','Aritmetica','Álgebra','Trigonometría','Geometría','Química','Física','Biología','Anatomía','Ingles'];
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
          name="title"
          className="create-form-input"
          rules={[
            {
              required: true,
              message: '¡Escribe tu titulo!',
            },
          ]}>
        <Input 
        maxLength="80"
        placeholder="title" />
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
        <p>Modenas:</p>
        <Form.Item 
          name="coins"
          rules={[
            {
              required: true,
              message: '¡Inserte una cantidad de monedas válidas!',
            },
          ]}>
          <Input
            type="number"
            name="coins"
            placeholder="Ingrese sus Monedas"
          />
        </Form.Item>
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
          <apiCore>
          <Button  type="primary" htmlType="submit" className="create-form-button">
            <Link to={"/PublicacionRealizada"}>
            Publicar
            </Link>
          </Button>
          </apiCore>
        </Form.Item>
      </Form>
    </Wrapper> 

  );
};

export default CreatePost;