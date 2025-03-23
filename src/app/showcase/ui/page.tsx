/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { LucideUser, PlusCircle, Moon, Sun, Check, ChevronRight, Search } from 'lucide-react';

/**
 * Base Components
 */
import {
  Avatar,
  AvatarFallback, 
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui';

/**
 * Custom Composite Components
 */
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

/**
 * Typography Components
 */
import { Heading, Text, Lead, Blockquote, InlineCode } from '@/components/ui';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export default function ComponentShowcase() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('base');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    setOpen(false);
  }

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="text-center">
        <Heading as="h1" size="h2" className="mb-4">
          UI Component Showcase
        </Heading>
        <Lead>Explore our library of UI components</Lead>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="base">Base Components</TabsTrigger>
          <TabsTrigger value="composite">Custom Composite</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
        </TabsList>

        {/* Base Components Tab */}
        <TabsContent value="base" className="space-y-12">
          {/* Button Showcase */}
          <section>
            <Heading as="h2" size="h3" className="mb-4">
              Button
            </Heading>
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>Different styles and sizes for buttons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="default">Default Size</Button>
                  <Button size="sm">Small Size</Button>
                  <Button size="lg">Large Size</Button>
                  <Button size="icon">
                    <PlusCircle />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Card Showcase */}
          <section>
            <Heading as="h2" size="h3" className="mb-4">
              Card
            </Heading>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Simple Card</CardTitle>
                  <CardDescription>Basic card with header, content, footer</CardDescription>
                </CardHeader>
                <CardContent>
                  <Text>This is the main content area of the card.</Text>
                </CardContent>
                <CardFooter>
                  <Button>Action</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Profile</CardTitle>
                  <CardDescription>Complex card with multiple components</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <Text weight="medium">John Doe</Text>
                      <Text size="sm" variant="muted">
                        john@example.com
                      </Text>
                    </div>
                  </div>
                  <Input placeholder="Edit display name" />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Input Showcase */}
          <section>
            <Heading as="h2" size="h3" className="mb-4">
              Input
            </Heading>
            <Card>
              <CardHeader>
                <CardTitle>Input Component</CardTitle>
                <CardDescription>Text field for user input</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input placeholder="Default input" />
                  <Input placeholder="Disabled input" disabled />
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="With icon" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="First name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Email address" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Dialog and Form Showcase */}
          <section>
            <Heading as="h2" size="h3" className="mb-4">
              Dialog & Form
            </Heading>
            <Card>
              <CardHeader>
                <CardTitle>Dialog with Form</CardTitle>
                <CardDescription>Modal dialog containing a form</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button>Open Form Dialog</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Create account</DialogTitle>
                      <DialogDescription>
                        Fill in the form below to create a new account.
                      </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Username</FormLabel>
                              <FormControl>
                                <Input placeholder="johndoe" {...field} />
                              </FormControl>
                              <FormDescription>This is your public display name.</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormDescription>
                                We&apos;ll never share your email with anyone else.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <DialogFooter>
                          <Button type="submit">Submit</Button>
                        </DialogFooter>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </section>

          {/* Avatar Showcase */}
          <section>
            <Heading as="h2" size="h3" className="mb-4">
              Avatar
            </Heading>
            <Card>
              <CardHeader>
                <CardTitle>Avatar Component</CardTitle>
                <CardDescription>Visual representation of a user</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Text size="sm">With Image</Text>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Text size="sm">Fallback Only</Text>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <LucideUser className="h-8 w-8" />
                      </AvatarFallback>
                    </Avatar>
                    <Text size="sm">With Icon</Text>
                  </div>

                  <div className="flex items-end gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Tabs Showcase */}
          <section>
            <Heading as="h2" size="h3" className="mb-4">
              Tabs
            </Heading>
            <Card>
              <CardHeader>
                <CardTitle>Tabs Component</CardTitle>
                <CardDescription>Organize content into selectable sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="p-4 bg-muted/30 rounded-md mt-2">
                    <Text>Account settings content goes here.</Text>
                  </TabsContent>
                  <TabsContent value="password" className="p-4 bg-muted/30 rounded-md mt-2">
                    <Text>Password change form goes here.</Text>
                  </TabsContent>
                  <TabsContent value="settings" className="p-4 bg-muted/30 rounded-md mt-2">
                    <Text>Other settings content goes here.</Text>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Table Showcase */}
          <section>
            <Heading as="h2" size="h3" className="mb-4">
              Table
            </Heading>
            <Card>
              <CardHeader>
                <CardTitle>Table Component</CardTitle>
                <CardDescription>Display tabular data</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>A list of users</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>john@example.com</TableCell>
                      <TableCell>Admin</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>jane@example.com</TableCell>
                      <TableCell>User</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Bob Johnson</TableCell>
                      <TableCell>bob@example.com</TableCell>
                      <TableCell>User</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

          {/* Container Showcase */}
          <section>
            <Heading as="h2" size="h3" className="mb-4">
              Container
            </Heading>
            <Card>
              <CardHeader>
                <CardTitle>Container Component</CardTitle>
                <CardDescription>Responsive container for layout</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Container size="sm" className="p-4 border border-border rounded-md">
                  <Text size="sm" className="text-center">
                    Small Container (sm)
                  </Text>
                </Container>
                <Container size="md" className="p-4 border border-border rounded-md">
                  <Text size="sm" className="text-center">
                    Medium Container (md)
                  </Text>
                </Container>
                <Container size="lg" className="p-4 border border-border rounded-md">
                  <Text size="sm" className="text-center">
                    Large Container (lg)
                  </Text>
                </Container>
              </CardContent>
            </Card>
          </section>

          {/* Dropdown Menu Showcase */}
          <section>
            <Heading as="h2" size="h3" className="mb-4">
              Dropdown Menu
            </Heading>
            <Card>
              <CardHeader>
                <CardTitle>Dropdown Menu Component</CardTitle>
                <CardDescription>Expandable menu for options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button>Open Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <span>Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        {/* Custom Composite Components Tab */}
        <TabsContent value="composite" className="space-y-12">
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
        </TabsContent>

        {/* Typography Tab */}
        <TabsContent value="typography" className="space-y-12">
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
                    To install the package, run <InlineCode>npm install @acme/ui</InlineCode> in
                    your terminal. You can then import components using{' '}
                    <InlineCode>
                      import {'{'} Button {'}'} from '@acme/ui'
                    </InlineCode>
                    . {/* eslint-disable-line react/no-unescaped-entities */}
                  </Text>
                </div>
              </CardContent>
            </Card>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
