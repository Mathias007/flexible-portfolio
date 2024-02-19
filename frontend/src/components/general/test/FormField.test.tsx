import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { FormField } from "..";

test("renders input field correctly", () => {
    const handleChange = vi.fn();
    const field = {
        id: "test-id",
        type: "text",
        name: "test-name",
        className: "test-class",
        placeholder: "Enter something",
        required: true,
        value: "",
        onChange: handleChange,
    };

    render(<FormField {...field} />);

    const input = screen.getByPlaceholderText("Enter something") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Test value" } });

    // Oczekujemy, że funkcja handleChange zostanie wywołana co najmniej raz
    expect(handleChange).toHaveBeenCalled();
});

test("renders textarea field correctly", () => {
    const handleChange = vi.fn();
    const field = {
        id: "test-id",
        type: "textarea",
        name: "test-name",
        className: "test-class",
        placeholder: "Enter something",
        required: true,
        value: "",
        onChange: handleChange,
    };

    render(<FormField {...field} />);

    const textarea = screen.getByPlaceholderText("Enter something") as HTMLTextAreaElement;

    fireEvent.input(textarea, { target: { value: "Test value" } });

    expect(handleChange).toHaveBeenCalled();
    expect(textarea.value).toBe("Test value");
});
