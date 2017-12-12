import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, defineMessages } from 'react-intl';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import classnames from 'classnames';

const messages = defineMessages({
  change: { id: 'privacy.change', defaultMessage: 'Adjust status privacy' },
  direct_long: { id: 'privacy.direct.long', defaultMessage: 'Post to mentioned users only' },
  direct_short: { id: 'privacy.direct.short', defaultMessage: 'Direct' },
  private_long: { id: 'privacy.private.long', defaultMessage: 'Post to followers only' },
  private_short: { id: 'privacy.private.short', defaultMessage: 'Followers-only' },
  public_long: { id: 'privacy.public.long', defaultMessage: 'Post to public timelines' },
  public_short: { id: 'privacy.public.short', defaultMessage: 'Public' },
  unlisted_long: { id: 'privacy.unlisted.long', defaultMessage: 'Do not post to public timelines' },
  unlisted_short: { id: 'privacy.unlisted.short', defaultMessage: 'Unlisted' },
});

@injectIntl
export default class PrivacyDropdown extends React.PureComponent {

  static propTypes = {
    value: PropTypes.string.isRequired,
    intl: intlShape.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  handleClick = (e) => {
    const value = e.currentTarget.getAttribute('data-index');
    e.preventDefault();
    this.props.onChange(value);
  }

  renderOption(item) {
    const { value, text, meta, iconClassName } = item;

    return (
      <li className='dropdown__list-item privacy-dropdown__list-item' key={value}>
        <a className='privacy-dropdown__option' data-index={value} onClick={this.handleClick} >
          <div className='privacy-dropdown__icon'>
            <i className={`${iconClassName} `} aria-hidden='true' />
          </div>
          <div className='privacy-dropdown__content'>
            <strong className='privacy-dropdown__text'>{text}</strong>
            <span className='privacy-dropdown__meta'>{meta}</span>
          </div>
        </a>
      </li>
    );
  }

  render() {
    const { intl, value } = this.props;
    const options  = [
      {
        value: 'public',
        text: intl.formatMessage(messages.public_short),
        meta: intl.formatMessage(messages.public_long),
        iconClassName: 'fa fa-globe',
      },
      {
        value: 'unlisted',
        text: intl.formatMessage(messages.unlisted_short),
        meta: intl.formatMessage(messages.unlisted_long),
        iconClassName: 'fa fa-lock',
      },
      {
        value: 'private',
        text: intl.formatMessage(messages.private_short),
        meta: intl.formatMessage(messages.private_long),
        iconClassName: 'fa fa-unlock-alt',
      },
      {
        value: 'direct',
        text: intl.formatMessage(messages.direct_short),
        meta: intl.formatMessage(messages.direct_long),
        iconClassName: 'fa fa-envelope',
      },
    ];

    const iconClassName = options.find((item) => {
      return item.value === value;
    }).iconClassName;

    return (
      <Dropdown className='privacy-dropdown'>
        <DropdownTrigger className='compose-form__button'>
          <div
            className='compose-form__button-icon'
            data-tip={intl.formatMessage(messages.change)}
            aria-label={intl.formatMessage(messages.change)}
          >
            <i className={`${iconClassName} `} aria-hidden='true' />
          </div>
        </DropdownTrigger>

        <DropdownContent className='privacy-dropdown__content'>
          <div className='dropdown__caret' >
            <div className='dropdown__caret-outer' />
            <div className='dropdown__caret-inner' />
          </div>

          <ul className='dropdown__list'>
            { options.map(item => this.renderOption(item)) }
          </ul>
        </DropdownContent>
      </Dropdown>
    );
  }

}
