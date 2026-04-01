import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CartItem } from '@/components/cart/CartItem';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

const Cart = () => {
  const { items, total, clearCart } = useCart();
  const { isAuthenticated } = useAuth();

  const shipping = total >= 50 ? 0 : 5.99;
  const grandTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-16">
        <div className="container max-w-2xl text-center">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
          <h1 className="font-display text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/products">
            <Button size="lg">
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold">Shopping Cart</h1>
          <Button variant="ghost" className="text-destructive" onClick={clearCart}>
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {total < 50 && (
                    <p className="text-xs text-muted-foreground">
                      Add ${(50 - total).toFixed(2)} more for free shipping
                    </p>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-accent">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {isAuthenticated ? (
                    <Link to="/checkout" className="block">
                      <Button className="w-full" size="lg">
                        Proceed to Checkout
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Link to="/login?redirect=/checkout" className="block">
                        <Button className="w-full" size="lg">
                          Login to Checkout
                        </Button>
                      </Link>
                      <p className="text-xs text-center text-muted-foreground">
                        Don't have an account?{' '}
                        <Link to="/register?redirect=/checkout" className="text-accent hover:underline">
                          Sign up
                        </Link>
                      </p>
                    </>
                  )}
                </div>

                <div className="mt-6">
                  <Link to="/products">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
