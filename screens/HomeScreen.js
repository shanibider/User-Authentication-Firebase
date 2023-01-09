import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import AuthDetails from '../components/AuthDetails';


function HomeScreen() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default HomeScreen;