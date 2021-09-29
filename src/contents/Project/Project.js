import React, {Fragment} from 'react';
import ProjectsList from '../../components/front/Projects/ProjectsList';
import data from '../../data';
import axios from 'axios';

class Project extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
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
                            link: 'https://github.com/mamadou-niakate'
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
                        '<https://img.icons8.com/color/48/000000/bootstrap.png',
                        'https://img.icons8.com/color/2x/material-ui.png',
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
                            link: 'https://dankokonate.netlify.app'
                        }
                    },
                    desciption: 'Création d\'un portfolio permettant de mettre en avant mes compétences et connaissances',
                    image: 'https://886560.smushcdn.com/2037766/wp-content/uploads/2021/03/Portfolio-Agence-Digitale-Digiflix-Annecy2.png?lossy=1&strip=1&webp=1'
                },
                {
                    name: 'Lemagtimes',
                    outils: ['Tous','Wordpress','JavaScript'],
                    toolsImage: [
                        'https://wpformation.com/wp-content/uploads/2019/08/wordpress-brands.png',
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
                            link: 'https://lemagtimes.com/'
                        }
                    },
                    desciption: 'Un projet personnel de création d\'un site e-commerce',
                    image: 'https://lemagtimes.com/wp-content/uploads/2020/12/mag-1-1.jpg'
                },
                {
                    name: 'QCM',
                    outils: ['Tous','Java'],
                    toolsImage: ['https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png'],
                    year: 2021,
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
                    image: 'https://tice.univ-irem.fr/wp-content/uploads/2019/12/QCMCamlogo2.png'
                },
                
            ],
            projets:[],
        }
    }

    componentDidMount() {
        this.getProjets()
    }

    async getProjets() {
        try {
            const response = await axios.get('http://admin-portfolio1.herokuapp.com/api/projects');

            const projets =  response.data;

            this.setState({
                projets: projets['hydra:member']
            })
        }catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <Fragment>
                <ProjectsList data={this.state.projects} />
            </Fragment>

        )
    }
}
export default Project;
