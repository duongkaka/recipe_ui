import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { icon } from '@fortawesome/fontawesome-svg-core';

const cx = classNames.bind(styles);

function MenuItem({ icon, title, to = '/' }) {
    return (
        <NavLink to={to} className={({ isActive }) => cx('menu-item', { active: isActive })}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};
export default MenuItem;
