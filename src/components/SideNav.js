import React from 'react';
import {
  Button,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';

const test = () => {
  console.log('test');
}

const SideNav = () => {
  return (
    <div>
      <Button onClick={toggleDrawer()}>test</Button>
    </div>
  )
};

export default SideNav;