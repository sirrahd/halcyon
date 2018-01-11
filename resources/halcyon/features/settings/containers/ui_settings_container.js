import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { changeSetting } from '../../../actions/settings';
import api from '../../../api/halcyon';
import UISettings from '../components/ui_settings';

const mapStateToProps = state => ({
  settings: state.get('settings'),
});

const mapDispatchToProps = dispatch => ({
  onChange(key, value) {
    dispatch(changeSetting(key, value));
  },

  onChangeLanguage(value) {
    api().post('/settings', { lang: value } ).then(() => {
      window.location.reload();
    });
  },

  onChangeTheme(value) {
    api().post('/settings', { theme: value } ).then(() => {
      window.location.reload();
    });
  },
});

export default injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UISettings));
