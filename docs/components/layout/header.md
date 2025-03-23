# Header Component

The Header component provides a consistent navigation bar at the top of your application with links to key pages.

## Import

```tsx
import Header from '@/components/layout/header';
```

## Usage

### Basic Usage

The Header component is typically used in your root layout to ensure it appears on all pages:

```tsx
import Header from '@/components/layout/header';

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {/* Footer component */}
    </div>
  );
}
```

## Features

- Responsive design that works on all screen sizes
- Brand logo/text that links to the homepage
- Navigation links to key pages (Home, Dashboard, Login)
- Clean, minimal design with subtle shadow for depth

## Customization

The Header component currently doesn't accept props for customization. To modify the Header:

1. Edit the component directly in `src/components/layout/header.tsx`
2. Create a new component that extends or replaces the default Header

### Example: Adding a New Navigation Link

```tsx
// In src/components/layout/header.tsx
<nav>
  <ul className="flex space-x-4">
    <li>
      <Link href="/" className="hover:text-blue-500">
        Home
      </Link>
    </li>
    <li>
      <Link href="/dashboard" className="hover:text-blue-500">
        Dashboard
      </Link>
    </li>
    <li>
      <Link href="/login" className="hover:text-blue-500">
        Login
      </Link>
    </li>
    {/* New link */}
    <li>
      <Link href="/about" className="hover:text-blue-500">
        About
      </Link>
    </li>
  </ul>
</nav>
```

### Example: Creating a Custom Header

```tsx
import Header from '@/components/layout/header';

export default function CustomHeader() {
  return (
    <div className="bg-blue-600">
      <Header />
      <div className="container mx-auto py-4 text-white">
        <h1 className="text-2xl font-bold">Special Announcement</h1>
        <p>This appears below the standard header as an extension.</p>
      </div>
    </div>
  );
}
```

## Implementation Details

The Header component:

- Uses a white background with a subtle shadow
- Contains a container with flexbox for layout
- Includes the site name/logo on the left
- Displays the main navigation on the right
- Uses hover effects on links for better user interaction

## Accessibility

The Header component follows accessibility best practices:

- Semantic HTML with proper heading structure
- Keyboard navigable links
- Sufficient color contrast for text readability 