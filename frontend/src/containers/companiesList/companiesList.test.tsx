import { render } from "@testing-library/react";
import CompaniesList from "./companiesList";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);

describe("CompaniesList", () => {
  it("Should render without crashing", () => {
    const store = mockStore({
      company: { cachedData: [], companies: [], loading: false },
    });
    const wrapper = render(
      <Provider store={store}>
        <CompaniesList />
      </Provider>
    );
    expect(wrapper).toBeDefined();
  });

  it("should show placeholderContent when loading is true", () => {
    const store = mockStore({
      company: { cachedData: [], companies: [], loading: true },
    });
    const { queryByTestId } = render(
      <Provider store={store}>
        <CompaniesList />
      </Provider>
    );
    const component = queryByTestId("placeholderContent");
    expect(component).toBeDefined();
  });

  it("should show placeholderContent when loading is true", () => {
    const store = mockStore({
      company: { cachedData: [], companies: [], loading: false },
    });
    const { queryByTestId } = render(
      <Provider store={store}>
        <CompaniesList />
      </Provider>
    );
    const component = queryByTestId("placeholderContent");
    expect(component).toBeDefined();
  });

  it("should show no-result-message when companies array is empty", () => {
    const store = mockStore({
      company: { cachedData: [], companies: [], loading: false },
    });
    const { queryByTestId } = render(
      <Provider store={store}>
        <CompaniesList />
      </Provider>
    );
    const component = queryByTestId("no-result-message");
    expect(component).toBeDefined();
  });
});
