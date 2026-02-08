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
      const containerWidth = 300; // Approximate width to run within
      const containerHeight = 300; // Approximate height to run within

      const randomTop = Math.floor(Math.random() * containerHeight);
      const randomLeft = Math.floor(Math.random() * containerWidth - (containerWidth / 2));

      setNoBtnPosition({ top: `${randomTop}px`, left: `${randomLeft}px`, position: 'absolute' });
   };

   const handleYesClick = () => {
      setYesPressed(true);
      const duration = 15 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };
      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(function () {
         const timeLeft = animationEnd - Date.now();
         if (timeLeft <= 0) return clearInterval(interval);
         const particleCount = 50 * (timeLeft / duration);
         confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
         confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
   };

   return (
      <div className="font-serif text-[#1a1a1a] min-h-screen bg-[#d1cdc7] py-8 px-2 md:px-4 antialiased selection:bg-red-200 selection:text-black overflow-x-hidden">

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
                  The {config.valentineName}'s Times
               </h1>
               <div className="flex justify-center items-center gap-6 text-[10px] md:text-xs font-black uppercase font-sans border-t border-b border-black py-2 tracking-[0.15em]">
                  <span className="flex items-center gap-2"><div className="w-2 h-2 bg-black rounded-full" /> LATEST NEWS</span>
                  <span>•</span>
                  <span>UBATÉ</span>
                  <span>•</span>
                  <span>EXCLUSIVE</span>
               </div>
            </header>

            <div className="text-center mb-8">
               <h2 className="font-cursiva text-vintage-red text-5xl md:text-7xl font-black uppercase leading-[0.8] mb-4 tracking-tighter">
                  WILL YOU BE MY <br />
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
                  Testigos presenciales describen al sujeto, identificado como <strong>{config.senderName}</strong>, como "irremediablemente perdido" en la mirada de su amor -<strong>{config.valentineName}</strong>-". Las autoridades recomiendan no intervenir.
               </p>
               <p className="mb-4">
                  - "Después de que el mundo pusiera a prueba nuestro amor una vez más me queda claro que eres la persona indicada para mi. Y por eso quiero compartir este próximo 14 de febrero contigo. Somos dos almas distintas vibrando en un unísono perfecto", declaro el sujeto.
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
                           Al principio pensé que eras simpática. Y con el teimpo me di cuenta de que estaba en problemas serios cuando empecé a buscar excusas tontas solo para hablarte. Eres increíble..
                        </p>
                        <p className="mb-4">
                           La verdad es que no entiendo cómo sigo teniendo tanta suerte. Eres demasiado guapa para ser tan lista, y demasiado lista para estar conmigo 💖. Eres, sin exagerar, mi persona favorita.
                        </p>
                     </div>
                  </div>

                  <div className="border-t-2 border-black pt-4 mt-8 flex gap-6 items-start">
                     <div className="bg-black text-white p-4 flex-shrink-0 text-center w-32">
                        <Microscope size={40} className="mx-auto mb-2 text-white" />
                        <span className="block font-black text-2xl">200%</span>
                     </div>
                     <div>
                        <h4 className="font-black font-display text-lg md:text-xl uppercase mb-1">Descubrimiento Médico</h4>
                        <p className="text-sm justified-text italic font-serif">
                           "Científicos de la Universidad Ternurin confirman: Tu sonrisa reduce el estrés instantáneamente. Efectos secundarios incluyen: enamoramiento crónico."
                        </p>
                     </div>
                  </div>
               </div>

               {/* Right Col (Weather) */}
               <div className="md:col-span-4 border-l-2 border-black pl-4 flex flex-col">
                  <div className="text-center border-b-2 border-black pb-2 mb-4">
                     <CloudSun className="mx-auto mb-2" size={32} />
                     <h3 className="font-black font-sans text-xl uppercase tracking-widest">PRONÓSTICO</h3>
                  </div>

                  <div className="space-y-6 flex-1">
                     {[
                        { t: "MAÑANA", i: Sun, d: "Soleado", n: "Radiante como tú", c: "text-black" },
                        { t: "TARDE", i: CloudRain, d: "Lluvia", n: "De besos (sin paraguas)", c: "text-black" },
                        { t: "NOCHE", i: Moon, d: "Despejado", n: "Alto romance visible", c: "text-black" },
                     ].map((x, i) => (
                        <div key={i} className="flex flex-col items-center text-center border-b border-gray-400 pb-4 last:border-0">
                           <span className="font-black sans text-xs uppercase mb-1">{x.t}</span>
                           <x.i size={40} strokeWidth={1.5} className="mb-1" />
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
                           El índice "Botas del Corazón" cerró hoy en máximos históricos. Las acciones de <strong>'TU y YO S.A.S.</strong> se han disparado un 5000% tras los rumores de una fusión permanente.
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
                     <Trophy size={48} className="text-vintage-red" />
                     <h2 className="font-display font-black text-6xl uppercase leading-none tracking-tighter text-vintage-red scale-y-110">EXTRA EXTRA!</h2>
                  </div>

                  <div className="columns-2 gap-8 text-sm justified-text font-serif">
                     <p className="mb-2">
                        <span className="font-black uppercase">Física Cuántica —</span> Se ha confirmado una anomalía temporal. Expertos aseguran que 1 hora hablando contigo se siente como 5 minutos, mientras que 1 minuto lejos de ti se siente como una eternidad.
                     </p>
                     <p>
                        El Comité de Pesas y Medidas ha declarado oficialmente que eres la única persona capaz de alterar el tiempo a su antojo. No hay competencia.
                     </p>
                  </div>
               </div>
            </div>
         </Page>

         {/* PAGE 4: LIFESTYLE & ARTS */}
         <Page pageNumber={4} title="LIFESTYLE & ARTS" cupidConfig={{ left: false, right: false }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">

               {/* Gastronomy */}
               <div className="border-b-2 md:border-b-0 md:border-r-2 border-black pb-8 md:pb-0 md:pr-8">
                  <div className="flex justify-center mb-4">
                     <Utensils size={32} />
                  </div>
                  <h2 className="text-center font-display font-black text-2xl md:text-3xl uppercase mb-2">Guía Michelin</h2>
                  <div className="flex justify-center gap-1 mb-4 text-black">
                     {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
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
                        <strong>Signo:</strong> Capricornio.<br />
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

               <div className="columns-2 md:columns-3 gap-4 w-full text-[10px] font-mono leading-tight flex-1 text-justify">

                  {/* CITA DEL DÍA */}
                  <div className="mb-6 break-inside-avoid border-b border-black pb-2">
                     <p className="font-bold uppercase mb-1">CITA DEL DÍA</p>
                     <p className="italic">"En un mundo lleno de cosas temporales, tú eres un sentimiento perpetuo."</p>
                  </div>

                  {/* SE BUSCA */}
                  <div className="mb-6 break-inside-avoid text-center border-2 border-black p-2 bg-gray-50">
                     <p className="font-black uppercase text-lg mb-1">¡SE BUSCA!</p>
                     <p className="font-bold mb-1">Dueña de mi corazón.</p>
                     <div className="text-left mt-2 space-y-1">
                        <p><strong>Sospechosa:</strong> Aleja.</p>
                        <p><strong>Delito:</strong> Robarse toda mi atención.</p>
                        <p><strong>Recompensa:</strong> Amor eterno y papitas (o su dulce favorito).</p>
                     </div>
                  </div>

                  {/* EFEMÉRIDES */}
                  <div className="mb-6 break-inside-avoid">
                     <p className="font-bold uppercase border-b border-black mb-1">DATO CURIOSO</p>
                     <p>Estadísticamente, hoy es el mejor día del año para decir "Sí". Expertos coinciden en que aceptar esta propuesta trae buena suerte y cenas ricas garantizadas.</p>
                     <p className="italic mt-1 text-xs">Fuente: Mis ganas de estar contigo.</p>
                  </div>

                  {/* OFERTA ESPECIAL */}
                  <div className="mb-6 break-inside-avoid border-dashed border-2 border-black p-2 rotate-1 bg-white shadow-sm">
                     <p className="font-black uppercase text-center mb-2 bg-black text-white">OFERTA ESPECIAL</p>
                     <div className="relative w-full">
                        <img src="/imgs/cupon.svg" alt="Cupón Valentine" className="w-full h-auto block transform rotate-1 drop-shadow-sm" />

                        {/* Overlay Text Container */}
                        <div className="absolute inset-0 transform rotate-1 z-10">

                           {/* Stub Text (Left Vertical) */}
                           <div className="absolute left-[12%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-[150px] -rotate-90 flex flex-col items-center justify-center gap-1">
                              <p className="font-mono text-[5px] md:text-[8px] text-white font-bold tracking-widest whitespace-nowrap opacity-90 drop-shadow-md">
                                 SAN VALENTIN
                              </p>
                              <p className="font-mono text-[5px] md:text-[8px] text-white font-bold tracking-widest whitespace-nowrap opacity-90 drop-shadow-md">
                                 0001 - LOVE COUPON
                              </p>
                           </div>

                           {/* Perforation Text (Middle Vertical) */}
                           <div className="absolute left-[29%] top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-90">
                              <p className="font-mono text-[6px] md:text-[9px] text-white font-bold tracking-widest whitespace-nowrap opacity-90 drop-shadow-md">
                                 00001
                              </p>
                           </div>

                           {/* Main Content (Right) */}
                           <div className="absolute right-0 top-0 bottom-0 left-[35%] flex flex-col justify-center items-center text-center pr-4">
                              <p className="font-mono text-[9px] md:text-[11px] text-vintage-red font-bold uppercase tracking-[0.2em] transform -rotate-2 mb-1 opacity-80">CUPÓN PARA:</p>
                              <p className="font-cursive text-xl md:text-3xl text-vintage-red leading-none transform -rotate-3" style={{ fontFamily: "'Great Vibes', cursive" }}>Abrazos ilimitados</p>
                           </div>
                        </div>
                     </div>
                     <div className="text-center font-sans mt-2">
                        <p className="text-[9px] mb-1">Promoción válida hasta el fin de los tiempos.</p>
                        <p className="font-mono font-bold bg-gray-100 border border-gray-400 inline-block px-2 py-1 transform -rotate-2 text-[9px]">CÓDIGO: SÍ_ACEPTO</p>
                     </div>
                  </div>

                  {/* INMOBILIARIA */}
                  <div className="mb-6 break-inside-avoid">
                     <p className="font-bold uppercase border-b border-black mb-1">INMOBILIARIA SENTIMENTAL</p>
                     <p><strong>SE RENTA:</strong> Penthouse de lujo en mi mente.</p>
                     <p><strong>Precio:</strong> Gratis.</p>
                     <p><strong>Inquilina:</strong> Tú.</p>
                     <p className="mt-1 italic">Llevas viviendo ahí sin pagar renta desde que te conocí y no pienso desalojarte.</p>
                  </div>

                  {/* SERVICIOS TÉCNICOS */}
                  <div className="mb-6 break-inside-avoid border border-black p-2">
                     <p className="font-bold uppercase mb-1 text-center bg-gray-200">SERVICIOS TÉCNICOS</p>
                     <p className="mb-1 font-bold">Experto en "No sé, tú dime"</p>
                     <p className="mb-1">Ofrezco servicios de:</p>
                     <ul className="list-disc pl-3 mb-2 space-y-1">
                        <li>Matar arañas valientemente (o sacarlas con un vaso).</li>
                        <li>Abrir frascos muy apretados.</li>
                        <li>Ser tu almohada humana personal.</li>
                     </ul>
                     <p className="font-bold border-t border-black pt-1 text-center">Tarifa: Un beso por servicio.</p>
                  </div>

                  {/* OBJETOS PERDIDOS */}
                  <div className="mb-6 break-inside-avoid">
                     <p className="font-bold uppercase border-b border-black mb-1">OBJETOS PERDIDOS</p>
                     <p><strong>PERDIDO:</strong> Mi autocontrol.</p>
                     <p className="mt-1">Fue visto por última vez justo antes de ver tus fotos. Si lo encuentran, no lo devuelvan; prefiero estar loco por ella.</p>
                  </div>

                  {/* BOLSA DE TRABAJO */}
                  <div className="mb-6 break-inside-avoid">
                     <p className="font-bold uppercase border-b border-black mb-1">BOLSA DE TRABAJO</p>
                     <p className="mb-1"><strong>VACANTE DISPONIBLE:</strong> Copiloto de Vida.</p>
                     <p className="mb-1"><strong>Requisitos:</strong> Que le guste mi música (o finja bien), que sepa reírse de mis chistes malos y que se llame Maria Alejandra.</p>
                     <p><strong>Contrato:</strong> Indefinido y con beneficios exclusivos.</p>
                  </div>

                  {/* VENTA DE GARAJE */}
                  <div className="mb-6 break-inside-avoid bg-gray-100 p-2">
                     <p className="font-bold uppercase mb-1">VENTA DE GARAJE</p>
                     <p><strong>SE REMATA:</strong> Mi soltería.</p>
                     <p className="mt-1">Artículo en perfecto estado, poco uso reciente. Se va barata porque ya no la necesito si estás tú.</p>
                     <p className="font-bold mt-1 text-right">— Interesados: Solo tú.</p>
                  </div>

                  {/* AVISO LEGAL */}
                  <div className="mb-6 break-inside-avoid border-2 border-black p-1">
                     <p className="font-bold uppercase text-[8px] text-center mb-1">AVISO LEGAL</p>
                     <p className="text-[9px] text-justify leading-tight">Por medio de la presente se certifica que la sonrisa de Aleja ha sido declarada Patrimonio de mi Humanidad. Queda prohibido estar triste en su presencia.</p>
                  </div>

               </div>
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


               <div className="grid grid-cols-3 gap-0 border-2 border-vintage-red mb-8 [&>div]:border-b [&>div]:border-r [&>div]:border-vintage-red [&>div:nth-child(3n)]:border-r-0 [&>div:nth-last-child(-n+3)]:border-b-0">
                  {/* Row 1 */}
                  <div className="aspect-square p-4 flex flex-col justify-center items-center text-center bg-[#ffe4e1]">
                     <span className="font-display font-black text-4xl mb-2 text-vintage-red">1</span>
                     <p className="font-serif font-bold text-xs uppercase leading-tight">Tienes la sonrisa más linda del universo.</p>
                  </div>
                  <div className="aspect-square p-4 flex flex-col justify-center items-center text-center bg-white">
                     <Heart size={48} fill="#d9381e" className="text-vintage-red animate-pulse" />
                  </div>
                  <div className="aspect-square p-4 flex flex-col justify-center items-center text-center bg-[#ffe4e1]">
                     <span className="font-display font-black text-4xl mb-2 text-vintage-red">3</span>
                     <p className="font-serif font-bold text-xs uppercase leading-tight">Contigo, cualquier día se siente especial.</p>
                  </div>

                  {/* Row 2 */}
                  <div className="aspect-square p-4 flex flex-col justify-center items-center text-center bg-white">
                     <Heart size={48} fill="#d9381e" className="text-vintage-red" />
                  </div>
                  <div className="aspect-square p-4 flex flex-col justify-center items-center text-center bg-[#ffe4e1]">
                     <span className="font-display font-black text-4xl mb-2 text-vintage-red">2</span>
                     <p className="font-serif font-bold text-xs uppercase leading-tight">Haces que mi corazón lata más rápido.</p>
                  </div>
                  <div className="aspect-square p-4 flex flex-col justify-center items-center text-center bg-white">
                     <Heart size={48} fill="#d9381e" className="text-vintage-red" />
                  </div>

                  {/* Row 3 */}
                  <div className="aspect-square p-4 flex flex-col justify-center items-center text-center bg-[#ffe4e1]">
                     <span className="font-display font-black text-4xl mb-2 text-vintage-red">4</span>
                     <p className="font-serif font-bold text-xs uppercase leading-tight">Eres mi persona favorita.</p>
                  </div>
                  <div className="aspect-square p-4 flex flex-col justify-center items-center text-center bg-white">
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

         {/* PAGE 7: PROPOSAL - NEWSPAPER EDITION */}
         <Page pageNumber={7} title="LATEST NEWS" cupidConfig={{ left: true, right: true, leftTop: '-top-4', rightTop: '-top-4' }}>
            <div className="h-full flex flex-col items-center justify-between relative">

               {/* URGENT BANNER */}
               <div className="w-full bg-black text-white text-center py-2 mb-6 border-y-4 border-double border-white outline outline-2 outline-black">
                  <h2 class="font-display font-black text-5xl md:text-7xl uppercase leading-[0.85] tracking-tighter mb-4 text-[#D32F2F] drop-shadow-sm">
                     MI AMOR
                  </h2>
               </div>

               {/* MAIN HEADLINE */}
               <div className="text-center w-full mb-8">
                  <div className="flex justify-center items-center gap-4 text-xs font-serif italic text-gray-600 border-t border-b border-gray-400 py-1 w-3/4 mx-auto">
                     <span>Por: El Cupido Corresponsal</span>
                     <span>•</span>
                     <span>Hace 1 minuto</span>
                     <span>•</span>
                     <span>Ubaté, Colombia</span>
                  </div>
               </div>

               {/* CONTENT COLUMNS WITH QUESTION */}
               <div className="flex flex-col gap-8 w-full flex-grow items-center justify-center py-10">

                  {/* Center Column: THE QUESTION & BUTTONS */}
                  <div className="w-full max-w-3xl flex flex-col items-center text-center relative z-10">

                     {!yesPressed ? (
                        <>
                           {/* ESTILO CUPÓN RECORTABLE */}
                           <div className="relative bg-[#FFFDF5] p-8 md:p-12 shadow-2xl transform rotate-1 transition-transform hover:rotate-0 border-[3px] border-black border-dashed">

                              {/* Tijeras decorativas (opcional, solo texto/icono) */}
                              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFFDF5] px-2 text-2xl">
                                 ✂️
                              </div>

                              <div className="border border-black p-1 mb-6 inline-block">
                                 <p className="font-sans font-bold uppercase tracking-[0.2em] text-[10px] px-2 py-1 bg-black text-white">
                                    CUPÓN VÁLIDO DE POR VIDA
                                 </p>
                              </div>

                              <h3 className="font-serif font-black text-4xl md:text-6xl uppercase leading-[0.9] mb-6 text-black tracking-tighter">
                                 ¿QUIERES SER <br />
                                 <span className="text-[#D32F2F] italic font-serif normal-case text-5xl md:text-7xl">mi Valentine?</span>
                              </h3>

                              <p className="font-sans text-sm md:text-base mb-8 max-w-md mx-auto text-gray-600">
                                 Al canjear este cupón, el portador (Tú) accede a beneficios exclusivos que incluyen comida, besos y paciencia infinita del proveedor (Yo).
                              </p>

                              <div className="flex flex-col items-center gap-4 w-full justify-center relative min-h-[80px]">
                                 {/* BOTÓN SÍ - Grande y atractivo */}
                                 <button
                                    onClick={handleYesClick}
                                    className="group relative px-10 py-4 bg-black text-white font-black uppercase text-2xl border-2 border-black hover:bg-[#D32F2F] hover:border-[#D32F2F] transition-all shadow-[6px_6px_0px_0px_rgba(200,200,200,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 w-full md:w-auto"
                                 >
                                    <span className="relative z-10">¡SÍ, ACEPTO!</span>
                                 </button>

                                 {/* BOTÓN NO - Pequeño y "roto" */}
                                 <button
                                    onMouseEnter={handleNoHover}
                                    onClick={handleNoHover}
                                    style={{ position: noBtnPosition.position, top: noBtnPosition.top, left: noBtnPosition.left }}
                                    className="text-[10px] text-gray-400 font-mono uppercase underline hover:text-[#D32F2F] transition-colors mt-2"
                                 >
                                    (No disponible, se agotó el stock)
                                 </button>
                              </div>

                              {/* Sello de Garantía */}
                              <div className="absolute -bottom-6 -right-6 md:-right-8 rotate-[-15deg]">
                                 <div className="border-4 border-[#D32F2F] rounded-full p-4 w-24 h-24 flex items-center justify-center bg-white shadow-lg opacity-90">
                                    <span className="text-[#D32F2F] font-black text-xs text-center leading-tight uppercase">
                                       100% con<br />AMOR<br />REAL
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </>
                     ) : (
                        /* ESTADO DE ÉXITO */
                        <div className="text-center py-10 px-6 bg-white border-4 border-black border-double shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] max-w-2xl transform scale-100 transition-all duration-500">
                           <div className="mb-6">
                              <span className="bg-[#D32F2F] text-white px-4 py-1 text-sm font-bold uppercase tracking-widest">
                                 ÚLTIMA HORA
                              </span>
                           </div>

                           <h2 className="font-display font-black text-5xl md:text-7xl text-black leading-none mb-4">
                              ¡DIJO QUE <span className="text-[#D32F2F] underline decoration-4 decoration-black">SÍ!</span>
                           </h2>

                           <div className="w-full h-px bg-gray-300 my-6"></div>

                           <p className="font-serif text-xl md:text-2xl text-black leading-relaxed">
                              Oficialmente soy la persona con más suerte del mundo. Prepárate, porque voy a hacer que valga la pena.
                           </p>


                           <div className="mt-8 flex justify-center gap-6 text-[#D32F2F] items-center">
                              {/* Imagenes Ternurines */}
                              <img src="/imgs/ternurin1.png" alt="Ternurin 1" className="w-24 h-24 object-contain animate-bounce drop-shadow-md" />
                              <Heart size={48} fill="currentColor" className="animate-pulse" />
                              <img src="/imgs/ternurin2.png" alt="Ternurin 2" className="w-24 h-24 object-contain animate-bounce delay-100 drop-shadow-md" />
                           </div>

                           <p className="mt-8 text-xs font-mono text-gray-400 uppercase">
                              * Captura de pantalla recomendada para evidencia futura.
                           </p>
                        </div>
                     )}
                  </div>
               </div>

               {/* Bottom Decoration - Pie de Página */}
               <div className="w-full border-t-4 border-black mt-12 pt-4 flex justify-between items-end font-sans text-xs md:text-sm invisible">
                  <div className="text-left font-bold uppercase tracking-wide invisible">
                     <span>PRONÓSTICO:</span> <br />
                     <span className="bg-black text-white px-1">FUTURO BRILLANTE</span>
                  </div>
                  <div className="text-center italic font-serif text-gray-500 hidden md:block invisible">
                     "Gracias por leer hasta el final, te amo."
                  </div>
                  <div className="text-right font-bold uppercase tracking-wide invisible">
                     <span>ESTADO:</span> <br />
                     <span className="text-[#D32F2F]">ENAMORADO</span>
                  </div>
               </div>

               {/* Stamp */}
               <div className="absolute bottom-20 right-0 md:right-10 border-[3px] border-double border-vintage-red text-vintage-red px-4 py-2 font-black uppercase text-lg transform -rotate-12 opacity-30 mix-blend-multiply pointer-events-none">
                  APROBADO
               </div>

            </div>
         </Page>
      </div>
   );
}

export default App;
