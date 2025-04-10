"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1867],{8338:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"components/ui/avatar","title":"Avatar Component","description":"A versatile avatar component that displays a user image with fallback support when the image fails to load or is unavailable.","source":"@site/docs/components/ui/avatar.md","sourceDirName":"components/ui","slug":"/components/ui/avatar","permalink":"/nextjs-ts-tailwind-supabase-starter/components/ui/avatar","draft":false,"unlisted":false,"editUrl":"https://github.com/matthannigan/nextjs-ts-tailwind-supabase-starter/tree/main/docs-website/docs/components/ui/avatar.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Avatar"},"sidebar":"components","previous":{"title":"Alert","permalink":"/nextjs-ts-tailwind-supabase-starter/components/ui/alert"},"next":{"title":"Badge","permalink":"/nextjs-ts-tailwind-supabase-starter/components/ui/badge"}}');var s=t(4848),r=t(8453);const i={sidebar_label:"Avatar"},l="Avatar Component",d={},c=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"With Fallback Text",id:"with-fallback-text",level:3},{value:"With Fallback Icon",id:"with-fallback-icon",level:3},{value:"Custom Size",id:"custom-size",level:3},{value:"Props",id:"props",level:2},{value:"Avatar Props",id:"avatar-props",level:3},{value:"AvatarImage Props",id:"avatarimage-props",level:3},{value:"AvatarFallback Props",id:"avatarfallback-props",level:3},{value:"TypeScript",id:"typescript",level:2},{value:"Customization",id:"customization",level:2},{value:"Style Overrides",id:"style-overrides",level:3},{value:"Extending the Component",id:"extending-the-component",level:3},{value:"Examples",id:"examples",level:2},{value:"Integration with User Profile",id:"integration-with-user-profile",level:3},{value:"Integration with Cards",id:"integration-with-cards",level:3},{value:"Responsive Behavior",id:"responsive-behavior",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Common Pitfalls",id:"common-pitfalls",level:2},{value:"Testing",id:"testing",level:2},{value:"Related Components",id:"related-components",level:2}];function o(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"avatar-component",children:"Avatar Component"})}),"\n",(0,s.jsx)(a.p,{children:"A versatile avatar component that displays a user image with fallback support when the image fails to load or is unavailable."}),"\n",(0,s.jsx)(a.h2,{id:"import",children:"Import"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-tsx",children:"import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';\n"})}),"\n",(0,s.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(a.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-tsx",children:'<Avatar>\n  <AvatarImage src="https://example.com/user-avatar.jpg" alt="User Name" />\n  <AvatarFallback>UN</AvatarFallback>\n</Avatar>\n'})}),"\n",(0,s.jsx)(a.h3,{id:"with-fallback-text",children:"With Fallback Text"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-tsx",children:'<Avatar>\n  <AvatarImage src="https://example.com/user-avatar.jpg" alt="John Doe" />\n  <AvatarFallback>JD</AvatarFallback>\n</Avatar>\n'})}),"\n",(0,s.jsx)(a.h3,{id:"with-fallback-icon",children:"With Fallback Icon"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-tsx",children:'<Avatar>\n  <AvatarImage src="https://example.com/user-avatar.jpg" alt="User Profile" />\n  <AvatarFallback>\n    <UserIcon className="h-4 w-4" />\n  </AvatarFallback>\n</Avatar>\n'})}),"\n",(0,s.jsx)(a.h3,{id:"custom-size",children:"Custom Size"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-tsx",children:'<Avatar className="h-14 w-14">\n  <AvatarImage src="https://example.com/user-avatar.jpg" alt="User Name" />\n  <AvatarFallback>UN</AvatarFallback>\n</Avatar>\n'})}),"\n",(0,s.jsx)(a.h2,{id:"props",children:"Props"}),"\n",(0,s.jsx)(a.h3,{id:"avatar-props",children:"Avatar Props"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Prop"}),(0,s.jsx)(a.th,{children:"Type"}),(0,s.jsx)(a.th,{children:"Default"}),(0,s.jsx)(a.th,{children:"Description"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"className"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"string"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"undefined"})}),(0,s.jsx)(a.td,{children:"Additional CSS classes to apply to the avatar container"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"...props"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>"})}),(0,s.jsx)(a.td,{children:"-"}),(0,s.jsx)(a.td,{children:"All other props are passed to the underlying Radix UI Avatar component"})]})]})]}),"\n",(0,s.jsx)(a.h3,{id:"avatarimage-props",children:"AvatarImage Props"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Prop"}),(0,s.jsx)(a.th,{children:"Type"}),(0,s.jsx)(a.th,{children:"Default"}),(0,s.jsx)(a.th,{children:"Description"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"src"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"string"})}),(0,s.jsx)(a.td,{children:"Required"}),(0,s.jsx)(a.td,{children:"The source URL of the avatar image"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"alt"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"string"})}),(0,s.jsx)(a.td,{children:"Required"}),(0,s.jsx)(a.td,{children:"Alt text for the avatar image for accessibility"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"className"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"string"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"undefined"})}),(0,s.jsx)(a.td,{children:"Additional CSS classes to apply to the avatar image"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"...props"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>"})}),(0,s.jsx)(a.td,{children:"-"}),(0,s.jsx)(a.td,{children:"All other props are passed to the underlying Radix UI Avatar Image component"})]})]})]}),"\n",(0,s.jsx)(a.h3,{id:"avatarfallback-props",children:"AvatarFallback Props"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Prop"}),(0,s.jsx)(a.th,{children:"Type"}),(0,s.jsx)(a.th,{children:"Default"}),(0,s.jsx)(a.th,{children:"Description"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"delayMs"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"number"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"undefined"})}),(0,s.jsx)(a.td,{children:"Delay in milliseconds before showing the fallback to avoid flashes during loading"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"className"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"string"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"undefined"})}),(0,s.jsx)(a.td,{children:"Additional CSS classes to apply to the avatar fallback"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"children"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"React.ReactNode"})}),(0,s.jsx)(a.td,{children:"Required"}),(0,s.jsx)(a.td,{children:"Content to display when the image fails to load (typically initials or an icon)"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"...props"})}),(0,s.jsx)(a.td,{children:(0,s.jsx)(a.code,{children:"React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>"})}),(0,s.jsx)(a.td,{children:"-"}),(0,s.jsx)(a.td,{children:"All other props are passed to the underlying Radix UI Avatar Fallback component"})]})]})]}),"\n",(0,s.jsx)(a.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-tsx",children:"// Avatar Component Types\nimport * as React from 'react';\nimport * as AvatarPrimitive from '@radix-ui/react-avatar';\n\n// Avatar Props\ntype AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;\n\n// AvatarImage Props\ntype AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;\n\n// AvatarFallback Props\ntype AvatarFallbackProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;\n"})}),"\n",(0,s.jsx)(a.h2,{id:"customization",children:"Customization"}),"\n",(0,s.jsx)(a.h3,{id:"style-overrides",children:"Style Overrides"}),"\n",(0,s.jsx)(a.p,{children:"The Avatar component can be customized using the following approaches:"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["Using the ",(0,s.jsx)(a.code,{children:"className"})," prop to add additional Tailwind classes to each subcomponent"]}),"\n",(0,s.jsx)(a.li,{children:"Overriding the default styles using CSS variables or direct class overrides"}),"\n",(0,s.jsx)(a.li,{children:"Extending the component with custom sizes or colors"}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"Default styling:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Avatar: ",(0,s.jsx)(a.code,{children:"h-10 w-10 rounded-full overflow-hidden"})]}),"\n",(0,s.jsxs)(a.li,{children:["AvatarImage: ",(0,s.jsx)(a.code,{children:"aspect-square h-full w-full"})]}),"\n",(0,s.jsxs)(a.li,{children:["AvatarFallback: ",(0,s.jsx)(a.code,{children:"flex h-full w-full items-center justify-center rounded-full bg-muted"})]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"extending-the-component",children:"Extending the Component"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-tsx",children:"import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';\n\nexport function UserAvatar({ username, imageSrc, size = 'default', ...props }) {\n  // Generate initials from username\n  const initials = username\n    .split(' ')\n    .map(n => n[0])\n    .join('')\n    .substring(0, 2)\n    .toUpperCase();\n  \n  // Size classes\n  const sizeClasses = {\n    small: 'h-8 w-8',\n    default: 'h-10 w-10',\n    large: 'h-14 w-14',\n  };\n  \n  return (\n    <Avatar \n      {...props} \n      className={`${sizeClasses[size]} ${props.className || ''}`}\n    >\n      <AvatarImage src={imageSrc} alt={username} />\n      <AvatarFallback>{initials}</AvatarFallback>\n    </Avatar>\n  );\n}\n"})}),"\n",(0,s.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(a.h3,{id:"integration-with-user-profile",children:"Integration with User Profile"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-tsx",children:'<div className="flex items-center gap-3">\n  <Avatar>\n    <AvatarImage src={user.profileImage} alt={user.name} />\n    <AvatarFallback>{user.initials}</AvatarFallback>\n  </Avatar>\n  <div>\n    <p className="font-medium">{user.name}</p>\n    <p className="text-sm text-muted-foreground">{user.email}</p>\n  </div>\n</div>\n'})}),"\n",(0,s.jsx)(a.h3,{id:"integration-with-cards",children:"Integration with Cards"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-tsx",children:'<Card>\n  <CardHeader>\n    <div className="flex items-center gap-4">\n      <Avatar>\n        <AvatarImage src={author.avatar} alt={author.name} />\n        <AvatarFallback>{author.initials}</AvatarFallback>\n      </Avatar>\n      <div>\n        <CardTitle>{author.name}</CardTitle>\n        <CardDescription>{author.role}</CardDescription>\n      </div>\n    </div>\n  </CardHeader>\n  <CardContent>\n    {/* Card content */}\n  </CardContent>\n</Card>\n'})}),"\n",(0,s.jsx)(a.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),"\n",(0,s.jsx)(a.p,{children:"The Avatar component is responsive by default, but you can further customize its behavior:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Mobile"}),": Use smaller avatar sizes with ",(0,s.jsx)(a.code,{children:"h-8 w-8"})," class"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Tablet"}),": Use default avatar size ",(0,s.jsx)(a.code,{children:"h-10 w-10"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Desktop"}),": Use larger avatar sizes with ",(0,s.jsx)(a.code,{children:"h-12 w-12"})," or ",(0,s.jsx)(a.code,{children:"h-14 w-14"})," for more prominence"]}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-tsx",children:'<Avatar className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">\n  <AvatarImage src="/avatar.png" alt="User" />\n  <AvatarFallback>UN</AvatarFallback>\n</Avatar>\n'})}),"\n",(0,s.jsx)(a.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,s.jsx)(a.p,{children:"The Avatar component follows these accessibility best practices:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Requires ",(0,s.jsx)(a.code,{children:"alt"})," text on AvatarImage for screen readers"]}),"\n",(0,s.jsx)(a.li,{children:"Provides visible text alternatives through AvatarFallback when images aren't available"}),"\n",(0,s.jsx)(a.li,{children:"Uses Radix UI's Avatar primitive which has proper ARIA attributes"}),"\n",(0,s.jsx)(a.li,{children:"Maintains proper contrast ratios for fallback text against the background"}),"\n",(0,s.jsx)(a.li,{children:"Preserves aspect ratio and readability at different sizes"}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,s.jsx)(a.p,{children:"The component:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Is built on Radix UI's Avatar primitive for accessibility and consistent behavior"}),"\n",(0,s.jsx)(a.li,{children:"Automatically displays the fallback when the image fails to load"}),"\n",(0,s.jsx)(a.li,{children:"Handles image loading states to prevent layout shifts"}),"\n",(0,s.jsx)(a.li,{children:"Uses Tailwind CSS for styling with the ability to override via className"}),"\n",(0,s.jsx)(a.li,{children:"Is server-component friendly with the 'use client' directive properly applied"}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"common-pitfalls",children:"Common Pitfalls"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Missing fallback content"}),": Always provide fallback content (initials or icon) to handle cases when images don't load"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Non-square images"}),": The component expects square images; non-square images will be cropped"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Accessibility"}),": Remember to include descriptive ",(0,s.jsx)(a.code,{children:"alt"})," text for AvatarImage"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Size customization"}),": When changing the size, adjust both width and height properties to maintain the circular shape"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Hydration errors"}),": When using Avatar inside other components like Button, wrap with a client component to avoid hydration issues"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-tsx",children:"// Example test for the Avatar component\nimport { render, screen } from '@testing-library/react';\nimport { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';\n\ndescribe('Avatar', () => {\n  it('renders the image when src is provided', () => {\n    render(\n      <Avatar>\n        <AvatarImage src=\"/test-avatar.png\" alt=\"Test User\" data-testid=\"avatar-img\" />\n        <AvatarFallback>TU</AvatarFallback>\n      </Avatar>\n    );\n    \n    expect(screen.getByTestId('avatar-img')).toBeInTheDocument();\n  });\n  \n  it('displays fallback when image fails to load', () => {\n    render(\n      <Avatar>\n        <AvatarImage src=\"/non-existent.png\" alt=\"Test User\" />\n        <AvatarFallback>TU</AvatarFallback>\n      </Avatar>\n    );\n    \n    // Trigger onError event on the image\n    const image = screen.getByAltText('Test User');\n    fireEvent.error(image);\n    \n    expect(screen.getByText('TU')).toBeInTheDocument();\n  });\n});\n"})}),"\n",(0,s.jsx)(a.h2,{id:"related-components",children:"Related Components"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/nextjs-ts-tailwind-supabase-starter/components/ui/card",children:"Card"}),": Often used together with Avatar in user profile displays"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/nextjs-ts-tailwind-supabase-starter/components/ui/badge",children:"Badge"}),": Can be combined with Avatar to indicate user status"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/nextjs-ts-tailwind-supabase-starter/components/ui/button",children:"Button"}),": Avatars can be used within buttons for user-related actions"]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>l});var n=t(6540);const s={},r=n.createContext(s);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);