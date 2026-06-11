export type StrawberryFormValues = {
  personName: string;
  quality: string;
  quantity: string;
  price: string;
  date: string;
};

export type Summary = {
  boughtBoxes: number;
  soldBoxes: number;
  totalSpent: number;
  totalRevenue: number;
  profit: number;
  stock: number;
};
