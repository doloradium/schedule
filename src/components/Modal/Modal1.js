import React from 'react'

import { Button } from '../Button'
import { eventList } from '../Calendar'

import styles from './BaseModal.module.scss'

export class Modal1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            changes: false,
            year: this.props.year,
            month: this.props.month,
            day: this.props.day,
            slot: this.props.slot,
            subject: this.props.subject,
            lecturer: this.props.lecturer,
            classroom: this.props.classroom,
            position: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    deleteItem(e) {
        e.preventDefault()
        let parsedData = JSON.parse(localStorage.getItem('eventList'))
        for (let item in parsedData) {
            if (
                parsedData[item].year == this.state.year &&
                parsedData[item].month == this.state.month &&
                parsedData[item].day == this.state.day &&
                parsedData[item].slot == this.state.slot
            ) {
                parsedData.splice(item, 1)
            }
        }
        localStorage.setItem('eventList', JSON.stringify(parsedData))
        window.location.reload();
    }

    handleSubmit(e) {
        let parsedData = JSON.parse(localStorage.getItem('eventList'))
        if (this.state.changes == true && (this.state.subject != '' || this.state.lecturer != '' || this.state.classroom != '')) {
            parsedData.push({
                year: this.state.year,
                month: this.state.month,
                day: this.state.day,
                slot: this.state.slot,
                subject: this.state.subject,
                lecturer: this.state.lecturer,
                classroom: this.state.classroom,
                color: ''
            })
        } else {
            parsedData[this.state.position] = {
                year: this.state.year,
                month: this.state.month,
                day: this.state.day,
                slot: this.state.slot,
                subject: this.state.subject,
                lecturer: this.state.lecturer,
                classroom: this.state.classroom,
                color: ''
            }
        }
        localStorage.setItem('eventList', JSON.stringify(parsedData))
        document.querySelector('#modal1').style.display = 'none'
        document.querySelector('#modal1').firstChild.style.display = 'none'
        document.querySelector('body').style.overflow = 'visible'
    }

    closeModal(e) {
        if (e.target.id == 'modal1') {
            document.querySelector('#modal1').style.display = 'none'
            document.querySelector('#modal1').firstChild.style.display = 'none'
            document.querySelector('body').style.overflow = 'visible'
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({ changes: false })
            this.setState({ year: this.props.year, month: this.props.month, day: this.props.day, slot: this.props.slot })
            let counter = 0
            let parsedData = JSON.parse(localStorage.getItem('eventList'))
            for (let item in parsedData) {
                if (
                    parsedData[item].year == this.props.year &&
                    parsedData[item].month == this.props.month &&
                    parsedData[item].day == this.props.day &&
                    parsedData[item].slot == this.props.slot
                ) {
                    this.setState({ subject: parsedData[item].subject, lecturer: parsedData[item].lecturer, classroom: parsedData[item].classroom, position: item })
                    counter = 1
                } else if (counter == 0) {
                    this.setState({ subject: '', lecturer: '', classroom: '', changes: true })
                }
            }
        }
    }

    render() {
        return (
            < div className={styles.container} id='modal1' onMouseDown={this.closeModal} >
                <div className={styles.content}>
                    <form className={styles.modalForm} onSubmit={this.handleSubmit}>
                        <p className={styles.modalHeading}>Введите информацию <br />о предмете</p>
                        <label className={styles.modalLabel}>
                            Предмет
                            <input
                                className={styles.modalInput}
                                type='text' placeholder='Введите название предмета'
                                value={this.state.subject}
                                name='subject'
                                onChange={this.handleChange}
                            />
                        </label>
                        <label className={styles.modalLabel}>
                            Преподаватель
                            <input
                                className={styles.modalInput}
                                type='text'
                                placeholder='Введите имя преподавателя'
                                value={this.state.lecturer}
                                name='lecturer'
                                onChange={this.handleChange}
                            />
                        </label>
                        <label className={styles.modalLabel}>
                            Аудитория
                            <input
                                className={styles.modalInput}
                                type='text'
                                placeholder='Введите аудиторию'
                                value={this.state.classroom}
                                name='classroom'
                                onChange={this.handleChange}
                            />
                        </label>
                        <div className='colorContainer'>
                            <div className='colorItem'></div>
                            <div className='colorItem'></div>
                            <div className='colorItem'></div>
                            <div className='colorItem'></div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button type='submit' value='Сохранить'>Сохранить</Button>
                            <Button onClick={this.deleteItem} value='Удалить'>Удалить</Button>
                        </div>
                    </form>
                </div >
            </ div >
        )
    }
}
