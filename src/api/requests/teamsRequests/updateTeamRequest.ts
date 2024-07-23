import baseRequest from "../../baseRequest";
import { ProblemDetails } from "../../dto/AuthorizationDto/ProblemDetails";
import { TeamDto } from "../../dto/TeamsDtos/TeamDto";

export const updateTeamRequest = (data: TeamDto, token: string) => {
  return baseRequest
    .put<TeamDto>("/api/Team/Update", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      const response = error.response;
      if (response && response.data) {
        throw response.data as ProblemDetails;
      }
      throw error;
    });
};
