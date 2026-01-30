export interface Location {
  name: string;
  type: "restaurant" | "distributeur";
  lat: number;
  lng: number;
  address?: string;
}

// Coordonnées approximatives - à ajuster avec les adresses exactes
export const locations: Location[] = [
  {
    name: "Pizza Playa - Restaurant",
    type: "restaurant",
    lat: 48.4536,
    lng: -0.2008,
    address: "Pré-en-Pail",
  },
  {
    name: "Distributeur Pré-en-Pail",
    type: "distributeur",
    lat: 48.4545,
    lng: -0.1995,
    address: "Pré-en-Pail",
  },
  {
    name: "Distributeur Saint-Samson",
    type: "distributeur",
    lat: 48.4100,
    lng: -0.4350,
    address: "Saint-Samson",
  },
  {
    name: "Distributeur Gorron",
    type: "distributeur",
    lat: 48.4122,
    lng: -0.8114,
    address: "Gorron-les-Chapelles",
  },
  {
    name: "Distributeur Saint-Denis-sur-Sarthon",
    type: "distributeur",
    lat: 48.4311,
    lng: -0.0531,
    address: "Saint-Denis-sur-Sarthon",
  },
  {
    name: "Distributeur Saint-Pierre-des-Nids",
    type: "distributeur",
    lat: 48.3856,
    lng: -0.1306,
    address: "Saint-Pierre-des-Nids",
  },
  {
    name: "Distributeur Villaines-la-Juhel",
    type: "distributeur",
    lat: 48.3483,
    lng: -0.2719,
    address: "Villaines-la-Juhel",
  },
];
