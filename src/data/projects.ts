export type ProjectType = 'website' |  'iva' | 'banner' | 'email';

export interface SubnavItem {
    id: string;
    label: string;
    type: 'iva' | 'banner' | 'email';
    src: string;
    view?: string;
}

export interface Project {
    id: string;
    titleShort: string;
    titleLong: string;
    descShort: string;
    descLong: string[];
    stackShort: string[];
    stackLong: string[];
    type: ProjectType;
    thumbnail: string;
    thumbnailAlt: string;
    liveUrl?: string;
    subnav?: SubnavItem[];
}

export const projects: Project[] = [
    {
        id: 'pmg-website',
        'titleShort': 'PMG Website',
        'titleLong': 'Precision Medicine Group Careers Website',
        'descShort': 'Responsive careers site with dynamic job listings and location/job type filters.',
        'descLong': [
            'Built a fully custom WordPress theme using Bootstrap, pulling in API feeds to generate dynamic careers pages based on designer layouts.'
        ],
        'stackShort': ['WordPress', 'ACF', 'Bootstrap', 'JavaScript'],
        'stackLong': ['WordPress', 'Advanced Custom Fields (ACF)', 'Bootstrap', 'CSS/Sass', 'JavaScript', 'jQuery', 'Sketch', 'Photoshop', 'Illustrator', 'Gulp', 'PHP', 'API', 'REST&nbsp;API'],
        'type': 'website',
        'thumbnail': '/img/precision-medicine-group-companies-960.webp',
        'thumbnailAlt': 'Precision Medicine Group Careers Website',
        'liveUrl': 'https://careers.precisiongroupcompanies.com/',
    },

    {
        id: 'ingrezza-quiz',
        'titleShort': 'Ingrezza TD Diagnosis Quiz',
        'titleLong': 'Ingrezza Tardive Dyskinesia (TD) Diagnosis Quiz',
        'descShort': 'Interactive touch quiz for trade show kiosks with randomized questions and real-time scoring.',
        'descLong': [
            'Adapted and extensively modified an existing quiz to match creative designs for trade show kiosks and iPad use. Implemented randomized questions, scoring logic, animated timers, and automated screenshots for review of over 100 pages.'
        ],
        'stackShort': ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
        'stackLong': ['HTML', 'CSS/Sass', 'JavaScript', 'jQuery', 'Bootstrap', 'Gulp', 'Adobe XD', 'Photoshop', 'iPad deployment'],
        'type': 'iva',
        'thumbnail': '/img/quiz-start-960.webp',
        'thumbnailAlt': 'Ingrezza Tardive Dyskinesia (TD) Diagnosis Quiz',
        'subnav': [
            { id: 'quiz-start', 'label': 'View Start Screen', type: 'iva', 'src': '/img/quiz-start-960.webp' },
            { id: 'quiz-question', 'label': 'View Question Screen', type: 'iva', 'src': '/img/quiz-question-960.webp' },
            { id: 'quiz-answer', 'label': 'View Answer Screen', type: 'iva', 'src': '/img/quiz-answer-960.webp' },
            { id: 'quiz-score', 'label': 'View Score Screen', type: 'iva', 'src': '/img/quiz-score-960.webp' }
        ]
    },

    {
        id: 'banner-ads',
        'titleShort': 'Animated HTML Banner Ads',
        'titleLong': 'Animated HTML Banner Ads',
        'descShort': 'Fixed-size HTML5 banner ads with GSAP animation for pharma compaigns.',
        'descLong': [
            'Created multiple HTML5 banner ads with GSAP-based animation for digital campaigns. Built banners that were fully animated and interactive, ensuring consistency with client designs and specifications across all ad size variations.'
        ],
        'stackShort': ['HTML', 'CSS', 'GSAP', 'JavaScript'],
        'stackLong': ['HTML', 'CSS/Sass', 'GSAP', 'JavaScript', 'Figma', 'Adobe XD', 'Photoshop', 'Internal Banner Proof', 'DoubleClick Studio', 'ClickTags', 'Gulp'],
        'type': 'banner',
        'thumbnail': '/img/banner-450.webp',
        'thumbnailAlt': 'Animated HTML Banner Ads',
        'subnav': [
            { id: 'banner-01', 'label': 'View Banner 1', type: 'banner', 'src': '/banners/banner-01/index.html' },
            { id: 'banner-02', 'label': 'View Banner 2', type: 'banner', 'src': '/banners/banner-02/index.html' },
            { id: 'banner-03', 'label': 'View Banner 3', type: 'banner', 'src': '/banners/banner-03/index.html' },
            { id: 'banner-04', 'label': 'View Banner 4', type: 'banner', 'src': '/banners/banner-04/index.html' }
        ]
    },

    {
        id: 'ingrezza-iva',
        'titleShort': 'Ingrezza TD LTC IVA ',
        'titleLong': 'Ingrezza Tardive Dyskinesia (TD) Long-Term Care (LTC) Interactive Visual Aid (IVA)',
        'descShort': 'Tablet-based interactive visual aid with guided navigation, reusable components, and automated screenshot generation.',
        'descLong': [
            'Built a multi-screen tablet-based presentation for Veeva/iRep using a redesigned navigation framework and reusable components.',
            'Reworked legacy code to reduce bloat and standardized functionality across slides.'
        ],
        'stackShort': ['HTML', 'CSS', 'JavaScript', 'PUG'],
        'stackLong': ['HTML', 'CSS/Sass', 'JavaScript', 'PUG', 'Figma', 'Illustrator', 'Photoshop', 'Gulp', 'Adobe Media Encoder', 'Veeva', 'iRep', 'Salesforce'],
        'type': 'iva',
        'thumbnail': '/img/td-improvement-01-960.webp',
        'thumbnailAlt': 'Ingrezza Tardive Dyskinesia (TD) Long-Term Care (LTC) Interactive Visual Aid (IVA)',
        'subnav': [
            { id: 'iva-home', 'label': 'View Home Screen', type: 'iva', 'src': '/img/td-improvement-01-960.webp' },
            { id: 'iva-screen-2', 'label': 'View Screen 2', type: 'iva', 'src': '/img/td-improvement-02-960.webp' },
            { id: 'iva-screen-3', 'label': 'View Screen 3', type: 'iva', 'src': '/img/td-improvement-03-960.webp' },
            { id: 'iva-screen-4', 'label': 'View Screen 4', type: 'iva', 'src': '/img/td-improvement-04-960.webp' }
        ]
    },

    {
        id: 'cleviprex-website',
        'titleShort': 'Cleviprex Website',
        'titleLong': 'Cleviprex Website',
        'descShort': 'WordPress site updates, new page builds, and custom ACF-driven content implementation.',
        'descLong': [
            'Contributed to a large custom WordPress site by implementing new pages, updating existing content, and making global code changes within a collaborative development environment. Worked within a custom theme using Advanced Custom Fields (ACF), creating new fields and templates as needed.'
        ],
        'stackShort': ['WordPress', 'ACF', 'JavaScript', 'CSS'],
        'stackLong': ['WordPress', 'Advanced Custom Fields (ACF)', 'CSS/Sass', 'Bootstrap', 'JavaScript', 'Gulp', 'Photoshop'],
        'type': 'website',
        'thumbnail': '/img/cleviprex-960.webp',
        'thumbnailAlt': 'Cleviprex Website',
        'liveUrl': 'https://cleviprex.com/',
    },

    {
        id: 'ingrezza-email',
        'titleShort': 'Ingrezza TD Unbranded RTE',
        'titleLong': 'Ingrezza Tardive Dyskinesia (TD) Rep-Triggered Email (RTE)',
        'descShort': 'Responsive rep-triggered HTML email with dynamic content fragments and cross-client compatibility.',
        'descLong': [
            'Developed responsive HTML email from designer comps using a component-based template system. Built modular content fragments for Veeva Vault that dynamically populate rep-specific data and selected content sections.'
        ],
        'stackShort': ['HTML Email', 'CSS', 'Veeva'],
        'stackLong': ['HTML (table-based email development)', 'CSS/Sass', 'Veeva Vault', 'React-based template system', 'Webpack', 'Photoshop', 'Email testing workflows'],
        'type': 'email',
        'thumbnail': '/img/email-desktop.webp',
        'thumbnailAlt': 'Ingrezza Tardive Dyskinesia (TD) Rep-Triggered Email (RTE)',
        'subnav': [
            { id: 'email-desktop', 'label': 'View Desktop Email (scrollable)', type: 'email', 'view': 'project-desktop-email', 'src': '/img/email-desktop.webp' },
            { id: 'email-mobile', 'label': 'View Mobile Email (scrollable)', type: 'email', 'view': 'project-mobile-email', 'src': '/img/email-mobile.webp' }
        ],
    }
]