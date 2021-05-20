
export let logger = (store) => (next) => (action) => {
  console.log("Before Action", action.type, store.getState());
  var result = next(action);
  console.log(".......", store.getState());
  return result;
};
