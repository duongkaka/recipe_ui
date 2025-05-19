import classNames from 'classnames/bind';
import styles from './MyProfile.module.scss';
import ProfileMenu from './ProfileMenu';
import { useState } from 'react';
import MyInfo from './ProfileItem/MyInfo';
import MyPosts from './ProfileItem/MyPosts';
import MySavePosts from './ProfileItem/MySavePosts';

const cx = classNames.bind(styles);

function MyProfile({ children }) {
    const [selectedView, setSelectedView] = useState('myInfo');
    const renderContent = () => {
        if (selectedView === 'myInfo') return <MyInfo />;
        else if (selectedView === 'myPosts') return <MyPosts />;
        else if (selectedView === 'mySavePosts') return <MySavePosts />;
        return null;
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu')}>
                <ProfileMenu onSelect={setSelectedView} />
            </div>
            <div className={cx('content')}>{renderContent()}</div>
        </div>
    );
}

export default MyProfile;
