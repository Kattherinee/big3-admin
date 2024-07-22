import baseRequest from "../../baseRequest";
import { ProblemDetails } from "../../dto/AuthorizationDto/ProblemDetails";
import { PlayerDto } from "../../dto/PlayersDtos/PlayerDto";

export const updatePlayerRequest = (data: PlayerDto, token: string) => {
  return baseRequest
    .put<PlayerDto>("/api/Player/Update", data, {
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
