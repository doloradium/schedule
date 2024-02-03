import React from 'react'
import clsx from 'clsx'

import { Icon } from '../Icon'
import styles from './Button.module.scss'

export const Button = props => {
    const { children, className, size, iconType, type = 'button', ...rest } = props
    const render = (
        <span>
            {iconType && <Icon type={iconType} className={clsx(styles.icon, !children && styles.resetMarginRight)} />}
            {children || null}
        </span>
    )

    return (
        <button
            className={
                clsx(
                    [
                        styles.container,
                        {
                            [styles[size]]: size
                        },
                        className
                    ]
                )
            }
            {...rest}
        >
            {render}
        </button>
    )
}