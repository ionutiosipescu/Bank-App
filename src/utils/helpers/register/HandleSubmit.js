const handleSubmit = (dispatch, action, ReduxState) => {
  dispatch(action(ReduxState + 1));
};

export default handleSubmit;
