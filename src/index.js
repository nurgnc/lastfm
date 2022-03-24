import React from "react";
import ReactDOM from "react-dom";
// router
import { BrowserRouter } from "react-router-dom";
// react-query
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
