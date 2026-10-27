import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import { SignInContainer } from "../components/SignIn";
// ...

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      // const mockSignIn = jest.fn().mockResolvedValue({
      //   data: {
      //     authenticate: { accessToken: "test-token" },
      //   },
      // });

      const mockOnSubmit = jest.fn();
      //render(<SignInForm onSubmit={mockOnSubmit} />);

      await render(<SignInContainer onSubmit={mockOnSubmit} />);

      await fireEvent.changeText(
        screen.getByPlaceholderText("username"),
        "greg",
      );
      await fireEvent.changeText(
        screen.getByPlaceholderText("password"),
        "password",
      );
      await fireEvent.press(screen.getByText("Sign in"));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
        expect(mockOnSubmit.mock.calls[0][0]).toEqual({
          username: "greg",
          password: "password",
        });
      });
    });
  });
});
