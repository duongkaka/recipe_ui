import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title({ title }) {
    return <h2 className={cx('title')}>{title} </h2>;
}

export default Title;
