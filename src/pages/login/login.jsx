import React from 'react';
import logo from './images/logo.png';
import './login.less'
import {Form,Button,Input,Icon} from 'antd'

const Item = Form.Item
export default class Login extends React.Component{
  
   render(){
    return (
        <div className="login">
          <header className="login-header">
            <img src={logo} alt="logo"/>
            <h1>React项目: 后台管理系统</h1>
          </header>
          <section className="login-content">
            <h2>用户登陆</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />
            </Item>
            <Item>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登 陆
              </Button>
            </Item>
          </Form>
          </section>
        </div>
        
      )
   }

}
