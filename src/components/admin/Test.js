import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class Test extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      questions: [],
      currentQuestion: '',
    };

    this.saveTest = this.saveTest.bind(this);
  }

  changeName = (event) => {
    this.setState({name: event.target.value});
  }

  changeDesc = (event) => {
    this.setState({description: event.target.value});
  }

  addQuestion = (event) => {
    this.setState(prevState => ({
      questions: prevState.currentQuestion ? [...prevState.questions, prevState.currentQuestion] : [...prevState.questions],
      currentQuestion: '',
    }))
  }

  changeQuestion = (event) => {
    this.setState({currentQuestion: event.target.value});
  }

  saveTest = (event) => {
    const body = {
      name: this.state.name,
      description: this.state.description,
      questions: this.state.questions,
    };

    fetch("/api/test", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    }).then((response) => {
      this.setState({description: '', name: '', currentQuestion: '', questions: []});
    }).catch((error) => {
      console.log(error);
    });
  }
  
  render() {
    return (
      <div>
        <h2>New test</h2>
        <Card>
          <CardContent>
            <form>
              <TextField
                label="Test name"
                value={this.state.name}
                onChange={this.changeName}
                margin="normal"
              />
              <TextField
                label="Description"
                value={this.state.description}
                onChange={this.changeDesc}
                margin="normal"
              />
              <Divider />
              <Table>
                <TableBody>
                  
                  {this.state.questions.map((question, i) => {
                    return (
                      <TableRow>
                        <TableCell component="th"  key={i}>
                          {question}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              <TextField
                label="Question"
                value={this.state.currentQuestion}
                onChange={this.changeQuestion}
                margin="normal"
              />
              <Button variant="fab" color="primary" aria-label="Add" onClick={this.addQuestion}>
                <AddIcon />
              </Button>
            </form>
          
            <Divider />
            <Button color="primary" onClick={this.saveTest}>Create</Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Test;
