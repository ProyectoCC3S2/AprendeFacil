import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Wrapper from "./Wrapper";
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';

const CreatePost = () => {


  const onFinish = (values) => {
    console.log('Received values of form: ', values);

    const publicacion = { values };
    axios.post('http://localhost:4000/api/publicacion/createpublicacion', publicacion)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

  };
  
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
          name="title"
          className="create-form-input"
          rules={[
            {
              required: true,
              message: 'Please input your title!',
            },
          ]}
        >
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