# Accessibility Testing

This is a simple application (node/express/react) that is used pa11y to test accessibility.

## Prerequisites

1. Node.js (v18.x)

## Getting Started

1. Clone the repo.
2. Run `npm install` in the root directory.
3. Run `npm dev` to start the local development environment. This will run both the server and the client.
4. Navigate to `http://localhost:5173` to view the application.

## Testing

There is currently only unit testing for the frontend components using vitest and react-testing-library.

1. Run `npm test` to run the unit tests.

## Linting

There is currently only linting for the frontend components using eslint.

1. Run `npm run lint` to run the linting.

## Accessibility Testing

Once the application is running, you can run the accessibility tests by entering any given URL in the input field and clicking the "Submit" button. This will run the accessibility tests using pa11y and display the results in the section below the form.