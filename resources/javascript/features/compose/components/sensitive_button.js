import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, defineMessages } from 'react-intl';

const messages = defineMessages({
  sensitive: { id: 'compose_form.sensitive', defaultMessage: 'Mark media as sensitive' },
});

@injectIntl
export default class SensitiveButton extends React.PureComponent {

  static propTypes = {
    intl: intlShape.isRequired,
  }

  render() {
    const { intl } = this.props;

    return (
      <div
        className='compose-form__button compose-form__button--sensitive-button'
        data-tip={intl.formatMessage(messages.sensitive)}
        aria-label={intl.formatMessage(messages.sensitive)}
      >
        <button className='compose-form__button-icon'>
          <i className='icon-nsfw' />
        </button>
      </div>
    );
  }

}
