import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  sensitive: { id: 'compose_form.sensitive', defaultMessage: 'Mark media as sensitive' },
});

@injectIntl
export default class SensitiveButton extends React.PureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
    visible: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    const { intl, active, visible, disabled } = this.props;

    return (
      <div
        className='compose-form__button'
        aria-label={intl.formatMessage(messages.sensitive)}
        style={{ display: visible ? 'block' : 'none' }}
      >
        <button className='compose-form__button-icon' disabled={disabled} onClick={this.handleClick}>
          <i className={active ? 'icon-nsfw-bold' : 'icon-nsfw'} aria-hidden='true' />
        </button>
      </div>
    );
  }

}
