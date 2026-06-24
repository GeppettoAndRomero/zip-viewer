import type { ToolContent } from './types';

// Deutsch.

export const de: ToolContent = {
  htmlLang: 'de',

  meta: {
    title: 'ZIP-Inhalt anzeigen ohne entpacken – im Browser | runlocally',
    description:
      'Sieh dir an, was in einem .zip steckt, ohne es zu entpacken. Lege ein Archiv ab, um Dateinamen, Größen und Datumsangaben aufzulisten, gelesen im Browser. Nichts wird hochgeladen. Open Source, läuft offline.',
    ogTitle: 'ZIP-Inhalt anzeigen ohne entpacken – im Browser',
    ogDescription:
      'Liste Dateinamen, Größen und Datumsangaben in einem .zip auf, ohne es zu entpacken. Gelesen im Browser, nichts wird hochgeladen. Open Source, läuft offline.',
  },

  hero: {
    h1: 'ZIP-Viewer',
    tagline:
      'Sieh dir an, was in einem .zip steckt, ohne es zu entpacken – im Browser. Nichts wird hochgeladen.',
  },

  intro: {
    h2: 'In ein ZIP schauen, ohne es zu entpacken',
    paras: [
      'Dieses Tool listet auf, was in einem .zip steckt – die Dateinamen, ihre Größen und ihre Datumsangaben –, damit du ein Archiv prüfen kannst, bevor du dich fürs Entpacken entscheidest. Es liest nur das Zentralverzeichnis des Archivs, den kleinen Index, den jedes ZIP am Ende führt, sodass die Auflistung auch bei großen Archiven zügig bleibt.',
      'Es ist ein Viewer, kein Entpacker. Es entpackt nichts, konvertiert nichts, lädt nichts herunter und verändert nichts; es zeigt dir den Inhalt und hört dort auf. Weil nur der Index gelesen wird, kann es auch die Namen in verschlüsselten Archiven auflisten – diese Einträge werden als gesperrt angezeigt, denn ihr Inhalt bleibt versiegelt.',
    ],
  },

  privacy: {
    h2: 'Warum dein Archiv auf deinem Gerät bleibt',
    lead: 'Datenschutz ist hier strukturell, kein Versprechen. Es gibt keinen Upload-Schritt, weil es keinen Server gibt, zu dem hochgeladen werden könnte:',
    points: [
      'Das Archiv wird vollständig in deinem Browser gelesen.',
      'Die Seite wird als statische Dateien ausgeliefert und stellt keine Anfrage mit deinen Daten.',
      'Der Quellcode ist offen und jeder kann ihn lesen (MIT).',
      'Es läuft offline, was nur möglich ist, weil nichts das Gerät verlässt.',
    ],
    note: 'Wenn du es selbst prüfen willst, öffne den Netzwerk-Tab deines Browsers, während du ein Archiv ansiehst – keine Anfrage trägt deine Datei nach außen.',
    sourceLinkText: 'Lies den Quellcode.',
  },

  howto: {
    h2: 'So benutzt du es',
    steps: [
      {
        h3: 'Ein .zip ablegen',
        p: 'Klicke, um eine .zip-Datei auszuwählen, oder lege sie irgendwo auf der Seite ab. Das Archiv wird auf deinem Gerät gelesen; es wird nicht hochgeladen.',
      },
      {
        h3: 'Die Auflistung lesen',
        p: 'Jeder Eintrag wird mit Namen, Größe und Datum angezeigt. Verschlüsselte Einträge erscheinen als gesperrt – die Namen werden aufgelistet, aber der Inhalt bleibt versiegelt.',
      },
      {
        h3: 'Entscheiden, was als Nächstes kommt',
        p: 'Das ist ein reiner Viewer, also hört er hier auf. Nutze die Auflistung, um zu entscheiden, ob das Archiv das richtige ist, bevor du es woanders entpackst.',
      },
    ],
  },

  faqHeading: 'FAQ',
  faq: [
    {
      q: 'Wird mein Archiv irgendwohin hochgeladen?',
      a: 'Nein. Das Archiv wird vollständig in deinem Browser gelesen. Es gibt keine Server-Komponente, also hat deine Datei keinen Weg vom Gerät weg. Der Quellcode ist offen, und du kannst das im Netzwerk-Tab deines Browsers bestätigen.',
    },
    {
      q: 'Entpackt oder extrahiert das die Dateien?',
      a: 'Nein. Es ist ein Viewer, kein Entpacker. Es listet auf, was im Archiv steckt – Namen, Größen und Datumsangaben –, aber es entpackt nichts, konvertiert nichts, lädt nichts herunter und verändert nichts. Zum Entpacken der Dateien brauchst du weiterhin ein separates Entpack-Tool.',
    },
    {
      q: 'Wie kann es ein ZIP so zügig auflisten?',
      a: 'Jedes ZIP führt am Ende der Datei einen kleinen Index, das Zentralverzeichnis. Dieses Tool liest nur diesen Index, um die Auflistung zu erstellen, statt die Dateidaten zu dekomprimieren – so bleibt die Auflistung auch bei großen Archiven zügig.',
    },
    {
      q: 'Kann es passwortgeschützte oder verschlüsselte ZIPs öffnen?',
      a: 'Es kann die Namen der Einträge in einem verschlüsselten Archiv auflisten, weil der Index selbst meist nicht verschlüsselt ist. Die verschlüsselten Einträge werden als gesperrt angezeigt, und ihr Inhalt wird nicht geöffnet – dieses Tool zeigt nur die Auflistung an, es entschlüsselt nichts.',
    },
    {
      q: 'Warum sind manche Dateinamen verstümmelt?',
      a: 'Dateinamen, die ohne das UTF-8-Flag gespeichert wurden – häufig in Archiven von älteren Systemen mit Codepages wie Shift_JIS –, können als Zeichensalat erscheinen. Dieses Tool legt das ehrlich offen, statt zu raten; es benennt die Einträge nicht um und repariert sie nicht. Wenn du lesbare Namen brauchst, gibt es dafür ein Schwester-Tool, zip-filename-fix.',
    },
    {
      q: 'Läuft es offline?',
      a: 'Ja. Es ist eine PWA. Nach dem ersten Besuch ist es zwischengespeichert, sodass die Anzeige ohne Netzwerkverbindung funktioniert. Du kannst es auch auf deinem Startbildschirm installieren.',
    },
    {
      q: 'Gibt es eine Dateigrößenbeschränkung?',
      a: 'Es gibt keine feste Grenze. Weil nur das Zentralverzeichnis gelesen wird statt der ganzen Datei, bleibt die Auflistung auch bei großen Archiven ressourcenschonend; die praktische Obergrenze hängt vom Arbeitsspeicher deines Geräts ab.',
    },
  ],

  footer: {
    openSourceLabel: 'Open Source (MIT)',
    partOf: 'Teil von',
    brandTail: '– kleine Tools, die lokal auf deinem Gerät laufen.',
    colophon:
      'Gebaut und gepflegt von Geppetto. Ein Teil des Codes entsteht mit KI-Unterstützung; alle Prüfung und Entscheidungen liegen beim Maintainer.',
    securityText: 'Sicherheit',
  },
};
