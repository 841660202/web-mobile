import React from 'react';
import { Grid } from 'antd-mobile';
import Banner from "../../components/Banner";
import {GRID_SOURCE} from "../../data-source/stack";
import TopAction from "../../components/TopAction";
export  default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: true,
    };
  }
  render() {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <TopAction/>
        <Banner/>
        <Grid data={GRID_SOURCE} hasLine={false} activeStyle={false} square={false} className="not-square-grid" />
      </div>
    );
  }
}
