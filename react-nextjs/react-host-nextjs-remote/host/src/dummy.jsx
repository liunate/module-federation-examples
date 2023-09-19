import React, { lazy } from 'react';
// import { importRemote } from '@module-federation/utilities'
// // import NextjsRemoteComponent from 'remote/nextjs-remote-component';
// const NextjsRemoteComponent = lazy(() => import('remote/nextjs-remote-component'));

const Nav = lazy(() => import('host/Nav'));
// const QueryBuilder = lazy(() => import('Dataexplorer/QueryBuilder'));
// const QueryBuilder = lazy(() => importRemote({
//   url: 'http://127.0.0.1:3000/app/data-explorer/_next/static/chunks',
//   remoteEntryFileName: 'remoteEntryDataexplorer.js',
//   scope: 'Dataexplorer',
//   module: 'QueryBuilder',
// }))

function App() {
  return (
    <>
      {/* <NextjsRemoteComponent /> */}
      <div>This is the React container App hosted at localhost:8080</div>
      <Nav />
      {/* <QueryBuilder query="abc" /> */}
    </>
  );
}

export default App;

