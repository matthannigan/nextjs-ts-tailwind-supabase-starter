# Footer Component

The Footer component provides a consistent footer section at the bottom of your application with copyright information.

## Import

```tsx
import Footer from '@/components/layout/footer';
```

## Usage

### Basic Usage

The Footer component is typically used in your root layout to ensure it appears on all pages:

```tsx
import Footer from '@/components/layout/footer';

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header component */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
```

## Features

- Responsive design that works on all screen sizes
- Automatically updates the copyright year
- Clean, minimal design with subtle background color
- Centered text for better readability

## Customization

The Footer component currently doesn't accept props for customization. To modify the Footer:

1. Edit the component directly in `src/components/layout/footer.tsx`
2. Create a new component that extends or replaces the default Footer

### Example: Adding Social Media Links

```tsx
// In src/components/layout/footer.tsx
export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <a href="https://twitter.com" className="text-gray-600 hover:text-blue-500">
              Twitter
            </a>
            <a href="https://github.com" className="text-gray-600 hover:text-blue-500">
              GitHub
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-500">
              LinkedIn
            </a>
          </div>
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Next.js Starter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

### Example: Creating a More Complex Footer

```tsx
export default function EnhancedFooter() {
  return (
    <footer className="w-full py-12 px-6 bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              A brief description of your company or project.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              123 Main Street<br />
              City, State 12345<br />
              Email: info@example.com<br />
              Phone: (123) 456-7890
            </address>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-2">Subscribe to our newsletter</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-gray-800 rounded-l"
              />
              <button className="bg-blue-500 px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Next.js Starter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

## Implementation Details

The Footer component:

- Uses a light gray background to differentiate it from the main content
- Contains a container for consistent width
- Displays copyright information with the current year
- Uses centered text for a clean appearance

## Accessibility

The Footer component follows accessibility best practices:

- Semantic HTML with proper footer element
- Sufficient color contrast for text readability 