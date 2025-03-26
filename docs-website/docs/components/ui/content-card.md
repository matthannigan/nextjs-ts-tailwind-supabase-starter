# ContentCard Component

A versatile card component that displays content with optional image, title, description, and footer. It's designed for presenting content previews with consistent styling and optional link functionality.

## Import

```tsx
import { ContentCard } from '@/components/ui/content-card';
```

## Usage

### Basic Usage

```tsx
<ContentCard title="Getting Started with Next.js" />
```

### With Image and Description

```tsx
<ContentCard 
  title="Introduction to TypeScript" 
  description="Learn the basics of TypeScript and how it improves your development workflow"
  image={{
    src: "/images/typescript-intro.jpg",
    alt: "TypeScript logo on a laptop screen"
  }}
/>
```

### With Link and Custom Footer

```tsx
<ContentCard
  title="Supabase Authentication"
  description="Implement secure authentication with Supabase in your Next.js application"
  image={{
    src: "/images/auth-example.jpg",
    alt: "Login screen example"
  }}
  href="/tutorials/supabase-auth"
  footer={
    <div className="flex items-center justify-between w-full">
      <span className="text-sm text-muted-foreground">5 min read</span>
      <Button variant="outline" size="sm">Save</Button>
    </div>
  }
/>
```

### Different Image Shapes

```tsx
// Square image (1:1 ratio)
<ContentCard
  title="Component Design"
  image={{
    src: "/images/component.jpg",
    alt: "UI component diagram"
  }}
  imageShape="square"
/>

// Video shape (16:9 ratio)
<ContentCard
  title="Video Tutorial"
  image={{
    src: "/images/tutorial-thumbnail.jpg",
    alt: "Tutorial thumbnail"
  }}
  imageShape="video"
/>

// Portrait image (3:4 ratio)
<ContentCard
  title="Team Member"
  image={{
    src: "/images/team-member.jpg",
    alt: "Team member photo"
  }}
  imageShape="portrait"
/>
```

### Without Hover Effect

```tsx
<ContentCard
  title="Static Card"
  description="This card doesn't change appearance on hover"
  hoverEffect={false}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | The main heading of the card |
| `description` | `string` | `undefined` | Optional text content describing the card content |
| `image` | `{ src: string, alt: string }` | `undefined` | Optional image to display at the top of the card |
| `footer` | `ReactNode` | `undefined` | Optional custom footer content |
| `href` | `string` | `undefined` | Optional URL to make the entire card clickable as a link |
| `className` | `string` | `undefined` | Additional CSS classes to apply to the card |
| `imageShape` | `'square' \| 'video' \| 'portrait' \| 'landscape'` | `'landscape'` | Controls the aspect ratio of the image |
| `hoverEffect` | `boolean` | `true` | Whether to show hover effects (border color change and shadow) |

## TypeScript

```tsx
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
```

## Customization

### Style Overrides

The component can be customized using the following approaches:

1. Using the `className` prop to add additional Tailwind classes
2. Customizing the image aspect ratio with the `imageShape` prop
3. Providing custom footer content with the `footer` prop
4. Disabling hover effects with `hoverEffect={false}`

```tsx
<ContentCard
  title="Customized Card"
  className="bg-slate-50 dark:bg-slate-900 border-2"
/>
```

### Extending the Component

```tsx
import { ContentCard } from '@/components/ui/content-card';
import { Badge } from '@/components/ui/badge';

export function ArticleCard({ category, readTime, ...props }) {
  return (
    <ContentCard 
      {...props} 
      footer={
        <div className="flex items-center justify-between w-full">
          <Badge variant="outline">{category}</Badge>
          <span className="text-sm text-muted-foreground">{readTime} min read</span>
        </div>
      }
    />
  );
}
```

## Examples

### Integration with Grid Layout

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <ContentCard 
    title="First Article" 
    description="Description for the first article"
    image={{ src: "/images/article1.jpg", alt: "Article 1" }}
    href="/articles/first-article"
  />
  <ContentCard 
    title="Second Article" 
    description="Description for the second article"
    image={{ src: "/images/article2.jpg", alt: "Article 2" }}
    href="/articles/second-article"
  />
  <ContentCard 
    title="Third Article" 
    description="Description for the third article"
    image={{ src: "/images/article3.jpg", alt: "Article 3" }}
    href="/articles/third-article"
  />
</div>
```

### Integration with Data Fetching

```tsx
'use client';

import { useEffect, useState } from 'react';
import { ContentCard } from '@/components/ui/content-card';

interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('/api/articles');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading articles...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ContentCard
          key={article.id}
          title={article.title}
          description={article.description}
          image={{
            src: article.imageUrl,
            alt: article.title
          }}
          href={`/articles/${article.slug}`}
        />
      ))}
    </div>
  );
}
```

### Responsive Behavior

The component responds to different screen sizes in the following ways:

- **Mobile**: Card takes full width, title uses smaller font size
- **Tablet**: Multiple cards can be displayed in a grid, title font size increases
- **Desktop**: Cards maintain consistent size with larger headings

The responsive behavior is primarily controlled by the parent container. The ContentCard itself adapts to its container width, making it flexible for various layouts.

## Accessibility

The component follows these accessibility best practices:

- Title is rendered as an `h3` heading by default for proper document structure
- Images include required `alt` text descriptions
- When used as a link, the entire card becomes clickable, increasing the target area
- Text content uses appropriate color contrast with the background
- Description is truncated with ellipsis to maintain visual consistency

## Implementation Details

The component:

- Builds upon the shadcn/ui `Card` component with additional features
- Uses Next.js `Image` component for optimized image loading
- Truncates both title and description text with ellipsis after specified line counts
- Provides consistent aspect ratios for images across the application
- Wraps content in a Next.js `Link` component when `href` is provided
- Includes a default "Read more" button with arrow icon when `href` is provided without custom footer

## Common Pitfalls

- **Missing Image Alt Text**: Always provide descriptive `alt` text when using images to maintain accessibility.
- **Long Titles or Descriptions**: Text is automatically truncated with ellipsis, which could cut off important information. Keep content concise or test to ensure truncation occurs at appropriate points.
- **Inconsistent Heights**: Cards may have different heights based on content. Consider using grid layouts with consistent card heights or limiting description length.
- **Dark Mode Considerations**: Test the component in both light and dark modes to ensure proper contrast and visibility.

## Testing

```tsx
// Example test for the ContentCard component
import { render, screen } from '@testing-library/react';
import { ContentCard } from '@/components/ui/content-card';

describe('ContentCard', () => {
  it('renders with title correctly', () => {
    render(<ContentCard title="Test Card Title" />);
    expect(screen.getByText('Test Card Title')).toBeInTheDocument();
  });
  
  it('renders with description when provided', () => {
    render(
      <ContentCard 
        title="Test Card" 
        description="This is a test card description" 
      />
    );
    expect(screen.getByText('This is a test card description')).toBeInTheDocument();
  });
  
  it('wraps content in a link when href is provided', () => {
    render(<ContentCard title="Test Card" href="/test-page" />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test-page');
  });
});
```

## Related Components

- [Card](./card.md): The base card component from shadcn/ui that ContentCard extends
- [Button](./button.md): Used in the default footer when providing an `href`
- [Typography](./typography.md): Provides the `Heading` component used for card titles