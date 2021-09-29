export const data = {
    skills : {
        skills: [
            { key: 0, label: 'React', level:80, color:'#00454a', image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png" },
            { key: 1, label: 'JavaScript', level:25, color:'#a12559', image:"https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png"},
            { key: 2, label: 'Ionic', level:50, color:'#044343', image:"https://cdn0.iconfinder.com/data/icons/designer-skills/128/ionic-256.png"},
            { key: 3, label: 'PHP', level:75, color:'#1b1f3a', image: "https://cdn4.iconfinder.com/data/icons/logos-3/568/php-logo-256.png"},
            { key: 4, label: 'WordPress', level:13, color:'#f6c90e', image: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/WordPress-256.png" },
            { key: 5, label: 'Java', level:13, color:'#f6c90e', image: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-java-software-develop-command-language-256.png" },
        ]
    },
    projects : {
        projects: [
            {
                name: 'Site Taxi',
                outils: ['Tous','Bootstrap','JavaScript','PHP'],
                toolsImage: [
                    'https://img.icons8.com/color/2x/javascript.png',
                    'https://img.icons8.com/officel/2x/php-logo.png'
                ],
                year: 2020,
                status: 'En cours',
                links: {
                    repository : {
                        image: 'https://img.icons8.com/fluent/2x/github.png',
                        link: 'https://github.com/dankokonate'
                    },
                    details: {
                        image: 'https://img.icons8.com/material-outlined/72/view-details.png',
                        link: 'http://www.taxi-viano-montlhery.fr/'
                    }
                },
                desciption: 'Création d\'une page web de présentation pour un chauffeur de taxi',
                image: 'https://images.freeimages.com/images/large-previews/bba/taxi-sign-1512600.jpg'
            },
            {
                name: 'Portfolio',
                outils: ['Tous','Bootstrap','Material UI'],
                toolsImage: [
                    'https://img.icons8.com/color/2x/react-native.png',
                    'https://img.icons8.com/color/2x/material-ui.png',
                ],
                year: 2020,
                status: 'En cours',
                links: {
                    repository : {
                        image: 'https://img.icons8.com/fluent/2x/github.png',
                        link:'https://dankokonate.netlify.app'
                    },
                    details: {
                        image: 'https://img.icons8.com/material-outlined/72/view-details.png',
                        link: 'https://github.com/dankokonate'
                    }
                },
                desciption: 'Création d\'un portfolio permettant de mettre en avant mes compétences et connaissances',
                image: 'https://cdn.pixabay.com/photo/2016/07/12/19/08/laptop-1512838_960_720.png'
            },
            {
                name: 'Site Afriki-Saxa',
                outils: ['Tous','Symfony','JavaScript'],
                toolsImage: [
                    'https://www.nextedia.com/wp-content/uploads/2019/11/template-logo-page-partenaire-Symfony.png',
                    'https://img.icons8.com/color/2x/javascript.png',
                ],
                year: 2020,
                status: 'En cours',
                links: {
                    repository : {
                        image: 'https://img.icons8.com/fluent/2x/github.png',
                        link: 'https://github.com/dankokonate'
                    },
                    details: {
                        image: 'https://img.icons8.com/material-outlined/72/view-details.png',
                        link: 'https://github.com/dankokonate'
                    }
                },
                desciption: 'Un projet personnel de création d\'un site e-commerce',
                image: 'https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140604_960_720.jpg'
            },
            {
                name: 'Web App Smart Campus',
                outils: ['Tous','ReactJS'],
                toolsImage: ['https://img.icons8.com/color/2x/react-native.png'],
                year: 2020,
                status: 'En cours',
                links: {
                    repository : {
                        image: 'https://img.icons8.com/fluent/2x/github.png',
                        link: 'https://github.com/dankokonate'
                    },
                    details: {
                        image: 'https://img.icons8.com/material-outlined/72/view-details.png',
                        link: 'https://github.com/dankokonate'
                    }
                },
                desciption: 'Utque aegrum corpus quassari etiam levibus solet offensis, ita animus eius angustus ',
                image: 'https://www.skapane.com/wp-content/uploads/2020/01/smart-campus-1.png'
            },
            {
                name: 'Education Fonctionnelle',
                outils: ['Tous','WordPress'],
                toolsImage: ['https://img.icons8.com/color/72/wordpress.png', 'https://img.icons8.com/windows/2x/yoast.png',],
                year: 2020,
                status: 'En cours',
                links: {
                    repository : {
                        image: 'https://img.icons8.com/fluent/2x/github.png',
                        link: 'https://github.com/dankokonate'
                    },
                    details: {
                        image: 'https://img.icons8.com/material-outlined/72/view-details.png',
                        link: 'https://github.com/dankokonate'
                    }
                },
                desciption: 'Utque aegrum corpus quassari etiam levibus solet offensis, ita animus eius angustus ',
                image: 'https://cdn.pixabay.com/photo/2016/03/29/18/37/seo-1288976_960_720.jpg'
            }
        ]
    },
    experiences : {
        experiences: [
            {
                status: 'Apprenti',
                area: 'Paris (75)',
                company: 'KUNACT',
                job: 'Chef de projet Web',
                startingDate: '09/2021',
                endingDate: '09/2022',
                description: ['J\'e suis Chef de projet chez KUNACT qui est une Association aide et \
                accompagne les entrepreneurs pour mener à bien leur projet',
                'J\'aime la formation','J\'aime la formation'],
                logo: 'https://kunact.org/wp-content/uploads/2021/01/logo-kunact-email.png',
                key: 0,
            },
            {
                status: 'Apprenti',
                area: 'Cergy (95)',
                company: 'MAEBA',
                job: 'Développeur Web',
                startingDate: '09/2020',
                endingDate: '09/2021',
                description: [
                    'Développement d’un ERP Pour Ambassade du Gabon (WinDev)',
                    'Refonte du site web de l’ambassade du Gabon',
                    'Refonte visuelle : gestion de couleur de fond, changement d\'images',
                ],
                logo:'/images/logo_bleu.jpg',
                key: 1,
            },
            {
                status: 'Job Etudiant',
                area: 'Velizy (78)',
                company: 'Auchan',
                job: 'Preparateur de commande',
                startingDate: '12/2018',
                endingDate: '08/2021',
                description: [
                    'Prepare les commandes des clients et le livre sur le quai',
                ],
                logo: 'https://res.cloudinary.com/westfielddg/image/upload/westfield-media/fr/retailer/logos/xvotuvkhefu3tozayn8r.png',
                key: 2,
            }
        ]
    },
    educations: {
        educations: [
            {
                school: 'Université Paris-Saclay',
                diploma: 'M1 MIAGE',
                startingDate: '09/2021',
                endingDate: '09/2022',
                description: 'J\'aime la formation',
                key: 2,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Logo_Universit%C3%A9_Paris-Saclay.svg/2560px-Logo_Universit%C3%A9_Paris-Saclay.svg.png',
                area: 'Évry (91)'
            },
            {
                school: 'Université Paris-Saclay',
                diploma: 'Licence 3 MIAGE',
                startingDate: '09/2020',
                endingDate: '09/2021',
                description: 'J\'aime la formation',
                key: 2,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Logo_Universit%C3%A9_Paris-Saclay.svg/2560px-Logo_Universit%C3%A9_Paris-Saclay.svg.png',
                area: 'Évry (91)'
            },
            {
                school: 'Université Paris-Saclay',
                diploma: 'L1 & L2 Informatique',
                startingDate: '09/2018',
                endingDate: '09/2020',
                description: 'J\'aime la formation',
                key: 1,
                image: 'https://medias.publidata.io/production/images/images/000/056/372/original/logo_endossement_rvb.png?1611754749',
                area: 'Evry (91)'
            },
            {
                school: 'Lycée Rosey Abantara',
                diploma: 'Bac S',
                startingDate: '09/2015',
                endingDate: '09/20216',
                description: 'J\'aime la formation',
                key: 0,
                image: 'https://www.rosey.ch/file/2015/06/le-rosey-abantara-quadri-400x163.png',
                area: 'Mali/Bamako'
            }
        ]
    }
}
