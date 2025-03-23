import NavbarMobile from '@/components/navigation/navbar-mobile';

export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <NavbarMobile />
    </>
  );
}
