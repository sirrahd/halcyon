import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  spoiler: { id: 'compose_form.spoiler', defaultMessage: 'Hide text behind warning' },
});

@injectIntl
export default class SpoilerButton extends React.PureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    const { intl, active } = this.props;

    return (
      <div
        className='compose-form__button'
        data-tip={intl.formatMessage(messages.spoiler)}
        aria-label={intl.formatMessage(messages.spoiler)}
      >
        <button className='compose-form__button-icon' onClick={this.handleClick}>
          <i className={active ? 'icon-cw-bold' : 'icon-cw'} aria-hidden='true' />
        </button>
      </div>
    );
  }

}
