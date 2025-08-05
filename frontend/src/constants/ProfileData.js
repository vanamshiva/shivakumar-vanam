import svgLogos from '../assets/svg-images'

export const ProfileData = {
    About: `Software Developer with 2.5+ years of experience specializing in frontend and backend development. Proficient in JavaScript, React.js, Redux, Redux Toolkit, Node.js, Express, Hapi.js, MongoDB, and MySQL, with expertise in building scalable, high-performance applications.

    Currently a Junior Software Developer at Mango Mass Media Pvt Ltd, leading frontend development and mentoring junior developers to ensure high-quality code and best practices.

    Passionate about creating dynamic, user-friendly interfaces with React.js and Material UI, optimizing backend services for seamless system communication, and managing efficient databases with MongoDB and MySQL.

    Skilled in REST API development, state management, responsive web design, and AWS services, with hands-on experience in version control (Git/GitHub) and UI/UX optimization.

    Adept at collaborating with cross-functional teams, solving complex problems, and delivering innovative, business-driven solutions.

    Committed to continuous learning, performance optimization, and driving impactful digital experiences. Always eager to explore new technologies and improve system efficiency.`,

    Skills: [
        { name: "HTML", logo: svgLogos.html },
        { name: "CSS", logo: svgLogos.css },
        { name: "JS", logo: svgLogos.js },

        { name: "React", logo: svgLogos.reactjs },
        { name: "Node", logo: svgLogos.nodejs },

        { name: "MongoDB", logo: svgLogos.mongodb },
        { name: "mySql Lite", logo: svgLogos.mysql },
        { name: "AWS", logo: svgLogos.aws },
    ],

    Projects: [
        {
            title: 'Digital Asset Management (DAM)',
            about: 'A scalable system for storing, organizing, and retrieving digital assets with intuitive UI and efficient backend handling.',
            logo: './src/assets/svg-images/dam.svg',
            technologies: [
                { name: "React", logo: svgLogos.reactjs, styleKey: 'reactJs' },
                { name: "Node", logo: svgLogos.nodejs, styleKey: 'nodeJs' },
                { name: "MongoDB", logo: svgLogos.mongodb, styleKey: 'mongoDb' },
            ],
            responsibilities: [
                'Designed and developed a user-friendly UI/UX',
                'Integrated advanced search and filter features',
                'Optimized backend to manage large asset volumes',
                'Enabled seamless frontend-backend communication'
            ],
            role: 'Full Stack Developer',
            duration: 'Nov 2024 - Present',
            company: 'Mango Mass Media Pvt Ltd',
        },
        {
            title: 'Reports & Data Export',
            about: 'Module for generating XLSX and CSV reports to streamline business reporting processes.',
            logo: './src/assets/svg-images/reports.svg',
            technologies: [
                { name: "React", logo: svgLogos.reactjs, styleKey: 'reactJs' },
                { name: "Node", logo: svgLogos.nodejs, styleKey: 'nodeJs' },
                { name: "xlsx", logo: svgLogos.mongodb, styleKey: 'xlsx' },
            ],
            responsibilities: [
                'Built dynamic XLSX and CSV export functionality',
                'Improved operational efficiency through automated reports',
            ],
            role: 'Backend Developer',
            duration: 'Nov 2024 - Present',
            company: 'Mango Mass Media Pvt Ltd',
        },
        {
            title: 'Sentinel',
            about: 'Customs clearance management system with enhanced usability and seamless interface.',
            logo: './src/assets/svg-images/sentinel.svg',
            technologies: [
                { name: "React", logo: svgLogos.reactjs, styleKey: 'reactJs' },
                { name: "Node", logo: svgLogos.nodejs, styleKey: 'nodeJs' },
                { name: "Hapi", logo: svgLogos.mongodb, styleKey: 'mongoDb' },
            ],
            responsibilities: [
                'Developed intuitive and responsive UI components',
                'Integrated RESTful APIs with robust backend logic',
                'Boosted client satisfaction through usability improvements'
            ],
            role: 'Frontend Developer',
            duration: 'Apr 2023 - Oct 2024',
            company: 'Unifo Pvt Ltd',
        },
        {
            title: 'Micro Frontend Dashboards',
            about: 'Interactive dashboards built using micro frontend architecture and Iframe integration.',
            logo: './src/assets/svg-images/frontend.svg',
            technologies: [
                { name: "React", logo: svgLogos.reactjs, styleKey: 'reactJs' },
                { name: "Iframe", logo: svgLogos.nodejs, styleKey: 'nodeJs' },
                { name: "AWS", logo: svgLogos.aws, styleKey: 'aws' },
            ],
            responsibilities: [
                'Implemented micro frontend architecture',
                'Created reusable dashboard components',
                'Ensured secure authentication using AWS Cognito'
            ],
            role: 'UI Developer',
            duration: 'Apr 2023 - Oct 2024',
            company: 'Unifo Pvt Ltd',
        },
        {
            title: 'Data Migration Services',
            about: 'Automated migration tool for transferring data from DynamoDB to MongoDB with backend APIs.',
            logo: './src/assets/svg-images/data-migration.svg',
            technologies: [
                { name: "React", logo: svgLogos.reactjs, styleKey: 'reactJs' },
                { name: "Node", logo: svgLogos.nodejs, styleKey: 'nodeJs' },
                { name: "MongoDB", logo: svgLogos.mongodb, styleKey: 'mongoDb' },
                { name: "DynamoDB", logo: svgLogos.mongodb, styleKey: 'dynamoDb' },
            ],
            responsibilities: [
                'Developed backend microservices for data migration',
                'Ensured schema compatibility using OOP principles',
                'Improved performance of data handling workflows'
            ],
            role: 'Backend Developer',
            duration: 'Apr 2023 - Oct 2024',
            company: 'Unifo Pvt Ltd',
        }
    ]
};
