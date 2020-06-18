import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card, CardBody, CardSubtitle, CardTitle} from 'reactstrap'
import './Option.css'


class Option extends Component {
    handleClick = (e) => {
        e.preventDefault()
        const {onClick, optionName} = this.props
        onClick(optionName)
    }

    render() {
        const {option, showResults, isVoted, percentage} = this.props

        const {text, votes} = option
        return (
            showResults === false ?
                <Link to="#" onClick={this.handleClick}>
                    <Card className={isVoted ? ("selected-option") : ''}>
                        <CardBody>
                            <CardTitle>{text}</CardTitle>
                            {showResults === true &&
                            (<CardSubtitle>Numbero Of Votes: {votes.length} ({percentage}%)</CardSubtitle>)
                            }
                        </CardBody>
                    </Card>
                </Link>
                :
                <Card className={isVoted ? ("selected-option") : ''}>
                    <CardBody>
                        <CardTitle>{text}</CardTitle>
                        {showResults === true &&
                        (<CardSubtitle>Numbero Of Votes: {votes.length} ({percentage}%)</CardSubtitle>)
                        }
                    </CardBody>
                </Card>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, {questionId, optionName}) {
    const question = questions[questionId]
    const option = question[optionName]
    const currentUser = users[authedUser]

    return {
        option,
        isVoted: option.votes.includes(authedUser),
        showResults: Object.keys(currentUser.answers).includes(questionId),
        percentage: ((option.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100).toFixed(2),
        optionName
    }
}

export default connect(mapStateToProps)(Option)