export interface Pizza {
  name: string;
  ingredients: string;
  price: number;
}

export interface MenuItem {
  name: string;
  price: number | string;
}

export const pizzasTomate: Pizza[] = [
  { name: "Margarita", ingredients: "Mozzarella, olives", price: 9 },
  { name: "Jambon", ingredients: "Mozzarella, jambon", price: 10.5 },
  { name: "Reine", ingredients: "Mozzarella, jambon, champignons", price: 11 },
  { name: "Campagnole", ingredients: "Mozzarella, lardons, champignons, œuf", price: 11.5 },
  { name: "Paysanne", ingredients: "Mozzarella, lardons, pommes de terre, crème", price: 11.5 },
  { name: "Balèze", ingredients: "Mozzarella, jambon, bacon, lardons, champignons, crème, olives", price: 14 },
  { name: "Bacon", ingredients: "Mozzarella, bacon, champignons, œuf", price: 12 },
  { name: "Burger", ingredients: "Mozzarella, haché de bœuf, bacon, cheddar, sauce burger, cornichons", price: 12 },
  { name: "Lance Flamme", ingredients: "Mozzarella, merguez, chorizo, oignons", price: 12 },
  { name: "Fromagère", ingredients: "Mozzarella, camembert, chèvre, fromage à raclette", price: 11.5 },
  { name: "Prézienne", ingredients: "Mozzarella, jambon, champignons, oignons, origan", price: 13 },
  { name: "Végétarienne", ingredients: "Mozzarella, champignons, poivrons, oignons, olives, crème", price: 11.5 },
  { name: "Kebab", ingredients: "Mozzarella, viande à kebab, champignons, sauce blanche, oignons", price: 13 },
  { name: "Playa", ingredients: "Mozzarella, haché de bœuf, merguez, poivrons, œuf", price: 13 },
  { name: "Calzone", ingredients: "Mozzarella, jambon, champignons, œuf", price: 11.5 },
];

export const pizzasCreme: Pizza[] = [
  { name: "Créma", ingredients: "Mozzarella, jambon", price: 10.5 },
  { name: "Mayonnaise", ingredients: "Mozzarella, haché de bœuf, champignons, œuf, oignons, poivre", price: 13 },
  { name: "Toutinière", ingredients: "Mozzarella, andouille, pommes de terre, camembert, persil", price: 13 },
  { name: "Normandie", ingredients: "Mozzarella, lardons, pommes de terre, camembert", price: 12 },
  { name: "Tartifl'", ingredients: "Mozzarella, lardons, pommes de terre, reblochon, ail, oignons, poivre", price: 13 },
  { name: "Raclette", ingredients: "Mozzarella, jambon, pommes de terre, bacon, fromage à raclette, poivre", price: 13 },
  { name: "Chèvre-Miel", ingredients: "Mozzarella, chèvre, miel, origan", price: 11.5 },
  { name: "Indienne", ingredients: "Mozzarella, poulet, champignons, sauce curry, origan", price: 12.5 },
  { name: "Tomme", ingredients: "Mozzarella, poulet, pommes de terre, tomme de Pail (AB), ail, origan", price: 12.5 },
  { name: "Norvégienne", ingredients: "Mozzarella, saumon, beurre d'ail", price: 13.5 },
  { name: "Calzonette", ingredients: "Mozzarella, jambon, champignons, œuf", price: 11.5 },
];

export const desserts: MenuItem[] = [
  { name: "Calzone Nutella (noix de coco râpée)", price: 8 },
  { name: "Tiramisu", price: 3 },
  { name: "Cookie", price: 2.5 },
  { name: "Salade de fruits", price: 3 },
  { name: "Glace Ben & Jerry's", price: 4 },
  { name: "Glaces", price: "1.10 à 2.90" },
  { name: "Magnum", price: 3 },
];

export const boissons: MenuItem[] = [
  { name: "Soft", price: 2 },
  { name: "Red Bull", price: 2.5 },
  { name: "Eau plate", price: 1 },
  { name: "Eau gazeuse", price: 2.5 },
  { name: "Jus de pomme", price: 3 },
  { name: "Café", price: 1 },
  { name: "Cidre brut", price: 3 },
  { name: "Bière Heineken", price: 2.5 },
  { name: "Bière Cousin", price: 4.5 },
  { name: "Pression Peretti", price: 4.5 },
];

export const supplements: MenuItem[] = [
  { name: "Supplément", price: 1 },
  { name: "Bol de salade", price: 2 },
];

export interface Distributeur {
  lieu: string;
  horaires: string;
}

export const distributeurs: Distributeur[] = [
  { lieu: "Pré-en-Pail", horaires: "24h/24 · 7j/7" },
  { lieu: "Saint Samson", horaires: "24h/24 · 7j/7" },
  { lieu: "Gorron-les-Chapelles", horaires: "24h/24 · 7j/7" },
  { lieu: "Saint-Denis-sur-Sarthon", horaires: "24h/24 · 7j/7" },
  { lieu: "Saint-Pierre-des-Nids", horaires: "24h/24 · 7j/7" },
  { lieu: "Villaines-la-Juhel", horaires: "24h/24 · 7j/7" },
];
