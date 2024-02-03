import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

export const Menu = () => {
    return (
        <ul className={styles.menuList}>
            <li className={styles.menuItem}>
                <Link className={styles.menuLink} to='support'>Занятия</Link>
            </li>
            <li className={styles.menuItem}>
                <Link to='/'>Задания</Link>
            </li>
        </ul >
    )
}