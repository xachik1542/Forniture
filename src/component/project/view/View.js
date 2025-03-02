import styles from './view.module.css';

import view_img from '../../../assets/img/project_img/view_img.png';
import { useTranslation } from 'react-i18next';

function View() {
    const [t] = useTranslation();
    return (
        <div className={styles.view_block}>
            <button>{t("portfolio.project.view")}</button>
            <img src={view_img}/>
        </div>
    );
}

export default View;