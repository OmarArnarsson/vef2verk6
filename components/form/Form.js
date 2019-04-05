import React, { useState } from 'react';

import { addTodo } from '../../api';

import Button from '../button/Button';
import Field from '../field/Field';
import Errors from '../errors/Errors';

import css from './Form.css';

// Form á forsíðu
export default function Form(props) {
  const { onCreated } = props;

  const [data, setData] = useState({ title: '', date: undefined });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    const result = await addTodo(data.title, data.due);

    if(!result.success) {
      setErrors(result.response);
      setLoading(false);
      return;
    }
    setLoading(false);
  }

  function onChangeDue(e) {
    let due = e.target.value
    if(due.length === 0) {
      due = null;
    }
    setData({
      ...data,
      due: e.target.value,
    });
  }

  function onChangeTitle(e) {
    setData({
      ...data,
      title: e.target.value,
    });
  }

  return (
    <form className={css.form} >
    {errors &&
      <Errors errors={errors} />}
    {loading &&
      <p>Hleð gögnum... </p>}
      <h2 className={css.form__header}>Nýtt Verkefni</h2>
      <Field
        title="Titill:"
        value={data.title}
        onChange={onChangeTitle}
      />
      <Field
        title="Klárast fyrir:"
        type="datetime-local"
        onChange={onChangeDue}
      />
      <Button children="Búa til" onClick={onSubmit} />
    </form>
  )
}
