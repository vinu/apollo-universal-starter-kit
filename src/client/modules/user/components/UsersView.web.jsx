// Web only component
// React
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Table } from 'antd';

import PageLayout from '../../../app/PageLayout';

const UsersView = ({ loading, users, errors }) => {
  const renderMetaData = () => (
    <Helmet
      title="User"
      meta={[
        {
          name: 'description',
          content: 'User page'
        }
      ]}
    />
  );

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Is admin',
      dataIndex: 'isAdmin',
      key: 'isAdmin',
      render: text => `${text.toString()}`
    }
  ];

  if (errors) {
    return (
      <PageLayout>
        {renderMetaData()}
        <h2>Users</h2>
        <h1 />
        {errors.map(error => <li key={error.path[0]}>{error.message}</li>)}
      </PageLayout>
    );
  } else {
    return (
      <PageLayout>
        {renderMetaData()}
        <h2>Users</h2>
        <h1 />
        <Table columns={columns} dataSource={users} pagination={false} loading={loading && !users} rowKey="id" />
      </PageLayout>
    );
  }
};

UsersView.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array,
  errors: PropTypes.array
};

export default UsersView;
