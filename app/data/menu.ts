export interface Pizza {
  name: string;
  ingredients: string;
  price: number;
  description?: string;
  image?: string;
}

export interface MenuItem {
  name: string;
  price: number | string;
  description?: string;
  image?: string;
}

export const pizzasTomate: Pizza[] = [
  { 
    name: "Margarita", 
    ingredients: "Mozzarella, olives", 
    price: 9,
    description: "La base classique et indémodable. Une pâte artisanale pétrie à la main, recouverte d'une sauce tomate savoureuse, de mozzarella fondante et d'olives noires."
  },
  { name: "Jambon", ingredients: "Mozzarella, jambon", price: 10.5, description: "Un classique apprécié de tous, alliant la douceur du jambon blanc à la gourmandise de la mozzarella fondante sur notre sauce tomate maison." },
  { name: "Reine", ingredients: "Mozzarella, jambon, champignons", price: 11, description: "L'équilibre parfait entre le jambon et les champignons frais, pour une pizza traditionnelle et réconfortante." },
  { name: "Campagnole", ingredients: "Mozzarella, lardons, champignons, œuf", price: 11.5, description: "Une pizza généreuse aux accents du terroir avec ses lardons fumés, ses champignons de Paris et son œuf coulant au centre." },
  { name: "Paysanne", ingredients: "Mozzarella, lardons, pommes de terre, crème", price: 11.5, description: "Un mélange savoureux et consistant pour les grosses faims, associant le croquant des pommes de terre à la douceur de la crème." },
  { name: "Balèze", ingredients: "Mozzarella, jambon, bacon, lardons, champignons, crème, olives", price: 14, description: "Pour les appétits de géant ! Un festival de viandes (jambon, bacon, lardons) complété par des champignons et une touche de crème." },
  { name: "Bacon", ingredients: "Mozzarella, bacon, champignons, œuf", price: 12, description: "La puissance du bacon grillé associée à la fraîcheur des champignons et la douceur d'un œuf frais." },
  { name: "Burger", ingredients: "Mozzarella, haché de bœuf, bacon, cheddar, sauce burger, cornichons", price: 12, description: "Tout le plaisir d'un burger sur une pizza : bœuf haché, cheddar fondant, bacon croustillant et sa sauce burger signature." },
  { name: "Lance Flamme", ingredients: "Mozzarella, merguez, chorizo, oignons", price: 12, description: "Attention, ça chauffe ! Une pizza épicée avec merguez et chorizo de qualité, relevée par des oignons croquants." },
  { name: "Fromagère", ingredients: "Mozzarella, camembert, chèvre, fromage à raclette", price: 11.5, description: "Le paradis des amateurs de fromage : un quatuor fondant mêlant camembert, chèvre et raclette." },
  { name: "Prézienne", ingredients: "Mozzarella, jambon, champignons, oignons, origan", price: 13, description: "Une spécialité locale riche en saveurs avec ses oignons fondants et sa touche d'origan parfumé." },
  { name: "Végétarienne", ingredients: "Mozzarella, champignons, poivrons, oignons, olives, crème", price: 11.5, description: "Un arc-en-ciel de légumes frais (poivrons, oignons, champignons) sur une base onctueuse." },
  { name: "Kebab", ingredients: "Mozzarella, viande à kebab, champignons, sauce blanche, oignons", price: 13, description: "L'alliance originale de la pizza et du kebab, servie avec sa sauce blanche onctueuse et ses oignons." },
  { name: "Playa", ingredients: "Mozzarella, haché de bœuf, merguez, poivrons, œuf", price: 13, description: "La signature de la maison : un mélange généreux de bœuf et de merguez pour une pizza pleine de soleil." },
  { name: "Calzone", ingredients: "Mozzarella, jambon, champignons, œuf", price: 11.5, description: "La célèbre pizza chaussons, renfermant tout le fondant du fromage, du jambon et des champignons." },
];

export const pizzasCreme: Pizza[] = [
  { name: "Créma", ingredients: "Mozzarella, jambon", price: 10.5, description: "Une base blanche onctueuse pour sublimer la simplicité du jambon et de la mozzarella." },
  { name: "Mayonnaise", ingredients: "Mozzarella, haché de bœuf, champignons, œuf, oignons, poivre", price: 13, description: "Une création originale et surprenante, riche en goût et délicatement poivrée." },
  { name: "Toutinière", ingredients: "Mozzarella, andouille, pommes de terre, camembert, persil", price: 13, description: "Un hommage aux saveurs locales avec l'andouille de caractère et le camembert fondant." },
  { name: "Normandie", ingredients: "Mozzarella, lardons, pommes de terre, camembert", price: 12, description: "Le goût authentique de la Normandie : pommes de terre fondantes et camembert coulant." },
  { name: "Tartiflette", ingredients: "Mozzarella, lardons, pommes de terre, reblochon, ail, oignons, poivre", price: 13, description: "Toute la générosité de la montagne sur une pizza, avec son véritable reblochon et ses pommes de terre." },
  { name: "Raclette", ingredients: "Mozzarella, jambon, pommes de terre, bacon, fromage à raclette, poivre", price: 13, description: "L'esprit convivial de la raclette : jambon, bacon et fromage à raclette pour un maximum de plaisir." },
  { name: "Chèvre-Miel", ingredients: "Mozzarella, chèvre, miel, origan", price: 11.5, description: "Le mariage sucré-salé par excellence, doux et parfumé à l'origan." },
  { name: "Indienne", ingredients: "Mozzarella, poulet, champignons, sauce curry, origan", price: 12.5, description: "Un voyage gustatif avec son poulet mariné au curry et ses champignons frais." },
  { name: "Tomme", ingredients: "Mozzarella, poulet, pommes de terre, tomme de Pail (AB), ail, origan", price: 12.5, description: "Mise à l'honneur de la Tomme de Pail bio pour une pizza de caractère et 100% terroir." },
  { name: "Norvégienne", ingredients: "Mozzarella, saumon, beurre d'ail", price: 13.5, description: "Finesse et élégance avec le saumon délicat rehaussé par un beurre d'ail maison." },
  { name: "Calzonette", ingredients: "Mozzarella, jambon, champignons, œuf", price: 11.5, description: "La version crème de notre calzone, pour encore plus de douceur et d'onctuosité." },
];

export const desserts: MenuItem[] = [
  { name: "Calzone Nutella (noix de coco râpée)", price: 8, description: "La gourmandise absolue : une pizza chausson généreusement garnie de Nutella fondant et saupoudrée de noix de coco râpée." },
  { name: "Tiramisu", price: 3, description: "Le dessert italien traditionnel fait maison, crémeux et parfumé au café." },
  { name: "Cookie", price: 2.5, description: "Un cookie artisanal croustillant à l'extérieur et moelleux à l'intérieur, parsemé de pépites de chocolat." },
  { name: "Salade de fruits", price: 3, description: "Une sélection de fruits frais de saison pour finir sur une touche légère et vitaminée." },
  { name: "Glace Ben & Jerry's", price: 4, description: "Les célèbres pots de glace aux morceaux gourmands, plusieurs parfums disponibles." },
  { name: "Glaces", price: "1.10 à 2.90", description: "Un large choix de glaces pour tous les goûts." },
  { name: "Magnum", price: 3, description: "L'incontournable bâtonnet glacé pour une pause fraîcheur." },
];

export const boissons: MenuItem[] = [
  { name: "Soft", price: 2, description: "Canettes de soda fraîches (Coca-Cola, Fanta, Sprite, etc.)." },
  { name: "Red Bull", price: 2.5, description: "La boisson énergisante pour un coup de boost." },
  { name: "Eau plate", price: 1, description: "Bouteille d'eau minérale 50cl." },
  { name: "Eau gazeuse", price: 2.5, description: "Bouteille d'eau gazeuse pour une fraîcheur pétillante." },
  { name: "Jus de pomme", price: 3, description: "Jus de pomme artisanal local, pur fruit." },
  { name: "Café", price: 1, description: "Un expresso serré ou allongé pour conclure votre repas." },
  { name: "Cidre brut", price: 3, description: "Cidre local de Mayenne, parfait pour accompagner vos pizzas." },
  { name: "Bière Heineken", price: 2.5, description: "Bière blonde classique en bouteille 33cl." },
  { name: "Bière Cousin", price: 4.5, description: "Bière artisanale locale de caractère." },
  { name: "Pression Peretti", price: 4.5, description: "Bière à la pression, fraîche et servie dans les règles de l'art." },
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
