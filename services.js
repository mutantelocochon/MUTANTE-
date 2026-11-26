/* ============================================================
   MUTANTE · SERVICIOS
   Para cambiar un servicio, edita esta lista.
   - img:  la foto (4:3, unos 1400 px de ancho). Sube la imagen a
           img/svc/ y escribe aquí su nombre.
   - name: el nombre del servicio (es = español, en = inglés).
   - tag:  la frase corta, en negritas.
   - body: el texto largo.
   El orden de la lista es el orden en la web; el número (01, 02…)
   se pone solo. Si falta el inglés, se muestra el español.
   ============================================================ */
var SERV = [
  { img: 'img/svc/comerciales.jpg',
    name: { es: 'Comerciales', en: 'Commercials' },
    tag:  { es: 'La evolución del mensaje de marca.', en: 'The evolution of the brand message.' },
    body: { es: 'No creamos anuncios; diseñamos impactos visuales que conectan la estrategia corporativa con una narrativa disruptiva. Transformamos la identidad de marcas globales líderes como Citibanamex, Aeroméxico, Dell, FIFA, GWM y Toyota.',
            en: 'We don’t make ads; we design visual impact that connects corporate strategy with disruptive storytelling. We transform the identity of leading global brands such as Citibanamex, Aeroméxico, Dell, FIFA, GWM and Toyota.' } },
  { img: 'img/svc/cine.jpg',
    name: { es: 'Cine', en: 'Film' },
    tag:  { es: 'Historias vivas, visión global.', en: 'Living stories, global vision.' },
    body: { es: 'El cine y el documental son nuestro origen y nuestra esencia. Desarrollamos largometrajes, cortometrajes y series con un sello autoral potente y vocación internacional, creando universos cinematográficos a la altura de plataformas como Sony, Claro Video, AMC y Discovery Channel.',
            en: 'Film and documentary are our origin and our essence. We develop features, shorts and series with a strong authorial voice and an international outlook, building cinematic worlds worthy of platforms like Sony, Claro Video, AMC and Discovery Channel.' } },
  { img: 'img/svc/postproduccion.jpg',
    name: { es: 'Postproducción', en: 'Post-production' },
    tag:  { es: 'Donde la materia prima toma su forma final.', en: 'Where raw material takes its final shape.' },
    body: { es: 'El laboratorio donde las ideas terminan de mutar. Ofrecemos soluciones integrales de IA, animación, montaje, corrección de color, diseño sonoro y efectos visuales. Combinamos precisión artesanal y herramientas de última generación para pulir la narrativa.',
            en: 'The lab where ideas finish mutating. We offer end-to-end AI, animation, editing, color grading, sound design and visual effects, combining craft precision with state-of-the-art tools to polish the story.' } },
  { img: 'img/svc/digital.jpg',
    name: { es: 'Digital', en: 'Digital' },
    tag:  { es: 'Contenido nativo para un mundo en constante cambio.', en: 'Native content for a world that never stops changing.' },
    body: { es: 'Dominamos los nuevos lenguajes, formatos y tendencias antes de que se vuelvan estándares en: lanzamientos, experiencias, branded content y campañas digitales diseñadas específicamente para el ecosistema actual: contenido flexible y de alto impacto que no solo fluye con el algoritmo, sino que detiene el scroll.',
            en: 'We master new languages, formats and trends before they become the standard: launches, experiences, branded content and digital campaigns built for today’s ecosystem. Flexible, high-impact content that doesn’t just ride the algorithm, it stops the scroll.' } },
  { img: 'img/svc/creatividad.jpg',
    name: { es: 'Creatividad', en: 'Creative' },
    tag:  { es: 'No solo ejecutamos ideas: las escribimos y diseñamos desde la primera palabra.', en: 'We don’t just execute ideas: we write and design them from the very first word.' },
    body: { es: 'En MUTANTE desarrollamos ideas, campañas y guiones a la medida para publicidad, ficción o cualquier formato emergente. Involucrarnos desde el origen nos permite concebir cada proyecto de forma integral, garantizando que la historia funcione con la misma fuerza en el papel y en la pantalla.',
            en: 'At MUTANTE we develop tailor-made ideas, campaigns and scripts for advertising, fiction or any emerging format. Being involved from the start lets us conceive each project as a whole, so the story works just as hard on paper as it does on screen.' } }
];
