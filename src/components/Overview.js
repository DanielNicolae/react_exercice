import React from 'react';

function Overview({ list }) {
  console.log(list);
  const items = list.map(item => {
    return (
      <li key={list.indexOf(item)}>{item}</li>
    )
  });
  return (
    <div className="Container">
      <ul className="TaskList">
        {items}
      </ul>
    </div>
  )
}

export default Overview;