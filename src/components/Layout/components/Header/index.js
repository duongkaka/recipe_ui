import { Children, useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudArrowUp,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faMagnifyingGlass,
    faMessage,
    faSignOut,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import { faUber } from '@fortawesome/free-brands-svg-icons';

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
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            {/* Logo */}
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />

                {/* Search */}
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                {/* Action */}

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="upload" placement="bottom">
                                <button className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
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
                            <img
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
