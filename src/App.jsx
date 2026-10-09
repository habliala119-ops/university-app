
import "./App.css";
import photo from'./assets/lol.jpeg';

const nom = "habli alae";
const email = "habliala119@gmail.com";
const telephone = "+21655046513";
const filiere = "Génie Logiciel et Systèmes d'Information";
const groupe = "GLSI 2A";
const ville = "Kairouane";
const image = photo
function App() {
  return (
    <div>
      <h1>Fiche étudiant</h1>
      <img
      src={image}
      alt="image"
      style={{
        width:'150px',
        height:'150px',
        borderRadius: '50%',
        objectift :'cover'
    
      }}
    ></img>
      
      <p>Nom & Prénom : {nom}</p>
      <p>Email : {email}</p>
      <p>Téléphone : {telephone}</p>
      <p>Filière : {filiere}</p>
      <p>Année d'étude : </p>
      <p>Groupe : {groupe}</p>
      <p>Ville : {ville}</p>
      <a href={`mailto:${email}`}>
  <button
    style={{
      backgroundColor: 'transparent',
      color: '#2563eb',
      border: '2px solid #2563eb',
    }}
  >
    Contacter
  </button>
</a>
    </div>
  );
}

export default App;