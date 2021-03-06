
import { Form, Select, Input, Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import '../../styles/styles.scss';
import Logo from '../../assets/logo.svg';
import ImageUpload from "./ImageUpload";

const { Option } = Select;
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const {TextArea} = Input;
class CharacteristicForm extends React.Component{

    constructor(props){
        super(props);
        this.child = React.createRef();
        this.state = {
            fileUploading: false
        }
    }

    handleSubmit = () => {
        this.props.form.validateFields((err, values) => {

            if (!err) {
                console.log('Received values of form: ', values);
            }
            const newValues = {...values};

            /**
             * TODO: Obviously not safe since if the registration flow abrupts then rubbish
             * avatar would be stored in S3 buckets
             */
            this.setState({fileUploading:true});
            this.child.current.handleUpload(this.props.email).then((response)=>{
                newValues['avatarKey'] = response.key;
                this.props.nextStep(newValues);
            });

        });

    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='form-dashboard-container'>
                <img src={Logo} className="logo-image"/>

                <div className='form-container'>
                    <h2>Please tell us more about you: </h2>
                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                        <Form.Item label="Avatar">
                            {getFieldDecorator('avatar', {
                                rules: [{ required: false, message: 'Please select an avatar!' }],
                            })(
                                <ImageUpload ref={this.child}/>
                            )}

                        </Form.Item>
                        <Form.Item label="FirstName">
                            {getFieldDecorator('firstName', {
                                rules: [{ required: true, message: 'Please enter your first name!' }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>
                        <Form.Item label="LastName">
                            {getFieldDecorator('lastName', {
                                rules: [{ required: true, message: 'Please enter your last name!' }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>
                        <Form.Item label="AgeRange">
                            {getFieldDecorator('ageRange', {
                                rules: [{ required: true, message: 'Please select your age range!' }],
                            })(
                                <Select
                                    placeholder="Enter your age range"
                                    onChange={this.handleSelectChange}
                                >
                                    <Option value="0-10">0-10</Option>
                                    <Option value="11-20">11-20</Option>
                                    <Option value="21-30">21-30</Option>
                                    <Option value="31-40">31-40</Option>
                                    <Option value="41-50">41-50</Option>
                                    <Option value="51 or older">51 or older</Option>
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item label="Sex">
                            {getFieldDecorator('sex', {
                                rules: [{ required: true, message: 'Please select your sexual orientation!' }],
                            })(
                                <Select
                                    placeholder="Enter your gender"
                                    onChange={this.handleSelectChange}
                                >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item label="Country">
                            {getFieldDecorator('country', {
                                rules: [{ required: true, message: 'Please select your country!' }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>

                        <Form.Item label="Intro">
                            {getFieldDecorator('intro', {
                                rules: [{ required: false, message: 'Please use one sentence to describe yourself!' }],
                            })(
                                <TextArea rows={4} maxLength={100}/>
                            )}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>

                        {
                            this.state.fileUploading  ? (

                                    <Button type="primary" loading>
                                        Loading
                                    </Button>
                                ) :
                                (

                                        <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
                                            Submit
                                        </Button>

                                )
                        }
                        </Form.Item>

                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedCharacteristicForm = Form.create({ name: 'characteristic' })(CharacteristicForm);

export default WrappedCharacteristicForm;

