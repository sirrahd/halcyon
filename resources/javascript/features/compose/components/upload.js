import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { defineMessages, injectIntl } from 'react-intl';
import Overlay from 'react-overlays/lib/Overlay';

const messages = defineMessages({
  undo: { id: 'upload_form.undo', defaultMessage: 'Undo' },
  description: { id: 'upload_form.description', defaultMessage: 'Describe for the visually impaired' },
});

@injectIntl
export default class Upload extends ImmutablePureComponent {

  static propTypes = {
    media: ImmutablePropTypes.map.isRequired,
    intl: PropTypes.object.isRequired,
    onUndo: PropTypes.func.isRequired,
    onDescriptionChange: PropTypes.func.isRequired,
  };

  state = {
    hovered: false,
    focused: false,
    dirtyDescription: null,
    showDiscription: false,
  };

  handleUndoClick = () => {
    this.props.onUndo(this.props.media.get('id'));
  }

  handleDescriptionClick = () => {
    this.setState({ showDiscription: !this.state.showDiscription });
  }

  handleInputChange = e => {
    this.setState({ dirtyDescription: e.target.value });
  }

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  }

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  }

  handleInputFocus = () => {
    this.setState({ focused: true });
  }

  handleInputBlur = () => {
    const { dirtyDescription } = this.state;

    this.setState({ focused: false, dirtyDescription: null, showDiscription: false });

    if (dirtyDescription !== null) {
      this.props.onDescriptionChange(this.props.media.get('id'), dirtyDescription);
    }
  }

  render () {
    const { intl, media }     = this.props;
    const description         = this.state.dirtyDescription || (this.state.dirtyDescription !== '' && media.get('description')) || '';
    const { showDiscription } = this.state;

    return (
      <div className='compose-form__upload' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div className='compose-form__upload-thumbnail' style={{ backgroundImage: `url(${media.get('preview_url')})` }}>

          <div className='compose-form__upload-buttons'>
            <button aria-label={intl.formatMessage(messages.undo)} onClick={this.handleUndoClick}>
              <i className='icon-time' aria-hidden='true' />
            </button>

            <button aria-label={intl.formatMessage(messages.description)} onClick={this.handleDescriptionClick}>
              <i className='fa fa-font' aria-hidden='true' />
            </button>
          </div>

          <div className={`compose-form__upload-description-preview ${ description ? 'compose-form__upload-description-preview--visible' : '' }`}>
            <span>{description}</span>
          </div>

          <Overlay show={showDiscription} placement='bottom' target={this}>
            <div className='compose-form__upload-description'>
              <input
                placeholder={intl.formatMessage(messages.description)}
                type='text'
                value={description}
                maxLength={420}
                onFocus={this.handleInputFocus}
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
              />
            </div>
          </Overlay>
        </div>
      </div>
    );
  }

}
