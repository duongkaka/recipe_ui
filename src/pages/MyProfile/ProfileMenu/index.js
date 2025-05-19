import { useState } from 'react';
import { Avatar, Button, Card, CardContent, CardHeader } from '@mui/material';

import classNames from 'classnames/bind';
import styles from './ProfileMenu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faMortarPestle, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProfileMenu({ onSelect }) {
    const [activeMenu, setActiveMenu] = useState('myInfo');
    return (
        <div className={cx('container')}>
            <Card className={cx('card')}>
                <div className={cx('avatarWrapper')}>
                    <Avatar
                        className={cx('avatar')}
                        src="https://tse3.mm.bing.net/th/id/OIP.B1YLdd0cJeufsXhh5Wws1gHaHa?rs=1&pid=ImgDetMain"
                    />
                </div>
                <CardHeader title="duongkaka96@gmail.com" />
                <CardContent className={cx('contents')}>
                    <Button
                        className={cx('content', { active: activeMenu === 'myInfo' })}
                        style={{ width: '100%' }}
                        variant="outlined"
                        onClick={() => {
                            onSelect('myInfo');
                            setActiveMenu('myInfo');
                        }}
                    >
                        <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                        <span className={cx('span')}> 個人情報</span>
                    </Button>

                    <Button
                        className={cx('content', { active: activeMenu === 'myPosts' })}
                        style={{ width: '100%' }}
                        variant="outlined"
                        onClick={() => {
                            onSelect('myPosts');
                            setActiveMenu('myPosts');
                        }}
                    >
                        <FontAwesomeIcon className={cx('icon')} icon={faMortarPestle} />
                        <span className={cx('span')}> 投稿したレシピ</span>
                    </Button>

                    <Button
                        className={cx('content', { active: activeMenu === 'mySavePosts' })}
                        style={{ width: '100%' }}
                        variant="outlined"
                        onClick={() => {
                            onSelect('mySavePosts');
                            setActiveMenu('mySavePosts');
                        }}
                    >
                        <FontAwesomeIcon className={cx('icon')} icon={faFloppyDisk} />
                        <span className={cx('span')}>保存されたレシピ</span>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default ProfileMenu;
