import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Login.css'
import {Button, Form, FormGroup, Label} from 'reactstrap'
import {authenticateUser} from "../../actions/authedUser"
import {Link, Redirect} from 'react-router-dom'

class Login extends Component {
    state = {
        username: '',
        isLogged: false
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {username} = this.state
        const {dispatch} = this.props

        if (username !== "") {
            dispatch(authenticateUser(username))
            this.setState(() => ({isLogged: true}))
        }
    }
    handleChange = (e) => {
        const username = e.target.value
        this.setState(() => ({username}))
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}}

        const {isLogged} = this.state

        if (isLogged) {
            return <Redirect to={from}/>
        }


        return (
            <Form onSubmit={this.handleSubmit} className="form-signin">
                <h2 className="form-heading">Please sign in</h2>
                <FormGroup>
                    <Label htmlFor="username" className="sr-name">User</Label>

                    <select id="username" className="form-control"
                            value={this.state.username}
                            onChange={this.handleChange}>
                        <option value='' disabled>Select</option>
                        {this.props.users.map((user) => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            )
                        )}
                    </select>

                </FormGroup>
                <Button type="submit" id="_submit" name="_submit"
                        className="btn btn-lg btn-primary btn-block">Login</Button>
                <Link to="/register">Sign Up</Link>
            </Form>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        users: Object.values(users).map((user) => {
            return ({
                id: user.id,
                name: user.name
            })
        }),
        username: authedUser
    }
}

export default connect(mapStateToProps)(Login)