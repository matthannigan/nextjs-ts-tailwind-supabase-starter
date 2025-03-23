'use client';

import {
  Home,
  User,
  Settings,
  Mail,
  Calendar,
  Search,
  Bell,
  ChevronRight,
  Heart,
  Star,
  Info,
  AlertCircle,
  CheckCircle,
  XCircle,
  FileText,
  Download,
  Upload,
  MoreHorizontal,
  Menu,
  Trash2,
} from 'lucide-react';
import Container from '@/components/ui/container';
import ButtonExamples from './button-examples';

export default function IconsShowcase() {
  const icons = [
    { icon: Home, name: 'Home' },
    { icon: User, name: 'User' },
    { icon: Settings, name: 'Settings' },
    { icon: Mail, name: 'Mail' },
    { icon: Calendar, name: 'Calendar' },
    { icon: Search, name: 'Search' },
    { icon: Bell, name: 'Bell' },
    { icon: ChevronRight, name: 'ChevronRight' },
    { icon: Heart, name: 'Heart' },
    { icon: Star, name: 'Star' },
    { icon: Info, name: 'Info' },
    { icon: AlertCircle, name: 'AlertCircle' },
    { icon: CheckCircle, name: 'CheckCircle' },
    { icon: XCircle, name: 'XCircle' },
    { icon: FileText, name: 'FileText' },
    { icon: Download, name: 'Download' },
    { icon: Upload, name: 'Upload' },
    { icon: MoreHorizontal, name: 'MoreHorizontal' },
    { icon: Menu, name: 'Menu' },
    { icon: Trash2, name: 'Trash2' },
  ];

  return (
    <Container>
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-6">Lucide React Icons Showcase</h1>
        <p className="mb-8 text-gray-600">
          This page demonstrates various commonly used icons from the Lucide React library.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {icons.map(item => (
            <div
              key={item.name}
              className="p-4 border rounded-lg flex flex-col items-center justify-center hover:shadow-md transition-shadow"
            >
              <div className="mb-2">
                <item.icon className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Icon Sizes</h2>
        <div className="flex items-end gap-6 mb-8">
          <div className="flex flex-col items-center">
            <Home className="w-4 h-4" />
            <span className="mt-2 text-xs">16px</span>
          </div>
          <div className="flex flex-col items-center">
            <Home className="w-6 h-6" />
            <span className="mt-2 text-xs">24px</span>
          </div>
          <div className="flex flex-col items-center">
            <Home className="w-8 h-8" />
            <span className="mt-2 text-xs">32px</span>
          </div>
          <div className="flex flex-col items-center">
            <Home className="w-12 h-12" />
            <span className="mt-2 text-xs">48px</span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Icon Colors</h2>
        <div className="flex gap-6">
          <Home className="w-6 h-6 text-blue-500" />
          <Home className="w-6 h-6 text-red-500" />
          <Home className="w-6 h-6 text-green-500" />
          <Home className="w-6 h-6 text-yellow-500" />
          <Home className="w-6 h-6 text-purple-500" />
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Icon with Stroke Width</h2>
        <div className="flex gap-6 mb-12">
          <Home className="w-6 h-6" strokeWidth={1} />
          <Home className="w-6 h-6" strokeWidth={1.5} />
          <Home className="w-6 h-6" strokeWidth={2} />
          <Home className="w-6 h-6" strokeWidth={2.5} />
        </div>

        <div className="mt-16 pt-8 border-t">
          <ButtonExamples />
        </div>
      </div>
    </Container>
  );
}
