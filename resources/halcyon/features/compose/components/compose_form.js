import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePureComponent from 'react-immutable-pure-component';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import { length } from 'stringz';

import AutosuggestTextarea from './autosuggest_textarea';
import EmojiPickerDropdown from '../containers/emoji_picker_dropdown_container';
import CharacterCounter from './character_counter';
import UploadFormContainer from '../containers/upload_form_container';

import UploadButtonContainer from '../containers/upload_button_container';
import PrivacyDropdownContaienr from '../containers/privacy_dropdown_container';
import SensitiveButtonContainer from '../containers/sensitive_button_container';
import SpoilerButtonContainer from '../containers/spoiler_button_container';

import { countableText } from '../util/counter';
import { isMobile } from '../../../is_mobile';

const messages = defineMessages({
  placeholder: { id: 'compose_form.placeholder', defaultMessage: 'What\'s happning?' },
  spoiler_placeholder: { id: 'compose_form.spoiler_placeholder', defaultMessage: 'Write your warning here' },
  published: { id: 'compose_form.published', defaultMessage: 'Your Toot was sent' },
});

@injectIntl
export default class ComposeForm extends ImmutablePureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    suggestion_token: PropTypes.string,
    suggestions: ImmutablePropTypes.list,
    spoiler: PropTypes.bool,
    spoiler_text: PropTypes.string,
    privacy: PropTypes.string,
    focusDate: PropTypes.instanceOf(Date),
    preselectDate: PropTypes.instanceOf(Date),
    is_submitting: PropTypes.bool,
    is_uploading: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onClearSuggestions: PropTypes.func.isRequired,
    onFetchSuggestions: PropTypes.func.isRequired,
    onSuggestionSelected: PropTypes.func.isRequired,
    onChangeSpoilerText: PropTypes.func.isRequired,
    onPaste: PropTypes.func.isRequired,
    onPickEmoji: PropTypes.func.isRequired,
    onShowMessage: PropTypes.func.isRequired,
  }

  handleChange = (e) => {
    this.props.onChange(e.target.value);
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13 && (e.ctrlKey || e.metaKey)) {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    if (this.props.text !== this.autosuggestTextarea.textarea.value) {
      // Something changed the text inside the textarea (e.g. browser extensions like Grammarly)
      // Update the state to match the current text
      this.props.onChange(this.autosuggestTextarea.textarea.value);
    }

    this.props.onSubmit();
  }

  onSuggestionsClearRequested = () => {
    this.props.onClearSuggestions();
  }

  onSuggestionsFetchRequested = (token) => {
    this.props.onFetchSuggestions(token);
  }

  onSuggestionSelected = (tokenStart, token, value) => {
    this._restoreCaret = null;
    this.props.onSuggestionSelected(tokenStart, token, value);
  }

  handleChangeSpoilerText = (e) => {
    this.props.onChangeSpoilerText(e.target.value);
  }

  componentWillReceiveProps (nextProps) {
    // If this is the update where we've finished uploading,
    // save the last caret position so we can restore it below!
    if (!nextProps.is_uploading && this.props.is_uploading) {
      this._restoreCaret = this.autosuggestTextarea.textarea.selectionStart;
    }

    // Show "Your Toot was sent" after making sure of
    // request finished and status published successfully
    if ( !nextProps.is_submitting && this.props.is_submitting && nextProps.text === '' ) {
      this.props.onShowMessage({ text: this.props.intl.formatMessage(messages.published) });
    }
  }

  componentDidUpdate (prevProps) {
    // This statement does several things:
    // - If we're beginning a reply, and,
    //     - Replying to zero or one users, places the cursor at the end of the textbox.
    //     - Replying to more than one user, selects any usernames past the first;
    //       this provides a convenient shortcut to drop everyone else from the conversation.
    // - If we've just finished uploading an image, and have a saved caret position,
    //   restores the cursor to that position after the text changes!
    if (this.props.focusDate !== prevProps.focusDate || (prevProps.is_uploading && !this.props.is_uploading && typeof this._restoreCaret === 'number')) {
      let selectionEnd, selectionStart;

      if (this.props.preselectDate !== prevProps.preselectDate) {
        selectionEnd   = this.props.text.length;
        selectionStart = this.props.text.search(/\s/) + 1;
      } else if (typeof this._restoreCaret === 'number') {
        selectionStart = this._restoreCaret;
        selectionEnd   = this._restoreCaret;
      } else {
        selectionEnd   = this.props.text.length;
        selectionStart = selectionEnd;
      }

      this.autosuggestTextarea.textarea.setSelectionRange(selectionStart, selectionEnd);
      this.autosuggestTextarea.textarea.focus();
    } else if(prevProps.is_submitting && !this.props.is_submitting) {
      this.autosuggestTextarea.textarea.focus();
    }
  }

  setAutosuggestTextarea = (c) => {
    this.autosuggestTextarea = c;
  }

  handleEmojiPick = (data) => {
    const position     = this.autosuggestTextarea.textarea.selectionStart;
    const emojiChar    = data.native;
    this._restoreCaret = position + emojiChar.length + 1;
    this.props.onPickEmoji(position, data);
  }

  render() {
    const { intl, onPaste } = this.props;
    const disabled = this.props.is_submitting;
    const text     = [this.props.spoiler_text, countableText(this.props.text)].join('');

    return (
      <div className='compose-form'>

        <div className='compose-form__spoiler-text-wrapper'>
          <label>
            <span style={{ display: 'none' }}>{intl.formatMessage(messages.spoiler_placeholder)}</span>
            <input
              id='cw-spoiler-input'
              className={`compose-form__spoiler-text spoiler-input__input ${this.props.spoiler ? 'compose-form__spoiler-text--visible' : ''}`}
              type='text'
              placeholder={intl.formatMessage(messages.spoiler_placeholder)}
              value={this.props.spoiler_text}
              onChange={this.handleChangeSpoilerText}
              onKeyDown={this.handleKeyDown}
            />
          </label>
        </div>

        <div className='compose-form__autosuggest-wrapper'>
          <AutosuggestTextarea
            ref={this.setAutosuggestTextarea}
            placeholder={intl.formatMessage(messages.placeholder)}
            disabled={disabled}
            maxRows={13}
            value={this.props.text}
            onChange={this.handleChange}
            suggestions={this.props.suggestions}
            onKeyDown={this.handleKeyDown}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            onSuggestionSelected={this.onSuggestionSelected}
            onPaste={onPaste}
            autoFocus={!isMobile(window.innerWidth)}
          />

          <div className='compose-form__emoji-button'>
            <EmojiPickerDropdown onPickEmoji={this.handleEmojiPick} />
          </div>
        </div>

        <div className='compose-form__modifiers'>
          <UploadFormContainer />
        </div>

        <div className='compose-form__buttons-wrapper'>
          <div className='compose-form__buttons'>
            <UploadButtonContainer />
            <SpoilerButtonContainer />
            <SensitiveButtonContainer />
            <PrivacyDropdownContaienr />
          </div>

          <div className='compose-form__character-counter'>
            <CharacterCounter max={500} text={text} />
          </div>

          <div className='compose-form__publish'>
            <button
              className='compose-form__publish-button'
              onClick={this.handleSubmit}
              disabled={disabled || this.props.is_uploading || length(text) > 500 || (text.length !== 0 && text.trim().length === 0)}
            >
              <FormattedMessage id='compose_form.publish' defaultMessage='Toot!' />
            </button>
          </div>
        </div>
      </div>
    );
  }

}
