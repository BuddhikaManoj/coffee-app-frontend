import { Badge } from '@/components/ui/badge';
import { OrderStatus } from '@/lib/api';
import { orderStatuses } from '@/data/sampleProducts';

interface OrderStatusBadgeProps {
  status: OrderStatus;
}

export const OrderStatusBadge = ({ status }: OrderStatusBadgeProps) => {
  const statusConfig = orderStatuses.find((s) => s.value === status);
  
  return (
    <Badge className={statusConfig?.color || 'bg-gray-100 text-gray-800'}>
      {statusConfig?.label || status}
    </Badge>
  );
};
