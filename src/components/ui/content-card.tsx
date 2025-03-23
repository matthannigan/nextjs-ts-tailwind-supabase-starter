'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { aspectRatio, truncateText } from '@/lib/ui-utils';

interface ContentCardProps {
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  footer?: ReactNode;
  href?: string;
  className?: string;
  imageShape?: 'square' | 'video' | 'portrait' | 'landscape';
  hoverEffect?: boolean;
}

export function ContentCard({
  title,
  description,
  image,
  footer,
  href,
  className,
  imageShape = 'landscape',
  hoverEffect = true,
}: ContentCardProps) {
  const cardContent = (
    <Card
      className={cn(
        'flex h-full flex-col overflow-hidden',
        hoverEffect && 'transition-all duration-200 hover:border-primary hover:shadow-md',
        className
      )}
    >
      {image && (
        <div className={cn('relative w-full overflow-hidden', aspectRatio(imageShape))}>
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
        </div>
      )}
      <CardHeader className="flex-none">
        <Heading as="h3" size="h4" className={truncateText(2)}>
          {title}
        </Heading>
      </CardHeader>
      {description && (
        <CardContent className="flex-grow">
          <p className={cn('text-muted-foreground', truncateText(3))}>{description}</p>
        </CardContent>
      )}
      {(footer || href) && (
        <CardFooter className="flex-none pt-0">
          {footer || (
            <Button variant="ghost" size="sm" className="ml-auto gap-1">
              Read more <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
