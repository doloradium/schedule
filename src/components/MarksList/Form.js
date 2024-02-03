import React from 'react'
import { Button } from '../Button'
import styles from './MarksList.module.scss'

export class Form extends React.Component {
    constructor(props) {
        super(props)
        this.formRef = React.createRef()
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    onSubmit = (e) => {
        e.preventDefault()
        const newItemValue = this.inputRef.current.value

        if (!newItemValue) { return }

        const trimValue = newItemValue.trim()
        if (trimValue.length) {
            this.props.addItem({ value: newItemValue, uid: Date.now() })
            this.formRef.current.reset()
        }
    }

    render() {
        return (
            <form ref={this.formRef} onSubmit={this.onSubmit}>
                <div className={styles.formContent}>
                    <input type='text' ref={this.inputRef} placeholder='Добавить задание' className={styles.inputField} />
                    <Button type='submit' className={styles.submitBtn}>Добавить</Button>
                </div>
            </form>
        )
    }
}