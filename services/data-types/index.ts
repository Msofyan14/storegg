export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: string;
  name: string;
  category: CategoryTypes;
  status: string;
  thumbnail: string;
}
