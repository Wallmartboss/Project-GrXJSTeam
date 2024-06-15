import project1 from '../images/my_projects/1-Power_pulse_webservice-1x-min.jpg';
import project1Retina from '../images/my_projects/1-Power_pulse_webservice-2x-min.jpg';
import project2 from '../images/my_projects/2-Mimino-1x-min.jpg';
import project2Retina from '../images/my_projects/2-Mimino-2x-min.jpg';
import project3 from '../images/my_projects/3-vyshyvanka-1x-min.jpg';
import project3Retina from '../images/my_projects/3-vyshyvanka-2x-min.jpg';
import project4 from '../images/my_projects/4-green_harvest-1x-min.jpg';
import project4Retina from '../images/my_projects/4-green_harvest-2x-min.jpg';
import project5 from '../images/my_projects/5-wallet-1x-min.jpg'
import project5Retina from '../images/my_projects/5-wallet-2x-min.jpg';
import project6 from '../images/my_projects/6-chego_jewerly-1x-min.jpg';
import project6Retina from '../images/my_projects/6-chego_jewerly-2x-min.jpg';
import project7 from '../images/my_projects/7-energy_flow-1x-min.jpg';
import project7Retina from '../images/my_projects/7-energy_flow-2x-min.jpg';
import project8 from '../images/my_projects/8-fruitbox-1x-min.jpg';
import project8Retina from '../images/my_projects/8-fruitbox-2x-min.jpg';
import project9 from '../images/my_projects/9-english-1x-min.jpg';
import project9Retina from '../images/my_projects/9-english-2x-min.jpg';
import project10 from '../images/my_projects/10-starlight-1x-min.jpg';
import project10Retina from '../images/my_projects/10-starlight-2x-min.jpg';

import sprite from '../images/icons/sprite.svg';

const projects = [

    {
        image: project4,
        imageRetina: project4Retina,
        techStack: 'HTML, CSS, JavaScript, Git',
        title: 'Green harvest webservice',
        link: 'https://yuriikyrychenko9.github.io/codeOrganic/'
    },
    {
        image: project5,
        imageRetina: project5Retina,
        techStack: 'HTML, CSS, React, Git',
        title: 'wallet webservice',
        link: 'https://wallmartboss.github.io/Project-GrXJSTeam/'
    },
    {
        image: project9,
        imageRetina: project9Retina,
        techStack: 'HTML, CSS, JavaScript',
        title: 'English excellence webservice',
        link: '#'
    },
    {
        image: project1,
        imageRetina: project1Retina,
        techStack: 'HTML, CSS, JavaScript',
        title: 'power pulse webservice',
        link: '#'
    },
    {
        image: project2,
        imageRetina: project2Retina,
        techStack: 'HTML, CSS, React, Node.js ',
        title: 'mimino website',
        link: '#'
    },
    {
        image: project3,
        imageRetina: project3Retina,
        techStack: 'HTML, CSS, React',
        title: 'vyshyvanka vibes Landing Page',
        link: '#'
    },
    {
        image: project6,
        imageRetina: project6Retina,
        techStack: 'HTML, CSS, React, Git',
        title: 'chego jewelry website',
        link: '#'
    },
    {
        image: project7,
        imageRetina: project7Retina,
        techStack: 'HTML, CSS, React, Node.js',
        title: 'energy flow webservice',
        link: '#'
    },
    {
        image: project8,
        imageRetina: project8Retina,
        techStack: 'HTML, CSS, Node.js, Git',
        title: 'fruitbox online store',
        link: '#'
    },
    {
        image: project10,
        imageRetina: project10Retina,
        techStack: 'HTML, CSS, React, Git',
        title: 'starlight studio landing page',
        link: '#'
    }
];

let loadedProjects = 0;
const projectsPerPage = 3;
const projectList = document.querySelector('.project-list');
const loadMoreButton = document.querySelector('.load-more');



loadMoreButton.addEventListener('click', (event) => loadProjects(event));

loadProjects();


function loadProjects(event) {
    const initialLoadedProjects = loadedProjects;

    for (let i = loadedProjects; i < initialLoadedProjects + projectsPerPage; i++) {
        if (i >= projects.length) {
            loadMoreButton.style.display = 'none';
            break;
        }

        const project = projects[i];
        const listItem = document.createElement('li');

        listItem.innerHTML = `
           <div class="img-container">
            <img class="project-img" src="${project.image}" srcset="${project.image} 1x, ${project.imageRetina} 2x" alt="${project.title}">
            </div>
            <p class="project-text">Tech Stack: ${project.techStack}</p>
            <div>
             <h3 class="project-subtitle">${project.title}</h3>
            <a class="project-link" href="${project.link}" target="_blank">VISIT
            <svg class="project-icon" width="15" height="15">
            <use href="${sprite}#icon-up-right"></use>
            </svg>
            </a>
            </div>
        `;

        projectList.appendChild(listItem);
        loadedProjects++;
    }

    if (event && event.type === 'click') {
        const firstNewProject = projectList.children[initialLoadedProjects];
        if (firstNewProject) {
            const topPosition = firstNewProject.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    }
}