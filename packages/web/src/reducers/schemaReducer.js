

const reducer = (state = [], action) => {
  console.log('Reducer', action);
  switch (action.type) {
  case 'SCHEMA.POPULATE':
    return action.payload;
  case 'SCHEMA.INSERT':
    return state.concat(action.payload);
  case 'SCHEMA.UPDATE': {
    const res = state.map(s => (s.id !== action.payload.id ? s : { ...s, ...action.payload }));
    console.log(res);
    return res;
  }
  case 'SCHEMA.DELETE':
    return state.filter(s => s.id !== action.payload.id);
  default:
    return state;
  }
};

const schemaReducer = (...schemas) => {
  console.log('initial schema', schemas);
  const initailState = {};
  schemas.forEach((schema) => {
    initailState[schema] = [];
  });

  return (state = initailState, action) => {
    if (action.schema && initailState[action.schema]) {
      return Object.assign({
        ...state,
        [action.schema]: reducer(state[action.schema], action),
      });
    }
    return state;
  };
};

export default schemaReducer;
