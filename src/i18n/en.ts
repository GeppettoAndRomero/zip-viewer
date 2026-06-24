import type { ToolContent } from './types';

// zip-viewer. English source content.

export const en: ToolContent = {
  htmlLang: 'en',

  meta: {
    title: 'View ZIP contents without extracting — in your browser | runlocally',
    description:
      'See what\'s inside a .zip without extracting it. Drop one archive to list its file names, sizes and dates, read in your browser. Nothing is uploaded. Open source, works offline.',
    ogTitle: 'View ZIP contents without extracting — in your browser',
    ogDescription:
      'List the file names, sizes and dates inside a .zip without extracting it. Read in your browser, nothing uploaded. Open source, works offline.',
  },

  hero: {
    h1: 'ZIP viewer',
    tagline:
      'See what\'s inside a .zip without extracting it — in your browser. Nothing is uploaded.',
  },

  intro: {
    h2: 'Look inside a ZIP without extracting it',
    paras: [
      'This tool lists what is inside a .zip — the file names, their sizes and their dates — so you can check an archive before you commit to unpacking it. It reads only the archive\'s central directory, the small index every ZIP keeps at the end, so listing is fast even for large archives.',
      'It is a viewer, not an extractor. It does not unzip, convert, download or modify anything; it shows you the contents and stops there. Reading only the index also means it can list the names inside encrypted archives — those entries are shown as locked, since their contents stay sealed.',
    ],
  },

  privacy: {
    h2: 'Why your archive stays on your device',
    lead: 'Privacy here is structural, not a promise. There is no upload step because there is no server to upload to:',
    points: [
      'The archive is read entirely in your browser.',
      'The page is served as static files and makes no request with your data.',
      'The source is open and anyone can read it (MIT).',
      'It works offline, which is only possible because nothing leaves the device.',
    ],
    note: 'If you want to check for yourself, open your browser\'s Network panel while viewing an archive — no request carries your file.',
    sourceLinkText: 'Read the source.',
  },

  howto: {
    h2: 'How to use it',
    steps: [
      {
        h3: 'Drop a .zip',
        p: 'Click to select a .zip file, or drop it anywhere on the page. The archive is read on your device; it is not uploaded.',
      },
      {
        h3: 'Read the listing',
        p: 'Each entry is shown with its name, size and date. Encrypted entries appear as locked — the names list, but the contents stay sealed.',
      },
      {
        h3: 'Decide what to do next',
        p: 'This is a read-only viewer, so it stops here. Use the listing to decide whether the archive is the one you want before extracting it elsewhere.',
      },
    ],
  },

  faqHeading: 'FAQ',
  faq: [
    {
      q: 'Is my archive uploaded anywhere?',
      a: 'No. The archive is read entirely in your browser. There is no server component, so your file has no path off your device. The source is open and you can confirm this in your browser\'s Network panel.',
    },
    {
      q: 'Does this extract or unzip the files?',
      a: 'No. It is a viewer, not an extractor. It lists what is inside the archive — names, sizes and dates — but it does not unzip, convert, download or modify anything. To unpack the files you would still use a separate extraction tool.',
    },
    {
      q: 'How can it list a ZIP so quickly?',
      a: 'Every ZIP keeps a small index, called the central directory, at the end of the file. This tool reads only that index to build the listing, rather than decompressing the file data, so listing stays fast even for large archives.',
    },
    {
      q: 'Can it open password-protected or encrypted ZIPs?',
      a: 'It can list the entry names inside an encrypted archive, because the index itself is usually not encrypted. The encrypted entries are shown as locked and their contents are not opened — this tool only views the listing, it does not decrypt anything.',
    },
    {
      q: 'Why are some filenames garbled?',
      a: 'Filenames stored without the UTF-8 flag — common in archives made on legacy systems using code pages such as Shift_JIS — can appear as mojibake. This tool surfaces that honestly rather than guessing; it does not rename or repair the entries. If you need readable names, a sibling tool, zip-filename-fix, is built for that.',
    },
    {
      q: 'Does it work offline?',
      a: 'Yes. It is a PWA. After the first visit it is cached, so viewing works without a network connection. You can also install it to your home screen.',
    },
    {
      q: 'Is there a file size limit?',
      a: 'There is no fixed limit. Because it reads only the central directory rather than the whole file, listing stays light even for large archives; the practical ceiling depends on your device\'s memory.',
    },
  ],

  footer: {
    openSourceLabel: 'Open source (MIT)',
    partOf: 'part of',
    brandTail: '— small tools that run locally on your device.',
    colophon:
      'Built and maintained by Geppetto. Some code is written with AI assistance; all review and decisions are the maintainer\'s.',
    securityText: 'Security',
  },
};
