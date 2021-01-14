import { Form, Input, Button } from 'antd';
import React from 'react';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
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

class Tarjeta extends React.Component{
	render() {
		const onFinish = (values) => {
			this.props.parentCallback()
			console.log('Received values of form: ', values);
		};
		return(
			<div>
				<h3>Datos de su Tarjeta</h3>
				<Form
					{...formItemLayout}
					name="tarjeta"
					className="tarjeta-form"
					onFinish={onFinish}
				>
					<Form.Item
					  name="numero"
					  label="Número"
					  rules={[
						{
						  required: true,
						  message: 'Campo requerido',
						},
					  ]}
					  >
						<Input
						//type=""
					  />
					</Form.Item>
					<Form.Item
					  name="dni"
					  label="DNI"
					  rules={[
						{
						  required: true,
						  message: 'Campo requerido',
						},
					  ]}
					  >
						<Input
						//type=""
					  />
					</Form.Item>
					<Form.Item
					  name="date"
					  label="Fecha de Vencimiento"
					  rules={[
						{
						  required: true,
						  message: 'Campo requerido',
						},
					  ]}
					  >
						<Input
						//type=""
					  />
					</Form.Item>
					<Form.Item
					  name="cvc"
					  label="CVC"
					  rules={[
						{
						  required: true,
						  message: 'Campo requerido',
						},
					  ]}
					  >
						<Input
						//type=""
					  />
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
					  <Button type="primary" htmlType="submit">
						Continuar
					  </Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
};

export default Tarjeta;
