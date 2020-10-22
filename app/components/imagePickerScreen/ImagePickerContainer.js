import React from 'react';
import {connect} from 'react-redux';
import ImagePickerComponent from './ImagePickerComponent';

const ImagePickerContainer = props => {
  return <ImagePickerComponent props={props} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImagePickerContainer);
