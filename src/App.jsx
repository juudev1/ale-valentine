import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { NewspaperLayout } from './components/NewspaperLayout';
import { Heart, CloudSun, TrendingUp, Music, ArrowDown, Star, Sun, CloudRain, Moon, Microscope, Trophy, Utensils, Sparkles, Activity, Search, AlignJustify } from 'lucide-react';
import { motion } from 'framer-motion';
import { config } from './config';
import { Fireworks } from './components/effects/Fireworks';
import { FallingFlowers } from './components/effects/FallingFlowers';
import { StarryBackground } from './components/effects/StarryBackground';
import { SpotifyCode } from './components/SpotifyCode';

const Page = ({ children, pageNumber, title, cupidConfig = { left: false, right: false } }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-5%" }}
    transition={{ duration: 0.6 }}
    className="max-w-[1000px] mx-auto bg-paper mb-12 relative text-ink flex flex-col shadow-2xl h-auto min-h-[600px]"
    style={{ pageBreakAfter: 'always' }}
  >
    {/* Cupid Decorations - Configurable */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-visible">
       {/* Left Cupid */}
       {cupidConfig.left && (
         <img 
           src="/imgs/cupid.png" 
           alt="Cupid" 
           className={`absolute ${cupidConfig.leftTop || '-top-6'} -left-4 md:-left-16 w-24 md:w-40 transform -rotate-12 scale-x-[-1] drop-shadow-xl opacity-90`}
         />
       )}
       {/* Right Cupid */}
       {cupidConfig.right && (
         <img 
           src="/imgs/cupid.png" 
           alt="Cupid" 
           className={`absolute ${cupidConfig.rightTop || '-top-6'} -right-4 md:-right-16 w-24 md:w-40 transform rotate-12 drop-shadow-xl opacity-90`}
         />
       )}
    </div>

    {/* Realistic Margin Container */}
    <div className="p-8 md:p-12 w-full flex-grow flex flex-col relative z-10">
       
       {/* Running Head (Header of the page) */}
       <div className="flex justify-between items-end border-b-2 border-black pb-1 mb-6 font-sans shrink-0">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{title || "THE VALENTINE TIMES"}</span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">FEBRUARY 8, 2026 • PAGE {pageNumber}</span>
       </div>
       
       <div className="flex-grow flex flex-col">
         {children}
       </div>

       {/* Footer Number */}
       <div className="mt-8 pt-4 border-t border-black text-center shrink-0">
          <span className="font-display font-black text-xs">- {pageNumber} -</span>
       </div>
    </div>
  </motion.div>
);

function App() {
  const [noBtnPosition, setNoBtnPosition] = useState({ top: '0', left: '0', position: 'static' });
  const [yesPressed, setYesPressed] = useState(false);

  /* MUSIC PLAYER STATE */
  const playlist = [
    { title: "BIRDS OF A FEATHER", artist: "Billie Eilish", src: "/audios/birds_of_a_feather.mp3", id: 1 },
    { title: "Pretty Boy", artist: "The Neighbourhood", src: "/audios/pretty_boy.mp3", id: 2 },
    { title: "Love You Like a Love Song", artist: "Selena Gomez", src: "/audios/love_you_like_a_love_song.mp3", id: 3 }
  ];
  const [currentSong, setCurrentSong] = useState(playlist[0]);

  const handleNoHover = () => {
    const randomTop = Math.floor(Math.random() * 200 - 100);
    const randomLeft = Math.floor(Math.random() * 200 - 100);
    setNoBtnPosition({ top: `${randomTop}px`, left: `${randomLeft}px`, position: 'relative' });
  };

  const handleYesClick = () => {
    setYesPressed(true);
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <div className="font-serif text-[#1a1a1a] min-h-screen bg-[#d1cdc7] py-8 px-2 md:px-4 antialiased selection:bg-red-200 selection:text-black">
      
      {/* PAGE 1: PORTADA */}
      <Page pageNumber={1} title="SPECIAL EDITION" cupidConfig={{ left: true, right: true, leftTop: '-top-8', rightTop: '-top-2' }}>
          <Fireworks />
          <header className="text-center border-thick-thin-b pb-6 relative mb-8">
             <div className="flex justify-between w-full font-sans text-[9px] font-bold uppercase tracking-widest border-b border-black pb-1 mb-4">
               <span>Vol. CXLIII • No. 1</span>
               <span>Official Report</span>
               <span>Price: Your Heart</span>
             </div>
             <h1 className="text-6xl md:text-9xl mt-2 mb-4 font-masthead tracking-normal leading-[0.8] text-ink transform scale-y-110">
               The {config.valentineName} Times
             </h1>
             <div className="flex justify-center items-center gap-6 text-[10px] md:text-xs font-black uppercase font-sans border-t border-b border-black py-2 tracking-[0.15em]">
                <span className="flex items-center gap-2"><div className="w-2 h-2 bg-black rounded-full"/> LATEST NEWS</span>
                <span>•</span>
                <span>UBATÉ</span>
                <span>•</span>
                <span>EXCLUSIVE</span>
             </div>
          </header>

          <div className="text-center mb-8">
             <h2 className="font-cursiva text-vintage-red text-5xl md:text-7xl font-black uppercase leading-[0.8] mb-4 tracking-tighter">
               WILL YOU BE MY <br/> 
               <div className="flex justify-center items-baseline mt-4 gap-1">
                 <span 
                   className="font-valentine text-vintage-red font-normal text-[6rem] md:text-[12rem] leading-none transform -rotate-6 origin-bottom-right translate-y-2 md:translate-y-4"
                   style={{ fontFamily: "'Valentine', 'Great Vibes', cursive", fontWeight: 400 }}
                 >
                   V
                 </span>
                 <span 
                   className="font-cursiva text-vintage-red text-6xl md:text-9xl tracking-normal normal-case block"
                   style={{ 
                     fontFamily: "'Cursiva', 'Great Vibes', cursive", 
                     textTransform: 'none',
                     fontWeight: 300,
                     transform: 'skewX(-20deg) translateY(0.5rem)' 
                   }}
                 >
                   alentine?
                 </span>
               </div>
             </h2>
             <div className="w-full h-1 bg-black mb-1"></div>
             <div className="w-full h-px bg-black mb-6"></div>

             <div className="relative inline-block w-full mb-6">
                 <div className="border border-black p-1 bg-white shadow-sm">
                    <img 
                       src="/imgs/beso.png" 
                       className="w-full h-[350px] object-cover photo-filter"
                       alt="Pareja"
                    />
                 </div>
                 <div className="text-left mt-2 flex gap-4 items-start">
                    <span className="font-sans font-black text-[9px] uppercase bg-black text-white px-1">FIG 1.</span>
                    <p className="font-sans text-[10px] leading-tight uppercase tracking-wider text-gray-600 max-w-md">
                       EVIDENCIA VISUAL DE NIVELES DE AFECTO SIN PRECEDENTES REGISTRADOS EN EL CENTRO COMERCIAL CENTRO CHIA.
                    </p>
                 </div>
             </div>
          </div>

          <div className="columns-1 md:columns-3 gap-6 text-sm md:text-[15px] justified-text font-serif leading-snug text-ink border-t border-black pt-4">
             <p className="mb-4">
               - Los observatorios románticos de toda la región han confirmado recientemente un aumento masivo e inexplicable en los niveles de afecto, coincidiendo exactamente con la publicación de esta edición.
             </p>
             <p className="mb-4">
                "Es inaudito", declaró esta mañana el Dr. Cupido, experto en balística emocional. "La química que observamos aquí desafía la termodinámica. Dos almas distintas vibrando en un unísono perfecto".
             </p>
             <p className="mb-4">
                Testigos presenciales describen al sujeto, identificado como <strong>{config.senderName}</strong>, como "irremediablemente perdido" en la mirada de su amor -<strong>{config.valentineName}</strong>-". Las autoridades recomiendan no intervenir.
             </p>
          </div>
      </Page>

      {/* PAGE 2: CIENCIA & CLIMA */}
      <Page pageNumber={2} title="SCIENCE & WEATHER" cupidConfig={{ left: true, right: false, leftTop: 'top-20' }}>
          <FallingFlowers />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full relative z-10">
             
             {/* Left Col (Science) */}
             <div className="md:col-span-8 pr-4">
                <h2 className="font-display font-black text-4xl uppercase border-b-4 border-black mb-4">La Ciencia del Amor</h2>
                
                <div className="mb-6">
                   <h3 className="font-sans font-black text-lg uppercase mb-2">Por Qué Tienes Que Ser Tú</h3>
                   <div className="columns-2 gap-6 text-sm justified-text leading-snug">
                     <p className="mb-4">
                       Al principio pensé que eras simpática. Grave error de cálculo: eres increíble. Me di cuenta de que estaba en problemas serios cuando empecé a buscar excusas tontas solo para hablarte -Y spoiler: sigo haciéndolo-.
                     </p>
                     <p className="mb-4">
                       La verdad es que no entiendo cómo sigo teniendo tanta suerte. Eres demasiado guapa para ser tan lista, y demasiado lista para estar conmigo (broma). Eres, sin exagerar, mi persona favorita.
                     </p>
                   </div>
                </div>

                <div className="border-t-2 border-black pt-4 mt-8 flex gap-6 items-start">
                   <div className="bg-black text-white p-4 flex-shrink-0 text-center w-32">
                      <Microscope size={40} className="mx-auto mb-2 text-white" />
                      <span className="block font-black text-2xl">200%</span>
                   </div>
                   <div>
                      <h4 className="font-black font-display text-xl uppercase mb-1">Descubrimiento Médico</h4>
                      <p className="text-sm justified-text italic font-serif">
                         "Científicos de la Universidad Ternurin confirman: Tu sonrisa reduce el estrés instantáneamente. Efectos secundarios incluyen: enamoramiento crónico."
                      </p>
                   </div>
                </div>
             </div>

             {/* Right Col (Weather) */}
             <div className="md:col-span-4 border-l-2 border-black pl-4 flex flex-col">
                <div className="text-center border-b-2 border-black pb-2 mb-4">
                   <CloudSun className="mx-auto mb-2" size={32}/>
                   <h3 className="font-black font-sans text-xl uppercase tracking-widest">PRONÓSTICO</h3>
                </div>

                <div className="space-y-6 flex-1">
                   {[
                      { t: "MAÑANA", i: Sun, d: "Soleado", n: "Radiante como tú", c:"text-black" },
                      { t: "TARDE", i: CloudRain, d: "Lluvia", n: "De besos (sin paraguas)", c:"text-black" },
                      { t: "NOCHE", i: Moon, d: "Despejado", n: "Alto romance visible", c:"text-black" },
                   ].map((x, i) => (
                      <div key={i} className="flex flex-col items-center text-center border-b border-gray-400 pb-4 last:border-0">
                         <span className="font-black sans text-xs uppercase mb-1">{x.t}</span>
                         <x.i size={40} strokeWidth={1.5} className="mb-1"/>
                         <span className="font-display font-bold text-lg uppercase">{x.d}</span>
                         <span className="font-serif italic text-xs">{x.n}</span>
                      </div>
                   ))}
                </div>
                
                <div className="bg-gray-200 p-2 text-center mt-4 border border-black">
                   <span className="font-black text-[10px] uppercase block mb-1">ADVERTENCIA</span>
                   <p className="text-[9px] leading-tight">Se esperan ráfagas de ternura de alta velocidad.</p>
                </div>
             </div>
          </div>
      </Page>

      {/* PAGE 3: FINANCE & SPORTS */}
      <Page pageNumber={3} title="BUSINESS & SPORTS" cupidConfig={{ left: false, right: true, rightTop: 'top-32' }}>
          <div className="flex flex-col h-full gap-8">
             
             {/* Markets */}
             <div className="border-b-4 double-border-b border-black pb-8">
                <div className="flex justify-between items-end mb-4">
                   <h2 className="font-display font-black text-5xl uppercase tracking-tighter">Wall Street <span className="font-serif italic font-normal text-3xl normal-case">del</span> Amor</h2>
                   <TrendingUp size={32} />
                </div>
                
                <div className="flex gap-8">
                   <div className="w-1/3 text-sm justified-text font-serif leading-snug">
                      <p>
                         El índice "Botas del Corazón" cerró hoy en máximos históricos. Las acciones de <strong>'NOSOTROS' [TU Y YO]</strong> se han disparado un 5000% tras los rumores de una fusión permanente.
                      </p>
                   </div>
                   <div className="w-2/3 border-2 border-black p-1">
                      <table className="w-full text-xs font-mono uppercase">
                         <thead className="bg-black text-white">
                            <tr>
                               <th className="text-left p-1">SYMBOL</th>
                               <th className="text-right p-1">VAL</th>
                               <th className="text-right p-1">CHG</th>
                            </tr>
                         </thead>
                         <tbody>
                            <tr className="border-b border-gray-300">
                               <td className="p-1 font-bold">♥ BESOS</td>
                               <td className="p-1 text-right">99.8</td>
                               <td className="p-1 text-right">+15.0%</td>
                            </tr>
                            <tr className="border-b border-gray-300">
                               <td className="p-1 font-bold">⚡ PELEAS</td>
                               <td className="p-1 text-right">0.01</td>
                               <td className="p-1 text-right">-99.9%</td>
                            </tr>
                            <tr>
                               <td className="p-1 font-bold">★ CITAS</td>
                               <td className="p-1 text-right">ATH</td>
                               <td className="p-1 text-right">UP ONLY</td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </div>
             </div>

             {/* Sports */}
             <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                   <Trophy size={48} className="text-vintage-red"/>
                   <h2 className="font-display font-black text-6xl uppercase leading-none tracking-tighter text-vintage-red scale-y-110">NUEVO RÉCORD</h2>
                </div>
                
                <div className="columns-2 gap-8 text-sm justified-text font-serif">
                   <p className="mb-2">
                      <span className="font-black uppercase">Estadio Olímpico —</span> Anoche se hizo historia. En un evento que dejó atónitos a los jueces, mis latidos rompieron la barrera del sonido en la categoría de "Velocidad de Reacción" al momento exacto en que te escuché decir "Te amo".
                   </p>
                   <p>
                      El Comité Internacional ha decidido otorgar la Medalla de Oro vitalicia a {config.valentineName}, ahora oficialmente reconocida como la "Ladrona de Corazones Más Rápida de la Historia".
                   </p>
                </div>
             </div>
          </div>
      </Page>

      {/* PAGE 4: LIFESTYLE & ARTS */}
      <Page pageNumber={4} title="LIFESTYLE & ARTS" cupidConfig={{ left: false, right: false }}>
          <div className="grid grid-cols-2 gap-8 h-full">
             
             {/* Gastronomy */}
             <div className="border-r-2 border-black pr-8">
                <div className="flex justify-center mb-4">
                   <Utensils size={32} />
                </div>
                <h2 className="text-center font-display font-black text-3xl uppercase mb-2">Guía Michelin</h2>
                <div className="flex justify-center gap-1 mb-4 text-black">
                   {[...Array(5)].map((_,i) => <Star key={i} size={16} fill="currentColor"/>)}
                </div>
                <p className="text-center font-display font-bold uppercase text-lg mb-4">"El Mejor Platillo"</p>
                <div className="text-sm justified-text font-serif leading-snug">
                   <p>
                      Los críticos más feroces de París y Nueva York coinciden: no importa si el menú es pizza fría o caviar. Si la compañía eres tu, la experiencia es, indiscutiblemente, de 5 estrellas.
                   </p>
                </div>
             </div>

             {/* Music & Horoscope */}
             <div className="flex flex-col gap-6">
                {/* Horoscope */}
                <div className="bg-gray-100 p-4 border border-black shadow-sm">
                    <div className="flex items-center gap-2 mb-2 border-b border-black pb-1">
                       <Sparkles size={16} />
                       <span className="font-black sans text-xs uppercase">HORÓSCOPO</span>
                    </div>
                    <p className="text-xs justified-text font-serif">
                       <strong>Signo:</strong> Capricornio.<br/>
                       <strong>Predicción:</strong> No importa lo que digan las estrellas hoy; mi destino eres tú. Se pronostica un futuro brillante para nosotros.
                    </p>
                </div>

                {/* Music */}
                <div>
                   <div className="flex items-center gap-2 mb-3 border-b border-black pb-1">
                       <Music size={16} />
                       <span className="font-black sans text-xs uppercase">TOP CHARTS</span>
                   </div>
                   <div className="flex flex-col gap-3">
                      <div className="bg-black text-white p-3 rounded-lg text-center shadow-lg transition-all">
                         <div className="transform scale-90 origin-center mb-2"><SpotifyCode /></div>
                         <div className="text-[10px] uppercase tracking-widest mb-2 text-gray-400">Now Playing</div>
                         <div className="text-sm font-bold text-white mb-1">{currentSong.title}</div>
                         <div className="text-xs text-gray-400 mb-3">{currentSong.artist}</div>
                         
                         <audio 
                            key={currentSong.src} 
                            controls 
                            className="w-full h-8 mt-2 mix-blend-screen opacity-80" 
                            style={{ filter: 'invert(1)' }}
                         >
                            <source src={currentSong.src} type="audio/mpeg" />
                            Your browser does not support the audio element.
                         </audio>
                      </div>
                      <ul className="text-xs font-mono space-y-2 mt-2 cursor-pointer">
                         {playlist.map((song, index) => (
                           <li 
                              key={song.id} 
                              onClick={() => setCurrentSong(song)}
                              className={`flex justify-between border-b border-gray-300 pb-1 hover:bg-gray-200 px-1 transition-colors ${currentSong.id === song.id ? 'font-bold bg-gray-200' : ''}`}
                           >
                              <span>{index + 1}. {song.title}</span> 
                              <span className="font-bold">#{index + 1}</span>
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>

                
             </div>
          </div>
      </Page>

      {/* PAGE 5: CLASSIFIEDS */}
      <Page pageNumber={5} title="CLASSIFIEDS" cupidConfig={{ left: true, right: true, leftTop: 'top-10', rightTop: 'top-40' }}>
         <div className="w-full h-full flex flex-col items-center">
            <h2 className="w-full text-center border-t-2 border-b-2 border-black py-1 font-sans font-black text-xs uppercase tracking-[1em] mb-8">
               AVISOS CLASIFICADOS
            </h2>

            <div className="columns-3 gap-4 w-full text-[10px] font-mono leading-tight flex-1">
               {/* Ad 1 */}
               <div className="mb-6 break-inside-avoid">
                  <p className="font-bold uppercase">CITA DEL DÍA</p>
                  <p className="italic">"En un mundo lleno de cosas temporales, tú eres un sentimiento perpetuo."</p>
               </div>

               {/* Ad 2 */}
               <div className="mb-6 break-inside-avoid text-center border-2 border-black p-2">
                   <p className="font-black uppercase text-lg mb-1">¡SE BUSCA!</p>
                   <p>Dueña de mi corazón.</p>
                   <p>Recompensa: Amor eterno.</p>
               </div>

               {/* Ad 3 */}
               <div className="mb-6 break-inside-avoid">
                  <p className="font-bold uppercase">EFEMÉRIDES</p>
                  <p>Tal día como hoy, 8 de Febrero de 2026, el hombre más afortunado del mundo le pidió a {config.valentineName} ser su San Valentín.</p>
               </div>

               {/* Ad 4 */}
               <div className="mb-6 break-inside-avoid border-dashed border border-black p-2 rotate-1">
                   <p className="font-bold uppercase">OFERTA ESPECIAL</p>
                   <p>Abrazos ilimitados.</p>
                   <p className="mt-1 font-bold">CÓDIGO: SÍ_ACEPTO</p>
               </div>

               {/* Fillers */}
               {[...Array(6)].map((_, i) => (
                  <div key={i} className="mb-6 break-inside-avoid opacity-30 text-[8px]">
                     <p className="font-bold">LOREM IPSUM</p>
                     <p>Dolor sit amet, consectetur adipiscing elit. Amor vincit omnia.</p>
                  </div>
               ))}
            </div>
            
            <div className="mt-8 text-center font-display font-black uppercase text-xl">
               FIN DE LA EDICIÓN REGULAR
            </div>
            <p className="text-xs font-serif italic mt-2">Por favor pase la página para el suplemento urgente.</p>
         </div>
      </Page>

      {/* PAGE 6: 5 RAZONES */}
      <Page pageNumber={6} title="EXCLUSIVE FEATURE" cupidConfig={{ left: true, right: true, leftTop: 'top-0', rightTop: 'top-0' }}>
         <div className="h-full flex flex-col">
            <h2 className="text-center font-display font-black text-5xl md:text-6xl uppercase leading-none mb-2 text-vintage-red">
               05 Razones
            </h2>
            <h3 className="text-center font-display font-normal text-3xl md:text-4xl italic mb-8 border-b-2 border-black pb-4">
               por las que eres <span className="font-bold not-italic">Mi Elección Perfecta</span>
            </h3>

            <div className="grid grid-cols-3 gap-0 border-2 border-vintage-red mb-8">
               {/* Row 1 */}
               <div className="aspect-square border-r border-b border-vintage-red p-4 flex flex-col justify-center items-center text-center bg-[#ffe4e1]">
                  <span className="font-display font-black text-4xl mb-2 text-vintage-red">1</span>
                  <p className="font-serif font-bold text-xs uppercase leading-tight">Tienes la sonrisa más linda del universo.</p>
               </div>
               <div className="aspect-square border-r border-b border-vintage-red p-4 flex flex-col justify-center items-center text-center bg-white">
                  <Heart size={48} fill="#d9381e" className="text-vintage-red animate-pulse" />
               </div>
               <div className="aspect-square border-b border-vintage-red p-4 flex flex-col justify-center items-center text-center bg-[#ffe4e1]">
                  <span className="font-display font-black text-4xl mb-2 text-vintage-red">3</span>
                  <p className="font-serif font-bold text-xs uppercase leading-tight">Contigo, cualquier día se siente especial.</p>
               </div>

               {/* Row 2 */}
               <div className="aspect-square border-r border-b border-vintage-red p-4 flex flex-col justify-center items-center text-center bg-white">
                  <Heart size={48} fill="#d9381e" className="text-vintage-red" />
               </div>
               <div className="aspect-square border-r border-b border-vintage-red p-4 flex flex-col justify-center items-center text-center bg-[#ffe4e1]">
                  <span className="font-display font-black text-4xl mb-2 text-vintage-red">2</span>
                  <p className="font-serif font-bold text-xs uppercase leading-tight">Haces que mi corazón lata más rápido.</p>
               </div>
               <div className="aspect-square border-b border-vintage-red p-4 flex flex-col justify-center items-center text-center bg-white">
                  <Heart size={48} fill="#d9381e" className="text-vintage-red" />
               </div>

               {/* Row 3 */}
               <div className="aspect-square border-r border-vintage-red p-4 flex flex-col justify-center items-center text-center bg-[#ffe4e1]">
                  <span className="font-display font-black text-4xl mb-2 text-vintage-red">4</span>
                  <p className="font-serif font-bold text-xs uppercase leading-tight">Eres mi persona favorita.</p>
               </div>
               <div className="aspect-square border-r border-vintage-red p-4 flex flex-col justify-center items-center text-center bg-white">
                  <Heart size={48} fill="#d9381e" className="text-vintage-red" />
               </div>
               <div className="aspect-square p-4 flex flex-col justify-center items-center text-center bg-[#ffe4e1]">
                  <span className="font-display font-black text-4xl mb-2 text-vintage-red">5</span>
                  <p className="font-serif font-bold text-xs uppercase leading-tight">No imagino a nadie más a mi lado.</p>
               </div>
            </div>

            <div className="border-t-4 border-black pt-6 text-center">
               <h4 className="font-sans font-black text-xs uppercase tracking-widest mb-1">SEÑALES DE QUE</h4>
               <h2 className="font-display font-black text-4xl uppercase text-vintage-red mb-2">Debes decir "Sí"</h2>
               <p className="font-serif italic text-xs mb-4">Estudios recientes han demostrado que:</p>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white text-vintage-red p-4 font-black text-sm uppercase leading-tight shadow-[4px_4px_0px_0px_rgba(217,56,30,1)] border-2 border-vintage-red transform -rotate-1">
                     Si estás leyendo esto, significa que el destino nos ha unido.
                  </div>
                  <div className="bg-white text-vintage-red p-4 font-black text-sm uppercase leading-tight shadow-[4px_4px_0px_0px_rgba(217,56,30,1)] border-2 border-vintage-red transform rotate-1">
                     Si has sonreído al menos una vez, es una señal obvia.
                  </div>
                  <div className="bg-white text-vintage-red p-4 font-black text-sm uppercase leading-tight shadow-[4px_4px_0px_0px_rgba(217,56,30,1)] border-2 border-vintage-red transform -rotate-1">
                     Si te gusta el romance, somos un match perfecto.
                  </div>
               </div>
            </div>
         </div>
      </Page>

      {/* SPECIAL INSERT: PROPOSAL */}
      <div className="max-w-[1000px] mx-auto min-h-screen mb-12 relative flex items-center justify-center p-4" style={{ pageBreakBefore: 'always' }}>
          <div className="absolute inset-0 bg-[#0f172a] transform -rotate-1 rounded-sm overflow-hidden box-border border-[10px] border-[#d1cdc7] shadow-2xl">
             <StarryBackground />
          </div>
          
          <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="relative z-10 w-full"
          >
             <div className="bg-paper text-ink p-12 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-1 max-w-2xl mx-auto border border-gray-300">
                 
                 {/* Stamp */}
                 <div className="absolute top-8 right-8 border-4 border-vintage-red text-vintage-red px-4 py-1 font-black uppercase text-xl transform rotate-12 opacity-80 mix-blend-multiply">
                    CONFIDENTIAL
                 </div>

                 {!yesPressed ? (
                    <div className="text-center">
                       <h3 className="font-sans font-bold uppercase tracking-widest text-xs mb-8 text-gray-500">ASUNTO: PREGUNTA OFICIAL Nº 1</h3>
                       
                       <h1 className="font-display font-black text-5xl md:text-7xl mb-2 text-ink uppercase leading-none tracking-tight">
                          {config.valentineName},
                       </h1>
                       <h2 className="font-display font-black text-4xl md:text-6xl mb-12 text-vintage-red uppercase leading-none tracking-tighter mix-blend-multiply">
                          ¿QUIERES SER <br/> MI VALENTINE?
                       </h2>

                       <div className="flex flex-col gap-6 justify-center items-center w-full mt-8">
                          <button 
                             onClick={handleYesClick}
                             className="group relative px-12 py-4 bg-black text-white font-black uppercase text-2xl border-2 border-black hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-full font-display tracking-widest"
                          >
                             [ ¡SÍ! ]
                          </button>
                          
                          <button 
                             onMouseEnter={handleNoHover}
                             style={{ position: noBtnPosition.position, top: noBtnPosition.top, left: noBtnPosition.left }}
                             className="px-8 py-3 bg-transparent border border-gray-400 text-gray-400 font-bold uppercase tracking-widest text-xs hover:border-gray-400 cursor-not-allowed font-sans"
                          >
                             [ NO ]
                          </button>
                       </div>
                       
                       <div className="mt-12 text-[9px] font-mono text-gray-500 border-t border-gray-300 pt-2 text-center uppercase tracking-wider">
                           * NOTA: EL BOTÓN 'NO' HA SIDO RETIRADO POR MANTENIMIENTO TÉCNICO INDEFINIDO.
                       </div>
                    </div>
                 ) : (
                    <div className="text-center py-12">
                       <div className="border-b-4 border-vintage-red cursor-default inline-block mb-8">
                          <h2 className="font-display font-black text-6xl md:text-8xl text-vintage-red leading-none mix-blend-multiply animate-pulse">
                             ¡DIJISTE QUE SÍ!
                          </h2>
                       </div>
                       <p className="font-serif text-xl md:text-3xl italic mb-8 text-ink">
                          Gracias por decir que sí. Prepárate para un día bonito, sonrisas inevitables y recuerdos que se van a quedar.
                       </p>
                       <div className="flex justify-center gap-6 text-vintage-red">
                          <Heart size={64} fill="currentColor" className="animate-bounce" />
                       </div>
                    </div>
                 )}
             </div>
          </motion.div>
      </div>
    </div>
  );
}

export default App;
