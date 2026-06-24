import type { ToolContent } from './types';

// Español (pan-regional).

export const es: ToolContent = {
  htmlLang: 'es',

  meta: {
    title: 'Ver el contenido de un ZIP sin extraerlo — en tu navegador | runlocally',
    description:
      'Mira qué hay dentro de un .zip sin extraerlo. Suelta un archivo para listar los nombres, tamaños y fechas, y léelos en tu navegador. No se sube nada. Código abierto, funciona sin conexión.',
    ogTitle: 'Ver el contenido de un ZIP sin extraerlo — en tu navegador',
    ogDescription:
      'Lista los nombres, tamaños y fechas dentro de un .zip sin extraerlo. Léelos en tu navegador, no se sube nada. Código abierto, funciona sin conexión.',
  },

  hero: {
    h1: 'Visor de ZIP',
    tagline:
      'Mira qué hay dentro de un .zip sin extraerlo, en tu navegador. No se sube nada.',
  },

  intro: {
    h2: 'Mira dentro de un ZIP sin extraerlo',
    paras: [
      'Esta herramienta lista lo que hay dentro de un .zip — los nombres de los archivos, sus tamaños y sus fechas — para que puedas revisar un archivo comprimido antes de descomprimirlo. Solo lee el directorio central del archivo, ese pequeño índice que todo ZIP guarda al final, así que el listado se mantiene ligero incluso con archivos grandes.',
      'Es un visor, no un extractor. No descomprime, convierte, descarga ni modifica nada; te muestra el contenido y ahí se detiene. Leer solo el índice también significa que puede listar los nombres dentro de archivos cifrados — esas entradas aparecen bloqueadas, ya que su contenido permanece sellado.',
    ],
  },

  privacy: {
    h2: 'Por qué tu archivo se queda en tu dispositivo',
    lead: 'Aquí la privacidad es estructural, no una promesa. No hay paso de subida porque no hay servidor al que subir:',
    points: [
      'El archivo se lee por completo en tu navegador.',
      'La página se sirve como archivos estáticos y no hace ninguna petición con tus datos.',
      'El código es abierto y cualquiera puede leerlo (MIT).',
      'Funciona sin conexión, algo que solo es posible porque nada sale del dispositivo.',
    ],
    note: 'Si quieres comprobarlo por tu cuenta, abre el panel de Red de tu navegador mientras ves un archivo — ninguna petición lleva tu archivo.',
    sourceLinkText: 'Lee el código.',
  },

  howto: {
    h2: 'Cómo usarlo',
    steps: [
      {
        h3: 'Suelta un .zip',
        p: 'Haz clic para seleccionar un archivo .zip, o suéltalo en cualquier parte de la página. El archivo se lee en tu dispositivo; no se sube.',
      },
      {
        h3: 'Lee el listado',
        p: 'Cada entrada se muestra con su nombre, tamaño y fecha. Las entradas cifradas aparecen bloqueadas — los nombres se listan, pero el contenido permanece sellado.',
      },
      {
        h3: 'Decide qué hacer después',
        p: 'Esto es un visor de solo lectura, así que se detiene aquí. Usa el listado para decidir si el archivo es el que buscas antes de extraerlo en otra parte.',
      },
    ],
  },

  faqHeading: 'Preguntas frecuentes',
  faq: [
    {
      q: '¿Se sube mi archivo a algún sitio?',
      a: 'No. El archivo se lee por completo en tu navegador. No hay componente de servidor, así que tu archivo no tiene forma de salir de tu dispositivo. El código es abierto y puedes confirmarlo en el panel de Red de tu navegador.',
    },
    {
      q: '¿Esto extrae o descomprime los archivos?',
      a: 'No. Es un visor, no un extractor. Lista lo que hay dentro del archivo comprimido — nombres, tamaños y fechas — pero no descomprime, convierte, descarga ni modifica nada. Para desempaquetar los archivos seguirías necesitando una herramienta de extracción aparte.',
    },
    {
      q: '¿Cómo puede listar un ZIP sin descomprimirlo?',
      a: 'Todo ZIP guarda un pequeño índice, llamado directorio central, al final del archivo. Esta herramienta lee solo ese índice para construir el listado, sin recorrer los datos comprimidos, así que el listado se mantiene ligero incluso con archivos grandes.',
    },
    {
      q: '¿Puede abrir ZIP protegidos con contraseña o cifrados?',
      a: 'Puede listar los nombres de las entradas dentro de un archivo cifrado, porque el índice en sí no suele estar cifrado. Las entradas cifradas aparecen bloqueadas y su contenido no se abre — esta herramienta solo muestra el listado, no descifra nada.',
    },
    {
      q: '¿Por qué algunos nombres de archivo se ven con caracteres ilegibles?',
      a: 'Los nombres guardados sin la marca UTF-8 — habitual en archivos creados en sistemas antiguos que usan páginas de códigos como Shift_JIS — pueden aparecer como texto ilegible (mojibake). Esta herramienta lo muestra con honestidad en lugar de adivinar; no renombra ni repara las entradas. Si necesitas nombres legibles, una herramienta hermana, zip-filename-fix, está hecha para eso.',
    },
    {
      q: '¿Funciona sin conexión?',
      a: 'Sí. Es una PWA. Tras la primera visita queda en caché, así que la visualización funciona sin conexión a la red. También puedes instalarla en tu pantalla de inicio.',
    },
    {
      q: '¿Hay un límite de tamaño de archivo?',
      a: 'No hay un límite fijo. Como lee solo el directorio central en lugar del archivo completo, el listado se mantiene ligero incluso con archivos grandes; el tope práctico depende de la memoria de tu dispositivo.',
    },
  ],

  footer: {
    openSourceLabel: 'Código abierto (MIT)',
    partOf: 'parte de',
    brandTail: '— herramientas pequeñas que se ejecutan localmente en tu dispositivo.',
    colophon:
      'Creada y mantenida por Geppetto. Parte del código se escribe con asistencia de IA; toda la revisión y las decisiones son del responsable.',
    securityText: 'Seguridad',
  },
};
