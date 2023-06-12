import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";
import { GlobalContext } from "../../context/Context";

const urlValue = "https://example.com";

describe("Form Component", () => {
  test("URL setter is being called on input change", () => {
    const setUrlMock = vi.fn();

    render(
      <GlobalContext.Provider
        value={{
          setUrl: setUrlMock,
          url: "",
          success: false,
          loading: false,
          error: false,
          data: [],
        }}
      >
        <Form />
      </GlobalContext.Provider>
    );

    const urlInput = screen.getByTestId("url-input");
    fireEvent.change(urlInput, { target: { value: urlValue } });

    expect(setUrlMock).toHaveBeenCalled();
    expect(setUrlMock.mock.calls[0][0]).toBe(urlValue);
  });

  test("submits form if URL is provided", () => {
    const setUrlMock = vi.fn();
    const fetchUrlMock = vi.fn();

    render(
      <GlobalContext.Provider
        value={{
          setUrl: setUrlMock,
          fetchUrl: fetchUrlMock,
          url: urlValue,
          success: false,
          loading: false,
          error: false,
          data: [],
        }}
      >
        <Form />
      </GlobalContext.Provider>
    );

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    expect(fetchUrlMock).toHaveBeenCalled();
  });

  test("does not submit form if URL is not provided", () => {
    const setUrlMock = vi.fn();
    const fetchUrlMock = vi.fn();

    render(
      <GlobalContext.Provider
        value={{
          setUrl: setUrlMock,
          fetchUrl: fetchUrlMock,
          url: "",
          success: false,
          loading: false,
          error: false,
          data: [],
        }}
      >
        <Form />
      </GlobalContext.Provider>
    );

    const submitButton = screen.getByText("Submit");

    fireEvent.click(submitButton);

    expect(setUrlMock).not.toHaveBeenCalled();
    expect(fetchUrlMock).not.toHaveBeenCalled();
  });
});
