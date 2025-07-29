import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCloudArrowUp,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faMessage,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { faUber } from '@fortawesome/free-brands-svg-icons';
import Image from '~/components/Image';
import logo2 from '~/assets/images/logo2.png';

import { Link } from 'react-router-dom';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet',
                },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and Help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard on keys' },
];

const USER_MENU = [
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and Help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faUber} />, title: 'View profile', to: '/profile' },
    { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get Coin', to: '/coins' },
    { icon: <FontAwesomeIcon icon={faGear} />, title: 'Setting', to: '/setting' },

    ...MENU_ITEMS,

    { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Logout', to: '/logout', separate: true },
];

function Header() {
    const [currentUser, setCurrentUser] = useState(true);

    return (
        <header className={cx('wrapper')}>
            {/* Logo */}
            <div className={cx('inner')}>
                <Link to="/">
                    {' '}
                    <img className={cx('img')} src={logo2} alt="FoodCham" />
                </Link>

                {/* Search */}
                <Search />

                {/* Action */}

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="upload" placement="bottom">
                                <Link to="/upload" className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </Link>
                            </Tippy>
                            <Tippy content="message" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS}>
                        {currentUser ? (
                            // eslint-disable-next-line jsx-a11y/alt-text
                            <Image
                                className={cx('user-avatar')}
                                src="https://tse3.mm.bing.net/th/id/OIP.B1YLdd0cJeufsXhh5Wws1gHaHa?rs=1&pid=ImgDetMain"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                {' '}
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
