import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Issues from "./Issues";
import { GlobalContext } from "../../context/Context";

describe("Issues Component", () => {
  test("renders 'No issues found!' when data is empty", () => {
    render(
      <GlobalContext.Provider
        value={{
          data: [],
          url: "",
          success: true,
          loading: false,
          error: false,
        }}
      >
        <Issues />
      </GlobalContext.Provider>
    );

    const noIssuesFoundElement = screen.getByText("No issues found!");
    expect(noIssuesFoundElement).toBeDefined();
  });

  test("renders the list of issues when data is available", () => {
    const mockData = [
      {
        code: "WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.InputCheckbox.Name",
        type: "error",
        typeCode: 1,
        message:
          "This checkboxinput element does not have a name available to an accessibility API. Valid names are: label element, title undefined, aria-label undefined, aria-labelledby undefined.",
        context: '<input type="checkbox" class="toggler">',
        selector: "#inner-header > div > input",
        runner: "htmlcs",
        runnerExtras: {},
      },
      {
        code: "WCAG2AA.Principle1.Guideline1_3.1_3_1.F68",
        type: "error",
        typeCode: 1,
        message:
          'This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.',
        context: '<input type="checkbox" class="toggler">',
        selector: "#inner-header > div > input",
        runner: "htmlcs",
        runnerExtras: {},
      },
    ];

    render(
      <GlobalContext.Provider
        value={{
          data: mockData,
          url: "",
          success: true,
          loading: false,
          error: false,
        }}
      >
        <Issues />
      </GlobalContext.Provider>
    );

    const issueElements = screen.getAllByTestId("issue");
    expect(issueElements).toHaveLength(mockData.length);

    // Additional assertions for issue content, if needed
    // You can use screen.getByText or other screen methods to assert specific content
  });
});
