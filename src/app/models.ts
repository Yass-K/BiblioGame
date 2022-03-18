export interface Game {
  background_image: string;
  name: string;
  released: string;
  slug: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailer>;
}

export interface ApiResponse<T> {
  results: Array<T>;
}

interface Genre {
  name: string;
}

interface ParentPlatform {
  platform: {
    name: string;
    slug: string;
  };
}

interface Publishers {
  name: string;
}

interface Rating {
  id: number;
  count: number;
}

interface Screenshots {
  name: string;
}

interface Trailer {
  data: {
    max: string;
  };
}
