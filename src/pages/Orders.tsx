import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Package, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { Order, OrderStatus } from '@/lib/api';
import { orderStatuses } from '@/data/sampleProducts';

// Sample orders for demo
const sampleUserOrders: Order[] = [
  { id: 1001, user_id: 1, total: 45.97, status: 'delivered', created_at: '2024-01-15T10:30:00Z' },
  { id: 1002, user_id: 1, total: 78.98, status: 'out_for_delivery', created_at: '2024-01-18T14:22:00Z' },
  { id: 1003, user_id: 1, total: 32.99, status: 'preparing', created_at: '2024-01-20T09:15:00Z' },
];

const Orders = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [orders] = useState<Order[]>(sampleUserOrders);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login?redirect=/orders');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const getStatusBadge = (status: OrderStatus) => {
    const statusConfig = orderStatuses.find((s) => s.value === status);
    return <Badge className={statusConfig?.color || 'bg-gray-100 text-gray-800'}>{statusConfig?.label || status}</Badge>;
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen py-16">
        <div className="container max-w-2xl text-center">
          <Package className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
          <h1 className="font-display text-3xl font-bold mb-4">No Orders Yet</h1>
          <p className="text-muted-foreground mb-8">
            You haven't placed any orders yet. Start shopping to see your orders here.
          </p>
          <Link to="/products">
            <Button size="lg">Start Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="container max-w-3xl">
        <Button variant="ghost" className="mb-6 gap-2" onClick={() => navigate('/')}>
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">My Orders</h1>

        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                  {getStatusBadge(order.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>Placed on {new Date(order.created_at).toLocaleDateString()}</span>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between">
                  <span className="font-medium">Total</span>
                  <span className="text-xl font-bold text-accent">${order.total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-4 bg-secondary rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Demo Mode:</strong> These are sample orders. Connect your backend API to see real order data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
