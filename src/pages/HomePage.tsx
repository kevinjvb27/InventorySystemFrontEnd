import { useAuthContext } from '../context/AuthContext';

const HomePage = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h1>Home Page</h1>
      {user ? <p>Welcome, {user}!</p> : <p>Please log in.</p>}
    </div>
  );
};

export default HomePage;