// deletePlayerRequest.ts
import baseRequest from "../../baseRequest";
import { PlayerDto } from "../../dto/PlayersDtos/PlayerDto";
import { ProblemDetails } from "../../dto/AuthorizationDto/ProblemDetails";

export const deletePlayerRequest = (id: number, token: string) => {
  return baseRequest
    .delete<PlayerDto>(`/api/Player/Delete`, {
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
