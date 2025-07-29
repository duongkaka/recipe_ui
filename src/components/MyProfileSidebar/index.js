import { faHouse, faSave, faUser, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './MyProfileSidebar.module.scss';
import { NavLink } from 'react-router-dom'; // Thay Link bằng NavLink

const cx = classNames.bind(styles);

function MyProfileSidebar() {
    return (
        <div className={cx('sidebar')}>
            <NavLink to="/myProfile/myInfo" className={({ isActive }) => cx('menu-item', { active: isActive })}>
                <FontAwesomeIcon icon={faUser} />
                <span>個人情報</span>
            </NavLink>
            <NavLink to="/myProfile/myPosts" className={({ isActive }) => cx('menu-item', { active: isActive })}>
                <FontAwesomeIcon icon={faUtensils} />
                <span>投稿レシピ</span>
            </NavLink>
            <NavLink to="/myProfile/mySavePosts" className={({ isActive }) => cx('menu-item', { active: isActive })}>
                <FontAwesomeIcon icon={faSave} />
                <span>保存レシピ</span>
            </NavLink>
        </div>
    );
}

export default MyProfileSidebar;
