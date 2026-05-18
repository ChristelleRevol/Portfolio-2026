import emity from "../assets/images/Screenshots/Mairie + entr.png"
import suzie from "../assets/images/Screenshots/Accueil.png"
import dixcit from "../assets/images/Screenshots/Services.png"
import colorPicker from "../assets/images/Screenshots/colorPicker.png"
import aiDuel from "../assets/images/Screenshots/Board.jpg"

export const projectsData = [
  { src: emity, alt: "screenshot from emity work", className: "emity", title: "Emity",
    description: "Concept and development of templates to demonstrate the capabilities of the internal E-Click software to clients.",
    keywords: ["Figma", "E-Click"], category: "design"},
  { src: suzie, alt: "screenshot from La seconde vie de Suzie website", className: "suzie", title: "La seconde vie de Suzie",
    description: "Concept and development of the \"la seconde vie de Suzie\" website, highlighting the artist's universe and their shops",
    keywords: ["Figma", "Wordpress"], category: "design"},
  { src: dixcit, alt: "screenshot from Dixcit website", className: "dixcit", title: "Dixcit",
    description: "Concept and development of the showcase website for the Dixcit tech company",
    keywords: ["Figma", "Wordpress"], category: "design"},
  { src: colorPicker, alt: "placeholder image", className: "color-picker", title: "color picker feature",
    description: "Pair-programming on the integration of a new feature into an existing project.\nThis feature allows the creation of color dictionaries so that users can customize the appearance of their data displayed on dashboards",
    keywords: ["Javascript", "Typescript", "React", "Claude", "Augment"], category: "development"},
  { src: aiDuel, alt: "Screenshot from the AI-Duel app", className: "ai-duel", title: "AI-Duel",
    description: "Group development of the AI-Duel application aimed at evaluating the performance of ChatGPT, Claude and Mistral through user votes.\nResponsibilities included UI/UX, front-end and back-end of the voting and ranking system, vectorial graphism, and deployment.",
    keywords: ["Figma", "Ruby on Rails", "Javascript", "Stimulus", "PostgreSQL", "Heroku"], category: "development"},
]
