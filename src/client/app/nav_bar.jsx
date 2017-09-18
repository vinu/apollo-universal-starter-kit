import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';

import modules from '../modules';

class NavBar extends React.Component {
  state = {
    current: 'home'
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Row gutter={8}>
        <Col span={14}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            theme="dark"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home">
              <Link to="/">Apollo Starter Kit</Link>
            </Menu.Item>
            {modules.navItems}
          </Menu>
        </Col>
        <Col span={10}>
          <Menu
            mode="horizontal"
            theme="dark"
            style={{ lineHeight: '64px', float: 'right' }}
          >
            {modules.navItemsRight}
            {__DEV__ && (
              <Menu.Item>
                <a href="/graphiql">GraphiQL</a>
              </Menu.Item>
            )}
          </Menu>
        </Col>
      </Row>
    );
  }
}

export default NavBar;
