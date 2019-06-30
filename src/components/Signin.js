import React, { Component } from "react";
import {
  Spinner,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Toast,
  ToastBody,
  ToastHeader
} from "reactstrap";
import { Form, Control } from "react-redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { signIn } from "../actions/signinActions";
import { loadingAction } from "../actions/loadingActions";

export class Signin extends Component {
  handleSubmit(data) {
    this.props.loadingAction();
    this.props.signIn(data);
  }

  renderLoading() {
    if (this.props.isSignedIn) {
      return <Redirect to="/" />;
    } else if (this.props.error) {
      return (
        <Row>
          <Col sm="12" md={{ size: 4, offset: 4 }}>
            <div className="p-5 my-2 rounded">
              <Toast data-test="error-test">
                <ToastHeader>Login Failed</ToastHeader>
                <ToastBody>
                  <p>Please check your credentials and try again</p>
                  <p className="text-danger">{this.props.error}</p>
                  <a href="/signin/">Go Back</a>
                </ToastBody>
              </Toast>
            </div>
          </Col>
        </Row>
      );
    }
    return (
      <div className="pt-5 m-5 d-flex justify-content-center">
        <Spinner type="grow" color="danger" data-test="spinner-test" />
      </div>
    );
  }

  renderForm() {
    return (
      <Row>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Form
            model="signin"
            className="pt-5"
            onSubmit={data => this.handleSubmit(data)}
            data-test="form-test"
          >
            <FormGroup>
              <Label for="email">Email</Label>
              <Control.text
                className="form-control"
                model="signin.email"
                type="email"
                placeholder="email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Control.text
                type="password"
                placeholder="password"
                model="signin.password"
                className="form-control"
                required
              />
            </FormGroup>
            <Button>Sign in</Button>
          </Form>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <div>{this.props.loading ? this.renderLoading() : this.renderForm()}</div>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.signin.isSignedIn,
  loading: state.loading.loading,
  error: state.error.error
});

export default connect(
  mapStateToProps,
  { signIn, loadingAction }
)(Signin);
