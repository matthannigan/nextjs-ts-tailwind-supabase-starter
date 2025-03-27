'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components';

import { Heading, Lead } from '@/components/style/typography';

// Import tab content components
import BaseComponentsTab from './components/base';
import FormComponentsTab from './components/form';
import CompositeComponentsTab from './components/composite';
import TypographyComponentsTab from './components/typography';

// Form schema moved to base components tab where it's used
const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export default function ComponentShowcase() {
  const [activeTab, setActiveTab] = useState('base');
  const [open, setOpen] = useState(false);

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
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="base">Base Components</TabsTrigger>
          <TabsTrigger value="form">Form Components</TabsTrigger>
          <TabsTrigger value="composite">Custom Composite</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
        </TabsList>

        {/* Base Components Tab */}
        <TabsContent value="base" className="space-y-12">
          <BaseComponentsTab />
        </TabsContent>

        {/* Form Components Tab */}
        <TabsContent value="form" className="space-y-12">
          <FormComponentsTab form={form} open={open} setOpen={setOpen} onSubmit={onSubmit} />
        </TabsContent>

        {/* Custom Composite Components Tab */}
        <TabsContent value="composite" className="space-y-12">
          <CompositeComponentsTab />
        </TabsContent>

        {/* Typography Tab */}
        <TabsContent value="typography" className="space-y-12">
          <TypographyComponentsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
