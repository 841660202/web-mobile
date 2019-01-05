import React from 'react';
import styles from '../tabNav.less';

export default class Friend extends React.Component {
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
          <div className={styles.title}>{pageText}</div>
        </div>
      </div>
    );
  }
}
