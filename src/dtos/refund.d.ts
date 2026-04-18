type RefundAPIResponse = {
  id: string;
  description: string;
  amount: number;
  category: CategoriesAPIEnum;
  filename: string;
  userId: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  user: {
    name: string;
  };
};

type RefundsPaginationAPIResponse = {
  refunds: RefundAPIResponse[];
  pagination: {
    page: number;
    perPage: number;
    totalPages: number;
    totalRecords: number;
  };
};
