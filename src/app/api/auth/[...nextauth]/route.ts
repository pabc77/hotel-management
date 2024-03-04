import NextAuth from 'next-auth';

import { authOptions } from '@/libs/auth';

const handler = NextAuth(authOptions);
// const handler = NextAuth();

export { handler as GET, handler as POST };