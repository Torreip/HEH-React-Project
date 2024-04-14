import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../../src/App";

describe("E2E", () => {
    it("renders the app and check for spinner presence while fetching data", () => {
        render(<App />);
        screen.debug();
        expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    });
    //it("renders the app and the loadsuccudd", () => {
    //    render(<App />);
    //    screen.debug();
    //
    //    expect(
    //});
});
