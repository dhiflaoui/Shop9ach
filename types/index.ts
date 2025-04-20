export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  createdAt: Date;
  slug: string;
  brand: string;
  rating: number;
  stock: number;
  numReviews: number;
  banner: string | null;
  isFeatured: boolean;
}
