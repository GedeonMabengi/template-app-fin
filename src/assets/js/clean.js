const CleanCSS = require('clean-css');
const fs = require('fs');

// Définir le chemin du fichier CSS d'entrée et de sortie
const inputFilePath = 'src/assets/css/style.css';
const outputFilePath = 'src/assets/css/style.min.css';

// Lire le contenu du fichier CSS
const input = fs.readFileSync(inputFilePath, 'utf-8');

// Minifier le CSS
const output = new CleanCSS().minify(input);

// Écrire le CSS minifié dans un fichier
fs.writeFileSync(outputFilePath, output.styles);
console.log('CSS minifié avec succès!');
