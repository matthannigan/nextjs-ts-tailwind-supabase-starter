'use client';

import { Search } from 'lucide-react';

import { Form as RHFForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Button,
  Input,
  Label,
  Card,
  CardContent,
  CardDescription,
  //  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components';

import { Heading } from '@/components/style/typography';

// Define the props type
interface FormComponentsTabProps {
  form: RHFForm<{
    username: string;
    email: string;
  }>;
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

// Bring in the form schema from the parent component
const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export default function FormComponentsTab({
  form,
  open,
  setOpen,
  onSubmit,
}: FormComponentsTabProps) {
  return (
    <>
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
    </>
  );
}
