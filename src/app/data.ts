export const portfolioData = {
    personalInfo: {
        name: "Jacques Giraudeau",
        title: "Formateur IA & Technologies du Numérique",
        subtitle: "Au service de la formation et de la pédagogie",
        email: "jacques.giraudeau@gmail.com",
        phone: "06 14 02 83 68",
        location: "Marseille et périphérie / Cassis",
        linkedin: "https://www.linkedin.com/in/jacques-giraudeau-71539020",
        websites: ["jacquesgiraudeau.com", "blog.jacquesgiraudeau.com"],
        catchphrase: "Déployer un LMS ou former à l’IA ne pose pas de problème technique. Le vrai enjeu, c’est l’adoption par les équipes."
    },
    about: {
        summary: "Professeur agrégé d'économie Gestion option marketing diplômé ESC Marseille (Kedge) et Master 2 MFEG ingénierie de la formation à distance (Université Rennes). Expert en ingénierie de formation, je conçois des modules E-learning et accompagne les établissements dans le déploiement de leurs plateformes numériques (Moodle, Chamilo, Google Workspace). J'interviens également sur l'adoption de l'IA générative dans les pratiques pédagogiques.",
        skills: [
            "Ingénierie de la formation à distance (LMS/LCMS)",
            "Formation de formateurs",
            "Intelligence Artificielle Pédagogique",
            "Administration Moodle / Chamilo / Theia",
            "Google Workspace for Education",
            "Didactique Économie & Gestion",
            "Marketing Digital & Négociation"
        ],
        certifications: [
            "Agrégation Economie Gestion Marketing",
            "Master 2 Ingénierie de la Formation à Distance",
            "Certificat Gestion de Projet (Centrale Lille)",
            "DigiMOOC Certification"
        ]
    },
    experience: [
        {
            role: "Formateur Indépendant Freelance",
            company: "Giraudeau Jacques",
            period: "Octobre 2025 - Présent",
            location: "Cassis / Marseille",
            description: "Accompagnement des organismes de formation sur l'IA et le numérique. Mise en place de plateformes LMS, formation des équipes à l'usage des outils digitaux."
        },
        {
            role: "Responsable de Projet Numérique",
            company: "Lycée Sully",
            period: "Avril 2016 - Décembre 2025",
            location: "Marseille",
            description: "Administration de la plateforme Theia, coordination du projet 'Classe Numérique' et tablettes. Formation des équipes enseignantes aux nouveaux outils."
        },
        {
            role: "Gestionnaire des Plateformes de Formation",
            company: "LTP Sully",
            period: "Janvier 2008 - Décembre 2025",
            location: "Marseille",
            description: "Installation et maintenance des outils (Claroline, Chamilo, Moodle). Conception de modules e-learning. Administration de la suite Google pour l'éducation."
        },
        {
            role: "Formateur d'Enseignants (Master MEEF)",
            company: "ISFEC Institut Saint Cassien",
            period: "Septembre 2013 - Décembre 2025",
            location: "Région de Marseille",
            description: "Enseignement de la didactique de l'économie gestion (Module Méthodologie et Commercialisation). Préparation aux oraux du CAPET/Agrégation."
        },
        {
            role: "Enseignant Agrégé Économie Gestion",
            company: "Lycée Sully",
            period: "Septembre 1990 - Décembre 2025",
            location: "Marseille",
            description: "Professeur référent BTS NDRC, Bachelor Marketing. Enseignement en négociation, marketing digital, gestion de projet. Mise en place de projets de classe inversée."
        }
    ],
    education: [
        {
            school: "Université Rennes 1",
            degree: "Master 2, Ingénierie de la formation à Distance",
            year: "2011 - 2012"
        },
        {
            school: "KEDGE Business School",
            degree: "DESCAF, Marketing Gestion",
            year: "1981 - 1985"
        },
        {
            school: "École Centrale de Lille",
            degree: "Certificat Gestion de Projet (MOOC)",
            year: "2013"
        }
    ],
    projects: [
        {
            title: "NDRC Atelier (Solution Digitale E5)",
            description: "Application 'tout-en-un' révolutionnaire pour le BTS NDRC. Elle fusionne la puissance du WHM Manager (création automatique de sites élèves) avec un tableau de bord de suivi des compétences WordPress/PrestaShop. Une plateforme unique pour automatiser l'infrastructure et piloter la réussite pédagogique.",
            link: "https://ndrc-skills.vercel.app/",
            tags: ["Next.js", "Infrastructure WHM", "Suivi Pédagogique", "SaaS", "E-learning"]
        },
        {
            title: "WHM Manager",
            description: "Gestionnaire d'infrastructures cPanel/WHM automatisé. Permet le provisioning rapide de comptes d'hébergement pour les apprenants, le clonage de sites WordPress/PrestaShop et la gestion centralisée du déploiement pédagogique.",
            link: "https://whm-manager-production.up.railway.app/",
            tags: ["Next.js", "API WHM", "Automatisation", "DevOps Pédagogique"]
        },
        {
            title: "Évaluation CEJM",
            description: "Plateforme collaborative de suivi des compétences. Permet la confrontation visuelle entre l'auto-évaluation de l'étudiant et la notation du formateur, basée sur des observables détaillés et des critères personnalisables.",
            link: "https://eval-cejm-app.vercel.app/",
            tags: ["Next.js", "Pédagogie", "Suivi Compétences"]
        },
        {
            title: "ProfVirtuel (AppliComp NDRC)",
            description: "Assistant pédagogique intelligent boosté à l'IA pour accompagner les étudiants et professeurs en BTS NDRC.",
            link: "https://applicompndrc.vercel.app/",
            tags: ["Next.js", "IA Gemini", "SaaS"]
        },
        {
            title: "AppliProf NDRC",
            description: "Application de suivi et de gestion pour les enseignants. Outil d'aide à l'évaluation et au pilotage.",
            link: "https://appliprofndrc.onrender.com/",
            tags: ["Web App", "Outil Métier"]
        },
        {
            title: "Suivi CCF NDRC",
            description: "Application complète de gestion et de suivi des Contrôles en Cours de Formation (CCF) pour le BTS NDRC. Permet la digitalisation des fiches E4 et E6, le dépôt de documents par les étudiants et l'évaluation par les professeurs.",
            link: "https://ccfbts.vercel.app/",
            tags: ["Fullstack", "Next.js", "Digitalisation examen"]
        },
        {
            title: "Échecs Calanques",
            description: "Site vitrine moderne et dynamique pour le club d'échecs de Cassis. Présentation des activités, agenda des tournois et inscription en ligne, avec une identité visuelle forte.",
            link: "https://echecs-calanques.fr/",
            tags: ["Site Vitrine", "Design UI/UX", "Next.js"]
        },
        {
            title: "PostInsta",
            description: "Plateforme IA de génération et gestion de contenus Instagram. Automatise la création de calendriers éditoriaux, légendes et images grâce à l'IA (Claude & Gemini). Idéal pour les créateurs de contenu et community managers.",
            link: "https://postinsta-one.vercel.app/",
            tags: ["Next.js", "IA Claude & Gemini", "SaaS", "Social Media"]
        },
        {
            title: "Regata",
            description: "Application de briefing tactique intelligent pour les régates à la voile. Croise les données météo Météo-France, les marées et la topographie pour générer des recommandations tactiques de course en temps réel.",
            link: "https://regata-two.vercel.app/",
            tags: ["Next.js", "IA Claude", "Météo", "Navigation"]
        },
        {
            title: "Vos futurs projets...",
            description: "Des solutions sur mesure pour digitaliser vos processus de formation. Discutons-en ensemble !",
            link: "#contact",
            tags: ["Sur Mesure", "Innovation"]
        }
    ]
};
