import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
// router
import { BrowserRouter, Router } from "react-router-dom";
// react-query
import { QueryClient, QueryClientProvider } from "react-query";
// redux
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

const queryClient = new QueryClient();
test("home page", () => {
  const history = createMemoryHistory();
  const route = "/";
  history.push(route);
  render(
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );

  expect(history.location.pathname).toBe("/");
});
