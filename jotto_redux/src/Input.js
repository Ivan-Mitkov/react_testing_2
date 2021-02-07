import { connect } from "react-redux";
import React, { Component } from "react";
import { guessword } from "./actions/index";
import { string } from "prop-types";
export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = { currentGuess: null };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.currentGuess && this.state.currentGuess.length > 0) {
      this.props.guessword(this.state.currentGuess);
    }
  };
  render() {
    const { success } = this.props;
    const content = success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={this.state.currentGuess}
          onChange={(e) => this.setState({ currentGuess: e.target.value })}
        ></input>
        <button
          data-test="submit-btn"
          type="submit"
          className="btn btn-primary mb-2"
          onClick={(e) => this.handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="c-input">{content}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    success: state.success,
  };
};
export default connect(mapStateToProps, { guessword })(UnconnectedInput);
