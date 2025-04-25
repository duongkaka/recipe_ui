import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
const Image = forwardRef(({ className, src, ...props }, ref) => {
    const [fallback, setFallback] = useState(null);

    const handleError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            ref={ref}
            {...props}
            onError={handleError}
            alt={props.alt || 'image'}
        />
    );
});

Image.displayName = 'Image';

export default Image;
