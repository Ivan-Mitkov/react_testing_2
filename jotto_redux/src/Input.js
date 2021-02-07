import { connect } from "react-redux";
import React, { Component } from "react";
import { guessword } from "./actions/index";
export class UnconnectedInput extends Component {
  render() {
    const { success } = this.props;
    const content = success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
        ></input>
        <button
          data-test="submit-btn"
          type="submit"
          className="btn btn-primary mb-2"
          onClick={this.props.guessword}
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
