import axios, { AxiosError, AxiosInstance } from 'axios';

// Configure your backend API URL here
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Create axios instance with default config
const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Types
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'customer';
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'espresso' | 'latte' | 'cappuccino' | 'beans' | 'accessories';
  stock: number;
  is_visible: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type OrderStatus = 
  | 'pending' 
  | 'accepted' 
  | 'preparing' 
  | 'out_for_delivery' 
  | 'delivered' 
  | 'cancelled';

export interface Order {
  id: number;
  user_id: number;
  user?: User;
  total: number;
  status: OrderStatus;
  created_at: string;
  items?: OrderItem[];
}

export interface OrderItem {
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  product?: Product;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface CheckoutData {
  name: string;
  address: string;
  phone: string;
  items: { product_id: number; quantity: number; price: number }[];
  total: number;
}

export interface AdminStats {
  totalOrders: number;
  pendingDeliveries: number;
  totalProducts: number;
  outOfStockItems: number;
  totalRevenue: number;
  totalUsers: number;
}

// Demo users for when backend is not running
const DEMO_USERS: Record<string, { password: string; user: User }> = {
  'admin': {
    password: 'admin123',
    user: { id: 1, name: 'Admin User', email: 'admin@brewbean.com', role: 'admin' },
  },
  'admin@brewbean.com': {
    password: 'admin123',
    user: { id: 1, name: 'Admin User', email: 'admin@brewbean.com', role: 'admin' },
  },
  'john@example.com': {
    password: 'customer123',
    user: { id: 2, name: 'John Doe', email: 'john@example.com', role: 'customer' },
  },
};

const demoLogin = (credentials: LoginCredentials): { token: string; user: User } => {
  const demo = DEMO_USERS[credentials.email];
  if (demo && demo.password === credentials.password) {
    return { token: 'demo-jwt-token-' + demo.user.role, user: demo.user };
  }
  throw { response: { data: { message: 'Invalid email or password' } } };
};

const demoRegister = (data: RegisterData): { token: string; user: User } => {
  const user: User = { id: Date.now(), name: data.name, email: data.email, role: 'customer' };
  return { token: 'demo-jwt-token-customer', user };
};

// Auth API — tries real backend first, falls back to demo mode
export const authApi = {
  login: async (credentials: LoginCredentials) => {
    try {
      const response = await api.post<{ token: string; user: User }>('/auth/login', credentials);
      return response.data;
    } catch {
      return demoLogin(credentials);
    }
  },

  register: async (data: RegisterData) => {
    try {
      const response = await api.post<{ token: string; user: User }>('/auth/register', data);
      return response.data;
    } catch {
      return demoRegister(data);
    }
  },

  getProfile: async () => {
    const response = await api.get<User>('/auth/profile');
    return response.data;
  },
};

// Products API
export const productsApi = {
  getAll: async (params?: { category?: string; search?: string }) => {
    const response = await api.get<Product[]>('/products', { params });
    return response.data;
  },

  getById: async (id: number) => {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  },

  create: async (data: Omit<Product, 'id'>) => {
    const response = await api.post<Product>('/products', data);
    return response.data;
  },

  update: async (id: number, data: Partial<Product>) => {
    const response = await api.put<Product>(`/products/${id}`, data);
    return response.data;
  },

  delete: async (id: number) => {
    await api.delete(`/products/${id}`);
  },
};

// Orders API
export const ordersApi = {
  getAll: async () => {
    const response = await api.get<Order[]>('/orders');
    return response.data;
  },

  getById: async (id: number) => {
    const response = await api.get<Order>(`/orders/${id}`);
    return response.data;
  },

  create: async (data: CheckoutData) => {
    const response = await api.post<Order>('/orders', data);
    return response.data;
  },

  updateStatus: async (id: number, status: OrderStatus) => {
    const response = await api.patch<Order>(`/orders/${id}/status`, { status });
    return response.data;
  },

  getMyOrders: async () => {
    const response = await api.get<Order[]>('/orders/my-orders');
    return response.data;
  },
};

// Users API (Admin only)
export const usersApi = {
  getAll: async () => {
    const response = await api.get<User[]>('/users');
    return response.data;
  },

  getById: async (id: number) => {
    const response = await api.get<User>(`/users/${id}`);
    return response.data;
  },

  updateRole: async (id: number, role: User['role']) => {
    const response = await api.patch<User>(`/users/${id}/role`, { role });
    return response.data;
  },

  delete: async (id: number) => {
    await api.delete(`/users/${id}`);
  },
};

// Admin API
export const adminApi = {
  // Dashboard stats
  getStats: async () => {
    const response = await api.get<AdminStats>('/admin/stats');
    return response.data;
  },

  // Orders
  getAllOrders: async (status?: OrderStatus) => {
    const response = await api.get<Order[]>('/admin/orders', { params: { status } });
    return response.data;
  },

  updateOrderStatus: async (id: number, status: OrderStatus) => {
    const response = await api.put<Order>(`/admin/orders/${id}/status`, { status });
    return response.data;
  },

  // Products
  getAllProducts: async () => {
    const response = await api.get<Product[]>('/admin/products');
    return response.data;
  },

  createProduct: async (data: Omit<Product, 'id'>) => {
    const response = await api.post<Product>('/admin/products', data);
    return response.data;
  },

  updateProduct: async (id: number, data: Partial<Product>) => {
    const response = await api.put<Product>(`/admin/products/${id}`, data);
    return response.data;
  },

  deleteProduct: async (id: number) => {
    await api.delete(`/admin/products/${id}`);
  },

  toggleProductVisibility: async (id: number, is_visible: boolean) => {
    const response = await api.patch<Product>(`/admin/products/${id}/visibility`, { is_visible });
    return response.data;
  },

  updateProductStock: async (id: number, stock: number) => {
    const response = await api.patch<Product>(`/admin/products/${id}/stock`, { stock });
    return response.data;
  },

  // Users
  getAllUsers: async () => {
    const response = await api.get<User[]>('/admin/users');
    return response.data;
  },
};

export default api;
