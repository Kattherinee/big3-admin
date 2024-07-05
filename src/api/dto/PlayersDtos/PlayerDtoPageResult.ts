import { PlayerDto } from "./PlayerDto";

export interface PlayerDtoPageResult {
    data: PlayerDto[];
    count: number;
    page: number;
    size: number;
}

