import React from 'react';
import PropTypes from 'prop-types';
import ComposeFormModal from './compose_form_modal';
import KeyboardShortcutsModal from './keyboard_shortcuts_modal';
import SettingsModal from './settings_modal';

const MODAL_COMPONENTS = {
  'COMPOSE_FORM': ComposeFormModal,
  'SETTINGS': SettingsModal,
  'KEYBOARD_SHORTCUTS': KeyboardShortcutsModal,
};

export default class ModalRoot extends React.PureComponent {

  static propTypes = {
    type: PropTypes.string,
    props: PropTypes.object,
    onClose: PropTypes.func.isRequired,
  };

  state = {
    revealed: false,
  };

  handleKeyUp = (e) => {
    if ((e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27)
         && !!this.props.type) {
      this.props.onClose();
    }
  }

  componentDidMount () {
    window.addEventListener('keyup', this.handleKeyUp, false);
  }

  componentWillReceiveProps (nextProps) {
    if (!!nextProps.type && !this.props.type) {
      this.activeElement = document.activeElement;
      this.getSiblings().forEach(sibling => sibling.setAttribute('inert', true));
    } else if (!nextProps.type) {
      document.body.style.overflow = 'scroll';
      this.setState({ revealed: false });
    }
  }

  componentDidUpdate (prevProps) {
    if (!this.props.type && !!prevProps.type) {
      this.getSiblings().forEach(sibling => sibling.removeAttribute('inert'));
      this.activeElement.focus();
      this.activeElement = null;
    }
    if (this.props.type) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        this.setState({ revealed: true });
      });
    }
  }

  componentWillUnmount () {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  getSiblings = () => {
    return Array(...this.node.parentElement.childNodes).filter(node => node !== this.node);
  }

  setRef = ref => {
    this.node = ref;
  }

  render () {
    const { type, props, onClose } = this.props;
    const { revealed } = this.state;
    const visible = !!type;
    const SpecificComponent = MODAL_COMPONENTS[type];

    if (!visible) {
      return (
        <div className='modal-root' ref={this.setRef} style={{ opacity: 0 }} />
      );
    }

    return (
      <div className='modal-root' ref={this.setRef} style={{ opacity: revealed ? 1 : 0 }}>
        <div style={{ pointerEvents: visible ? 'auto' : 'none' }}>
          <div role='presentation' className='modal-root__overlay' onClick={onClose} />
          <div role='dialog' className='modal-root__container'>
            <SpecificComponent {...props} onClose={onClose} />
          </div>
        </div>
      </div>
    );
  }

}
