import baseRequest from "../../baseRequest";
import { ProblemDetails } from "../../dto/AuthorizationDto/ProblemDetails";

export const getPositionsRequest = (token: string) => {
  return baseRequest
    .get("/api/Player/GetPositions", {
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
