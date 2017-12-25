import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  media_attachment: { id: 'compose_form.media_attachment', defaultMessage: 'Add photos or a video' },
});

@injectIntl
export default class UploadButton extends React.PureComponent {

  static propTypes = {
    disabled: PropTypes.bool,
    onSelectFile: PropTypes.func.isRequired,
    style: PropTypes.object,
    resetFileKey: PropTypes.number,
    acceptContentTypes: ImmutablePropTypes.listOf(PropTypes.string).isRequired,
    intl: PropTypes.object.isRequired,
  }

  handleChange = (e) => {
    if (e.target.files.length > 0) {
      this.props.onSelectFile(e.target.files);
    }
  }

  handleClick = () => {
    this.fileElement.click();
  }

  setRef = (c) => {
    this.fileElement = c;
  }

  render() {
    const { intl, resetFileKey, disabled, acceptContentTypes } = this.props;

    return (
      <div
        className='compose-form__button'
        aria-label={intl.formatMessage(messages.media_attachment)}
        data-tip={intl.formatMessage(messages.media_attachment)}
      >
        <label>
          <button className='compose-form__button-icon' onClick={this.handleClick}>
            <i className='icon-photo' aria-hidden='true' />
          </button>

          <input
            key={resetFileKey}
            ref={this.setRef}
            type='file'
            multiple={false}
            accept={acceptContentTypes.toArray().join(',')}
            onChange={this.handleChange}
            disabled={disabled}
            style={{ display: 'none' }}
          />
        </label>
      </div>
    );
  }

}
