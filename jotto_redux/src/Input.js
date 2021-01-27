import { connect } from "react-redux";
import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <div>
        <button>Submit</button>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {};
};
export default connect(mapStateToProps)(Input);
