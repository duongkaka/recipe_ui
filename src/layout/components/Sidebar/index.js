import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGratipay, faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import SuggestedAccount from './SuggestedAcounts/SuggestedAccount';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <Menu>
                <MenuItem to="/" icon={<FontAwesomeIcon icon={faHouse} />} title={'For you'}></MenuItem>
                <MenuItem to="/following" icon={<FontAwesomeIcon icon={faGratipay} />} title={'Folowing'}></MenuItem>
                <MenuItem
                    to="/myProfile"
                    icon={<FontAwesomeIcon icon={faWpexplorer} />}
                    title={'My Profile'}
                ></MenuItem>
            </Menu>
            <div className={cx('account-item')}>
                <p className={cx('account')}>Suggested Account</p>
                <SuggestedAccount />
                <SuggestedAccount />
                <SuggestedAccount />
                <SuggestedAccount />
                <SuggestedAccount />

                {/* <SidebarAcount avatar tick nickname fullname /> */}
            </div>
            <button className={cx('btn-see-more')}>See more</button>
            <div className={cx('account-item')}>
                <p className={cx('account')}>Folowing Account</p>
                <SuggestedAccount />
                <SuggestedAccount />
                <SuggestedAccount />
                <SuggestedAccount />
                <SuggestedAccount />

                {/* <SidebarAcount avatar tick nickname fullname /> */}
            </div>
            <button className={cx('btn-see-more')}>See more</button>
        </div>
    );
}

export default Sidebar;
