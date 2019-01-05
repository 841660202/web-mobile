import React from 'react';
import styles from './index.less'
const TopAction = () => {
  return (
    <div className={styles.topContain}>
     <div className={styles.content}>
       <div className={styles.scan}></div>
       <div className={styles.more}></div>
     </div>
    </div>
  );
};

TopAction.propTypes = {
};

export default TopAction;
