import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'سيروم فيتامين سي',
    price: '150 درهم',
    imageUrl: 'https://www.shutterstock.com/image-photo/beautiful-still-life-composition-featuring-600nw-2630575637.jpg',
    description: 'سيروم لتفتيح البشرة ومكافحة التجاعيد، غني بمضادات الأكسدة.',
    isBestseller: true,
  },
  {
    id: 2,
    name: 'كريم أساس مات',
    price: '200 درهم',
    imageUrl: 'https://png.pngtree.com/png-vector/20210602/ourmid/pngtree-3d-beauty-cosmetics-product-design-png-image_3350323.jpg',
    description: 'تغطية كاملة تدوم طويلاً مع لمسة نهائية طبيعية غير لامعة.',
  },
  {
    id: 3,
    name: 'أحمر شفاه "Ruby Red"',
    price: '120 درهم',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDJToTMrtJsMTkowFssMrpZH0_Khb4fQjvs-24q79R7bHRU62x5IOtNeV6BFLqFoQ-ys',
    description: 'لون أحمر غني وكريمي، يمنح شفتيك ترطيبًا ولونًا جذابًا.',
    isBestseller: true,
  },
  {
    id: 4,
    name: 'ماسكارا لتطويل الرموش',
    price: '90 درهم',
    imageUrl: 'https://5.imimg.com/data5/ANDROID/Default/2023/9/341545947/XQ/YO/QZ/57211583/product-jpeg-500x500.jpg',
    description: 'تركيبة فريدة تمنح رموشك طولاً وكثافة استثنائيين بدون تكتل.',
  },
];