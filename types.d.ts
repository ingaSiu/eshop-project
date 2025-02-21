interface Product {
  id: string;
  title: string;
  category:
    | 'GAME'
    | 'BOOKS'
    | 'PET_SUPPLIES'
    | 'TOYS'
    | 'STATIONERY'
    | 'CLOTHING'
    | 'ELECTRONICS'
    | 'HOME'
    | 'OTHER'
    | null;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  stock: number;
  createdAt: Date | null;
}
