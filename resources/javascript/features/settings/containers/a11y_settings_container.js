import { connect } from 'react-redux';
import { changeMetaSetting } from '../../../actions/meta';
import A11ySettings from '../components/a11y_settings';

const mapStateToProps = state => ({
  meta: state.get('meta'),
});

const mapDispatchToProps = dispatch => ({
  onChange(key, value) {
    dispatch(changeMetaSetting(key, value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(A11ySettings);
