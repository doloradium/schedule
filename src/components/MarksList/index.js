import React, { Fragment } from 'react'

import { List } from './List'
import { Form } from './Form'

import styles from './MarksList.module.scss'

if (localStorage.getItem("marks") === null) {
    let marks = []
    localStorage.setItem('marks', JSON.stringify(marks))
}

export class MarksList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { marks: [] }
    }

    addItem = mark => {
        const newList = [mark, ...JSON.parse(localStorage.getItem('marks'))]
        localStorage.setItem('marks', JSON.stringify(newList))
        window.location.reload();
    }

    removeItem = id => {
        const newList = JSON.parse(localStorage.getItem('marks')).filter(item => id !== item.uid)
        this.setState({ marks: newList })
        localStorage.setItem('marks', JSON.stringify(newList))
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Form addItem={this.addItem} />
                    <List items={JSON.parse(localStorage.getItem('marks'))} removeItem={this.removeItem} />
                </div>
            </div>
        )
    }
}