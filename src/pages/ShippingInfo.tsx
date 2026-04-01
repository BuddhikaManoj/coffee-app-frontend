import { Truck, Clock, Globe, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ShippingInfo = () => {
  return (
    <div className="container py-12">
      <h1 className="font-display text-4xl font-bold text-foreground mb-2">Shipping Information</h1>
      <p className="text-muted-foreground mb-8">Everything you need to know about getting your coffee delivered.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Truck className="h-5 w-5 text-accent" />
              Standard Shipping
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Delivery Time:</strong> 5–7 business days</p>
            <p><strong className="text-foreground">Cost:</strong> $4.99 (Free on orders over $50)</p>
            <p>Available across the continental United States.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5 text-accent" />
              Express Shipping
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Delivery Time:</strong> 2–3 business days</p>
            <p><strong className="text-foreground">Cost:</strong> $9.99</p>
            <p>Orders placed before 2 PM EST ship the same day.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Package className="h-5 w-5 text-accent" />
              Overnight Shipping
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Delivery Time:</strong> Next business day</p>
            <p><strong className="text-foreground">Cost:</strong> $19.99</p>
            <p>Must be ordered before 12 PM EST.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Globe className="h-5 w-5 text-accent" />
              International Shipping
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Delivery Time:</strong> 10–15 business days</p>
            <p><strong className="text-foreground">Cost:</strong> Calculated at checkout</p>
            <p>Available to select countries. Customs fees may apply.</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="font-display text-2xl font-semibold text-foreground">Tracking Your Order</h2>
        <p className="text-muted-foreground">Once your order ships, you'll receive a confirmation email with a tracking number. You can also track your order from the <strong>Orders</strong> page in your account.</p>

        <h2 className="font-display text-2xl font-semibold text-foreground">Packaging</h2>
        <p className="text-muted-foreground">All coffee beans are packed in resealable, nitrogen-flushed bags to ensure maximum freshness. Accessories are securely wrapped with eco-friendly packaging materials.</p>
      </div>
    </div>
  );
};

export default ShippingInfo;
