import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import List from 'antd/lib/list';
import Card from 'antd/lib/card';
import Checkbox from 'antd/lib/checkbox';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { withRouter, Switch, Route } from 'react-router-dom';
class QuestionDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      questionId: props.match.url.split('/')[2],
    }
    this.getQuestionDetail(props.match.url.split('/')[2])
  }
  componentDidMount() {
  }
  getQuestionDetail(questionId) {
    axios.get(`https://polls.apiblueprint.org/questions/${questionId}`, {
        params: {
        }
      })
      .then((response) => {
        console.log("response", response)
        this.setState({questionDetail: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const {questionDetail} = this.state
    return (
      <div>
        {this.state.questionDetail &&
        <Row className="" type="flex" align="top" gutter={8} style={{margin: '100px auto 0 auto'}}>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <Card title={questionDetail.question} >
              {questionDetail.published_at}
              <Checkbox.Group style={{ width: '100%' }}>
                <Row>
                  {questionDetail.choices.map(choiceOption => {
                    return <Col span={8}><Checkbox value={choiceOption.choice} style={{fontSize: '24px'}}>{choiceOption.choice}</Checkbox></Col>
                  })}
                </Row>
              </Checkbox.Group>
            </Card>
          </Col>
        </Row>
        }
      </div>
    );
  }
}

export default withRouter(QuestionDetail);
