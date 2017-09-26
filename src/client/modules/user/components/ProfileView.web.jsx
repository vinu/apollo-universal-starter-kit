// Web only component
// React
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Card } from 'antd';
import PageLayout from '../../../app/PageLayout';

const ProfileView = ({ loading, currentUser }) => {
  const renderMetaData = () => (
    <Helmet
      title="Profile"
      meta={[
        {
          name: 'description',
          content: 'Profile page'
        }
      ]}
    />
  );

  if (loading && !currentUser) {
    return (
      <PageLayout>
        {renderMetaData()}
        <div className="text-center">Loading...</div>
      </PageLayout>
    );
  } else if (currentUser) {
    return (
      <PageLayout>
        {renderMetaData()}
        <Card title="Profile" bordered={false} style={{ width: 300 }}>
          <p>username: {currentUser.username}</p>
          <p>email: {currentUser.email}</p>
          {currentUser.isAdmin && <p>is admin: {currentUser.isAdmin.toString()}</p>}
        </Card>
      </PageLayout>
    );
  } else {
    return (
      <PageLayout>
        {renderMetaData()}
        <h2>No current user logged in</h2>
      </PageLayout>
    );
  }
};

ProfileView.propTypes = {
  loading: PropTypes.bool.isRequired,
  currentUser: PropTypes.object
};

export default ProfileView;
