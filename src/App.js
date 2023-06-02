import Item from './Item';
import './index.css';
import logo from './assets/logo.png';
import homepage from './assets/homepage.png';
import team from './assets/team.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt='basketball' />
        <div className='nav-items'>
          <a className='nav-item' href='#rules'>
            <h2>Support</h2>
          </a>
          <a className='nav-item' href='#contact'>
            <h2>Contact</h2>
          </a>
        </div>
      </header>
      <div class='download'>
        <div className='pictures'>
          <img className='screenshot' src={homepage} alt="homepage" />
          <img className='screenshot' src={team} alt="team" />
        </div>
        <div className='download-info'>
          <h2 className='download-header'>Dunk Rank</h2>
          <h2 className='download-subtitle'>The best app for ranking casual basketball players through 1v1 game results.</h2>
          <button onClick={() => {
            window.location = 'https://apps.apple.com/us/app/dunk-rank/id6448699695'
          }} className='download-button'>Download on iOS</button>
        </div>
      </div>
      <h1 className='header-color'>Support</h1>
      <div id='rules'>
        <Item data={{
          title: "Username Rules",
          info: "Usernames must be all lowercase, not taken, not have the @ symbol, and have no spaces."
        }} />
        <Item data={{
          title: "Password Rules",
          info: "Passwords must be at least 3 characters."
        }} />
        <Item data={{
          title: "Email Rules",
          info: "Emails must be a valid."
        }} />
        <Item data={{
          title: "Submitting a Request",
          info: "To submit a request, click the plus icon in the top right corner and fill out the details. Use a valid username. Use scores below 100."
        }} />
        <Item data={{
          title: "Approving a Request",
          info: "To approve a request hit the check icon to the left of the score on an incoming request item. It will adjust your Rank Score accordingly."
        }} />
        <Item data={{
          title: "Denying a Request",
          info: "To deny a request hit the x icon to the right of the score on an incoming request item. It will adjust your Rank Score accordingly."
        }} />
        <Item data={{
          title: "State Team",
          info: "To join a state team select the state you live in. The cumulative team Rank Score is collected through average scores."
        }} />
        <Item data={{
          title: "Profile Pictures",
          info: "To change your profile picture, select an icon on the profile page. Certain profile pictures can only be accessed if you have your Rank Score is above a certain number."
        }} />
        <Item data={{
          title: "Jordan AI",
          info: "Enter a prompt in the Search Bar on the AI page to ask a question to Jordan AI. After a brief data call, it will respond with information."
        }} />
        <h1 id='contact' className='header-color'>Support Contact</h1>
        <Item data={{
          title: "Contact Email",
          info: "andywladis19@gmail.com"
        }} />
      </div>
    </div>
  );
}

export default App;
