import React from 'react';
import styles from './RoleIcon.module.css';

import HomeIcon from '../icons/IconHome.jsx';
import SupportIcon from '../icons/IconSupport.jsx';
import PublicAvatarIcon from '../icons/IconPublicAvatar.jsx';

const roleIconMapping = {
  'guest': PublicAvatarIcon,
  'user': HomeIcon,
  'admin': SupportIcon,
};

export default function RoleIcon({ iconClass }) {
  const IconComponent = roleIconMapping[iconClass] || PublicAvatarIcon;
  return(
    <span className={styles['role-icon']}>
      <IconComponent  />
    </span>
);
}
