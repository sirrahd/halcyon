import { connect } from 'react-redux';
import SensitiveButton from '../components/sensitive_button';
import { changeComposeSensitivity } from '../../../actions/compose';

const mapStateToProps = state => ({
  visible: state.getIn(['compose', 'media_attachments']).size > 0,
  active: state.getIn(['compose', 'sensitive']),
  disabled: state.getIn(['compose', 'spoiler']),
});

const mapDispatchToProps = dispatch => ({

  onClick () {
    dispatch(changeComposeSensitivity());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SensitiveButton);
