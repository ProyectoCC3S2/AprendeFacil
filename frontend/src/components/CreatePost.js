import { Form, Input, Button, Checkbox, Select } from 'antd';
import Wrapper from "./Wrapper";
import TextArea from 'antd/lib/input/TextArea';


const CreatePost = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const { Option } = Select;
  const cursos = ['Lenguaje','Literatura','Historia','Geografía','Psicología','Filosofía','Aritmetica','Álgebra','Trigonometría','Geometría','Química','Física','Biología','Anatomía','Ingles'];
  const tags =[]
  for (let i = 0; i < cursos.length; i++) {
    tags.push(<Option key={i}>{cursos[i]}</Option>);
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
        <Form.Item
          name="Tittle"
          className="create-form-input"
          rules={[
            {
              required: true,
              message: 'Please input your Tittle!',
            },
          ]}
        >
        <Input 
        maxLength="80"
        placeholder="Tittle" />
        </Form.Item>
        <Form.Item
          name="Description"
          className="create-form-input"
          rules={[
            {
              required: true,
              message: 'Write your post...',
            },
          ]}
        >
          
          <TextArea
          placeholder="Describe your post in less than 1500 characters"
          rows="12"
          maxLength="1500"
          />
        </Form.Item>
        <div className="tags">
        <p>Tags: </p>
        <Form.Item className="tags__select">
        <Select
          mode="multiple"
          allowClear
          placeholder="Select your tags"
          maxTagCount={3}
        >
          {tags}
        </Select>
        </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="create-form-button">
            Publicar
          </Button>
        </Form.Item>
      </Form>
    </Wrapper> 

  );
};

export default CreatePost;