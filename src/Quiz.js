import React, {Component} from 'react';

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = {quiz_position: 1}
    }
    render() {
        //number9
        return(<div className = "QuizQuestion">{quizData.QuizQuestion[0].instruction_text}</div>)
    }
}
export default Quiz