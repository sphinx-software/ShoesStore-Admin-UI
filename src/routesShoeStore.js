import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const UserEditor = React.lazy(() => import('./components/UserEditor'));
const Users = React.lazy(() => import('./components/Users'));

const routesShoeStore = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/products', exact: true, name: 'products', component: UserEditor },
  { path: '/users', exact: true, name: 'products', component: Users },
];

export default routesShoeStore;
