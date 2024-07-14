import baseRequest from "../../baseRequest";
import { TeamDto } from "../../dto/TeamsDtos/TeamDto";
import { ProblemDetails } from "../../dto/AuthorizationDto/ProblemDetails";
import { NewTeamDto } from "../../dto/TeamsDtos/NewTeamDto";

export const addTeamRequest = (data: NewTeamDto, token: string) => {
  return baseRequest
    .post<TeamDto>("/api/Team/Add", data, {
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
