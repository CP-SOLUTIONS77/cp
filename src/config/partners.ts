/**
 * Compagnies et courtiers grossistes partenaires en assurance, affichés dans le
 * bandeau défilant de la page d'accueil (src/components/Partenaires.astro).
 *
 * Liste fournie par le cabinet le 10 novembre 2026.
 *
 * Logos : récupérés le 10 novembre 2026 sur le site officiel de chaque
 * partenaire, rangés dans public/images/partenaires/. Une marque reste la
 * propriété de son titulaire : vérifier que la convention de courtage autorise
 * l'affichage du logo avant la mise en ligne.
 *
 * Sans `logo`, le bandeau affiche le nom en toutes lettres. Pour ajouter un logo
 * plus tard : déposer le fichier (SVG de préférence, ou PNG à fond transparent)
 * dans public/images/partenaires/ et renseigner son nom ici.
 */
export interface Partner {
  name: string;
  /** Nom du fichier dans public/images/partenaires/. */
  logo?: string;
}

export const partners: Partner[] = [
  { name: 'Kereis', logo: 'kereis.svg' },
  { name: 'April', logo: 'april.svg' },
  { name: 'Solly Azar', logo: 'sollyazar.svg' },
  { name: 'Xenassur' }, // logo non récupérable automatiquement (site protégé)
  { name: 'Thélem assurances', logo: 'thelem.png' },
  { name: 'Tetris Assurance', logo: 'tetris.png' },
  { name: 'maXance' }, // logo non récupérable automatiquement (site protégé)
  { name: 'Zéphir', logo: 'zephir.jpg' },
  { name: 'Leocare', logo: 'leocare.svg' },
  { name: 'Oyat Assurances', logo: 'oyat.png' },
  { name: 'Eurodommages', logo: 'eurodommages.jpg' },
  { name: 'Assurmax' }, // site officiel introuvable
  { name: 'Spring', logo: 'spring.png' },
  { name: 'MetLife', logo: 'metlife.png' },
  { name: 'Acheel', logo: 'acheel.svg' },
  { name: 'Néoliane', logo: 'neoliane.svg' },
  { name: 'Apivia', logo: 'apivia.svg' },
  { name: 'FMA Assurances', logo: 'fma.svg' },
  { name: '+Simple', logo: 'plussimple.svg' },
  { name: 'Add Value', logo: 'addvalue.png' },
  { name: 'Matrisk Assurance', logo: 'matrisk.svg' },
  { name: 'Stoïk', logo: 'stoik.svg' },
  { name: 'Wazari' }, // le site ne présente plus que le logo Assuréa
  { name: 'Netvox', logo: 'netvox.png' },
  { name: 'Assuréa', logo: 'assurea.svg' },
  { name: 'Entoria', logo: 'entoria.svg' },
  { name: 'Progeas', logo: 'progeas.png' },
  { name: 'Ami3F' }, // site officiel introuvable
  { name: 'Alliass', logo: 'alliass.webp' },
];
