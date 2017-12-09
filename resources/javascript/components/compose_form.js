import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, defineMessages, FormattedMessage } from 'react-intl';
import Textarea from 'react-textarea-autosize';
import DropdownMenu from './dropdown_menu';

const messages = defineMessages({
  placeholder: { id: 'compose_form.placeholder', defaultMessage: 'What\'s happning?' },
});

@injectIntl
export default class ComposeForm extends React.PureComponent {

  static propTypes = {
    intl: intlShape.isRequired,

    text: PropTypes.string,
    spoiler: PropTypes.bool,
    spoiler_text: PropTypes.string,
    sensitive: PropTypes.bool,
    media_attachments: PropTypes.array,

    onSubmit: PropTypes.func, // これ
    onKeyDown: PropTypes.func, //これ
  }

  state = {
    charLen: 0,
  }

  render() {
    const { intl } = this.props;
    // const { expandedSpoiler } = this.state;

    return (
      <div className='compose-form'>
        <div className='compose-form__text-area-wrapper'>
          <Textarea
            className='compose-form__text-area'
            placeholder={intl.formatMessage(messages.placeholder)}
            maxRows={13}
            autoFocus
          />
        </div>

        <div className='compose-form__buttons-wrapper'>
          <div className='compose-form__buttons'>
            <button className='compose-form__button'>
              <i className='icon-photo' />
            </button>

            <button className='compose-form__button'>
              <i className='icon-cw' />
            </button>

            <button className='compose-form__button'>
              <i className='icon-nsfw' />
            </button>

            <button className='compose-form__button'>
              <i className='icon-social' />
            </button>
          </div>

          <div className='compose-form__publish'>
            <button className='compose-form__publish-button'>
              <FormattedMessage id='compose_form.publish' defaultMessage='Toot!' />
            </button>
          </div>
        </div>
      </div>
    );
  }

}
