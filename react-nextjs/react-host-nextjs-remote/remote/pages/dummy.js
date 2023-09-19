import React, { lazy, Suspense } from 'react';
// const Nav = lazy(() => import('host/Nav'));
// const NextjsRemoteComponent = lazy(() => import('remote/nextjs-remote-component'));

import dynamic from 'next/dynamic';
const Nav = dynamic(() => import('host/Nav'), { ssr: false });
const NextjsRemoteComponent = dynamic(() => import('remote/nextjs-remote-component'), { ssr: false });
// const QueryBuilder = dynamic(() => import('Dataexplorer/QueryBuilder'), { ssr: false })

function App() {
  return (
    <>
      <div>This is the Next.js container App hosted at localhost:8081</div>
      <NextjsRemoteComponent />
      <Nav />
      {/* <QueryBuilder query="abc" /> */}
    </>
  );
}

export default App;
