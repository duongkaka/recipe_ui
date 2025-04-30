import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-cute-2.jpg"
                />
                <Button primary small>
                    Follow
                </Button>
            </header>
            <body className={cx('body')}>
                <div className={cx('user-info')}>
                    <p className={cx('nickname')}>
                        <strong>Nguyen Van A</strong>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </span>
                    </p>
                    <span className={cx('name')}>Nguyễn Văn A</span>
                </div>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('lable')}>Followers </span>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('lable')}>Likes</span>
                </p>
            </body>
        </div>
    );
}

export default AccountPreview;
