import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { intlShape, FormattedMessage } from 'react-intl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Dropdown, { DropdownContent } from 'react-simple-dropdown';

class SearchForm extends React.PureComponent {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    onDeleteRecentSearches: PropTypes.func.isRequired,
    onClearRecentSearches: PropTypes.func.isRequired,
    onDeleteSavedSearches: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
    recentSearches: ImmutablePropTypes.list.isRequired,
    savedSearches: ImmutablePropTypes.list.isRequired,
  };

  state = {
    expanded: false,
  }

  componentWillMount() {
    window.addEventListener('click', this.handleBlur);
    window.addEventListener('touchstart', this.handleBlur);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleBlur);
    window.removeEventListener('touchstart', this.handleBlur);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.input.value) {
      this.props.onSearch(this.input.value);
      this.input.value = '';

      // Unfocus and Hide dropdown content
      document.activeElement.blur();
      this.setState({ expanded: false });
    }
  }

  handleFocus = () => {
    this.setState({ expanded: true });
  }

  handleBlur = (e) => {
    const { dropdownElement } = this;
    if (
      e.target !== dropdownElement &&
      !dropdownElement.contains(e.target) &&
      this.state.expanded
    ) {
      this.setState({ expanded: false });
    }
  }

  handleDeleteRecentSearches = (e) => {
    const index = Number(e.currentTarget.getAttribute('data-index'));
    this.props.onDeleteRecentSearches(index);
  }

  handleDeleteSavedSearches = (e) => {
    const index = Number(e.currentTarget.getAttribute('data-index'));
    this.props.onDeleteSavedSearches(index);
  }

  render() {
    const { intl, recentSearches, savedSearches } = this.props;
    const { expanded } = this.state;

    const renderDropdownItem = (item, index, handleDelete) => {
      const location = {
        pathname: '/search',
        search: `?q=${encodeURIComponent(item)}`,
      };

      return (
        <li key={`${item}-${index}`} className="search-form-dropdown__list-item dropdown__list-item">
          <div className="search-form-dropdown__item dropdown__link">

            <Link className="search-form-dropdown__link" to={location}>
              {item}
            </Link>

            <button
              className="search-form-dropdown__delete-button"
              onClick={handleDelete}
              data-item={item}
              data-index={index.toString()}
              >
              <i className="icon-time" aria-hidden />
            </button>

          </div>
        </li>
      );
    };

    const recentSearchesContent = (
      <div>
        <header className="search-form-dropdown__header">
          <h3 className="search-form-dropdown__title">
            <FormattedMessage id="search_form.recent_searches" defaultMessage="Recent searches" />
          </h3>
          <button className="search-form-dropdown__clear-button link-button" onClick={this.props.onClearRecentSearches}>
            <FormattedMessage id="search_form.recent_searches.clear" defaultMessage="Clear All" />
          </button>
        </header>

        <ul className="search-form-dropdown__list dropdown__list">
          {
            recentSearches.size ?
            recentSearches.map((item, index) =>
            renderDropdownItem(item, index, this.handleDeleteRecentSearches)) :
            (
              <li className="search-form-dropdown__empty-message">
                <FormattedMessage id="search_form.recent_searches.empty" defaultMessage="You haven't searched anythig" />
              </li>
            )
          }
        </ul>
      </div>
    );

    const savedSearchesContent = (
      <div>
        <header className="search-form-dropdown__header">
          <h3 className="search-form-dropdown__title">
            <FormattedMessage id="search_form.saved_searches" defaultMessage="Saved searches" />
          </h3>
        </header>

        <ul className="search-form-dropdown__list dropdown__list">
          {
            savedSearches.size ?
            savedSearches.map((item, index) =>
            renderDropdownItem(item, index, this.handleDeleteSavedSearches)) :
            (
              <li className="search-form-dropdown__empty-message">
                <FormattedMessage id="search_form.saved_searches.empty" defaultMessage="You haven't saved anything" />
              </li>
            )
          }
        </ul>
      </div>
    );

    const dropdownContent = (
      <DropdownContent className="search-form-dropdown">

        <div className="dropdown__caret">
          <div className="dropdown__caret-outer" />
          <div className="dropdown__caret-inner" />
        </div>

        {recentSearchesContent}
        {savedSearchesContent}

      </DropdownContent>
    );

    return (
      <div className="user-nav__search-form" ref={(dropdownElement) => { this.dropdownElement = dropdownElement; }}>
        <Dropdown active={expanded}>
          <form
            role="search"
            className="search-form"
            onSubmit={this.handleSubmit}
            onFocus={this.handleFocus}
            >

            <input
              className="search-form__input"
              type="text"
              spellCheck="false"
              ref={(input) => { this.input = input; }}
              placeholder={intl.formatMessage({ id: 'search_form.placeholder' })}
              aria-autocomplete="list"
              />

            <button className="search-form__submit">
              <i className="icon-loupe" aria-hidden />
            </button>

            {dropdownContent}

          </form>
        </Dropdown>
      </div>
    );
  }
}

export default SearchForm;
