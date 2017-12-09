import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal';
import ModalRoot from '../components/modal_root';

const mapStateToProps = () => ({

});

const mapDispatchToProps = ( dispatch ) => ({
  onClose() {
    dispatch(closeModal());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalRoot);
