import { connect } from 'react-redux';
import Title from '../components/title';

const mapStateToProps = state => ({
  isRequesting: state.getIn(['indicators', 'spinner']),
});

export default connect(
  mapStateToProps
)(Title);
