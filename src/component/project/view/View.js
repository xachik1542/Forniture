import styles from './view.module.css';

import view_img from '../../../assets/img/project_img/view_img.png';

function View() {
    return (
        <div className={styles.view_block}>
            <button>AR/VR View</button>
            <img src={view_img}/>
        </div>
    );
}

export default View;