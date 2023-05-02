export const initialState = {
    past: [],
    present: 0,
    future: [],
  };
  
  export const counterReducer = (state, action) => {
    const { past, present, future } = state;
  
    switch (action.type) {
      case 'INCREMENT':
        return {
          past: [...past, present],
          present: present + 1,
          future: [],
        };
  
      case 'DECREMENT':
        return {
          past: [...past, present],
          present: present - 1,
          future: [],
        };
  
      case 'UNDO':
        if (past.length === 0) return state;
  
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
  
        return {
          past: newPast,
          present: previous,
          future: [present, ...future],
        };
  
      case 'REDO':
        if (future.length === 0) return state;
  
        const next = future[0];
        const newFuture = future.slice(1);
  
        return {
          past: [...past, present],
          present: next,
          future: newFuture,
        };
  
      default:
        return state;
    }
  };
  