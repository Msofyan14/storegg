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

export interface BanksTypes {
  _id: string;
  name: string;
  noRekening: string;
  bankName: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[];
}

export interface NominalsTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  usrname: string;
  name: string;
  email: string;
  avatar: string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: number;
}

export interface CheckoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface HistoryVoucherTopUpTypes {
  category: string;
  coinName: string;
  coinQuantity: number;
  gameName: string;
  price: number;
  thumbnail: string;
}

export interface HistoryTransactionsTypes {
  _id: string;
  historyVoucherTopup: HistoryVoucherTopUpTypes;
  value: number;
  status: string;
}

export interface TopupCategoryTypes {
  _id: string;
  name: string;
  value: number;
}
