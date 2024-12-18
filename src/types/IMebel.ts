export interface IMebel {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  unprice: number;
  tag?: string;
  sale?: number;
  count: number;
}
