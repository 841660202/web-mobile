import React from 'react';
import { TabBar } from 'antd-mobile';
import styles from './tabNav.less';
import Home from "./home";
import Kd from "./kd";
import Friend from "./friend";
import Mine from "./mine";
export default class TabBarNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'md',
      hidden: false,
      fullScreen: true,
    };
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="transparent "
          hidden={this.state.hidden}
        >
          <TabBar.Item title="守约" key="Life"
            icon={<div className={styles.sy}/>}
            selectedIcon={<div className={styles.syActive}/>}
            selected={this.state.selectedTab === 'home'}
            badge={1}
            onPress={() => {this.setState({selectedTab: 'home',});}}
            data-seed="logId"
          >
            {/*content*/}
            <Home pageText={'守约'}></Home>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="可达"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'ked'}
            onPress={() => {this.setState({selectedTab: 'ked',})}}
            data-seed="logId1"
          >
            {/*content*/}
            <Kd pageText={'可达'}></Kd>
          </TabBar.Item>
          <TabBar.Item
            icon={<div className={styles.f}/>}
            selectedIcon={<div className={styles.fActive}/>}
            title="朋友"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'py'}
            onPress={() => {this.setState({selectedTab: 'py',});}}
          >
            {/*content*/}
            <Friend pageText={'朋友'}></Friend>
          </TabBar.Item>
          <TabBar.Item
            icon={<div className={styles.m}/>}
            selectedIcon={<div className={styles.mActive}/>}
            title="我的"
            key="md"
            selected={this.state.selectedTab === 'md'}
            onPress={() => {this.setState({selectedTab: 'md',});}}
          >
            {/*content*/}
            <Mine pageText={'我的'}></Mine>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
