import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";

import mine from "./assets/lol.jpeg";
const etudiants = [
  {
    prenom: "alae",
    nom: "habli",
    email: "habliala119@gmail.com",
    telephone: "55 046 513",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "kairaoun",
    image: mine,
  },
  {
    prenom: "Aziz",
    nom: "Trabelsi",
    email: "aziz.trabelsi@gmail.com",
    telephone: "+216 22 222 222",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 1",
    ville: "Sousse",
  },
  {
    prenom: "Mariem",
    nom: "Khalfallah",
    email: "mariem.khalfallah@gmail.com",
    telephone: "+216 99 999 999",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />+

      <main className="container">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
