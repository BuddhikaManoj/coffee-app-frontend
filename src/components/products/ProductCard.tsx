import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/api';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const categoryLabels: Record<string, string> = {
    espresso: 'Espresso',
    latte: 'Latte',
    cappuccino: 'Cappuccino',
    beans: 'Coffee Beans',
    accessories: 'Accessories',
  };

  return (
    <Card className="group overflow-hidden hover-lift shadow-coffee">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2 text-xs">
              {categoryLabels[product.category] || product.category}
            </Badge>
            <Link to={`/products/${product.id}`}>
              <h3 className="font-display font-semibold text-lg leading-tight hover:text-accent transition-colors">
                {product.name}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {product.description}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="text-xl font-bold text-accent">${product.price.toFixed(2)}</span>
        <Button
          size="sm"
          onClick={() => addToCart(product)}
          disabled={product.stock <= 0}
          className="gap-1"
        >
          <ShoppingCart className="h-4 w-4" />
          {product.stock <= 0 ? 'Out of Stock' : 'Add'}
        </Button>
      </CardFooter>
    </Card>
  );
};
