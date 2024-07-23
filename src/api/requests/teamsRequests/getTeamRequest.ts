import baseRequest from "../../baseRequest";
import { TeamDto } from "../../dto/TeamsDtos/TeamDto";
import { ProblemDetails } from "../../dto/AuthorizationDto/ProblemDetails";

export const getTeamRequest = (id: number, token: string) => {
  return baseRequest
    .get<TeamDto>("/api/Team/Get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        id,
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
