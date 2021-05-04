function useColorOptions(actions) {
  function onChange(event) {
    if (event.target.name === 'base') {
      actions.changeBase(event.target.value);
    }
  }

  function onBlur(event) {
    if (event.target.name === 'weight') {
      actions.changeWeight(event.target.value);
    }
  }

  return {
    listeners: {
      onChange,
      onBlur,
    },
  };
}

export default useColorOptions;
