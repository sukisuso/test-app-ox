import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Divider from '@material-ui/core/Divider';

class List extends Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      answerSelected: undefined,
    };
  }

  showAnswer = (answer, event) => {
    this.setState({ answerSelected: answer });
  }

  componentDidMount = (event) => {
    fetch("/api/answer", {
      method: "GET",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    }).then((data) => {
      if (data.ok) {
        data.json().then(json => {
          this.setState({answers: json});
        });
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h2>Test list</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Test name</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.answers.map((answer) => {
              return (
                <TableRow>
                  <TableCell component="th">
                    {answer.userName}
                  </TableCell>
                  <TableCell component="th">
                    {answer.test.name}
                  </TableCell>
                  <TableCell component="th">
                  <Button color="primary" onClick={(e) => this.showAnswer(answer, e)}>View</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Divider />
        {this.state.answerSelected && (
          <div>
            <Fragment>
              <h2>Test -> {this.state.answerSelected.test.name} [{this.state.answerSelected.userName}]</h2>
            </Fragment>
            <Fragment>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Question</TableCell>
                    <TableCell>Answer</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.answerSelected.answers.map((answer) => {
                    return (
                      <TableRow>
                        <TableCell component="th">
                          {answer.question}
                        </TableCell>
                        <TableCell component="th">
                          {answer.answer}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Fragment>
          </div>
        )}
      </div>
    );
  }
}

export default List;
