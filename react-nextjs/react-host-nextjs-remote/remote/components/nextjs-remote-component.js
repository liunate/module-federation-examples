import styles from '../styles/Home.module.css'

const NextjsRemoteComponent = () => {
  return (
    <nav
      style={{
        width: '100%',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}
     className={styles.nate}>
      Hello from Next.js component hosted on localhost:8081
    </nav>
  );
};

export default NextjsRemoteComponent;
