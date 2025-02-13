export interface IMebel {
  id: string;
  image: string[];
  descriptionImage: string[];
  title: string;
  description: string;
  price: number;
  unprice: number;
  tag?: string;
  sale?: number;
  count: number;
  size: { size: string }[];
  color: { color: string }[];
  review: { comment: string; nickName: string; rating: number }[];
  information: string;
  sku: string;
  category: string;
  tags: string[];
  share: { image: string; link: string }[];
}
