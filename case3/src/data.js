// src/data.js
import kopi1 from './image/kopi1.jpg';
import kopi2 from './image/kopi2.jpg';
import kopi3 from './image/kopi3.jpg';
import kopi4 from './image/kopi4.jpg';
import bijik from './image/bijik.jpg';
import bijik2 from './image/bijik2.jpg';
import bijik3 from './image/bijik3.jpg';
export const companyData = {
  name: "Kopi Nusantara",
  tagline: "Kopi Nusantara Pilihan Hati",
  description: "Kami menyediakan berbagai macam kopi lokal berkualitas dari seluruh Indonesia, diolah dengan sepenuh hati untuk memberikan pengalaman minum kopi terbaik. Dari biji kopi robusta yang pekat hingga arabika yang lembut, kami punya semuanya.Kami juga menjual biji kopi, bila anda ingin membelinya silahkan dapat dipesan lewat online maupun offline.  Kami siap melayani Anda dengan sepenuh hati."
}

export const products = [
  {
    id: 1,
    name: "Kopi Arabika Gayo",
    images: [kopi1, bijik],
    description: "Kopi yang suka rasa buah buahan ini cocok.",
    price: 35000,
  },
  {
    id: 2,
    name: "Kopi Robusta Lampung",
    images: [kopi2, bijik2],
    description: "Kopi rasa espresso yang kuat.",
    price: 30000,
  },
  {
    id: 3,
    name: "Kopi Liberika Riau",
    images: [kopi3, bijik3],
    description: "Kopi yang akan membuat anda sensasinya beda.",
    price: 32000,
  },
  {
    id: 4,
    name: "Kopi Excelsa Sulawesi",
    images: [kopi4, bijik],
    description: "Kopi langka dengan aroma unik dan rasa earthy.",
    price: 40000,
  },
];

export const testimonials = [
  {
    id: 1,
    author: "Budi Santoso",
    text: "Kopinya enak banget, Jadi pengen nongkron terus",
  },
  {
    id: 2,
    author: "Siti Nurhaliza",
    text: "Pelayanan ramah, tempatnya nyaman. Kopinya jangan ditanya lagi soal enak apa engganya",
  },
];