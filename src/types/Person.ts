import { CastMovie } from "./CastMovie";

export interface Person {
    birthday: string | null,
    known_for_department: string,
    deathday: string | null,
    id: number,
    name: string,
    also_known_as: string[],
    gender: number,
    biography: string,
    popularity: number,
    place_of_birth: string | null,
    profile_path: string | null,
    adult: boolean,
    imdb_id: string,
    homepage: string | null,
    movies: CastMovie[]
}