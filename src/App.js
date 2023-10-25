import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-wed">
        <img
          src={
            "https://th.bing.com/th/id/R.ce6906cae8f84211a2bd7483832ed6ff?rik=fkofKfRfw50GXQ&riu=http%3a%2f%2fblogimg.goo.ne.jp%2fuser_image%2f62%2f46%2ff3e047bd3dd155afe7806ac5f8da256c.jpg&ehk=sLOeTognAyAQDB%2bjuYi1K5XusH3cqFdrZeKiqCT%2fz6w%3d&risl=&pid=ImgRaw&r=0"
          }
          className="App-logo"
          alt="logo"
        />
        <p className="text-wed-dark">
          ようこそ <code>WED</code> Community.
        </p>
        <a
          className="text-wed-dark underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn WED
        </a>
      </header>
    </div>
  );
}

export default App;
