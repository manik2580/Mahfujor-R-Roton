export interface SearchItem {
  title: string;
  category: string;
  href: string;
  description?: string;
}

export const searchData: SearchItem[] = [
  // Navigation Links
  { title: 'Home', category: 'Navigation', href: '#home', description: 'Back to the top' },
  { title: 'About', category: 'Navigation', href: '#about', description: 'Learn more about me' },
  { title: 'Services', category: 'Navigation', href: '#services', description: 'What I can do for you' },
  { title: 'Poetry', category: 'Navigation', href: '#poetry', description: 'My literary works' },
  { title: 'Blog', category: 'Navigation', href: '#blog', description: 'Insights and thoughts' },
  { title: 'Posters', category: 'Navigation', href: '#posters', description: 'Poster gallery and creative works' },
  { title: 'Courses', category: 'Navigation', href: '#courses', description: 'My educational journey' },
  { title: 'Contact', category: 'Navigation', href: '#contact', description: 'Get in touch' },

  // Projects
  { title: 'Digital Ecosystem Explorer', category: 'Project', href: '#portfolio', description: 'Immersive 3D environment' },
  { title: 'View Design', category: 'Project', href: '#portfolio', description: 'Visual language and UI/UX' },
  { title: 'Read Story', category: 'Project', href: '#portfolio', description: 'Narrative behind the creation' },

  // Blogs
  { title: 'আমি আমিই তো ছিলাম', category: 'Blog', href: '#blog', description: 'Self Discovery' },
  { title: 'চক্রাকারে ফিরে আসি', category: 'Blog', href: '#blog', description: 'Philosophy' },
  { title: 'অদৃশ্য মানুষ', category: 'Blog', href: '#blog', description: 'Social' },
  { title: 'নীরব প্রহরী', category: 'Blog', href: '#blog', description: 'Nature' },

  // Poetry
  { title: 'তোমার জন্য', category: 'Poetry', href: '#poetry', description: 'Romance' },
  { title: 'কল্পকথার গল্প', category: 'Poetry', href: '#poetry', description: 'Fantasy' },
  { title: 'অপেক্ষার প্রহর', category: 'Poetry', href: '#poetry', description: 'Waiting' },
  { title: 'মহাকাশের নিঃস্তব্ধতা', category: 'Poetry', href: '#poetry', description: 'Cosmic' },
  { title: 'মরীচিকার প্রেম', category: 'Poetry', href: '#poetry', description: 'Illusion' },
  { title: 'ধ্বংসের তীরে', category: 'Poetry', href: '#poetry', description: 'Apocalyptic' },
  { title: 'অগ্নিস্নান', category: 'Poetry', href: '#poetry', description: 'Spiritual' },

  // Services
  { title: 'Web Design', category: 'Service', href: '#services', description: 'Visual layouts' },
  { title: 'UI/UX Design', category: 'Service', href: '#services', description: 'User interfaces' },
  { title: 'Frontend Development', category: 'Service', href: '#services', description: 'Modern frameworks' },
  { title: 'Creative Development', category: 'Service', href: '#services', description: '3D and animations' },
  { title: 'Branding Concepts', category: 'Service', href: '#services', description: 'Visual identities' },
  { title: 'Digital Storytelling', category: 'Service', href: '#services', description: 'Literature and tech' },
];
