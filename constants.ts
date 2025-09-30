import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'سيروم فيتامين سي',
    price: '150 درهم',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-35f1624a7e90?q=80&w=1964&auto=format&fit=crop',
    description: 'سيروم لتفتيح البشرة ومكافحة التجاعيد، غني بمضادات الأكسدة.',
    isBestseller: true,
  },
  {
    id: 2,
    name: 'كريم أساس مات',
    price: '200 درهم',
    imageUrl: 'https://images.unsplash.com/photo-1590155206744-4f3d5a239498?q=80&w=1974&auto=format&fit=crop',
    description: 'تغطية كاملة تدوم طويلاً مع لمسة نهائية طبيعية غير لامعة.',
  },
  {
    id: 3,
    name: 'أحمر شفاه "Ruby Red"',
    price: '120 درهم',
    imageUrl: 'https://images.unsplash.com/photo-1586490334833-79d14e3703b0?q=80&w=1974&auto=format&fit=crop',
    description: 'لون أحمر غني وكريمي، يمنح شفتيك ترطيبًا ولونًا جذابًا.',
    isBestseller: true,
  },
  {
    id: 4,
    name: 'ماسكارا لتطويل الرموش',
    price: '90 درهم',
    imageUrl: 'https://images.unsplash.com/photo-1560792522-35811c58c227?q=80&w=1974&auto=format&fit=crop',
    description: 'تركيبة فريدة تمنح رموشك طولاً وكثافة استثنائيين بدون تكتل.',
  },
];
