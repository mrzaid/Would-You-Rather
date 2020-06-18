import React, {Component} from 'react'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {handleAddQuestion} from "../actions/questions"

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toDashboard: false
    }

    handleChange = (e) => {
        const {value, id} = e.target
        this.setState(() => ({[id]: value}))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {optionOne, optionTwo} = this.state
        const {dispatch} = this.props

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toDashboard: true
        }))
    }

    render() {
        const {optionOne, optionTwo, toDashboard} = this.state

        if (toDashboard === true) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <h1>Would You Rather...</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="optionOne">Option One</Label>
                        <Input
                            type="text"
                            id="optionOne"
                            placeholder="First Option"
                            onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="optionTwo">Option Two</Label>
                        <Input
                            type="text"
                            id="optionTwo"
                            placeholder="Second Option"
                            onChange={this.handleChange}/>
                    </FormGroup>
                    <Button
                        disabled={optionOne === '' && optionTwo === ''}>Add Question</Button>
                </Form>
            </div>
        )
    }
}

export default connect()(NewQuestion)