export interface Project {
  id: string;
  title: string;
  image: string;
  gallery?: string[];
  categoryId: string; // '1' | '2' | '3' | '4' | '5'
  createdAt: string;
}

export const CATEGORIES = [
  { id: '1', label: 'Proyectos de vivienda' },
  { id: '2', label: 'Hotel, rentas cortas, centros medicos y comerciales' },
  { id: '3', label: 'Vivienda campestre' },
  { id: '4', label: 'Proyectos construidos' },
  { id: '5', label: 'Supervision de obra' },
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Proyectos de vivienda', image: '/images/projects/1.vivienda/oneProject.jpg', categoryId: '1', createdAt: '2026-08-10' },
  { id: '2', title: 'Proyectos de vivienda #1', image: '/images/projects/1.vivienda/twoProject.jpg', categoryId: '1', createdAt: '2026-08-10' },
  { id: '3', title: 'Proyectos de vivienda #2', image: '/images/projects/1.vivienda/threeProject.jpg', categoryId: '1', createdAt: '2026-08-10' },
  { id: '4', title: 'Proyectos de vivienda #3', image: '/images/projects/1.vivienda/fourtProject.jpg', categoryId: '1', createdAt: '2026-08-10' },
  { id: '5', title: 'Proyectos de vivienda #4', image: '/images/projects/1.vivienda/sixProject.jpg', categoryId: '1', createdAt: '2026-08-10' },
  { id: '6', title: 'Hotel', image: '/images/projects/2.hotel/oneProject.jpg', categoryId: '2', createdAt: '2026-08-10' },
  { id: '7', title: 'Hotel', image: '/images/projects/2.hotel/twoProject.jpg', categoryId: '2', createdAt: '2026-08-10' },
  { id: '8', title: 'Hotel', image: '/images/projects/2.hotel/fourtProject.jpg', categoryId: '2', createdAt: '2026-08-10' },
  { id: '9', title: 'Vivienda campestre #1', image: '/images/projects/3.campestre/twoProject.jpg', categoryId: '3', createdAt: '2026-08-10' },
  { id: '11', title: 'Vivienda campestre #2', image: '/images/projects/3.campestre/threeProject.jpg', categoryId: '3', createdAt: '2026-08-10' },
  { id: '12', title: 'Vivienda campestre #3', image: '/images/projects/3.campestre/fourtProject.jpg', categoryId: '3', createdAt: '2026-08-10' },
  { id: '13', title: 'Proyecto construidos #1', image: '/images/projects/4.proyectos_construidos/oneProject.jpg', categoryId: '4', createdAt: '2026-08-10' },
  { id: '14', title: 'Proyecto construido #2', image: '/images/projects/4.proyectos_construidos/twoProject.jpg', categoryId: '4', createdAt: '2026-08-10' },
  { id: '15', title: 'Proyecto construido #3', image: '/images/projects/4.proyectos_construidos/threeProject.jpg', categoryId: '4', createdAt: '2026-08-10' },
  { id: '16', title: 'Proyecto construido #4', image: '/images/projects/4.proyectos_construidos/fourtProject.jpg', categoryId: '4', createdAt: '2026-08-10' },
  { id: '17', title: 'Proyecto construido #5', image: '/images/projects/4.proyectos_construidos/fiveProject.jpg', categoryId: '4', createdAt: '2026-08-10' },
  { id: '18', title: 'Proyecto construido #6', image: '/images/projects/4.proyectos_construidos/sixProject.jpg', categoryId: '4', createdAt: '2026-08-10' },
  { id: '19', title: 'Proyecto construido #7', image: '/images/projects/4.proyectos_construidos/sevenProject.jpg', categoryId: '4', createdAt: '2026-08-10' },
  { id: '20', title: 'supervision', image: '/images/projects/5.supervision/oneProject.jpg', categoryId: '5', createdAt: '2026-08-10' },
  { id: '21', title: 'supervision', image: '/images/projects/5.supervision/twoProject.jpg', categoryId: '5', createdAt: '2026-08-10' },
  { id: '22', title: 'supervision', image: '/images/projects/5.supervision/threeProject.jpg', categoryId: '5', createdAt: '2026-08-10' },
  { id: '23', title: 'supervision', image: '/images/projects/5.supervision/fourtProject.jpg', categoryId: '5', createdAt: '2026-08-10' },
  { id: '24', title: 'supervision', image: '/images/projects/5.supervision/fiveProject.jpg', categoryId: '5', createdAt: '2026-08-10' },
];