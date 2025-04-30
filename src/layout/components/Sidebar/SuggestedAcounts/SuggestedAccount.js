import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function SuggestedAccount() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                //  delay={[800, 0]}
                render={renderPreview}
                placement="bottom"
                offset={[-20, 0]}
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
