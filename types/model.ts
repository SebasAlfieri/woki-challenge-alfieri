export interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetailsProps {
  id: number;
  poster: string;
  background: string;
  title: string;
  description: string;
  valuation: string;
}

export interface HomePageProps {
  data: MovieProps[];
}

export interface HomePageContainerProps {
  moviesData: MovieProps[];
}

export interface HeroProps {
  featuredMovie: MovieProps | null;
}

export interface GalleryProps {
  moviesDataGallery: MovieProps[];
}
