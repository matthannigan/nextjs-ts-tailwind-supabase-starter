'use client';

import { LucideUser, PlusCircle } from 'lucide-react';

import {
  Button,
  Input,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components';

// Import components with casing issues directly
import Container from '@/components/ui/container';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Heading, Text } from '@/components/style/typography';

export default function BaseComponentsTab() {
  return (
    <>
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
    </>
  );
}
