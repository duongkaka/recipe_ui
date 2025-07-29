import { Typography } from '@mui/material';
import styles from './StepImageUpload.module.scss';
import classNames from 'classnames/bind';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function StepImageUpload({ onChange, size = 'large' }) {
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imgUrl = URL.createObjectURL(file);
            setPreview(imgUrl);
            onChange?.(e);
        }
    };

    return (
        <div>
            <label className={cx('image-upload', size)}>
                <input type="file" className={cx('hidden-input')} onChange={handleFileChange} ref={fileInputRef} />
                <div className={cx('upload-box')}>
                    {preview ? (
                        <img src={preview} alt="preview" className={cx('preview-image')} />
                    ) : (
                        <>
                            <PhotoCamera className={cx('camera-icon')} />
                            <Typography className={cx('upload-text')}>
                                作り方の
                                <br />
                                写真を載せる
                            </Typography>
                        </>
                    )}
                </div>
            </label>
        </div>
    );
}

export default StepImageUpload;
