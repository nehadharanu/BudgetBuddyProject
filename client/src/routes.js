import {useRoutes} from 'react-router-dom';
import configData from "./config.json";


//Pages 
import DashboardLayout from './layouts/dashboard';
import Profile from './components/profile';
import PageUserDeleted from './components/profile/PageUserDeleted';
import Group from './components/groups';
import CreateGroup from './components/groups/createGroup';
import ViewGroup from './components/groups/viewGroup';
import AddExpense from './components/expense/addExpense';
import Dashboard from './components/dashboard';
import { ViewExpense } from './components/expense/viewExpense';
import EditExpense from './components/expense/editExpense';
import { EditGroup } from './components/groups/editGroup';
import About from './components/about';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import Login from './components/login';
import Register from './components/register';
import Page404 from './components/Page404';
import AdminDashboard from './components/AdminDashboard';
import AdminDashboardLayout from './layouts/AdminDashboard';
import ManageUsers from './components/AdminDashboard/ManageUsers';


export default function Router() {
  return useRoutes([
    {
      path: configData.DASHBOARD_HOME_URL,
      element: <DashboardLayout />,
      children: [
        {path:configData.DASHBOARD_URL,
        element: <Dashboard/>},
        {path: configData.CREATE_GROUP_URL,
        element: <CreateGroup/>},
        {path:configData.ADD_EXPENSE_ROUTER_URL,
        element: <AddExpense/>},
        {path:configData.EDIT_EXPENSE_ROUTER_URL,
          element: <EditExpense/>},
        {path:configData.VIEW_EXPENSE_ROUTER_URL,
          element: <ViewExpense/>},
        {path:configData.USER_GROUPS_URL,
          element: <Group/>},
        {path:configData.VIEW_GROUP_ROUTER_URL,
          element: <ViewGroup/>},
        {path:configData.EDIT_GROUP_ROUTER_URL,
          element: <EditGroup/>},
        {path:configData.USER_PROFILE_URL,
          element: <Profile/>}
      ]
    },
    {
        path: configData.LOGIN_URL,
        element: <LogoOnlyLayout />,
        children: [
            {path: '', element: <Login />},
            {path: configData.REGISTER_URL, element: <Register />},
            {path: configData.USER_DELETED_URL, element: <PageUserDeleted/>},
            {path:configData.ABOUT_URL,element: <About/>}
        ]
    },
    {
      path: configData.ADMIN_HOME_URL,
      element: <AdminDashboardLayout />,
      children: [
          {path: configData.ADMIN_DASHBOARD_URL, element: <AdminDashboard />},
          {path: configData.MANAGE_USERS_URL, element: <ManageUsers /> } 
      ]
    },
    {path: '*', element: <Page404/>}
  ])
}