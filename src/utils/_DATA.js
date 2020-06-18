let users = {
    kriti: {
      id: 'kriti',
      name: 'kriti',
      avatarURL: '/images/avatars/dog.png',
      answers: {
        '8xf0y6ziyjabvozdd253nd': 'optionOne',
        '6ni6ok3ym7mf1p33lnez': 'optionTwo',
        am8ehyc8byjqgar0jgpub9: 'optionTwo',
        loxhs1bqm25b708cmbf3g: 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    JACQUILIENE: {
      id: 'JACQUILIENE',
      name: 'JACQUILIENE',
      avatarURL: '/images/avatars/cat.png',
      answers: {
        vthrdm985a262al8qx3do: 'optionOne',
        xj352vofupe1dqz9emx13r: 'optionTwo'
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
    },
    BANDEYA: {
      id: 'BANDEYA',
      name: 'BANDEYA',
      avatarURL: '/images/avatars/lion.png',
      answers: {
        xj352vofupe1dqz9emx13r: 'optionOne',
        vthrdm985a262al8qx3do: 'optionTwo',
        '6ni6ok3ym7mf1p33lnez': 'optionTwo'
      },
      questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
    },
    peter: {
      id: 'peter',
      name: 'Peter',
      avatarURL: '/images/avatars/gorilla.png',
      answers: {},
      questions: []
    },
    anusha: {
      id: 'anusha',
      name: 'Anusha',
      avatarURL: '/images/avatars/koala.png',
      answers: {},
      questions: []
    },
    evidence: {
      id: 'evidence',
      name: 'evidence',
      avatarURL: '/images/avatars/rabbit.png',
      answers: {},
      questions: []
    },
    meryem: {
      id: 'meryem',
      name: 'Meryem',
      avatarURL: '/images/avatars/tiger.png',
      answers: {},
      questions: []
    },
    james: {
      id: 'james',
      name: 'James',
      avatarURL: '/images/avatars/fox.png',
      answers: {},
      questions: []
    }
  };
  
  let questions = {
    '8xf0y6ziyjabvozdd253nd': {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'kriti',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['kriti'],
        text: 'have horrible short term memory'
      },
      optionTwo: {
        votes: [],
        text: 'have horrible long term memory'
      }
    },
    '6ni6ok3ym7mf1p33lnez': {
      id: '6ni6ok3ym7mf1p33lnez',
      author: 'BANDEYA',
      timestamp: 1468479767190,
      optionOne: {
        votes: [],
        text: 'become a superhero'
      },
      optionTwo: {
        votes: ['BANDEYA', 'kriti'],
        text: 'become a supervillain'
      }
    },
    am8ehyc8byjqgar0jgpub9: {
      id: 'am8ehyc8byjqgar0jgpub9',
      author: 'kriti',
      timestamp: 1488579767190,
      optionOne: {
        votes: [],
        text: 'be telekinetic'
      },
      optionTwo: {
        votes: ['kriti'],
        text: 'be telepathic'
      }
    },
    loxhs1bqm25b708cmbf3g: {
      id: 'loxhs1bqm25b708cmbf3g',
      author: 'JACQUILIENE',
      timestamp: 1482579767190,
      optionOne: {
        votes: [],
        text: 'be a front-end developer'
      },
      optionTwo: {
        votes: ['kriti'],
        text: 'be a back-end developer'
      }
    },
    vthrdm985a262al8qx3do: {
      id: 'vthrdm985a262al8qx3do',
      author: 'JACQUILIENE',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['JACQUILIENE'],
        text: 'find $50 yourself'
      },
      optionTwo: {
        votes: ['BANDEYA'],
        text: 'have your best friend find $500'
      }
    },
    xj352vofupe1dqz9emx13r: {
      id: 'xj352vofupe1dqz9emx13r',
      author: 'BANDEYA',
      timestamp: 1493579767190,
      optionOne: {
        votes: ['BANDEYA'],
        text: 'write JavaScript'
      },
      optionTwo: {
        votes: ['JACQUILIENE'],
        text: 'write Swift'
      }
    }
  };

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function
_getUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...users}), 1000)
    })
}

export function _getQuestions() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...questions}), 1000)
    })
}

function formatQuestion({optionOneText, optionTwoText, author}) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
            votes: [],
            text: optionOneText,
        },
        optionTwo: {
            votes: [],
            text: optionTwoText,
        }
    }
}


function formatUser({username, name, avatarURL}) {
    return {
        id: username,
        name,
        avatarURL,
        answers: [],
        questions: []
    }
}

export function _saveQuestion(question) {
    return new Promise((res, rej) => {
        const authedUser = question.author;
        const formattedQuestion = formatQuestion(question);

        setTimeout(() => {
            questions = {
                ...questions,
                [formattedQuestion.id]: formattedQuestion
            }

            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    questions: users[authedUser].questions.concat([formattedQuestion.id])
                }
            }

            res(formattedQuestion)
        }, 1000)
    })
}

export function _saveQuestionAnswer({authedUser, qid, answer}) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    answers: {
                        ...users[authedUser].answers,
                        [qid]: answer
                    }
                }
            }

            questions = {
                ...questions,
                [qid]: {
                    ...questions[qid],
                    [answer]: {
                        ...questions[qid][answer],
                        votes: questions[qid][answer].votes.concat([authedUser])
                    }
                }
            }

            res()
        }, 500)
    })
}

export function _saveNewUser(user) {
    return new Promise((res, rej) => {
        const formattedUser = formatUser(user)

        setTimeout(() => {
            users = {
                ...users,
                [formattedUser.id]: formattedUser
            }
            res(users)
        }, 1000)
    })
}
