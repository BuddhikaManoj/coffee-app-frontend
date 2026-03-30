import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
  AlertTriangle,
  Truck,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { StatsCard } from '@/components/admin/StatsCard';
import { OrderStatusBadge } from '@/components/admin/OrderStatusBadge';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { sampleProducts, sampleOrders } from '@/data/sampleProducts';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { isAdmin, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) {
      navigate('/admin/login');
    } else if (!isAdmin) {
      navigate('/');
      toast({
        variant: 'destructive',
        title: 'Access Denied',
        description: 'You need admin privileges to access this page.',
      });
    }
  }, [isAuthenticated, isAdmin, isLoading, navigate, toast]);

  if (isLoading || !isAdmin) return null;

  const totalOrders = sampleOrders.length;
  const pendingDeliveries = sampleOrders.filter(
    (o) => o.status === 'pending' || o.status === 'accepted' || o.status === 'preparing' || o.status === 'out_for_delivery'
  ).length;
  const totalProducts = sampleProducts.length;
  const outOfStockItems = sampleProducts.filter((p) => p.stock === 0).length;
  const totalRevenue = sampleOrders
    .filter((o) => o.status !== 'cancelled')
    .reduce((sum, o) => sum + o.total, 0);

  const recentOrders = sampleOrders.slice(0, 5);
  const lowStockProducts = sampleProducts.filter((p) => p.stock <= 10 && p.stock > 0);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your store overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <StatsCard
            label="Total Orders"
            value={totalOrders}
            icon={ShoppingCart}
            iconColor="text-blue-500"
          />
          <StatsCard
            label="Pending Deliveries"
            value={pendingDeliveries}
            icon={Truck}
            iconColor="text-orange-500"
          />
          <StatsCard
            label="Total Products"
            value={totalProducts}
            icon={Package}
            iconColor="text-green-500"
          />
          <StatsCard
            label="Out of Stock"
            value={outOfStockItems}
            icon={AlertTriangle}
            iconColor="text-red-500"
          />
          <StatsCard
            label="Revenue"
            value={`$${totalRevenue.toFixed(2)}`}
            icon={DollarSign}
            iconColor="text-primary"
          />
          <StatsCard
            label="Low Stock Items"
            value={lowStockProducts.length}
            icon={AlertTriangle}
            iconColor="text-yellow-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Orders</CardTitle>
              <Button variant="outline" size="sm" onClick={() => navigate('/admin/orders')}>
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">#{order.id}</TableCell>
                      <TableCell>{order.user?.name || 'Unknown'}</TableCell>
                      <TableCell>
                        <OrderStatusBadge status={order.status} />
                      </TableCell>
                      <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Low Stock Alerts */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Low Stock Alerts</CardTitle>
              <Button variant="outline" size="sm" onClick={() => navigate('/admin/products')}>
                Manage Stock
              </Button>
            </CardHeader>
            <CardContent>
              {lowStockProducts.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  All products are well-stocked!
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead className="text-right">Stock</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {lowStockProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell className="capitalize">{product.category}</TableCell>
                        <TableCell className="text-right">
                          <span className={product.stock <= 5 ? 'text-red-500 font-bold' : 'text-yellow-600'}>
                            {product.stock}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
