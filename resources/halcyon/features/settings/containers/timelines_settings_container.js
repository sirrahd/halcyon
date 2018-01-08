import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { changeSetting } from '../../../actions/settings';
import TimelinesSettings from '../components/timelines_settings';

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
)(TimelinesSettings));
