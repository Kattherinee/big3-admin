import baseRequest from "../../baseRequest";
import { TeamDto } from "../../dto/TeamsDtos/TeamDto";
import { ProblemDetails } from "../../dto/AuthorizationDto/ProblemDetails";

export const deleteTeamRequest = (id: number, token: string) => {
  return baseRequest
    .delete<TeamDto>(`/api/Team/Delete`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        id,
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
