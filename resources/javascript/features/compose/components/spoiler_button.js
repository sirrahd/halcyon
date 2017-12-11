import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

const messages = defineMessages({
  spoiler: { id: 'compose_form.spoiler', defaultMessage: 'Hide text behind warning' },
});

@injectIntl
export default class SpoilerButton extends React.PureComponent {

  static propTypes = {
    intl: intlShape.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    const { intl } = this.props;

    return (
      <div
        className='compose-form__button compose-form__button--spoiler-button'
        data-tip={intl.formatMessage(messages.spoiler)}
        aria-label={intl.formatMessage(messages.spoiler)}
      >
        <button className='compose-form__button-icon' onClick={this.handleClick}>
          <i className='icon-cw' />
        </button>
      </div>
    );
  }

}
