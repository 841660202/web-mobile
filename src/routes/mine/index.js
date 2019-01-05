import React from 'react';
import { List } from 'antd-mobile';

import styles from '../tabNav.less';
import {MINE_LIST} from "../../data-source/stack";

const Item = List.Item;
const Brief = Item.Brief;
export default class Mine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    const {pageText} = this.props
    return (
      <div style={{backgroundColor: 'white', height: '100%', textAlign: 'center'}}>
        <div className={styles.header}>
          <div className={styles.title}>{pageText}<div className={styles.timeLine}></div></div>
          <div className={styles.bg}>
            <img className={styles.avatar} src="https://avatar.csdn.net/B/5/2/3_web_longboss.jpg" alt=""/>
          </div>
        </div>
        <div className={styles.categoryContain}>
          <svg width="100%" height="100">
            <g fill="rgba(41,161,247,0.2)">
              <path d="M 0 70 Q 75 39, 150 70 T 300 70 T 450 70 T 600 70 T 750 70 V 100 H 0 V 0"></path>
              <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0" to="-300"
                                dur="1.5s" repeatCount="indefinite"></animateTransform>
            </g>
            <g fill="rgba(41,161,247,0.25)">
              <path d="M 0 70 Q 87.5 47, 175 70 T 350 70 T 525 70 T 700 70 T 875 70 T 1050 70 V 100 H 0 V 0"></path>
              <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0" to="-350"
                                dur="3s" repeatCount="indefinite"></animateTransform>
            </g>
            <g fill="rgba(41,161,247,0.28)" transform="translate(-903.868 0)">
              <path d="M 0 70 Q 135 36, 270 70 T 540 70 T 810 70 T 1080 70 V 100 H 0 V 0"
                    transform="translate(-38.232284367796474, 0)"></path>
              <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0" to="-540"
                                dur="2s" repeatCount="indefinite"></animateTransform>
            </g>
          </svg>
          <div className={styles.category}>{MINE_LIST.category}</div>
        </div>
          <List renderHeader={null} className="my-list">
            {
              MINE_LIST.list.map(item=><Item key={item.title} extra={item.extra}>{item.title}</Item>)
            }
          </List>
      </div>
    );
  }
}
