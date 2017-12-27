import { connect } from 'react-redux';
import { changeMeta } from '../../../actions/meta';
import { injectIntl } from 'react-intl';
import A11ySettings from '../components/a11y_settings';

const mapStateToProps = state => ({
  meta: state.get('meta'),
});

const mapDispatchToProps = dispatch => ({
  onChange(key, value) {
    dispatch(changeMeta(key, value));
  },
});

export default injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps,
)(A11ySettings));
