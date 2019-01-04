import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import { Button, WhiteSpace } from 'antd-mobile';
import { Link } from 'dva/router'
import Banner from "../components/Banner";
import GridNav from "../components/GridNav";
import TabBarNav from "../components/TabNav";
function IndexPage() {
  // return (
  //   <div className={styles.normal}>
  //     {/*<h1 className={styles.title}>Yay! Welcome to dva!</h1>*/}
  //     {/*<div className={styles.welcome} />*/}
  //     {/*<ul className={styles.list}>*/}
  //       {/*<li>To get started, edit <code>src/index.js</code> and save to reload.</li>*/}
  //       {/*<li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>*/}
  //     {/*</ul>*/}
  //     <Banner/>
  //     <WhiteSpace />
  //     <GridNav/>
  //     {/*<Link to="/products">Home</Link>*/}
  //     {/*<WhiteSpace />*/}
  //     {/*<Button>Start</Button>*/}
  //     {/*<Button type="warning">warning</Button>*/}
  //
  //   </div>
  // );
  return (
    <TabBarNav/>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
