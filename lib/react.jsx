import * as React from "react";

/**
 * @type {React.Context<RxState>}
 */
const context = React.createContext(null);

export function Provider({ children, state = {} }) {
  return (
    <context.Provider value={new RxState(state)}>{children}</context.Provider>
  );
}

export function useRxState(key) {
  const store = React.useContext(context);
  const [state, setState] = React.useState(undefined);
  const [firstMount, setFirstMount] = React.useState(false);

  React.useEffect(() => {
    if (!firstMount) {
      setState(store.getState()[key]);
      setFirstMount(true);
    }

    store.subscribe(key, (data) => {
      setState(data);
    });
  });

  const _setState = (value) => {
    store.setState(key, value);
  };

  return [state, _setState];
}
