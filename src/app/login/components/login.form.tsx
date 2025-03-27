'use client'
import { handleLoginAntd } from '@/app/user/action';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};




const LoginForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        setIsSubmitting(true);
        const result = await handleLoginAntd(values)
        console.log('Success:', result);
        setIsSubmitting(false);
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, marginTop: '50px' }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit" style={{ marginLeft: '200px' }} loading={isSubmitting}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}



export default LoginForm;
