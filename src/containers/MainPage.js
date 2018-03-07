import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import AddTodo from '../components/elements/todo/AddTodo';
import VisibleTodoList from '../components/elements/todo/VisibleTodoList';
import Footer from '../components/elements/todo/Footer';

class MainPage extends Component {
  render() {
    return (
      <div className="mainpage">
        <Helmet>
          <title>React - Strona Główna</title>
          <meta
            name="description"
            content="Strona główna przykładowej aplikacji napisanej w React"
          />
        </Helmet>
        <p>TODO LIST:</p>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
