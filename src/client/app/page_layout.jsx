import React from 'react';
import PropTypes from 'prop-types';

import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';
import { Layout } from 'antd';

import NavBar from './nav_bar';

const { Header, Content, Footer } = Layout;

const Page = ({ children, navBar }) => {
  return (
    <LocaleProvider locale={enUS}>
      <Layout>
        <Header>{navBar !== false && <NavBar />}</Header>
        <Content
          id="content"
          style={{ background: '#fff', padding: 24, minHeight: 280 }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          &copy; 2017. Example Apollo App.
        </Footer>
      </Layout>
    </LocaleProvider>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  navBar: PropTypes.bool
};

export default Page;
