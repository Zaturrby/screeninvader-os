import React from 'react';

class Dropdown extends React.Component{
  render() {
		return (
      <ul className="dropdown">
        {this.props.dropdown.map((subItem, key)=>{
          return <li key={key} className="dropdown__list-item"><p className="dropdown__list-item-text">{ subItem.name }</p></li>
        })}
      </ul>
		)
	}
}

export default Dropdown;