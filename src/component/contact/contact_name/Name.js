import styles from './style.module.css';
import logo from '../../../assets/img/contact/logo_contact.png';


function Name() {
    return (
        <div className={styles.name_block}>
            <button className={styles.name_btn}>Contact</button>

            <div className={styles.text_box}>
                <img src={logo}/>
                <p>Lorem ipsum dolor sit amet consectetur. Integer sit vel quisque laoreet lacus at.</p>
            </div>
        </div>
    )
}


export default Name;