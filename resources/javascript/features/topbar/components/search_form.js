import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';
import { intlShape, FormattedMessage } from 'react-intl';
import Dropdown, { DropdownContent } from 'react-simple-dropdown';

const DropdownItem = (item, index, onDelete) => {
  const location = {
    pathname: '/search',
    search: `?q=${encodeURIComponent(item)}`,
  };

  return (
    <li key={`${item}-${index}`} className='search-form-dropdown__list-item dropdown__list-item'>
      <div className='search-form-dropdown__item dropdown__link'>

        <Link to={location} className='search-form-dropdown__link' >
          {item}
        </Link>

        <button
          className='search-form-dropdown__delete-button'
          onClick={onDelete}
          data-item={item}
          data-index={index.toString()}
        >
          <i className='icon-time' aria-hidden />
        </button>

      </div>
    </li>
  );
};

const RecentSearchesContent = (recentSearches, onDelete, onClear) => (
  <div>
    <header className='search-form-dropdown__header'>
      <h3 className='search-form-dropdown__title'>
        <FormattedMessage id='search_form.recent_searches' defaultMessage='Recent searches' />
      </h3>
      <button className='search-form-dropdown__clear-button link-button' onClick={onClear}>
        <FormattedMessage id='search_form.recent_searches.clear' defaultMessage='Clear All' />
      </button>
    </header>

    <ul className='search-form-dropdown__list dropdown__list'>
      {
        recentSearches.size ?
          (
            recentSearches.map((item, index) => (
              <DropdownItem
                item={item}
                index={index}
                onDelete={onDelete}
              />
            ))
          ) : (
            <li className='search-form-dropdown__empty-message'>
              <FormattedMessage id='search_form.recent_searches.empty' defaultMessage="You haven't searched anythig" />
            </li>
          )
      }
    </ul>
  </div>
);

const SavedSearchesContent = (savedSearches, onDelete) => (
  <div>
    <header className='search-form-dropdown__header'>
      <h3 className='search-form-dropdown__title'>
        <FormattedMessage id='search_form.saved_searches' defaultMessage='Saved searches' />
      </h3>
    </header>
    <ul className='search-form-dropdown__list dropdown__list'>
      {
        savedSearches.size ?
          ( savedSearches.map((item, index) => (
            <DropdownItem
              item={item}
              index={index}
              onDelete={onDelete}
            />
          ))
          ) : (
            <li className='search-form-dropdown__empty-message'>
              <FormattedMessage id='search_form.saved_searches.empty' defaultMessage="You haven't saved anything" />
            </li>
          )
      }
    </ul>
  </div>
);

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

  setRef = (c) => {
    this.dropdownElement = c;
  }

  setInputRef = (c) => {
    this.input = c;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.input.value) {
      this.props.onSearch(this.input.value);
      this.input.value = '';
      document.activeElement.blur();      // Unfocus
      this.setState({ expanded: false }); // Hide dropdown content
    }
  }

  handleFocus = () => {
    this.setState({ expanded: true });
  }

  handleBlur = (e) => {
    const { dropdownElement } = this;
    if (e.target !== dropdownElement && !dropdownElement.contains(e.target) && this.state.expanded) {
      this.setState({ expanded: false });
    }
  }

  handleClearRencentSearches = () => {
    this.props.onClearRecentSearches();
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

    return (
      <div className='user-nav__search-form' ref={this.setRef}>
        <Dropdown active={expanded}>

          <form
            role='search'
            className='search-form'
            onSubmit={this.handleSubmit}
            onFocus={this.handleFocus}
          >

            <input
              className='search-form__input'
              type='text'
              spellCheck='false'
              ref={this.setInputRef}
              placeholder={intl.formatMessage({ id: 'search_form.placeholder', defaultMessage: 'Search Mastodon' })}
              aria-autocomplete='list'
            />

            <button className='search-form__submit'>
              <i className='icon-loupe' aria-hidden />
            </button>

            <DropdownContent className='search-form-dropdown'>
              <div className='dropdown__caret'>
                <div className='dropdown__caret-outer' />
                <div className='dropdown__caret-inner' />
              </div>

              <RecentSearchesContent
                recentSearches={recentSearches}
                onDelete={this.handleDeleteRecentSearches}
                onClear={this.handleClearRencentSearches}
              />

              <SavedSearchesContent
                savedSearches={savedSearches}
                onDelete={this.handleDeleteSavedSearches}
              />

            </DropdownContent>

          </form>

        </Dropdown>
      </div>
    );
  }

}

export default SearchForm;
