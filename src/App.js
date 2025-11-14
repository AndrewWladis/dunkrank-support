import Item from './Item';
import './index.css';
import logo from './assets/logo.png';
import homepage from './assets/homepage.png';
import team from './assets/team.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <img src={logo} alt='Dunk Rank Logo' className="logo" />
            <span className="logo-text">Dunk Rank</span>
          </div>
          <nav className='nav-items'>
            <a className='nav-item' href='#support'>
              Support
            </a>
            <a className='nav-item' href='#contact'>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className='hero-section'>
          <div className='hero-content'>
            <div className='hero-text'>
              <h1 className='hero-title'>
                <span className="gradient-text">Dunk Rank</span>
              </h1>
              <p className='hero-subtitle'>
                The best app for ranking casual basketball players through 1v1 game results.
              </p>
              <button 
                onClick={() => {
                  window.location = 'https://apps.apple.com/us/app/dunk-rank/id6448699695'
                }} 
                className='download-button'
              >
                <svg className="app-store-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download on iOS
              </button>
            </div>
            <div className='screenshots-container'>
              <div className='screenshot-wrapper'>
                <img className='screenshot screenshot-1' src={homepage} alt="Dunk Rank Homepage" />
                <img className='screenshot screenshot-2' src={team} alt="Dunk Rank Team View" />
              </div>
            </div>
          </div>
        </section>

        <section id='support' className='support-section'>
          <div className="section-container">
            <h2 className='section-title'>
              <span className="section-title-icon">📚</span>
              Support Center
            </h2>
            <div className='items-grid'>
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
                info: "Emails must be valid."
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
            </div>
          </div>
        </section>

        <section id='contact' className='contact-section'>
          <div className="section-container">
            <h2 className='section-title'>
              <span className="section-title-icon">✉️</span>
              Get in Touch
            </h2>
            <div className='contact-content'>
              <Item data={{
                title: "Contact Email",
                info: "awladis@andytech.it.com"
              }} />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 Dunk Rank. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
