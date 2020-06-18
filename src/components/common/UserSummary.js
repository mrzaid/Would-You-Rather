import React, {Component} from 'react'
import {Label, Media} from 'reactstrap'
import {connect} from 'react-redux'
import './UserSummary.css'

class UserSummary extends Component {
    render() {
        const {user} = this.props
        const numberOfAsked = user.questions.length
        const numberOfAnswered = Object.keys(user.answers).length
        return (
            <Media className="leaderboard-entry">
                <Media object src={user.avatarURL} className="circular-image"/>
                <Media middle body>
                    <Media heading>
                        {user.name}
                    </Media>
                    <div className="float-left">
                        <Label for="asked">Asked:</Label><span id="asked">{numberOfAsked}</span>
                    </div>
                    <div className="float-right">
                        <Label for="answered">Answered:</Label><span id="answered">{numberOfAnswered}</span>
                    </div>
                </Media>
            </Media>
        )
    }
}

function mapStateToProps({users}, {id}) {
    return {
        user: users[id]
    }
}

export default connect(mapStateToProps)(UserSummary)