/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { Moon, Sun } from 'lucide-react';

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';

import {
  ContentCard,
  SearchInput,
  ThemeSwitch,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui';

import { Heading, Text } from '@/components/ui/typography';

export default function CompositeComponentsTab() {
  return (
    <>
      {/* ContentCard Showcase */}
      <section>
        <Heading as="h2" size="h3" className="mb-4">
          ContentCard
        </Heading>
        <Card>
          <CardHeader>
            <CardTitle>ContentCard Component</CardTitle>
            <CardDescription>
              Card optimized for displaying content with image and actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <ContentCard
                title="Content Card With Image"
                description="This is a content card with an image, description and a link."
                image={{
                  src: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
                  alt: 'Cityscape',
                }}
                href="#"
                imageShape="landscape"
              />
              <ContentCard
                title="Content Card Without Image"
                description="This is a content card without an image, but with a description and custom footer."
                footer={
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Cancel
                    </Button>
                    <Button size="sm">Save</Button>
                  </div>
                }
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* SearchInput Showcase */}
      <section>
        <Heading as="h2" size="h3" className="mb-4">
          SearchInput
        </Heading>
        <Card>
          <CardHeader>
            <CardTitle>SearchInput Component</CardTitle>
            <CardDescription>Specialized input for search functionality</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="max-w-sm mx-auto">
              <SearchInput
                placeholder="Search for anything..."
                onSearch={value => alert(`Search for: ${value}`)}
                showButton={true}
              />
            </div>
            <div className="max-w-sm mx-auto">
              <SearchInput
                placeholder="Search without button..."
                onSearch={value => alert(`Search for: ${value}`)}
                showButton={false}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ThemeSwitch Showcase */}
      <section>
        <Heading as="h2" size="h3" className="mb-4">
          ThemeSwitch
        </Heading>
        <Card>
          <CardHeader>
            <CardTitle>ThemeSwitch Component</CardTitle>
            <CardDescription>Toggle between light and dark themes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center gap-4">
              <div className="flex items-center gap-2">
                <Sun className="h-5 w-5" />
                <Text>Light</Text>
              </div>
              <ThemeSwitch />
              <div className="flex items-center gap-2">
                <Moon className="h-5 w-5" />
                <Text>Dark</Text>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* NavigationMenu Showcase */}
      <section>
        <Heading as="h2" size="h3" className="mb-4">
          NavigationMenu
        </Heading>
        <Card>
          <CardHeader>
            <CardTitle>NavigationMenu Component</CardTitle>
            <CardDescription>Accessible navigation component for websites</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center py-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-2 min-w-[240px]">
                      <div className="grid gap-2">
                        <NavigationMenuLink asChild>
                          <a href="#" className="block p-2 rounded-md hover:bg-accent">
                            Introduction
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="#" className="block p-2 rounded-md hover:bg-accent">
                            Installation
                          </a>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-2 min-w-[240px]">
                      <div className="grid gap-2">
                        <NavigationMenuLink asChild>
                          <a href="#" className="block p-2 rounded-md hover:bg-accent">
                            Button
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="#" className="block p-2 rounded-md hover:bg-accent">
                            Card
                          </a>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <a href="#" className="block p-2 rounded-md hover:bg-accent">
                        Documentation
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
