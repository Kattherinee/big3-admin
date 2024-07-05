import { TeamDto } from "./TeamDto";

export interface TeamDtoPageResult {
    data: TeamDto[];
    count: number;
    page: number;
    size: number;
}
