'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';

import { Heading, Text, Lead, Blockquote, InlineCode } from '@/components/ui/typography';

export default function TypographyComponentsTab() {
  return (
    <>
      {/* Heading Showcase */}
      <section>
        <Heading as="h2" size="h3" className="mb-4">
          Heading
        </Heading>
        <Card>
          <CardHeader>
            <CardTitle>Heading Component</CardTitle>
            <CardDescription>Headings with different sizes and styles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Heading as="h1" size="h1">
              Heading 1
            </Heading>
            <Heading as="h2" size="h2">
              Heading 2
            </Heading>
            <Heading as="h3" size="h3">
              Heading 3
            </Heading>
            <Heading as="h4" size="h4">
              Heading 4
            </Heading>
            <Heading as="h5" size="h5">
              Heading 5
            </Heading>
            <Heading as="h6" size="h6">
              Heading 6
            </Heading>
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <div>
                <Heading as="h3" size="h5" variant="default">
                  Default
                </Heading>
                <Text>Default heading style</Text>
              </div>
              <div>
                <Heading as="h3" size="h5" variant="primary">
                  Primary
                </Heading>
                <Text>Primary color heading</Text>
              </div>
              <div>
                <Heading as="h3" size="h5" variant="muted">
                  Muted
                </Heading>
                <Text>Muted/subdued heading</Text>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Text Showcase */}
      <section>
        <Heading as="h2" size="h3" className="mb-4">
          Text
        </Heading>
        <Card>
          <CardHeader>
            <CardTitle>Text Component</CardTitle>
            <CardDescription>Text blocks with different sizes and styles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Heading as="h3" size="h5">
                Text Sizes
              </Heading>
              <Text size="xs">Extra Small Text (xs)</Text>
              <Text size="sm">Small Text (sm)</Text>
              <Text size="md">Medium Text (md - default)</Text>
              <Text size="lg">Large Text (lg)</Text>
              <Text size="xl">Extra Large Text (xl)</Text>
            </div>
            <div className="space-y-2">
              <Heading as="h3" size="h5">
                Text Weights
              </Heading>
              <Text weight="light">Light weight text</Text>
              <Text weight="normal">Normal weight text (default)</Text>
              <Text weight="medium">Medium weight text</Text>
              <Text weight="semibold">Semibold weight text</Text>
              <Text weight="bold">Bold weight text</Text>
            </div>
            <div className="space-y-2">
              <Heading as="h3" size="h5">
                Text Variants
              </Heading>
              <Text variant="default">Default text variant</Text>
              <Text variant="muted">Muted text variant</Text>
              <Text variant="primary">Primary text variant</Text>
              <Text variant="secondary">Secondary text variant</Text>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Lead Showcase */}
      <section>
        <Heading as="h2" size="h3" className="mb-4">
          Lead
        </Heading>
        <Card>
          <CardHeader>
            <CardTitle>Lead Component</CardTitle>
            <CardDescription>Larger intro paragraph text</CardDescription>
          </CardHeader>
          <CardContent>
            <Lead>
              The Lead component is used for introductory text, typically at the beginning of a
              section or page. It&apos;s larger and more prominent than regular body text.
            </Lead>
          </CardContent>
        </Card>
      </section>

      {/* Blockquote & InlineCode Showcase */}
      <section>
        <Heading as="h2" size="h3" className="mb-4">
          Blockquote & InlineCode
        </Heading>
        <Card>
          <CardHeader>
            <CardTitle>Blockquote & InlineCode Components</CardTitle>
            <CardDescription>For quotes and code snippets</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Heading as="h3" size="h5" className="mb-2">
                Blockquote
              </Heading>
              <Blockquote>
                Good design is as little design as possible. Less, but better – because it
                concentrates on the essential aspects, and the products are not burdened with
                non-essentials.
              </Blockquote>
            </div>
            <div>
              <Heading as="h3" size="h5" className="mb-2">
                InlineCode
              </Heading>
              <Text>
                To install the package, run <InlineCode>npm install @acme/ui</InlineCode> in your
                terminal. You can then import components using{' '}
                <InlineCode>
                  {/* eslint-disable react/no-unescaped-entities */}
                  import {'{'} Button {'}'} from '@acme/ui'
                  {/* eslint-endable react/no-unescaped-entities */}
                </InlineCode>
              </Text>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
