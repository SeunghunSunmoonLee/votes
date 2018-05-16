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

class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
    }
    this.getQuestions()

  }
  componentDidMount() {
  }
  getQuestions() {
    axios.get('https://polls.apiblueprint.org/questions?page=1', {
        params: {
        }
      })
      .then((response) => {
        console.log("response", response)
        this.setState({questions: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    function onChange(checkedValues) {
      console.log('checked = ', checkedValues);
    }
    return (
      <div>
        {this.state.questions.length !== 0 &&
          <Row className="" type="flex" align="top" gutter={8}>
          <List
            dataSource={this.state.questions.length !==0 ? this.state.questions : null}
            renderItem={item => (
              <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                <List.Item>
                  <Card hoverable title={item.question} onClick={() => this.props.history.push(`${item.url}`)}>
                    {item.published_at}
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                      <Row>
                        {item.choices.map(choiceOption => {
                          return <Col span={8}><Checkbox value={choiceOption.choice} style={{fontSize: '24px'}}>{choiceOption.choice}</Checkbox></Col>
                        })}
                      </Row>
                    </Checkbox.Group>
                  </Card>
                </List.Item>
              </Col>
            )}
          />
          </Row>
        }
      </div>
    );
  }
}

export default withRouter(Questions);
