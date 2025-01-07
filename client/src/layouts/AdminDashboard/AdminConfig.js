// component
import Iconify from '../../components/Iconify';

import configData from '../../config.json'

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const adminConfig = [
  {
    title: 'Manage Users',
    path: configData.MANAGE_USERS_URL,
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'About',
    path: configData.ABOUT_URL,
    icon: getIcon('fluent:info-12-filled'),
  },
];

export default adminConfig;