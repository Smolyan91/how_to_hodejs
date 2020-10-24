import * as React from 'react';
import cx from 'classnames'

type Props = {
    label?: string,
    className?: string
}

const Buttom = (props: Props) => {
    const {label, className} = props;

    return (
        <div className={cx('ui-buttom', className)}>{label || ''}</div>
    )
}

export default Buttom