import { connect } from 'react-redux';
import { changeSetting } from '../../../actions/settings';
import UISettings from '../components/ui_settings';

const mapStateToProps = state => ({
  settings: state.get('settings'),
});

const mapDispatchToProps = dispatch => ({
  onChange(key, value) {
    dispatch(changeSetting(key, value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UISettings);
