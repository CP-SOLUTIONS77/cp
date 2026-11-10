/**
 * Pages ville, pour le référencement local. Une page par bourg : les petites
 * communes voisines sont rattachées à la page la plus proche plutôt que d'avoir
 * chacune une page, que Google traiterait comme des pages satellites.
 *
 * Cette liste alimente la page /zones-intervention, le pied de page et le bloc
 * « À proximité » de chaque page ville. Le contenu, lui, vit dans
 * src/pages/courtier-*.astro.
 */

export type Secteur = 'proche' | 'ouest' | 'nord' | 'est' | 'sud';

export const secteurs: readonly { id: Secteur; label: string }[] = [
  { id: 'proche', label: 'Autour de Montereau' },
  { id: 'ouest', label: 'Vers Fontainebleau et Moret' },
  { id: 'nord', label: 'Vers Melun et la Brie' },
  { id: 'est', label: 'Vers Provins, Bray et la Bassée' },
  { id: 'sud', label: "Vers le Loing et l'Yonne" },
];

export type Ville = {
  slug: string;
  nom: string;
  secteur: Secteur;
  /** Communes ciblées par la page, la ville principale en premier. */
  communes: readonly string[];
};

export const villes: readonly Ville[] = [
  { slug: 'courtier-varennes-sur-seine', nom: 'Varennes-sur-Seine', secteur: 'proche', communes: ['Varennes-sur-Seine', 'Marolles-sur-Seine', 'Cannes-Écluse', 'Esmans'] },
  { slug: 'courtier-la-grande-paroisse', nom: 'La Grande-Paroisse', secteur: 'proche', communes: ['La Grande-Paroisse', 'Saint-Germain-Laval', 'Forges', 'Laval-en-Brie', 'Salins'] },
  { slug: 'courtier-moret-loing-et-orvanne', nom: 'Moret-Loing-et-Orvanne', secteur: 'ouest', communes: ['Moret-Loing-et-Orvanne', 'Veneux-les-Sablons'] },
  { slug: 'courtier-fontainebleau', nom: 'Fontainebleau', secteur: 'ouest', communes: ['Fontainebleau', 'Avon'] },
  { slug: 'courtier-champagne-sur-seine', nom: 'Champagne-sur-Seine', secteur: 'ouest', communes: ['Champagne-sur-Seine', 'Saint-Mammès', 'Thomery', 'Vernou-la-Celle-sur-Seine'] },
  { slug: 'courtier-melun', nom: 'Melun', secteur: 'nord', communes: ['Melun'] },
  { slug: 'courtier-le-chatelet-en-brie', nom: 'Le Châtelet-en-Brie', secteur: 'nord', communes: ['Le Châtelet-en-Brie', 'Échouboulains', 'Valence-en-Brie', 'Féricy', 'Machault'] },
  { slug: 'courtier-nangis', nom: 'Nangis', secteur: 'nord', communes: ['Nangis', 'Rampillon', 'Fontenailles', 'Grandpuits-Bailly-Carrois'] },
  { slug: 'courtier-provins', nom: 'Provins', secteur: 'est', communes: ['Provins', 'Sourdun', 'Longueville'] },
  { slug: 'courtier-bray-sur-seine', nom: 'Bray-sur-Seine', secteur: 'est', communes: ['Bray-sur-Seine', 'Mouy-sur-Seine', 'Jaulnes', 'Mousseaux-lès-Bray', 'Gravon'] },
  { slug: 'courtier-donnemarie-dontilly', nom: 'Donnemarie-Dontilly', secteur: 'est', communes: ['Donnemarie-Dontilly', 'Montigny-Lencoup', 'Thénisy', 'Gurcy-le-Châtel'] },
  { slug: 'courtier-nemours', nom: 'Nemours', secteur: 'sud', communes: ['Nemours', 'Saint-Pierre-lès-Nemours'] },
  { slug: 'courtier-sens', nom: 'Sens', secteur: 'sud', communes: ['Sens'] },
  { slug: 'courtier-pont-sur-yonne', nom: 'Pont-sur-Yonne', secteur: 'sud', communes: ['Pont-sur-Yonne', 'Villeneuve-la-Guyard', 'Champigny', 'Michery'] },
  { slug: 'courtier-souppes-sur-loing', nom: 'Souppes-sur-Loing', secteur: 'sud', communes: ['Souppes-sur-Loing', 'Château-Landon', 'Bagneaux-sur-Loing'] },
];

export function villeParSlug(slug: string): Ville {
  const ville = villes.find((v) => v.slug === slug);
  if (!ville) throw new Error(`Ville inconnue dans src/config/villes.ts : ${slug}`);
  return ville;
}
