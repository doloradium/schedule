import React, { Fragment } from 'react'

import { eventList } from '.'
import { Modal1 } from '../Modal/Modal1'

import styles from './Calendar.module.scss'

export class CalendarTile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subject: '',
            lecturer: '',
            classroom: '',
            color: ''
        }
    }

    componentDidMount() {
        let parsedData = JSON.parse(localStorage.getItem('eventList'))
        parsedData.forEach((item) => {
            if (
                item.year == this.props.year &&
                item.month == this.props.month &&
                item.day == this.props.day &&
                item.slot == this.props.slot
            ) this.setState({ subject: item.subject, lecturer: item.lecturer, classroom: item.classroom, color: item.color })
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({ subject: '', lecturer: '', classroom: '', color: '' })
            let parsedData = JSON.parse(localStorage.getItem('eventList'))
            parsedData.forEach((item) => {
                if (
                    item.year == this.props.year &&
                    item.month == this.props.month &&
                    item.day == this.props.day &&
                    item.slot == this.props.slot
                ) this.setState({ subject: item.subject, lecturer: item.lecturer, classroom: item.classroom, color: item.color })
            })
        }
    }

    render() {
        const { year = '0', month = '0', day = '0', slot = '0', ...otherProps } = this.props
        return (
            <div className={styles.event} style={{ backgroundColor: (this.state.subject != '' || this.state.lecturer != '' || this.state.classroom != '') ? '#011627' : '#E9F2F9' }} onClick={this.props.onClick}>
                <p className={styles.tableParagraphBold}>{this.state.subject}</p>
                <p className={styles.taleParagraph}>{this.state.lecturer}</p>
                <p className={styles.taleParagraph}>{this.state.classroom}</p>
            </div>
        )
    }
}