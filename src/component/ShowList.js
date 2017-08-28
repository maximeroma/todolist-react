import React from 'react';


const FilterTodolist = (filter, items) => {
  console.log(filter);
  if (filter === "TODO"){
    return items.filter(item => !item.status);
  }

  if (filter === "DONE"){
    return items.filter(item => item.status);
  }
  return items;
};

const ShowList =
  ({filter, items, changeStatus}) =>
  (
    <div className="ui segment">
      <div className="ui relaxed divided list">
      {
        FilterTodolist(filter, items).map((item) =>(
        <div
        className={item.status ? 'DONE' : 'TODO'}
        onClick={() => {changeStatus(item.id)} }
        key={item.id}
        >
        {item.value}
        </div>))
      }
      </div>
    </div>
  );


export default ShowList;
