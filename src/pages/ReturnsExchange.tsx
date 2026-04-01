import { RotateCcw, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ReturnsExchange = () => {
  return (
    <div className="container py-12">
      <h1 className="font-display text-4xl font-bold text-foreground mb-2">Returns & Exchanges</h1>
      <p className="text-muted-foreground mb-8">We want you to love every sip. Here's our return policy.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Eligible for Return
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Unopened coffee bags within 30 days</li>
              <li>• Defective or damaged accessories</li>
              <li>• Wrong item received</li>
              <li>• Unused equipment in original packaging</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <XCircle className="h-5 w-5 text-destructive" />
              Not Eligible
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Opened coffee bags (perishable)</li>
              <li>• Items returned after 30 days</li>
              <li>• Gift cards or promotional items</li>
              <li>• Items damaged by misuse</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <RotateCcw className="h-5 w-5 text-accent" />
              Exchange Policy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Exchange for same-value items</li>
              <li>• Price difference refunded or charged</li>
              <li>• Free return shipping for exchanges</li>
              <li>• Process takes 5–7 business days</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="font-display text-2xl font-semibold text-foreground">How to Return an Item</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Contact us at <strong className="text-foreground">hello@brewandbean.com</strong> with your order number.</li>
          <li>We'll send you a prepaid return shipping label.</li>
          <li>Pack the item securely and drop it off at any shipping location.</li>
          <li>Refund will be processed within 5–7 business days after we receive the item.</li>
        </ol>

        <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
          <AlertTriangle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> Refunds are issued to the original payment method. Shipping costs are non-refundable unless the return is due to our error.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnsExchange;
