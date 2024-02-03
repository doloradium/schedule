import React from 'react'
import { Button } from '../Button'
import { IconTypes } from '../../constants/icons'
import styles from './MarksList.module.scss'

export class ListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    onClickClose = () => {
        this.props.removeItem(this.props.id)
    }

    render() {
        return (
            <li className={styles.listItem}>
                <div className={styles.listItemValueWrapper}>{this.props.item.value}</div>
                <Button className={styles.buttonCross} size='small' onClick={this.onClickClose} iconType={IconTypes.cross} />
            </li>
        )
    }
}