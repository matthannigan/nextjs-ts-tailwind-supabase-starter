export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 bg-gray-100">
      <div className="container mx-auto">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Next.js Starter. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 