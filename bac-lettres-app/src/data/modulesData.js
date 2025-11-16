// Module 1: شعر الحماسة
export const module1Content = [
  {
    id: '01',
    title: 'نظرة عامة وأهداف',
    fileName: '01-نظرة-عامة.md',
    description: 'نظرة شاملة على المحور الأول وأهدافه التعليمية',
    icon: '📚',
    difficulty: 'مبتدئ',
  },
  {
    id: '02',
    title: 'الشعراء والنصوص',
    fileName: '02-الشعراء-والنصوص.md',
    description: 'دراسة معمقة للشعراء: أبو تمام، المتنبي، ابن هانئ',
    icon: '✍️',
    difficulty: 'متوسط',
  },
  {
    id: '03',
    title: 'منهجية التحليل',
    fileName: '03-منهجية-التحليل.md',
    description: 'منهجية كاملة لتحليل النصوص الشعرية',
    icon: '🔍',
    difficulty: 'متقدم',
  },
  {
    id: '04',
    title: 'الخصائص الفنية',
    fileName: '04-الخصائص-الفنية.md',
    description: 'الخصائص الفنية لشعر الحماسة (إيقاع، معجم، صور، أساليب)',
    icon: '🎨',
    difficulty: 'متقدم',
  },
  {
    id: '05',
    title: 'ملخص سريع',
    fileName: '05-ملخص-سريع.md',
    description: 'ملخص شامل وسريع للمحور - Cheat Sheet',
    icon: '⚡',
    difficulty: 'مبتدئ',
  },
  {
    id: '06',
    title: 'تطبيقات كتابية موجهة',
    fileName: '06-تطبيقات-كتابية-موجهة.md',
    description: '5 تحاليل نصوص + 5 مواضيع مقالات مع TTS',
    icon: '📝',
    difficulty: 'تطبيقي',
    featured: true,
  },
];

// Module 2: المنزع العقلي عند الجاحظ
export const module2Content = [
  {
    id: '01',
    title: 'نظرة عامة',
    fileName: '01-نظرة-عامة.md',
    description: 'التعريف بالجاحظ وعصره ومؤلفاته',
    icon: '📚',
    difficulty: 'مبتدئ',
  },
  {
    id: '02',
    title: 'المنهج العلمي الجاحظي',
    fileName: '02-المنهج-العلمي-الجاحظي.md',
    description: 'الأسس الستة: العقل، السماع، الشك، المعاينة، التجربة، الموضوعية',
    icon: '🧠',
    difficulty: 'متوسط',
  },
  {
    id: '03',
    title: 'منهجية تحليل النص الحجاجي',
    fileName: '03-منهجية-تحليل-النص-الحجاجي.md',
    description: 'منهجية كاملة لتحليل النصوص الحجاجية',
    icon: '🔍',
    difficulty: 'متقدم',
  },
  {
    id: '04',
    title: 'الأسلوب الجاحظي',
    fileName: '04-الأسلوب-الجاحظي.md',
    description: '10 خصائص أسلوبية فريدة للجاحظ',
    icon: '✨',
    difficulty: 'متوسط',
  },
  {
    id: '05',
    title: 'ملخص سريع',
    fileName: '05-ملخص-سريع.md',
    description: 'ملخص شامل وسريع للمحور - Cheat Sheet',
    icon: '⚡',
    difficulty: 'مبتدئ',
  },
  {
    id: '06',
    title: 'تطبيقات كتابية موجهة',
    fileName: '06-تطبيقات-كتابية-موجهة.md',
    description: '5 تحاليل نصوص حجاجية + 5 مواضيع مقالات مع TTS',
    icon: '📝',
    difficulty: 'تطبيقي',
    featured: true,
  },
];

export const modules = [
  {
    id: 'module-1',
    number: 1,
    title: 'شعر الحماسة في القرنين الثالث والرابع للهجرة',
    shortTitle: 'شعر الحماسة',
    description: 'دراسة معمقة لشعر الحماسة عند ثلاثة شعراء: أبو تمام، المتنبي، ابن هانئ الأندلسي',
    color: 'from-blue-500 to-indigo-600',
    icon: '⚔️',
    path: '/module-1',
    content: module1Content,
    totalFiles: 6,
    level: 'السنة الرابعة آداب',
    tags: ['شعر', 'حماسة', 'تحليل أدبي', 'أبو تمام', 'المتنبي', 'ابن هانئ'],
  },
  {
    id: 'module-2',
    number: 2,
    title: 'المنزع العقلي عند الجاحظ',
    shortTitle: 'المنزع العقلي',
    description: 'دراسة المنهج العلمي العقلاني عند الجاحظ من خلال كتاب الحيوان والرسائل',
    color: 'from-emerald-500 to-teal-600',
    icon: '🧠',
    path: '/module-2',
    content: module2Content,
    totalFiles: 6,
    level: 'السنة الرابعة آداب',
    tags: ['نثر', 'حجاج', 'الجاحظ', 'منهج علمي', 'اعتزال', 'نقد'],
  },
];

export const getDifficultyColor = (difficulty) => {
  const colors = {
    'مبتدئ': 'bg-green-100 text-green-800',
    'متوسط': 'bg-yellow-100 text-yellow-800',
    'متقدم': 'bg-red-100 text-red-800',
    'تطبيقي': 'bg-purple-100 text-purple-800',
  };
  return colors[difficulty] || 'bg-gray-100 text-gray-800';
};
