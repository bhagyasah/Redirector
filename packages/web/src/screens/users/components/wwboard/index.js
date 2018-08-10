import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MessageSender from './MessageSender';
import ShowMessage from './ShowMessage';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
    };
  }

  changeHandler = (data) => {
    this.setState({
      dataList: [...this.state.dataList, data],
    });
  }

  render() {
    console.log('wwboard value in redux', this.props.WWBoard);
    return (
      <div className="user-body-content-body">
        <div className="content-title">WWBoard</div>
        <div className="user-body-content-list">
          {this.props.WWBoard.map((msg, idx) => <ShowMessage message={msg.message} idx={idx} />)}
        </div>
        <MessageSender changeHandler={data => this.changeHandler(data)} />
      </div>
    );
  }
}

index.defaultProps = {
  WWBoard: [],
};
index.propTypes = {
  WWBoard: PropTypes.array,
};
const mapStateToProps = (state) => {
  return {
    WWBoard: state.schema.WWBoard,
  };
};
export default connect(mapStateToProps)(index);
