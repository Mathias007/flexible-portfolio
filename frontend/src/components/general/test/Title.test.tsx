import { render, screen } from "@testing-library/react";
import { Title } from "..";

test("renders ServicesTitle component with 'Test' text", () => {
    render(<Title title="Test" />);
    const titleElement = screen.getByText("Test");
    expect(titleElement).toBeInTheDocument();
});
