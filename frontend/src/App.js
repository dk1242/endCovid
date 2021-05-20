import "./App.css";
import AddHelpForm from "./Components/AddHelpForm";
import ListHelps from "./Components/ListHelps";

function App() {
  return (
    <div>
      <a href="/" style={{ textDecoration: "none" }}>
        {" "}
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "#e3f2fd",
            color: "#2962ff",
          }}
        >
          EndCovid-19
        </h1>
      </a>
      <div style={{ padding: "5px" }}>
        <ListHelps />
        <AddHelpForm />
      </div>
      <footer className="footer">
        Give us feedback / ideas @{""}
        <a href="https://www.instagram.com/etawah.diaries/">
          Etawah Diaries
        </a>, <a href="https://twitter.com/dhruval99kush">Dhruval Kushwaha</a>{" "}
        and <a href="https://twitter.com/Ashu95206591">Ashish Rajawat</a>
      </footer>
    </div>
  );
}

export default App;
