import AI1 from "../assets/images/Screenshots/Board.jpg"
import AI2 from "../assets/images/Screenshots/start_battle.jpg"
import AI3 from "../assets/images/Screenshots/ongoing_battle_voted.jpg"
import AI4 from "../assets/images/Screenshots/finished_battle.jpg"
import AI5 from "../assets/images/Screenshots/history.jpg"
import AI6 from "../assets/images/Screenshots/opened_battle.jpg"

import EM1 from "../assets/images/Screenshots/Accueil3-v2.png"
import EM2 from "../assets/images/Screenshots/Accueil1-v2.png"
import EM3 from "../assets/images/Screenshots/Accueil2.png"
import EM4 from "../assets/images/Screenshots/Portrait-AccueilMairie-retakes 3.png"
import EM5 from "../assets/images/Screenshots/Accueil-Mairie3-Alternative.png"
import EM6 from "../assets/images/Screenshots/Accueil-Mairie1.png"
import EM7 from "../assets/images/Screenshots/Accueil-Mairie2.png"

import Suzie1 from "../assets/images/Screenshots/Accueil.png"
import Suzie2 from "../assets/images/Screenshots/Boutique.png"
import Suzie3 from "../assets/images/Screenshots/Gallerie.png"
import Suzie4 from "../assets/images/Screenshots/Ateliers.png"
import Suzie5 from "../assets/images/Screenshots/Contact_Suzie.png"

import ColorPicker from "../assets/images/Screenshots/colorPicker.png"

import Dixcit1 from "../assets/images/Screenshots/Services.png"
import Dixcit2 from "../assets/images/Screenshots/Clients.png"
import Dixcit3 from "../assets/images/Screenshots/Contact.png"

export const ProjectDetailData = [
  { id: "emity", title: "Emity",
    description: "Concept and development of templates to demonstrate the capabilities of the internal E-Click software to clients.",
    list: ["Concept and prototype on Figma", "Learning of the E-Click software", "Template creation on E-Click"],
    keywords: ["Figma", "E-Click"], images: [EM1, EM2, EM3, EM4, EM5, EM6, EM7]},
  { id: "la-seconde-vie-de-suzie", title: "La seconde vie de Suzie",
    description: "Concept and development of the \"la seconde vie de Suzie\" website, highlighting the artist's universe and their shops",
    list: ["Website design on Figma", "Development on Wordpress"],
    keywords: ["Figma", "Wordpress"], images: [Suzie1, Suzie2, Suzie3, Suzie4, Suzie5]},
  { id: "dixcit", title: "Dixcit",
    description: "Concept and development of the showcase website for the Dixcit tech company",
    list: ["Website design on Figma", "Development on Wordpress"],
    keywords: ["Figma", "Wordpress"], images: [Dixcit1, Dixcit2, Dixcit3]},
  { id: "color-picker", title: "color picker feature",
    description: "Pair-programming on the integration of a new feature into an existing project.\nThis feature allows the creation of color dictionaries so that users can customize the appearance of their data displayed on dashboards",
    list: ["Migration of new data with Active Record", "Vibe-coding with Claude via Aument", "Feature development with React and Typescript", "Use custom UI/UX library for the application"],
    keywords: ["Javascript", "Typescript", "React", "Claude", "Augment"], images: ColorPicker},
  { id: "ai-duel", title: "AI-Duel",
    description: "Group development of the AI-Duel application aimed at evaluating the performance of ChatGPT, Claude and Mistral through user votes.\nResponsibilities included UI/UX, front-end and back-end of the voting and ranking system, vectorial graphism, and deployment.",
    list: ["UI/UX on Figma", "Database setup and migration with PostgreSQL and Active Record",
      "Front-end and back-end of the AI voting and ranking pages, using Ruby on Rails, JavaScript, Stimulus, HTML, ERB, CSS and Bootstrap", "Deployment on Heroku"],
    keywords: ["Figma", "Ruby on Rails", "Javascript", "Stimulus", "PostgreSQL", "Heroku"], images: [AI1, AI2, AI3, AI4, AI5, AI6]}
]
