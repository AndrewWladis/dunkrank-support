import Item from './Item';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className='header'>Dunk Rank Support</h1>
      </header>
      <Item data={{
        title: "Username Rules",
        info: "Usernames must be all lowercase, not taken, not have the @ symbol, and have no spaces."
      }}/>
      <Item data={{
        title: "Password Rules",
        info: "Passwords must be at least 3 characters."
      }}/>
      <Item data={{
        title: "Email Rules",
        info: "Emails must be a valid."
      }}/>
      <Item data={{
        title: "Submitting a Request",
        info: "To submit a request, click the plus icon in the top right corner and fill out the details. Use a valid username. Use scores below 100."
      }}/>
      <Item data={{
        title: "Approving a Request",
        info: "To approve a request hit the check icon to the left of the score on an incoming request item. It will adjust your Rank Score accordingly."
      }}/>
      <Item data={{
        title: "Denying a Request",
        info: "To deny a request hit the x icon to the right of the score on an incoming request item. It will adjust your Rank Score accordingly."
      }}/>
      <Item data={{
        title: "School/Team",
        info: "To join a school or team select the school you are in. The cumulative team Rank Score is collected through average scores. Joining a team slightly increases the teams Rank Score."
      }}/>
      <Item data={{
        title: "Profile Pictures",
        info: "To change your profile picture, select an icon on the profile page. Certain profile pictures can only be accessed if you have your Rank Score is above a certain number."
      }}/>
      <Item data={{
        title: "Deleting an Account",
        info: "To delete an account, hit the delete account button above the icons. It will then ask you to confirm your decision."
      }}/>
      <h1 className='header-color'>Support Contact</h1>
      <Item data={{
        title: "Contact Email",
        info: "andywladis19@gmail.com"
      }}/>
    </div>
  );
}

export default App;
