import { ChangeUserRequest } from "../dto/AuthorizationDto/ChangeUserRequest";
import baseRequest from "../baseRequest";

import { ProblemDetails } from "../dto/AuthorizationDto/ProblemDetails";

export const updateUserProfile = (data: ChangeUserRequest, token: string) => {
  return baseRequest
    .post<ChangeUserRequest>("/api/Auth/Change", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((error) => {
      const response = error.response;
      if (response && response.data) {
        throw response.data as ProblemDetails;
      }
      throw error;
    });
};
