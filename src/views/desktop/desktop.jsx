import React from 'react';

import FolderDraggable from '../items/folder-draggable.jsx';
import Window from '../windows/index.jsx';

class Desktop extends React.Component{
  render() {
		return (
  		<div className="desktop">
        {(()=>{
          var items = this.props.state.filesystem.children;
          var templatedItems = [];
          for (var item in items) {
            if (items.hasOwnProperty(item)) {
              templatedItems.push(<FolderDraggable key={item} itemData={items[item]} dispatch={this.props.dispatch} />);
            }
          }
          return templatedItems;
        })()}
        { this.props.state.windows.map((item, key)=>{
          return <Window key={key} windowData={item} state={this.props.state} dispatch={this.props.dispatch}/> })}
      </div>
    )
	}
}

export default Desktop;