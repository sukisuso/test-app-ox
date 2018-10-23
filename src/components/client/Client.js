import React, { Component, Fragment } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import _ from 'lodash';

class Client extends Component {
  constructor() {
    super();
    this.state = {
      tests: [],
      test: undefined,
      userName: '',
      answers: [],
    };

    this.selectTest = this.selectTest.bind(this);
    this.saveAnswers = this.saveAnswers.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
  }

  changeUserName = (event) => {
    this.setState({userName: event.target.value});
  }

  setAnswer = (index, event) => {
    const oldAnswers = this.state.answers;
    const newAnswer = this.state.answers[index];
    newAnswer.answer = event.target.value;
    this.setState({ answers: [
      ...oldAnswers.slice(0, index),
      newAnswer,
      ...oldAnswers.slice(index + 1),
    ]});
  }

  selectTest = (event) => {
    if (!event || !event.target || !event.target.value) {
      return;
    }

    const testSelected = _.find(this.state.tests, {_id: event.target.value});
    const answers = testSelected.questions.map((question)=> {return {question: question, answer: ''}})
    this.setState({test: event.target.value, answers});
  }

  componentDidMount = (event) => {
    fetch("/api/test", {
      method: "GET",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    }).then((data) => {
      if (data.ok) {
        data.json().then(json => {
          this.setState({tests: json});
        });
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  saveAnswers = (event) => {
    fetch("/api/answer", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state),
    }).then((response) => {
      this.setState({test: undefined});
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h2>Fill New Test</h2>
        <InputLabel htmlFor="age-simple">Select test to fill</InputLabel>
        <Select
          value={this.state.testSelected}
          onChange={this.selectTest}
          inputProps={{
            name: 'name',
            id: '_id',
          }}>
          {this.state.tests.map(test =>
            <MenuItem value={test._id}>{test.name}</MenuItem>
          )}
        </Select>
        <Divider />
        {this.state.test && (
          <div>
            <TextField
              label="User name"
              value={this.state.userName}
              onChange={this.changeUserName}
              margin="normal"
            />
            <Divider />
            {this.state.answers.map((answer, i) => {
              return (
                <div>
                  <Fragment>
                    <TextField
                      label={answer.question}
                      value={answer.answer}
                      onChange={(e) => this.setAnswer(i, e)}
                      margin="normal"
                    />
                  </Fragment>
                  <Divider />
                </div>
              );
            })}
            <Divider />
            <Button color="primary" onClick={this.saveAnswers}>Create response</Button>
          </div>
        )}
      </div>
    );
  }
}

export default Client;
