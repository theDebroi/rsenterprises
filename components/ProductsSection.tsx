import React from 'react';
// import { motion } from 'framer-motion';  // removed unused import
import { SectionWrapper } from './SectionWrapper';
import { ProductTile } from './ProductTile';

/**
 * Product / Solutions section – four expansive interactive tiles.
 */
export const ProductsSection: React.FC = () => {
  const products = [
    {
      title: 'Knitted Elastic Tapes',
      description: 'Premium lingerie & high‑performance sportswear elastics.',
      imageUrl: 'https://images.unsplash.com/photo-1519666213635-4fa1a4d5a8f5?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Woven Webbing',
      description: 'Tactical, high‑tensile industrial webbing solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1592488874371-9c1f5a1e6c4e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Jacquard Elastics',
      description: 'Bespoke engineered branding and decorative elastics.',
      imageUrl: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Custom Textile Engineering',
      description: 'R&D for B2B specialized applications & prototypes.',
      imageUrl: 'https://images.unsplash.com/photo-1581091870625-8c8cbd5ba45c?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <SectionWrapper id="products" className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {products.map((p) => (
        <ProductTile
          key={p.title}
          title={p.title}
          description={p.description}
          imageUrl={p.imageUrl}
        />
      ))}
    </SectionWrapper>
  );
};
