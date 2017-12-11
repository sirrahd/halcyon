import { connect } from 'react-redux';
import UploadButton from '../components/upload_button';
import { uploadCompose } from '../../../actions/compose';
import { List } from 'immutable';

const mapStateToProps = state => ({
  disabled: state.getIn(['compose', 'is_uploading']) || (state.getIn(['compose', 'media_attachments']).size > 3 || state.getIn(['compose', 'media_attachments']).some(m => m.get('type') === 'video')),
  resetFileKey: state.getIn(['compose', 'resetFileKey']),
  acceptContentTypes: List([
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.webm',
    '.mp4',
    '.m4v',
    'image/jpeg',
    'image/png',
    'image/gif',
    'video/webm',
    'video/mp4',
  ]),
});

const mapDispatchToProps = dispatch => ({

  onSelectFile (files) {
    dispatch(uploadCompose(files));
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadButton);
