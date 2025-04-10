"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9938],{4745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"components/ui/toast","title":"Sonner Toast Component","description":"A customizable, animated toast notification system that provides feedback to users through temporary pop-up messages. The Sonner toast component offers various types of notifications including success, error, and informational alerts.","source":"@site/docs/components/ui/toast.md","sourceDirName":"components/ui","slug":"/components/ui/toast","permalink":"/nextjs-ts-tailwind-supabase-starter/components/ui/toast","draft":false,"unlisted":false,"editUrl":"https://github.com/matthannigan/nextjs-ts-tailwind-supabase-starter/tree/main/docs-website/docs/components/ui/toast.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Toast"},"sidebar":"components","previous":{"title":"Tabs","permalink":"/nextjs-ts-tailwind-supabase-starter/components/ui/tabs"},"next":{"title":"Checkbox","permalink":"/nextjs-ts-tailwind-supabase-starter/components/forms/checkbox"}}');var o=t(4848),i=t(8453);const r={sidebar_label:"Toast"},a="Sonner Toast Component",l={},d=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Setup",id:"basic-setup",level:3},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Toast Types",id:"toast-types",level:3},{value:"With Description",id:"with-description",level:3},{value:"With Action Button",id:"with-action-button",level:3},{value:"Promise Toast",id:"promise-toast",level:3},{value:"Props",id:"props",level:2},{value:"Toaster Props",id:"toaster-props",level:3},{value:"Toast Function Options",id:"toast-function-options",level:3},{value:"TypeScript",id:"typescript",level:2},{value:"Customization",id:"customization",level:2},{value:"Style Overrides",id:"style-overrides",level:3},{value:"Extending the Component",id:"extending-the-component",level:3},{value:"Examples",id:"examples",level:2},{value:"Integration with Forms",id:"integration-with-forms",level:3},{value:"Integration with Other Components",id:"integration-with-other-components",level:3},{value:"Responsive Behavior",id:"responsive-behavior",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Common Pitfalls",id:"common-pitfalls",level:2},{value:"Testing",id:"testing",level:2},{value:"Related Components",id:"related-components",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"sonner-toast-component",children:"Sonner Toast Component"})}),"\n",(0,o.jsx)(n.p,{children:"A customizable, animated toast notification system that provides feedback to users through temporary pop-up messages. The Sonner toast component offers various types of notifications including success, error, and informational alerts."}),"\n",(0,o.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'// Import the Toaster component for rendering toasts\nimport { Toaster } from "@/components/ui/sonner";\n\n// Import the toast function for triggering toasts\nimport { toast } from "sonner";\n'})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.h3,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,o.jsxs)(n.p,{children:["Add the ",(0,o.jsx)(n.code,{children:"<Toaster />"})," component to your root layout, which serves as the container for all toast notifications:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'// In app/layout.tsx or your root layout\nimport { Toaster } from "@/components/ui/sonner";\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang="en">\n      <head />\n      <body>\n        <main>{children}</main>\n        <Toaster />\n      </body>\n    </html>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,o.jsx)(n.p,{children:"The simplest way to trigger a toast notification:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { toast } from "sonner";\n\nexport function ToastDemo() {\n  return (\n    <Button onClick={() => toast("Your message has been sent")}>\n      Show Toast\n    </Button>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"toast-types",children:"Toast Types"}),"\n",(0,o.jsx)(n.p,{children:"The component provides various toast types for different situations:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'// Default toast\ntoast("This is a default toast");\n\n// Success toast with checkmark icon\ntoast.success("Your account has been created");\n\n// Error toast for alerts\ntoast.error("There was a problem with your request");\n\n// Info toast for general information\ntoast.info("New features are available");\n\n// Warning toast for cautionary messages\ntoast.warning("Your subscription will expire soon");\n'})}),"\n",(0,o.jsx)(n.h3,{id:"with-description",children:"With Description"}),"\n",(0,o.jsx)(n.p,{children:"Add more detailed information with a description:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'toast("Event created", {\n  description: "Your event has been scheduled for March 15, 2025",\n});\n'})}),"\n",(0,o.jsx)(n.h3,{id:"with-action-button",children:"With Action Button"}),"\n",(0,o.jsx)(n.p,{children:"Include an action button for user interaction:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'toast("Email sent", {\n  description: "Your message has been delivered",\n  action: {\n    label: "Undo",\n    onClick: () => console.log("Undo sending email"),\n  },\n});\n'})}),"\n",(0,o.jsx)(n.h3,{id:"promise-toast",children:"Promise Toast"}),"\n",(0,o.jsx)(n.p,{children:"Show loading state while waiting for a promise to resolve:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'const saveData = async () => {\n  // Simulate API call\n  await new Promise(resolve => setTimeout(resolve, 2000));\n  return { success: true };\n};\n\nfunction PromiseToastExample() {\n  return (\n    <Button\n      onClick={() => {\n        toast.promise(saveData, {\n          loading: "Saving changes...",\n          success: "Changes saved successfully",\n          error: "Failed to save changes",\n        });\n      }}\n    >\n      Save Changes\n    </Button>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,o.jsx)(n.h3,{id:"toaster-props",children:"Toaster Props"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Prop"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Default"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"position"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"'bottom-right'"})}),(0,o.jsx)(n.td,{children:"Position of the toast on the screen"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"expand"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"false"})}),(0,o.jsx)(n.td,{children:"Whether to expand toasts to fill the width of the container"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"visibleToasts"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"number"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"3"})}),(0,o.jsx)(n.td,{children:"Maximum number of toasts visible at one time"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"hotkey"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string[]"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"['altKey', 'KeyT']"})}),(0,o.jsx)(n.td,{children:"Keyboard shortcut to focus last toast"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"richColors"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"false"})}),(0,o.jsx)(n.td,{children:"Whether to use enhanced colors for different toast types"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"closeButton"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"false"})}),(0,o.jsx)(n.td,{children:"Whether to show a close button on each toast"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"offset"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string | number"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"32"})}),(0,o.jsx)(n.td,{children:"Distance in pixels from the edge of the viewport"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"duration"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"number"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"4000"})}),(0,o.jsx)(n.td,{children:"Default duration in milliseconds for which a toast is shown"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"theme"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"'light' | 'dark' | 'system'"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"'system'"})}),(0,o.jsx)(n.td,{children:"Color theme of the toasts"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"className"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"''"})}),(0,o.jsx)(n.td,{children:"Additional CSS classes to add to the toaster container"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"toast-function-options",children:"Toast Function Options"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Option"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Default"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"duration"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"number"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"4000"})}),(0,o.jsx)(n.td,{children:"Duration in milliseconds for which the toast is shown"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"description"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"React.ReactNode"})}),(0,o.jsx)(n.td,{children:"\u2014"}),(0,o.jsx)(n.td,{children:"Additional descriptive text for the toast"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"icon"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"React.ReactNode"})}),(0,o.jsx)(n.td,{children:"\u2014"}),(0,o.jsx)(n.td,{children:"Custom icon displayed before the toast message"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"action"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"{ label: string; onClick: () => void }"})}),(0,o.jsx)(n.td,{children:"\u2014"}),(0,o.jsx)(n.td,{children:"Action button with label and click handler"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"cancel"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"{ label: string; onClick: () => void }"})}),(0,o.jsx)(n.td,{children:"\u2014"}),(0,o.jsx)(n.td,{children:"Cancel button with label and click handler"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"dismissible"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"true"})}),(0,o.jsx)(n.td,{children:"Whether the toast can be dismissed by clicking"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"id"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"\u2014"}),(0,o.jsx)(n.td,{children:"Custom ID for the toast, useful for programmatic control"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"important"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"false"})}),(0,o.jsx)(n.td,{children:"Whether the toast should not be automatically dismissed"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"className"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"\u2014"}),(0,o.jsx)(n.td,{children:"Additional CSS classes for the toast element"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"style"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"React.CSSProperties"})}),(0,o.jsx)(n.td,{children:"\u2014"}),(0,o.jsx)(n.td,{children:"Inline styles for the toast element"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'// Toaster component props type\nimport type { ToasterProps } from "sonner";\n\n// Toast function and its options\nimport { toast } from "sonner";\ntype ToastOptions = {\n  duration?: number;\n  description?: React.ReactNode;\n  icon?: React.ReactNode;\n  action?: {\n    label: string;\n    onClick: () => void;\n  };\n  cancel?: {\n    label: string;\n    onClick: () => void;\n  };\n  dismissible?: boolean;\n  id?: string;\n  important?: boolean;\n  className?: string;\n  style?: React.CSSProperties;\n};\n\n// Usage with TypeScript\nconst showToast = (message: string, options?: ToastOptions) => {\n  return toast(message, options);\n};\n'})}),"\n",(0,o.jsx)(n.h2,{id:"customization",children:"Customization"}),"\n",(0,o.jsx)(n.h3,{id:"style-overrides",children:"Style Overrides"}),"\n",(0,o.jsx)(n.p,{children:"The component can be customized using the following approaches:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Using the ",(0,o.jsx)(n.code,{children:"className"})," prop to add additional Tailwind classes to the Toaster component:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'<Toaster \n  className="font-sans"\n  toastOptions={{\n    className: "rounded-sm border-accent",\n  }}\n/>\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Customizing individual toasts with the className option:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'toast("Custom styled toast", {\n  className: "bg-primary text-primary-foreground border-primary",\n});\n'})}),"\n",(0,o.jsx)(n.h3,{id:"extending-the-component",children:"Extending the Component"}),"\n",(0,o.jsx)(n.p,{children:"You can create a customized Toaster component with your project's default settings:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Toaster as SonnerToaster } from "sonner";\n\nexport function Toaster() {\n  return (\n    <SonnerToaster\n      position="top-right"\n      richColors\n      closeButton\n      toastOptions={{\n        duration: 5000,\n        className: "border-border rounded-md",\n      }}\n    />\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.h3,{id:"integration-with-forms",children:"Integration with Forms"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { useForm } from "react-hook-form";\nimport { toast } from "sonner";\n\nexport function ContactForm() {\n  const { register, handleSubmit, formState } = useForm();\n  \n  const onSubmit = async (data) => {\n    try {\n      // Simulate form submission\n      await new Promise(resolve => setTimeout(resolve, 1000));\n      toast.success("Message sent!", {\n        description: "We\'ll get back to you as soon as possible.",\n      });\n    } catch (error) {\n      toast.error("Failed to send message", {\n        description: "Please try again later.",\n      });\n    }\n  };\n  \n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <input {...register("email", { required: true })} />\n      <button type="submit" disabled={formState.isSubmitting}>\n        {formState.isSubmitting ? "Sending..." : "Send"}\n      </button>\n    </form>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"integration-with-other-components",children:"Integration with Other Components"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";\nimport { Button } from "@/components/ui/button";\nimport { toast } from "sonner";\n\nexport function FeatureCard({ title, description, actionLabel }) {\n  return (\n    <Card>\n      <CardHeader>\n        <CardTitle>{title}</CardTitle>\n      </CardHeader>\n      <CardContent>\n        <p>{description}</p>\n        <Button \n          onClick={() => toast.info(`Activated: ${title}`)}\n          className="mt-4"\n        >\n          {actionLabel}\n        </Button>\n      </CardContent>\n    </Card>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),"\n",(0,o.jsx)(n.p,{children:"The Sonner toast component is responsive by default, but you can enhance the behavior:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { useMediaQuery } from "@/hooks/use-media-query";\nimport { Toaster } from "@/components/ui/sonner";\n\nexport function ResponsiveToaster() {\n  const isMobile = useMediaQuery("(max-width: 640px)");\n  \n  return (\n    <Toaster\n      position={isMobile ? "bottom-center" : "top-right"}\n      expand={isMobile}\n      visibleToasts={isMobile ? 1 : 3}\n      closeButton={!isMobile}\n      className={isMobile ? "w-full max-w-full" : ""}\n    />\n  );\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"The component responds to different screen sizes in the following ways:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Mobile"}),": On small screens, toasts can be configured to appear at the bottom-center and expand to full width for better visibility"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Tablet"}),": Maintains standard toast size but can be positioned differently for optimal viewing"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Desktop"}),": Can display multiple toasts simultaneously and offers more interaction options like close buttons and actions"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsx)(n.p,{children:"The component follows these accessibility best practices:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Focus management: Pressing the hotkey (Alt+T by default) focuses the newest toast for keyboard navigation"}),"\n",(0,o.jsx)(n.li,{children:"Toast notifications can be dismissed via keyboard using the Escape key"}),"\n",(0,o.jsx)(n.li,{children:'Visual feedback is accompanied by role="status" for screen readers'}),"\n",(0,o.jsx)(n.li,{children:"Elements maintain proper contrast ratios for readability"}),"\n",(0,o.jsx)(n.li,{children:"Interactive elements within toasts are properly focusable and have appropriate ARIA attributes"}),"\n",(0,o.jsx)(n.li,{children:"Toasts automatically disappear, preventing screen reader users from being interrupted by persistent notices"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,o.jsx)(n.p,{children:"The component:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Uses CSS animations for smooth entrance and exit transitions"}),"\n",(0,o.jsx)(n.li,{children:"Leverages a centralized state management system for toast management"}),"\n",(0,o.jsx)(n.li,{children:"Properly handles the creation, updating, and dismissal of multiple toasts"}),"\n",(0,o.jsx)(n.li,{children:"Uses a queue system to manage multiple toast notifications"}),"\n",(0,o.jsx)(n.li,{children:"Integrates with React context for global access throughout the application"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"common-pitfalls",children:"Common Pitfalls"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Toast Not Appearing"}),": Ensure the ",(0,o.jsx)(n.code,{children:"<Toaster />"})," component is included in your root layout or application wrapper"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Toast Disappearing Too Quickly"}),": Adjust the duration property (in milliseconds) to increase display time"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Z-index Issues with Dialogs"}),": If toasts appear behind other elements, ensure proper z-index layering or set a higher z-index using the className prop"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Mobile Usability"}),": Consider using expand=",!0," on mobile for better visibility and touch targets"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Dark Mode Inconsistency"}),': Use the theme="system" prop to respect user preferences or sync with your app\'s theme']}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// Example test for the toast component\nimport { render, screen, waitFor } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\nimport { toast } from \"sonner\";\nimport { Toaster } from \"@/components/ui/sonner\";\nimport { ToastDemo } from \"./ToastDemo\";\n\ndescribe('Toast Component', () => {\n  beforeEach(() => {\n    // Setup a fresh Toaster for each test\n    render(<Toaster />);\n  });\n  \n  it('displays a toast when triggered', async () => {\n    render(<ToastDemo />);\n    const button = screen.getByRole('button', { name: /show toast/i });\n    \n    await userEvent.click(button);\n    \n    expect(await screen.findByText('Your message has been sent')).toBeInTheDocument();\n  });\n  \n  it('dismisses a toast after clicking the close button', async () => {\n    render(\n      <>\n        <Toaster closeButton />\n        <button onClick={() => toast('Test toast')}>Show Toast</button>\n      </>\n    );\n    \n    await userEvent.click(screen.getByRole('button'));\n    const toastMessage = await screen.findByText('Test toast');\n    const closeButton = screen.getByRole('button', { name: /close/i });\n    \n    await userEvent.click(closeButton);\n    \n    await waitFor(() => {\n      expect(toastMessage).not.toBeInTheDocument();\n    });\n  });\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"related-components",children:"Related Components"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/nextjs-ts-tailwind-supabase-starter/components/ui/alert",children:"Alert"}),": Used for persistent notifications within the page content"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/nextjs-ts-tailwind-supabase-starter/components/ui/dialog",children:"Dialog"}),": For more interactive notifications requiring user confirmation or input"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/nextjs-ts-tailwind-supabase-starter/components/ui/popover",children:"Popover"}),": For contextual information attached to specific UI elements"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);