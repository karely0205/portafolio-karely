// ** 1. CAMBIO DE TEMA (CLARO/OSCURO) **
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
} else {
    body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// ** 2. CAMBIO DE IDIOMA  **
const translations = {
    es: {
        logo: "KARELY ARAGÓN",
        nav_home: "Inicio",
        nav_about: "Sobre mí",
        nav_projects: "Proyectos",
        nav_skills: "Habilidades",
        nav_contact: "Contacto",
        home_greeting: "Hola, mi nombre es",
        home_name: "Karely Yamileth Aragón Palomares",
        home_profile: "Desarroladora Front-End",
        about_title: "Sobre Mí",
        about_text: "Estudiante de Ingeniería en Tecnologías de la Información con conocimientos en Java, HTML y SQL, así como en bases de datos y redes. Experiencia en proyectos académicos y personales utilizando diversas herramientas de desarrollo. Motivada por seguir aprendiendo y aplicar mis habilidades en un entorno profesional.",
        download_cv: "Descargar CV",
        projects_title: "Proyectos Principales",
        project1_title: "Sistema gestión de créditos de una boutique",
        project1_desc: "Desarrollé un sistema de control de créditos para una tienda de ropa utilizando NetBeans, vinculado a una base de datos para registrar clientes, prendas y pagos a plazos, facilitando así la gestión interna de la boutique.",
        project1_link: "Ver Manual", 
        project2_title: "OptiRuta - Diseño de UI/UX",
        project2_desc: "Participé en el diseño de interfaces con Figma para una aplicación móvil destinada a optimizar las rutas de transporte en Mazatlán, priorizando la usabilidad, accesibilidad y experiencia de usuario.",
        project2_link: "Ver Demo", 
        tech_title: "Tecnologías:",
        skills_title: "Habilidades",
        skills_cat1: "Lenguajes",
        skills_cat2: "Bases de Datos y Redes",
        skills_cat3: "Habilidades Blandas",
        certs_title: "Certificaciones",
        certs_item1: "IT Essentials: PC Hardware and Software",
        certs_item2: "CCNAv7: Introduction to Networks",
        certs_item3: "Programador (orientado a objetos)",
        cert_link: "Ver certificado", 
        contact_title: "Contacto",
        contact_text: "Si te interesa mi perfil, no dudes en contactarme."
    },
    en: {
        logo: "KARELY ARAGON",
        nav_home: "Home",
        nav_about: "About Me",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",
        home_greeting: "Hello, my name is",
        home_name: "Karely Yamileth Aragón Palomares",
        home_profile: "Front-End Developer",
        about_title: "About Me",
        about_text: "Information Technology Engineering student with knowledge in Java, HTML, and SQL, as well as databases and networks. Experience in academic and personal projects using various development tools. Motivated to keep learning and apply my skills in a professional environment.",
        download_cv: "Download CV",
        projects_title: "Main Projects",
        project1_title: "Boutique Credit Management System",
        project1_desc: "I developed a credit control system for a clothing store using NetBeans, linked to a database to register customers, items, and installment payments, thus facilitating the boutique's internal management.",
        project1_link: "View Manual", 
        project2_title: "OptiRuta - UI/UX Design",
        project2_desc: "I participated in the design of interfaces with Figma for a mobile application aimed at optimizing transport routes in Mazatlán, prioritizing usability, accessibility, and user experience.",
        project2_link: "View Demo", 
        tech_title: "Technologies:",
        skills_title: "Skills",
        skills_cat1: "Languages",
        skills_cat2: "Databases & Networks",
        skills_cat3: "Soft Skills",
        certs_title: "Certifications",
        certs_item1: "IT Essentials: PC Hardware and Software",
        certs_item2: "CCNAv7: Introduction to Networks",
        certs_item3: "Programmer (Object-Oriented Programming)",
        cert_link: "View certificate", 
        contact_title: "Contact",
        contact_text: "If you are interested in my profile, do not hesitate to contact me."
    },
    fr: {
        logo: "KARELY ARAGON",
        nav_home: "Accueil",
        nav_about: "À propos de moi",
        nav_projects: "Projets",
        nav_skills: "Compétences",
        nav_contact: "Contact",
        home_greeting: "Bonjour, je m'appelle",
        home_name: "Karely Yamileth Aragón Palomares",
        home_profile: "Développeuse Front-End",
        about_title: "À propos de moi",
        about_text: "Étudiante en génie des technologies de l'information avec des connaissances en Java, HTML et SQL, ainsi qu'en bases de datos et réseaux. Expérience dans des projets académiques et personnels utilisant divers outils de développement. Motivée à continuer d'apprendre et à appliquer mes compétences dans un environnement professionnel.",
        download_cv: "Télécharger le CV",
        projects_title: "Projets Principaux",
        project1_title: "Système de gestion de crédit pour une boutique",
        project1_desc: "J'ai développé un système de contrôle de crédit pour un magasin de vêtements en utilisant NetBeans, relié à une base de données pour enregistrer les clients, les articles et les paiements échelonnés, facilitant ainsi la gestion interne de la boutique.",
        project1_link: "Voir Manuel", 
        project2_title: "OptiRuta - Conception UI/UX",
        project2_desc: "J'ai participé à la conception d'interfaces avec Figma pour une application mobile visant à optimiser les itinéraires de transport à Mazatlán, en priorisant l'utilisabilité, l'accessibilité et l'expérience utilisateur.",
        project2_link: "Voir Démo", 
        tech_title: "Technologies:",
        skills_title: "Compétences",
        skills_cat1: "Langages",
        skills_cat2: "Bases de données et réseaux",
        skills_cat3: "Compétences non techniques",
        certs_title: "Certifications",
        certs_item1: "IT Essentials: Matériel et logiciels PC",
        certs_item2: "CCNAv7: Introduction aux réseaux",
        certs_item3: "Programmeur (programmation orientée objet)",
        cert_link: "Voir certificat", 
        contact_title: "Contact",
        contact_text: "Si mon profil vous intéresse, n'hésitez pas à me contacter."
    }
};

function changeLanguage(lang) {
    const currentLang = translations[lang] ? lang : 'es';
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        } else {
            console.warn(`Falta traducción para la clave '${key}' en el idioma '${currentLang}'.`);
        }
    });
    localStorage.setItem('language', currentLang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'es';
    changeLanguage(savedLang);
});


const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});