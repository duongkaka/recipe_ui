import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function SuggestedAccount() {
    return (
        <div>
            <Tippy
                interactive
                //  delay={[800, 0]}
                render={() => <h1>Acount Item</h1>}
                placement="bottom"
            >
                <div className={cx('wrapper')}>
                    <Image
                        className={cx('avatar')}
                        src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-cute-2.jpg"
                        alt="User Avatar"
                    />
                    <div className={cx('user-info')}>
                        <p className={cx('nickname')}>
                            <strong>Nguyen Van A</strong>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </span>
                        </p>
                        <span className={cx('name')}>Nguyễn Văn A</span>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

SuggestedAccount.propTypes = {};

export default SuggestedAccount;
