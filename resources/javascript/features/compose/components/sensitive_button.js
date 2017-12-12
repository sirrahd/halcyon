import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

const messages = defineMessages({
  sensitive: { id: 'compose_form.sensitive', defaultMessage: 'Mark media as sensitive' },
});

@injectIntl
export default class SensitiveButton extends React.PureComponent {

  static propTypes = {
    visible: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    intl: intlShape.isRequired,
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    const { intl, visible, disabled } = this.props;

    return (
      <div
        className='compose-form__button'
        data-tip={intl.formatMessage(messages.sensitive)}
        aria-label={intl.formatMessage(messages.sensitive)}
        style={{ display: visible ? 'block' : 'none' }}
      >
        <button className='compose-form__button-icon' disabled={disabled} onClick={this.handleClick}>
          <i className='icon-nsfw' aria-hidden='true' />
        </button>
      </div>
    );
  }

}
