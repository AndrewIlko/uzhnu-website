export type NavItem = {
  link: string;
  title: string;
};

export type Post = {
  _id: string;
  title: string;
  postLink: string;
  countOfViews: number;
  categoryID: string;
  date: string;
  image?: string;
};

export type Category = {
  name: string;
  _id: string;
  posts: string[];
};

export type NewsFilter = {
  category: string[];
  title: string;
  page: number;
};

export type NewsCategories = {
  data: Category[] | any[];
  loading: boolean;
  error: string | null;
};
