import { render, screen, waitFor } from "@testing-library/react";
import axiosInstance from "../config/axiosConfig";
import UserInfo from "../components/UserInfo";

// Mock the axiosInstance
jest.mock("../config/axiosConfig", () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    interceptors: {
      request: {
        use: jest.fn(),
      },
      response: {
        use: jest.fn(),
      },
    },
  },
}));

describe("UserInfo Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders user data correctly", async () => {
    // Mock the axiosInstance to return the user data
    (axiosInstance.get as jest.Mock).mockResolvedValue({
      data: { name: "Clementina DuBuque", email: "Rey.Padberg@karina.biz" },
    });

    // Render the UserInfo component with the userData prop
    render(
      <UserInfo
        userData={{
          name: "Clementina DuBuque",
          email: "Rey.Padberg@karina.biz",
        }}
      />
    );

    // Assert that the user data is displayed correctly
    await waitFor(() => {
      expect(screen.getByText("Clementina DuBuque")).toBeInTheDocument();
      expect(screen.getByText("Rey.Padberg@karina.biz")).toBeInTheDocument();
    });
  });
});
