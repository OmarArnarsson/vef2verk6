import React, { useState } from 'react';
import Field from '../field/Field';
import Button from '../button/Button';


export default function todoDetail(props) {
  const { id, todo } = props;
 
  const [data, setData] = useState({ title: '', date: undefined });

  function ChangeTitle(e) {
    setData({
      ...data,
      title: e.target.value,
    });
  }

  function ChangeDue(e) {
    let due = e.target.value;
    if(due.length === 0) {
      due = null;
    }
    setData({
      ...data,
      due: e.target.value,
    });
  }

  async function Deleted(e) {
    e.preventDefault();
  }

  return (
    <React.Fragment>
      <div>
      <Field
        title = "Titill:"
        value={todo.title}
        onChange={ChangeTitle}
        />
      </div>
      <div>
        <p>Lokið:</p>
        <input type="checkbox" title = "Lokið:" value = {todo.completed} />
      </div>
      <div>
        <Field
          title = "Klárast fyrir:"
          value={todo.due}
          onChange={ChangeDue}
          />

        <Button children="Uppfæra" onchange = {ChangeDue}/>
        <Button children = "Eyða" value={id} onChange = {Deleted}/>
      </div>
    </React.Fragment>
);
}
