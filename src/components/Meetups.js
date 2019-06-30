import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Spinner,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText
} from "reactstrap";

import { fetchMeetups } from "../actions/meetupActions";

export class Meetups extends Component {
  componentDidMount() {
    this.props.fetchMeetups();
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
  static renderLoading() {
    return (
      <div className="pt-5 m-5 d-flex justify-content-center">
        <Spinner type="grow" color="danger" data-test="spinner-test" />
      </div>
    );
  }

  renderMeetups() {
    return (
      <Container>
        <Row className="pt-5">
          {this.props.meetups.map(meetup => (
            <Col sm="4" key={meetup.id} data-test="meetup-cards-test">
              <Card body>
                <CardTitle>
                  <h5>{meetup.title}</h5>
                </CardTitle>
                <CardText>{meetup.details}</CardText>
                <a href="#" className="stretched-link" />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  render() {
    return (
      <div>
        {this.props.loading ? Meetups.renderLoading() : this.renderMeetups()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meetups: state.meetups.meetups,
  loading: state.meetups.loading
});

export default connect(
  mapStateToProps,
  { fetchMeetups }
)(Meetups);
