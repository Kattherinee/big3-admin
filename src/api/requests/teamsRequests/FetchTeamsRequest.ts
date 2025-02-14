import baseRequest from "../../baseRequest";
import { TeamDtoPageResult } from "../../dto/TeamsDtos/TeamDtoPageResult";
import { ProblemDetails } from "../../dto/AuthorizationDto/ProblemDetails";

export const fetchTeamRequest = (
  name: string,
  page: number,
  pageSize: number,
  token: string
) => {
  return baseRequest
    .get<TeamDtoPageResult>("/api/Team/GetTeams", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        name,
        page,
        pageSize,
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
