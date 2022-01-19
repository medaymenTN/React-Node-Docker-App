import { Company } from "../entities/company";
import SPECIALTY from "../entities/enum";

export const data: Company[] = [
  {
    name: "Quanta Services",
    city: "Houston, Texas, United States",
    id: 1,
    speciality: SPECIALTY.ELECTRICITY,
    logo: "https://pbs.twimg.com/profile_images/1094382423264026624/IO-qEppE_400x400.jpg",
  },
  {
    name: "EMCOR Group Inc.",
    city: "Norwalk, Connecticut, United States",
    id: 2,
    speciality: SPECIALTY.ELECTRICITY,
    logo: "https://cdn.contactcenterworld.com/images/company/emcor-group-inc.-600px-logo.jpg",
  },
  {
    name: "MasTec",
    city: "Coral Gables, Florida, United States",
    id: 3,
    speciality: SPECIALTY.ELECTRICITY,
    logo: "https://s3-symbol-logo.tradingview.com/mastec--600.png",
  },
  {
    name: "Beaver Excavating Co.",
    city: "Beaver Constructors, Inc.",
    id: 5,
    speciality: SPECIALTY.EXCAVATION,
    logo: "https://www.beaverconstructors.com/wp-content/uploads/2018/05/excavating-logo.png",
  },
  {
    name: "Drill Tech Drilling & Shoring Inc.",
    city: "Antioch, CA 94509, United States",
    id: 6,
    speciality: SPECIALTY.EXCAVATION,
    logo: "https://3dx3nm1sxbi22vphvyt608e1-wpengine.netdna-ssl.com/wp-content/uploads/Logo.png",
  },
  {
    name: "Independence Excavating",
    city: "Cleveland, OH, United States",
    id: 7,
    speciality: SPECIALTY.EXCAVATION,
    logo: "https://www.independencedemolition.com/ui/rev/images/logo.56823f77.png",
  },

  {
    name: "Danze",
    city: "OH, United States",
    id: 8,
    speciality: SPECIALTY.PLUMBING,
    logo: "https://www.phcppros.com/ext/resources/DO-NOT-DELETE/Danze-by-gerber-logo.jpg?t=1519405228&width=1080",
  },
  {
    name: "DreamLine Shower",
    city: "Texas United States",
    id: 9,
    speciality: SPECIALTY.PLUMBING,
    logo: "https://images3.plumbersstock.com/155/155/category/american_standard_775_9j74lf",
  },
  {
    name: "Bemis Company",
    city: "Florida, United States",
    id: 10,
    speciality: SPECIALTY.PLUMBING,
    logo: "https://images1.plumbersstock.com/155/155/category/bemis_company_776_jpwmjw",
  },
];
