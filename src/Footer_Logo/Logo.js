import { Link } from 'react-router-dom';
import styles from './style.module.css';


function Logo() {
    return (
        <div className={styles.container_block}>
            <div className={styles.container_logo_box}>
                <h1>logo</h1>
            </div>
            <div className={styles.container_title_box}>
                <Link to={'/policy'} className={styles.text_policy}>Privacy Policy</Link>
                <h2 className={styles.text1_date}>@2024 ALL RIGHTS RESERVED</h2>
            </div>
        </div>
    ) 
}

export default Logo;