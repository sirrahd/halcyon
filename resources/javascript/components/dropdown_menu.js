import React from 'react';
import PropTypes from 'prop-types';
import Dropdown, { DropdownContent, DropdownTrigger } from 'react-simple-dropdown';

const DropdownMenuCaret = (arrowOffsetLeft, arrowOffsetTop) => {
  const style = {
    top: arrowOffsetTop,
    left: arrowOffsetLeft,
  };

  return (
    <div className='dropdown__caret' style={style} >
      <div className='dropdown__caret-outer' />
      <div className='dropdown__caret-inner' />
    </div>
  );
};

export default class DropdownMenu extends React.PureComponent {

  static propTypes = {
    items: PropTypes.array.isRequired,
    button: PropTypes.string.isRequired,
    direction: PropTypes.string,
    style: PropTypes.object,
    placement: PropTypes.string,
    arrowOffsetLeft: PropTypes.string,
    arrowOffsetTop: PropTypes.string,
  }

  static defaultProps = {
    direction: 'left',
    placement: 'bottom',
    arrowOffsetLeft: 'auto',
    arrowOffsetTop: 'auto',
  }

  handleClick = (e) => {
    const i = Number(e.currentTarget.getAttribute('data-index'));
    const { action, to } = this.props.items[i];

    if (typeof action === 'function') {
      e.preventDefault();
      action();
    } else if (to) {
      e.preventDefault();
      this.context.router.history.push(to);
    }
  }

  renderItem(option, index) {
    if (option === null) {
      return <li key={`sep-${index}`} className='dropdown__sep' />;
    }

    const { text, href = '#' } = option;

    return (
      <li key={`${text}-${index}`} className='dropdown__list-item'>
        <a href={href} rel='noopener' autoFocus={index === 0} role='button' onClick={this.handleClick} data-index={index}>
          { text }
        </a>
      </li>
    );
  }

  render() {
    const {
      items,
      button,
      direction,
      style,
      arrowOffsetLeft,
      arrowOffsetTop,
    } = this.props;

    const directionClassName = (direction === 'left') ? 'dropdown--left' : 'dropdown--right';

    return (
      <Dropdown className={`${directionClassName} `} style={style} >

        <DropdownTrigger>
          <button>
            { button }
          </button>
        </DropdownTrigger>

        <DropdownContent>
          <DropdownMenuCaret arrowOffsetLeft={arrowOffsetLeft} arrowOffsetTop={arrowOffsetTop} />
          <ul className='dropdown__list'>
            { items.map((option, index) => this.renderItem(option, index)) }
          </ul>
        </DropdownContent>

      </Dropdown>
    );
  }

}
