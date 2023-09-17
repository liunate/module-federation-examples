import * as React from 'react';

const NextjsRemoteComponent = () => {
  console.log('Next.js remote component rendered');
  return (
    <nav
      style={{
        background: 'cadetblue',
        width: '100%',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}
    >
      Hello from Remote Nextjs component
    </nav>
  );
};

export default NextjsRemoteComponent;
