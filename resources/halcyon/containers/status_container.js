import { connect } from 'react-redux';
import { makeGetStatus } from '../selectors';

import Status from '../components/status';

const makeMapStateToProps = () => {
  const getStatus = makeGetStatus();

  const mapStateToProps = (state, props) => ({
    status: getStatus(state, props.id),
  });

  return mapStateToProps;
};

export default connect(
  makeMapStateToProps,
)(Status);
