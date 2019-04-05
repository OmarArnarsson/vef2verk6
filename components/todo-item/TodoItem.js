import React, { useState } from 'react';
import Link from 'next/link';
import css from './TodoItem.css'; 
import { updateTodo } from '../../api';

export default function todoItem(props) {
  const { todo, id } = props;
  const linkAs = `/todo/${id}`;
  const linkHref = `todo?id=${id}`;
  const [loading, setLoading] = useState(false);
  
  async function updated(e) {
    setLoading(true);
    const title = todo.title;
    const completed = true;
    const due = todo.due;
    const result = await updateTodo(id, {title, completed, due});

    return result;
    }

  return (
    <React.Fragment>
      {loading &&
      <p>Uppfæri</p>}
        {!loading && 
        <div className={css.item}>
      <input
        type="checkbox"
        className={css.item__input}
        onChange = { updated }
        value = { todo.completed }
      />
      <Link as= {linkAs} href={linkHref}>
        <a className = {css.item__link}>{todo.title}</a>
      </Link>
      {<p className = {css.item__due}>{todo.due}</p>}
      </div>}
    </React.Fragment>
  );
}
