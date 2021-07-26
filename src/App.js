import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dasboard from "./components/dashboard";
import { CountryContextProvider } from "./context/globalState";
import useTheme from "./customHooks/useTheme";

// const CountryDetails = React.lazy(() =>
//   import("../CountryDetails/CountryDetails")
// );

const App = () => {
  const [themeValue, setThemeValue] = useTheme();

  React.useLayoutEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(themeValue));
  }, [themeValue]);

  return (
    <Router>
      <Switch>
        <>
          <Switch>
            <CountryContextProvider>
              <Route
                exact
                path={`/`}
                render={(props) => (
                  <Dasboard
                    {...props}
                    themeValue={themeValue}
                    handleThemeChange={setThemeValue}
                  />
                )}
              />
            </CountryContextProvider>
            <Route
              path={"/"}
              render={() => <div>404 page not found</div>}
            ></Route>
          </Switch>
        </>
      </Switch>
    </Router>
  );
};
export default App;
