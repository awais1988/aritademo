import axios from "../../config/axiosConfig";
import { endpoints } from "../../config/apiConfig";
import { AxiosResponse } from "axios";
import { UserData } from "../../types";

async function getUserData(userId: number): Promise<UserData | Error> {
  try {
    // Correctly typing the response
    const response: AxiosResponse<UserData> = await axios.get<UserData>(
      `${endpoints.dashboard.getUserData}${userId}`
    );
    return response.data; // Returning only the data part of the response
  } catch (error) {
    return error as Error; // Ensuring error is cast to Error type
  }
}

export const dashboardApi = {
  getUserData,
};
