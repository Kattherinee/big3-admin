import baseRequest from "../../baseRequest";
import { PlayerDtoPageResult } from "../../dto/PlayersDtos/PlayerDtoPageResult";
import { ProblemDetails } from "../../dto/AuthorizationDto/ProblemDetails";

export const fetchPlayersRequest = (
  name: string,
  page: number,
  pageSize: number,
  token: string
) => {
  return baseRequest
    .get<PlayerDtoPageResult>("/api/Player/GetPlayers", {
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
