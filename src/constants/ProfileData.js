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
            title: 'Digital Asset Management System (DAM)',
            about: 'Robust system to streamline digital asset storage, organization, retrieval, and accessibility with seamless UI and backend integration.',
            description: 'Built an enterprise-grade system to manage digital assets effectively. Integrated scalable backend architecture with intuitive UI. Enabled advanced search and filters for faster retrieval.',
            logo: './src/assets/svg-images/dam.svg',
            technologies: [
                { name: "React", logo: svgLogos.reactjs, styleKey: 'reactJs' },
                { name: "Node", logo: svgLogos.nodejs, styleKey: 'nodeJs' },
                { name: "MongoDB", logo: svgLogos.mongodb, styleKey: 'mongoDb' },
            ],
            responsibilities: [
                'Designed and developed an intuitive and user-friendly UI/UX',
                'Implemented advanced search and filtering for efficient asset access',
                'Architected scalable backend services to handle large volumes of assets',
                'Ensured seamless integration between frontend and backend components'
            ],
            role: 'Full Stack Developer',
            duration: 'Nov 2024 - Present',
            company: 'Mango Mass Media Pvt Ltd',
        },
        {
            title: 'Reports & Data Export Module',
            about: 'An end-to-end reporting module that supports XLSX/CSV export, custom UI, and backend data computation over multiple collections for analytics.',
            description: 'Designed intuitive report UI and backend computation logic. Automated XLSX/CSV export based on dynamic filters. Improved reporting efficiency and cross-team analytics.',
            logo: './src/assets/svg-images/reports.svg',
            technologies: [
                { name: "React", logo: svgLogos.reactjs, styleKey: 'reactJs' },
                { name: "Node", logo: svgLogos.nodejs, styleKey: 'nodeJs' },
                { name: "xlsx", logo: svgLogos.mongodb, styleKey: 'xlsx' },
            ],
            responsibilities: [
                'Developed interactive React-based UI for report selection and filters',
                'Built backend reporting engine to compute data across multiple collections',
                'Integrated XLSX and CSV export capabilities',
                'Improved operational efficiency by automating report generation workflows'
            ],
            role: 'Full Stack Developer',
            duration: 'Nov 2024 - Present',
            company: 'Mango Mass Media Pvt Ltd',
        },
        {
            title: 'Sentinel – Customs Management System',
            about: 'A newly built logistics management system for handling customs clearance with improved UI/UX and 50% faster performance compared to the earlier version.',
            description: 'Rebuilt the entire application from scratch with a modern UI. Integrated real-time APIs and optimized workflows. Achieved 50% faster performance over the previous version.',
            logo: './src/assets/svg-images/sentinel.svg',
            technologies: [
                { name: "React", logo: svgLogos.reactjs, styleKey: 'reactJs' },
                { name: "Node", logo: svgLogos.nodejs, styleKey: 'nodeJs' },
                { name: "Hapi", logo: svgLogos.mongodb, styleKey: 'mongoDb' },
            ],
            responsibilities: [
                'Designed and implemented a new version of the system from scratch',
                'Developed user-friendly, responsive UI components using React',
                'Integrated RESTful APIs with backend services using Node and Hapi.js',
                'Optimized performance, resulting in 50% faster operations than the previous version',
                'Enhanced system usability and improved client satisfaction'
            ],
            role: 'Frontend Developer',
            duration: 'Apr 2023 - Oct 2024',
            company: 'Unifo Pvt Ltd',
        },
        {
            title: 'Micro Frontend Dashboard Integration',
            about: 'Modular dashboards built using micro frontend architecture, enabling seamless integration with other systems via Iframe and secured with AWS Cognito.',
            description: 'Implemented interactive dashboards with micro frontend architecture. Established iframe-based communication between modules. Made UI and backend changes to support cross-module integration.',
            logo: './src/assets/svg-images/frontend.svg',
            technologies: [
                { name: "React", logo: svgLogos.reactjs, styleKey: 'reactJs' },
                { name: "Iframe", logo: svgLogos.nodejs, styleKey: 'nodeJs' },
                { name: "AWS", logo: svgLogos.aws, styleKey: 'aws' },
            ],
            responsibilities: [
                'Implemented micro frontend architecture using iframe-based module embedding',
                'Designed reusable and responsive dashboard UI components using React',
                'Integrated AWS Cognito for secure, authenticated access across modules',
                'Developed backend adjustments to facilitate cross-module data flow',
                'Enabled smooth interaction between connected modules through iframe messaging'
            ],
            role: 'UI Developer',
            duration: 'Apr 2023 - Oct 2024',
            company: 'Unifo Pvt Ltd',
        },
        {
            title: 'Data Migration Microservice',
            about: 'Backend microservice to migrate data from DynamoDB to MongoDB with compatibility checks and performance optimization.',
            description: 'Developed a backend service for cross-database migration. Used object-oriented design to maintain schema integrity. Enhanced data transfer performance and scalability.',
            logo: './src/assets/svg-images/data-migration.svg',
            technologies: [
                { name: "React", logo: svgLogos.reactjs, styleKey: 'reactJs' },
                { name: "Node", logo: svgLogos.nodejs, styleKey: 'nodeJs' },
                { name: "MongoDB", logo: svgLogos.mongodb, styleKey: 'mongoDb' },
                { name: "DynamoDB", logo: svgLogos.mongodb, styleKey: 'dynamoDb' },
            ],
            responsibilities: [
                'Developed backend microservice for data migration from DynamoDB to MongoDB',
                'Applied OOP principles to ensure schema compatibility and maintainability',
                'Enhanced performance for large-scale data transfers and workflows'
            ],
            role: 'Backend Developer',
            duration: 'Apr 2023 - Oct 2024',
            company: 'Unifo Pvt Ltd',
        }
    ]
};
