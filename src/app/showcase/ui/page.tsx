'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { LucideUser, PlusCircle } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';

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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    // Replace console.log with a comment or alternative logging approach
    // console.log(values);
    setOpen(false);
  }

  return (
    <div className="container mx-auto py-10 space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Shadcn Component Showcase</h1>
        <p className="text-muted-foreground mb-8">
          Demonstrating Button, Card, Input, Form, Dialog, and Avatar components
        </p>
      </div>

      {/* Button Showcase */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          <Button size="default">Default Size</Button>
          <Button size="sm">Small Size</Button>
          <Button size="lg">Large Size</Button>
          <Button size="icon">
            <PlusCircle />
          </Button>
        </div>
      </section>

      {/* Card Showcase */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Card Component</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the main content area of the card.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
              <CardDescription>View and edit profile information</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">john@example.com</p>
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
        <h2 className="text-2xl font-semibold mb-4">Input Component</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Input placeholder="Default input" />
            <Input placeholder="Disabled input" disabled />
            <Input
              placeholder="With icon"
              className="pl-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 width=%2724%27 height=%2724%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 class=%27lucide lucide-search%27%3E%3Ccircle cx=%2711%27 cy=%2711%27 r=%278%27/%3E%3Cline x1=%2721%27 y1=%2721%27 x2=%2716.65%27 y2=%2716.65%27/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '12px center',
                backgroundSize: '16px',
              }}
            />
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
            </div>
            <Input type="email" placeholder="Email address" />
            <Input type="password" placeholder="Password" />
          </div>
        </div>
      </section>

      {/* Dialog and Form Showcase */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Dialog with Form</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Open Form Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create account</DialogTitle>
              <DialogDescription>Fill in the form below to create a new account.</DialogDescription>
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
      </section>

      {/* Avatar Showcase */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Avatar Component</h2>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col items-center gap-2">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-sm">With Image</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Avatar className="h-16 w-16">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <p className="text-sm">Fallback Only</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary text-primary-foreground">
                <LucideUser className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            <p className="text-sm">With Icon</p>
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
      </section>
    </div>
  );
}
