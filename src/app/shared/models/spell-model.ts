export interface Spell {
  _id: string;
  folder: string;
  img: string;
  name: string;
  system: any;
  type: string;
}

export type SpellsRequest =
  | { loadingState: 'loading' }
  | { loadingState: 'success'; spells: Spell[] }
  | { loadingState: 'error' };
