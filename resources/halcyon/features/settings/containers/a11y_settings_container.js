import { connect } from 'react-redux';
import { changeSetting } from '../../../actions/settings';
import { injectIntl } from 'react-intl';
import A11ySettings from '../components/a11y_settings';

const mapStateToProps = state => ({
  settings: state.get('settings'),
});

const mapDispatchToProps = dispatch => ({
  onChange(key, value) {
    dispatch(changeSetting(key, value));
  },
});

export default injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps,
)(A11ySettings));
