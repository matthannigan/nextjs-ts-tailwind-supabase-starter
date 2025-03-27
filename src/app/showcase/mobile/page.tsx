import { Heading, Lead } from '@/components/style/typography';

export default function MobileShowcase() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="text-center">
        <Heading as="h1" size="h2" className="mb-4">
          Mobile Showcase
        </Heading>
        <Lead>Explore a mobile showcase of our components</Lead>
      </div>
    </div>
  );
}
