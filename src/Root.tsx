import React, { FC } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers, { ProviderState } from "./reducers";

const composeEnhancers = ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}))|| compose;

const Root: FC<{ initialState?: ProviderState }> = ({
  children,
  initialState = {},
}) => {
  const store = createStore(
    reducers,
    initialState,
      composeEnhancers(applyMiddleware(reduxThunk))
  );

  return <Provider store={store}>{children}</Provider>;
};

export default Root;
