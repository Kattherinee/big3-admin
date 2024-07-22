import baseRequest from "../../baseRequest";
import { PlayerTeamNameDto } from "../../dto/PlayersDtos/PlayerTeamNameDto";
import { ProblemDetails } from "../../dto/AuthorizationDto/ProblemDetails";

export const getPlayerRequest = (id: number, token: string) => {
  return baseRequest
    .get<PlayerTeamNameDto>("/api/Player/Get", {
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
