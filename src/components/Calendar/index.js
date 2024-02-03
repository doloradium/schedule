import React from 'react'
import { Fragment } from 'react'
import { range, addDateBy, areDatesSame, getMonday } from './utils'
import styles from './Calendar.module.scss'

import { CalendarTile } from './CalendarTile'
import { Modal1 } from '../Modal/Modal1'

const Days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
const Time = ['8:30', '10:05', '10:15', '11:50', '12:00', '13:35', '14:15', '15:50', '16:00', '17:35', '17:45', '19:20']

// export let eventList = [
//     {
//         year: 2023,
//         month: 11,
//         day: 20,
//         slot: 0,
//         subject: 'ООП',
//         lecturer: 'Путин В.В.',
//         classroom: '1-488',
//         color: 'red'
//     },
//     {
//         year: 2023,
//         month: 11,
//         day: 21,
//         slot: 0,
//         subject: 'Моделирование',
//         lecturer: 'Пушкин А.с.',
//         classroom: '1-337',
//         color: 'blue'
//     },
//     {
//         year: 2023,
//         month: 11,
//         day: 22,
//         slot: 0,
//         subject: 'Бетономешалка',
//         lecturer: 'Неизвестен',
//         classroom: '1-000',
//         color: 'green'
//     },
//     {
//         year: 2023,
//         month: 11,
//         day: 26,
//         slot: 1,
//         subject: 'Бетономешалка',
//         lecturer: 'Неизвестен',
//         classroom: '1-000',
//         color: 'green'
//     }
// ]

// localStorage.setItem('eventList', JSON.stringify(eventList))
// console.log(JSON.parse(localStorage.getItem('eventList')))

export class WeeklyCalendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mondayDate: getMonday(),
            year: 0,
            month: 0,
            day: 0,
            slot: 0,
            subject: 0,
            lecturer: 0,
            classroom: 0
        }
        this.nextWeek = this.nextWeek.bind(this)
        this.prevWeek = this.prevWeek.bind(this)
        this.handleTileClick = this.handleTileClick.bind(this)
    }

    nextWeek() {
        this.setState({ mondayDate: addDateBy(this.state.mondayDate, 7) })
    }

    prevWeek() {
        this.setState({ mondayDate: addDateBy(this.state.mondayDate, -7) })
    }

    handleTileClick(props) {
        document.querySelector('#modal1').style.display = 'block'
        document.querySelector('#modal1').firstChild.style.display = 'flex'
        document.querySelector('body').style.overflow = 'hidden'
        this.setState({ year: props.year, month: props.month, day: props.day, slot: props.slot })
    }

    render() {
        return (
            <Fragment>
                <div className={styles.flexBox}>
                    <div className={styles.navigationBlock}>
                        <p className={styles.navigationParagraph}>сегодня: {new Date().toLocaleString("ru", { year: "numeric", month: "long", day: "numeric" })}</p>
                        <p className={styles.navigationParagraph}>с: {this.state.mondayDate?.toLocaleString("ru", { year: "numeric", month: "long", day: "numeric" })}</p>
                        <p className={styles.navigationParagraph}>по: {addDateBy(this.state.mondayDate, 6).toLocaleString("ru", { year: "numeric", month: "long", day: "numeric" })}</p>
                    </div>
                    <div className={styles.navigationBlock}>
                        <button className={styles.navigation} onClick={this.prevWeek}>Назад</button>
                        <button className={styles.navigation} onClick={this.nextWeek}>Вперед</button>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.h_grid}>
                        <div className={styles.v_grid}>
                            {Time.map((hour) => <span className={styles.hour}>{hour}</span>)}
                        </div>
                        <div className={styles.h_grid_bottom}>
                            {Days.map((day, index) => (
                                <span className={styles.day_wrapper} data-today={areDatesSame(new Date(), addDateBy(this.state.mondayDate, index))}  >
                                    <p className={styles.currentDate} data-today={areDatesSame(new Date(), addDateBy(this.state.mondayDate, index))}>{addDateBy(this.state.mondayDate, index).getDate() + '.' + (addDateBy(this.state.mondayDate, index).getMonth() + 1)}</p>
                                    <CalendarTile
                                        onClick={() => this.handleTileClick({
                                            year: addDateBy(this.state.mondayDate, index).getFullYear(),
                                            month: addDateBy(this.state.mondayDate, index).getMonth(),
                                            day: addDateBy(this.state.mondayDate, index).getDate(),
                                            slot: 0,
                                            ...this.props
                                        })}
                                        year={addDateBy(this.state.mondayDate, index).getFullYear()}
                                        month={addDateBy(this.state.mondayDate, index).getMonth()}
                                        day={addDateBy(this.state.mondayDate, index).getDate()}
                                        slot={0}
                                    />
                                    <CalendarTile
                                        onClick={() => this.handleTileClick({
                                            year: addDateBy(this.state.mondayDate, index).getFullYear(),
                                            month: addDateBy(this.state.mondayDate, index).getMonth(),
                                            day: addDateBy(this.state.mondayDate, index).getDate(),
                                            slot: 1,
                                            ...this.props
                                        })}
                                        year={addDateBy(this.state.mondayDate, index).getFullYear()}
                                        month={addDateBy(this.state.mondayDate, index).getMonth()}
                                        day={addDateBy(this.state.mondayDate, index).getDate()}
                                        slot={1}
                                    />
                                    <CalendarTile
                                        onClick={() => this.handleTileClick({
                                            year: addDateBy(this.state.mondayDate, index).getFullYear(),
                                            month: addDateBy(this.state.mondayDate, index).getMonth(),
                                            day: addDateBy(this.state.mondayDate, index).getDate(),
                                            slot: 2,
                                            ...this.props
                                        })}
                                        year={addDateBy(this.state.mondayDate, index).getFullYear()}
                                        month={addDateBy(this.state.mondayDate, index).getMonth()}
                                        day={addDateBy(this.state.mondayDate, index).getDate()}
                                        slot={2}
                                    />
                                    <CalendarTile
                                        onClick={() => this.handleTileClick({
                                            year: addDateBy(this.state.mondayDate, index).getFullYear(),
                                            month: addDateBy(this.state.mondayDate, index).getMonth(),
                                            day: addDateBy(this.state.mondayDate, index).getDate(),
                                            slot: 3,
                                            ...this.props
                                        })}
                                        year={addDateBy(this.state.mondayDate, index).getFullYear()}
                                        month={addDateBy(this.state.mondayDate, index).getMonth()}
                                        day={addDateBy(this.state.mondayDate, index).getDate()}
                                        slot={3}
                                    />
                                    <CalendarTile
                                        onClick={() => this.handleTileClick({
                                            year: addDateBy(this.state.mondayDate, index).getFullYear(),
                                            month: addDateBy(this.state.mondayDate, index).getMonth(),
                                            day: addDateBy(this.state.mondayDate, index).getDate(),
                                            slot: 4,
                                            ...this.props
                                        })}
                                        year={addDateBy(this.state.mondayDate, index).getFullYear()}
                                        month={addDateBy(this.state.mondayDate, index).getMonth()}
                                        day={addDateBy(this.state.mondayDate, index).getDate()}
                                        slot={4}
                                    />
                                    <CalendarTile
                                        onClick={() => this.handleTileClick({
                                            year: addDateBy(this.state.mondayDate, index).getFullYear(),
                                            month: addDateBy(this.state.mondayDate, index).getMonth(),
                                            day: addDateBy(this.state.mondayDate, index).getDate(),
                                            slot: 5,
                                            ...this.props
                                        })}
                                        year={addDateBy(this.state.mondayDate, index).getFullYear()}
                                        month={addDateBy(this.state.mondayDate, index).getMonth()}
                                        day={addDateBy(this.state.mondayDate, index).getDate()}
                                        slot={5}
                                    />
                                </span>
                            ))}
                        </div>
                    </div>
                </div >
                <Modal1
                    year={this.state.year}
                    month={this.state.month}
                    day={this.state.day}
                    slot={this.state.slot}
                    subject={this.state.subject}
                    lecturer={this.state.lecturer}
                    classroom={this.state.classroom}
                />
            </Fragment >
        )
    }
}