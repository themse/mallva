export { default } from 'next-auth/middleware';

export const config = {
    // TODO delete line 6 and enable line 5 when auth will be finished
    // matcher: ['/admin/:path*'], 
    matcher: ['/admin1/:path*'],
};
