import NavbarMobile from '@/components/navigation/navbar-mobile';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <NavbarMobile />
    </>
  );
}