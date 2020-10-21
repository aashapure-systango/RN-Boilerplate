import React from 'react';
import {connect} from 'react-redux';
import DateTimePickerComponent from './DateTimePickerComponent';

const DateTimePickerContainer = props => {
  return <DateTimePickerComponent props={props} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DateTimePickerContainer);
