import React form 'react';
import { marked } from 'marked';
import { useState, useEffect } from 'react';
// or const { marked } = require('marked');
import './App.css';


function App() {

  const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
  
  const [edit, setEdit] = useState();

  useEffect(() => {
    ...
  }, [])

  function handleChange() {
    avec html markdown
    setEdit(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Hello !
        </h2>
        <h3>{html}</h3>
        textarea avec un id="editor"
        <textarea id='editor'>{(e) => setEdit(e.target.value)}</textarea>
        <p id='preview' value='elem' onChange{handleChange}>{}</p>
        <p>un élément avec un id="preview ---> is it ok ???</p>

        User Story #3 : Lorsque je saisis du texte dans l'élément #editor, l'élément #preview 
        est mis à jour au fur et à mesure que je tape pour afficher le contenu de la zone de texte.

        User Story #4 : Lorsque je saisis du texte markdown à la sauce GitHub dans l'élément 
        #editor, le texte est rendu sous forme de HTML dans l'élément #preview au fur et à 
        mesure que je tape


        User Story #5 : Lorsque mon aperçu markdown se charge pour la première fois, le 
        texte par défaut dans le champ #editor doit contenir du markdown valide qui représente 
        au moins un de chacun des éléments suivants : un élément de 
        <h1>title</h1>
        
        <h2>sub-title</h2>

        <a href='#'></a>

        bloc de code ???

        <li></li>

        cita en bloc ???

        <img src='' alt='' />

        <p></strong>Bold</strong></p>

        titre (taille H1),  
        sous-titre (taille H2), 
        un lien, du code en ligne,

        un bloc de code
        un element de liste, 
        une citation en bloc, 
        une image et 
        du texte en gras.

        User Story #6 : Lors du premier chargement de ma visionneuse markdown, le markdown par 
        défaut dans le champ #editor doit être rendu en HTML dans l'élément #preview.
      </header>
    </div>
  );
}

export default App;
