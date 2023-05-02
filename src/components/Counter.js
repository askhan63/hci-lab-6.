import React, { useReducer } from 'react';
import { counterReducer, initialState } from '../counterReducer';
import styles from './Counter.module.css';
const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const { present } = state;

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const undo = () => {
    dispatch({ type: 'UNDO' });
  };

  const redo = () => {
    dispatch({ type: 'REDO' });
  };

  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Undo/Redo Counter</h1>
    <div className={styles.head}>
    <button className={styles.button} onClick={undo}>
      Undo
    </button>
    <button className={styles.button} onClick={redo}>
      Redo
    </button>
    </div>
   
    <p className={styles.counter}>Counter: {present}</p>
    <button className={styles.button} onClick={increment}>
      Increment
    </button>
    <button className={styles.button} onClick={decrement}>
      Decrement
    </button>
   
  </div>
  );
};

export default Counter;
