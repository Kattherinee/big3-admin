import baseRequest from "../../baseRequest";
import { PlayerDto } from "../../dto/PlayersDtos/PlayerDto";
import { ProblemDetails } from "../../dto/AuthorizationDto/ProblemDetails";
import { NewPlayerDto } from "../../dto/PlayersDtos/NewPlayerDto";

export const addPlayerRequest = (data: NewPlayerDto, token: string) => {
  return baseRequest
    .post<PlayerDto>("/api/Player/Add", data, {
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
