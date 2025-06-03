import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {
  // Effet de matrice en arrière-plan (code ASCII qui tombe)
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const container = document.querySelector('.matrix-background');
    if (!container) return;
    
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    
    // Définir la taille du canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Caractères pour l'effet matrice
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Position Y de chaque colonne
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    // Fonction de dessin
    const draw = () => {
      if (!ctx) return;
      
      // Fond semi-transparent pour créer l'effet de fondu
      ctx.fillStyle = 'rgba(10, 14, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Couleur des caractères
      ctx.fillStyle = '#00ff9d';
      ctx.font = `${fontSize}px monospace`;
      
      // Dessiner les caractères
      for (let i = 0; i < drops.length; i++) {
        // Caractère aléatoire
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Position x = i * taille de la police, y = valeur dans le tableau drops
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Réinitialiser la position y après avoir atteint une certaine hauteur
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Incrémenter la position y
        drops[i]++;
      }
    };
    
    // Animation
    const matrixInterval = setInterval(draw, 35);
    
    // Nettoyage
    return () => {
      clearInterval(matrixInterval);
      window.removeEventListener('resize', resizeCanvas);
      if (container && container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div className="App">
      {/* Fond avec effet de grille */}
      <div className="grid-background"></div>
      
      {/* Fond avec effet de matrice */}
      <div className="matrix-background"></div>
      
      {/* Fond avec particules interactives */}
      <ParticlesBackground />
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
