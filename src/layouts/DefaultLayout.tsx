import Sidebar from '../components/Sidebar';
import Breadcrumbs from '../components/Breadcrumber';

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: '80px', padding: '20px' }}>
        <Breadcrumbs />
        {children}
      </div>
    </>
  );
}
