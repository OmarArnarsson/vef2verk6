import React, { useState, useEffect } from 'react';

import Layout from '../components/layout/Layout';
import Todos from '../components/todos/Todos';
import Form from '../components/form/Form';

import { getTodos, updateTodo } from '../api';

function Home(props) {
  const { initTodos } = props;

  /* Hook-ar */
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(null);
  const [hideCompleted, setHideCompleted] = useState(false);

  async function onToggle() {
    setLoading(true);
    const todos = await getTodos(hideCompleted);
    setItems(todos);
    setHideCompleted(!hideCompleted);
    setLoading(false);
 }

  return (
    <Layout title="Verkefni">
      <Todos 
        initTodos = {initTodos} 
        loading = {loading}
        onToggle = {onToggle}>
      </Todos>
    </Layout>
  );
}

Home.getInitialProps = async() => {
  const todos = await getTodos();
  
  return { initTodos: todos.result }
}

export default Home
