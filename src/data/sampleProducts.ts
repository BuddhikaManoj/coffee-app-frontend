import { Product, User, Order, OrderStatus } from '@/lib/api';

export const categories = [
  { label: 'All', value: 'all' },
  { label: 'Espresso', value: 'espresso' },
  { label: 'Latte', value: 'latte' },
  { label: 'Cappuccino', value: 'cappuccino' },
  { label: 'Beans', value: 'beans' },
  { label: 'Accessories', value: 'accessories' },
];

export const orderStatuses: { value: OrderStatus; label: string }[] = [
  { value: 'pending', label: 'Pending' },
  { value: 'accepted', label: 'Accepted' },
  { value: 'preparing', label: 'Preparing' },
  { value: 'out_for_delivery', label: 'Out for Delivery' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'cancelled', label: 'Cancelled' },
];

export const sampleUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'customer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'customer' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'customer' },
];

export const sampleOrders: Order[] = [
  {
    id: 1,
    user_id: 1,
    total: 24.99,
    status: 'delivered',
    created_at: '2024-06-10T10:00:00Z',
  },
  {
    id: 2,
    user_id: 2,
    total: 49.99,
    status: 'out_for_delivery',
    created_at: '2024-06-15T14:30:00Z',
  },
  {
    id: 3,
    user_id: 1,
    total: 89.99,
    status: 'preparing',
    created_at: '2024-06-18T09:00:00Z',
  },
];

export const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Signature Espresso',
    description: 'Rich and bold espresso blend with deep chocolate and caramel notes',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400',
    category: 'espresso',
    stock: 50,
    is_visible: true,
  },
  {
    id: 2,
    name: 'Creamy Latte',
    description: 'Smooth latte with velvety steamed milk and subtle espresso notes',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=400',
    category: 'latte',
    stock: 45,
    is_visible: true,
  },
  {
    id: 3,
    name: 'Cappuccino Classic',
    description: 'Traditional cappuccino with thick foam and balanced espresso',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400',
    category: 'cappuccino',
    stock: 40,
    is_visible: true,
  },
  {
    id: 4,
    name: 'Premium Bean Blend',
    description: 'Premium whole bean blend for home brewing, 1kg bag',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1559056169-641ef453675f?w=400',
    category: 'beans',
    stock: 30,
    is_visible: true,
  },
  {
    id: 5,
    name: 'Single Origin Ethiopia',
    description: 'Fruity single-origin beans with floral notes, 500g bag',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1559056169-641ef453675f?w=400',
    category: 'beans',
    stock: 25,
    is_visible: true,
  },
  {
    id: 6,
    name: 'Coffee Grinder Pro',
    description: 'Burr grinder with adjustable settings for any brewing method',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400',
    category: 'accessories',
    stock: 15,
    is_visible: true,
  },
  {
    id: 7,
    name: 'Espresso Machine',
    description: 'Professional-grade espresso machine for home use',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400',
    category: 'accessories',
    stock: 8,
    is_visible: true,
  },
  {
    id: 8,
    name: 'Coffee Filter Set',
    description: 'Reusable coffee filters, eco-friendly alternative',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1556742212-5b321f3c261d?w=400',
    category: 'accessories',
    stock: 60,
    is_visible: true,
  },
];
