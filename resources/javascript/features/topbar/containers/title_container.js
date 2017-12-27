import { connect } from 'react-redux';
import Title from '../components/title';

const mapStateToProps = state => ({
  isLoading: state.getIn(['loading', 'show']),
});

export default connect(
  mapStateToProps
)(Title);
