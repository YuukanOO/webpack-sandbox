// On importe les librairies nécessaires, les styles et le composant React qui nous servira à afficher le formulaire de connexion.
import React from 'react'
import ReactDOM from 'react-dom'

import './styles.scss' // En important directement le style tel quel, il sera ajouté dans la balise head automatiquement
import LoginForm from './login'

ReactDOM.render(
  <LoginForm />,
  document.getElementById('root')
)