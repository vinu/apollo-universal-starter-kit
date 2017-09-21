// React
import React from 'react';
import { Route, NavLink } from 'react-router-dom';

// Web UI
import { Menu } from 'antd';

// Component and helpers
import $Module$ from './containers/$Module$';
import reducers from './reducers';

import Feature from '../connector';

export default new Feature({
  route: <Route exact path="/$module$" component={$Module$} />,
  navItem: (
    <Menu.Item key="/$module$">
      <NavLink to="/$module$" className="nav-link" activeClassName="active">
        $Module$
      </NavLink>
    </Menu.Item>
  ),
  reducer: { $module$: reducers }
});
