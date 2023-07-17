import NextLink from 'next/link';

import { PageTemplate } from 'components/admin';

const Admin = () => {
  return (
    <PageTemplate title="Admin Panel">
      <p>
        Welcome to admin panel. Visit{' '}
        <NextLink className="text-green-900 font-bold" href="/admin/dashboard">
          Dashboard
        </NextLink>
      </p>
    </PageTemplate>
  );
};

export default Admin;
