/**
 * Mentions réglementaires d'un intermédiaire en assurance (COA) et en opérations
 * de banque (COBSP). Tout champ vide est un manquement vis-à-vis de l'ACPR :
 * la page /mentions-legales affiche alors un placeholder visible, et le build
 * écrit un avertissement listant ce qui manque (voir scripts/check-legal.ts).
 *
 * Renseigner ici, et seulement ici. Les valeurs se propagent partout.
 */

/** Marqueur d'une valeur que le client doit encore fournir. */
export const TODO = '' as const;

export const company = {
  name: 'CP SOLUTIONS',
  legalForm: 'SARL',
  capital: '5 000 €',
  siren: '903 877 066',
  siret: '903 877 066 00014',
  ape: '6622Z',
  rcs: 'RCS Melun', // TODO client : vérifier le greffe (Melun pour la Seine-et-Marne)
  vatNumber: TODO, // TODO client : n° TVA intracommunautaire, si assujetti
  publicationDirector: 'Paul Poirier',
} as const;

export const orias = {
  number: '21009019',
  categories: ['COA', 'COBSP', 'MIOBSP'] as string[],
  registryUrl: 'https://www.orias.fr',
} as const;

export const supervisor = {
  name: "Autorité de Contrôle Prudentiel et de Résolution (ACPR)",
  address: '4 place de Budapest, CS 92459, 75436 Paris Cedex 09',
  url: 'https://acpr.banque-france.fr',
} as const;

export const rcPro = {
  insurer: 'Liberty Specialty Markets Europe Sarl (LSME), pour le compte de Liberty Mutual Insurance Europe SE — gestion par MATRISK Assurance',
  policyNumber: 'MRCSBRO202210FR00000000045473A00',
  /** Textes de référence, affichés tels quels. */
  legalBasis: 'articles L.512-6 et L.512-7 du Code des assurances',
} as const;

export const financialGuarantee = {
  provider: 'Liberty Specialty Markets Europe Sarl (LSME), pour le compte de Liberty Mutual Insurance Europe SE — gestion par MATRISK Assurance',
  amount: '115 000 € par sinistre et par période',
} as const;

export const professionalAssociation = {
  name: 'ENDYA',
  /** Aucun numéro d'adhérent délivré par l'association. */
  memberNumber: TODO,
} as const;

export const remuneration = {
  /**
   * Valeurs possibles :
   *  'commissions'  : rémunération par les compagnies et établissements partenaires
   *  'honoraires'   : honoraires facturés au client
   *  'mixte'        : les deux
   */
  mode: 'mixte' as '' | 'commissions' | 'honoraires' | 'mixte',
  /** TODO client : barème ou montant des honoraires de courtage crédit, si applicable. */
  feesDetail: TODO,
} as const;

export const financialLinks = {
  hasLinks: false as null | boolean,
  detail: TODO,
} as const;

export const complaints = {
  email: 'contact@cpsolutions77.com',
  postalAddress: '35 rue Jean Jaurès, 77130 Montereau-Fault-Yonne',
  /** Délais réglementaires (recommandation ACPR 2022-R-01). */
  acknowledgementDays: '10 jours ouvrables',
  answerDelay: '2 mois',
} as const;

export const mediators = {
  insurance: {
    name: "La Médiation de l'Assurance",
    address: 'TSA 50110, 75441 Paris Cedex 09',
    url: 'https://www.mediation-assurance.org',
  },
  credit: {
    name: 'ANM Conso',
    address: '2 rue de Colmar, 94300 Vincennes',
    url: 'https://www.anm-conso.com',
  },
} as const;

export const host = {
  name: 'Vercel Inc.',
  address: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
  url: 'https://vercel.com',
} as const;

/**
 * Liste des champs obligatoires et de leur état. Utilisée par la page
 * mentions légales (placeholders) et par `npm run check:legal`.
 */
export function missingLegalFields(): string[] {
  const missing: string[] = [];
  const check = (label: string, value: unknown) => {
    const empty =
      value === TODO || value === null || value === undefined || (Array.isArray(value) && value.length === 0);
    if (empty) missing.push(label);
  };
  check('company.legalForm (forme juridique)', company.legalForm);
  check('company.capital (capital social)', company.capital);
  check('orias.number (numéro ORIAS)', orias.number);
  check("orias.categories (catégories d'immatriculation)", orias.categories);
  check('rcPro.insurer (assureur RC professionnelle)', rcPro.insurer);
  check('financialGuarantee.provider (garantie financière ou « non applicable »)', financialGuarantee.provider);
  check('professionalAssociation.name (association professionnelle agréée)', professionalAssociation.name);
  check('remuneration.mode (mode de rémunération)', remuneration.mode);
  check('financialLinks.hasLinks (liens financiers avec des assureurs)', financialLinks.hasLinks);
  check('complaints.email (adresse de réclamation)', complaints.email);
  check('mediators.credit.name (médiateur crédit)', mediators.credit.name);
  return missing;
}
