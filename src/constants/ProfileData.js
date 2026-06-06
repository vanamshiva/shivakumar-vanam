import svgLogos from '../assets/svg-images';

export const ProfileData = {
    Summary: `Full Stack Developer with 3+ years building production MERN systems, AWS-hosted microservices, and AI-powered automation pipelines. Proficient in React.js, Node.js, Python FastAPI, Docker, GitHub Actions CI/CD, and AWS (EC2, S3, Secrets Manager). Built a production AI document digitization system achieving 90%+ field extraction accuracy, reducing processing time by 90% and scaling daily throughput by 100–250%. Experienced in containerized deployments, automated pipelines, secure secrets management, and test-driven development.`,

    Skills: [
        { name: "HTML",       logo: svgLogos.html },
        { name: "CSS",        logo: svgLogos.css },
        { name: "JavaScript", logo: svgLogos.js },
        { name: "React",      logo: svgLogos.reactjs },
        { name: "Node.js",    logo: svgLogos.nodejs },
        { name: "MongoDB",    logo: svgLogos.mongodb },
        { name: "MySQL",      logo: svgLogos.mysql },
        { name: "AWS",        logo: svgLogos.aws },
    ],

    SkillCategories: [
        {
            category: 'Languages',
            skills: ['JavaScript (ES6+)', 'TypeScript', 'Python'],
        },
        {
            category: 'Frontend',
            skills: ['React.js', 'Redux Toolkit', 'React Router', 'Material UI', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
        },
        {
            category: 'Backend',
            skills: ['Node.js', 'Express.js', 'Hapi.js', 'FastAPI', 'RESTful APIs', 'Microservices', 'Mongoose ODM'],
        },
        {
            category: 'DevOps & Cloud',
            skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD Pipelines', 'AWS EC2', 'AWS S3', 'AWS Secrets Manager', 'PM2', 'Vertex AI'],
        },
        {
            category: 'Databases',
            skills: ['MongoDB', 'MySQL', 'DynamoDB'],
        },
        {
            category: 'AI / ML',
            skills: ['Gemini 2.5 Flash', 'RAG Pipelines', 'LLM Batching', 'Pydantic v2', 'PyMongo', 'boto3'],
        },
        {
            category: 'Testing & Tools',
            skills: ['Jest', 'React Testing Library', 'Postman', 'ESLint', 'Prettier'],
        },
        {
            category: 'Version Control',
            skills: ['Git', 'GitHub', 'GitLab'],
        },
    ],

    Projects: [
        {
            accent: '#8B5CF6',
            title: 'AI-Powered DAM Digitization',
            about: 'End-to-end AI pipeline transforming unstructured movie agreement PDFs into validated structured JSON using Gemini 2.5 Flash, achieving 90%+ field extraction accuracy.',
            logo: svgLogos.damLogo,
            highlight: '90%+ Accuracy · 90% Faster Processing',
            technologies: [
                { name: "Python",    styleKey: 'python' },
                { name: "FastAPI",   styleKey: 'fastApi' },
                { name: "Docker",    styleKey: 'docker' },
                { name: "AWS S3",    styleKey: 'aws' },
                { name: "Vertex AI", styleKey: 'vertexAi' },
            ],
            responsibilities: [
                'Built FastAPI + Gemini 2.5 Flash pipeline with RAG over schema and legal corpora',
                'Achieved 90%+ field extraction accuracy; reduced legal analysis dependency by 70–80%',
                'Containerized with Docker; built GitHub Actions CI/CD pipeline to AWS EC2',
                'Managed secrets via AWS Secrets Manager (boto3); monitored production with PM2',
                'Reduced processing time by ~90% (50 min → 5 min); scaled throughput by 100–250%',
            ],
            role: 'Full Stack + DevOps Engineer',
            duration: 'Nov 2024 – Present',
            company: 'Mango Mass Media Pvt Ltd',
        },
        {
            accent: '#6366F1',
            title: 'Digital Asset Management (DAM)',
            about: 'Enterprise system managing digital assets across 35+ data models covering agreements, rights, titles, partners, and platforms with advanced search and secure access.',
            logo: svgLogos.damLogo,
            technologies: [
                { name: "React",   styleKey: 'reactJs' },
                { name: "Node.js", styleKey: 'nodeJs' },
                { name: "MongoDB", styleKey: 'mongoDb' },
                { name: "AWS S3",  styleKey: 'aws' },
                { name: "JWT",     styleKey: 'jwt' },
            ],
            responsibilities: [
                'Designed responsive UI using React.js, Material-UI, Redux, and React Router',
                'Implemented advanced search, dynamic filters, and pagination across 10K+ record datasets',
                'Built secure file upload with Multer & react-dropzone integrated with AWS S3',
                'Architected 35+ data models; integrated JWT auth, cron jobs, and Nodemailer',
                'Developed XLSX and CSV export features using ExcelJS and csv-writer',
            ],
            role: 'Full Stack Developer',
            duration: 'Nov 2024 – Present',
            company: 'Mango Mass Media Pvt Ltd',
        },
        {
            accent: '#3B82F6',
            title: 'Reports & Data Export Module',
            about: 'End-to-end reporting module supporting XLSX/CSV export, custom UI, and backend computation across multiple MongoDB collections for analytics.',
            logo: svgLogos.reportsLogo,
            technologies: [
                { name: "React",   styleKey: 'reactJs' },
                { name: "Node.js", styleKey: 'nodeJs' },
                { name: "XLSX",    styleKey: 'xlsx' },
            ],
            responsibilities: [
                'Developed interactive React-based UI for report selection and dynamic filters',
                'Built backend reporting engine computing data across multiple collections',
                'Integrated XLSX and CSV export using ExcelJS and csv-writer',
                'Automated report generation workflows, improving operational efficiency',
            ],
            role: 'Full Stack Developer',
            duration: 'Nov 2024 – Present',
            company: 'Mango Mass Media Pvt Ltd',
        },
        {
            accent: '#14B8A6',
            title: 'Sentinel – Customs Management',
            about: 'Enterprise logistics system for customs clearance rebuilt from scratch with modern UI, achieving 50% performance improvement and 80% reduction in manual processing.',
            logo: svgLogos.sentinelLogo,
            technologies: [
                { name: "React",   styleKey: 'reactJs' },
                { name: "Node.js", styleKey: 'nodeJs' },
                { name: "Hapi.js", styleKey: 'hapiJs' },
            ],
            responsibilities: [
                'Built the system from scratch with modern, reusable React components and Redux state management',
                'Automated Excel-to-JSON data transformation pipeline, reducing manual effort by 80% and enabling same-day report delivery',
                'Integrated RESTful APIs with Node.js and Hapi.js; maintained 90%+ Jest unit test coverage',
                'Improved API response times by ~30% through async programming and concurrent load optimisation',
                'Achieved 50% faster performance than the previous version',
            ],
            role: 'Software Development Engineer',
            duration: 'Apr 2023 – Oct 2024',
            company: 'Unifo Pvt Ltd',
        },
        {
            accent: '#F59E0B',
            title: 'Micro Frontend Dashboard',
            about: 'Modular dashboards using micro frontend architecture, secured with AWS Cognito and integrated via iframe communication; reduced time-to-deploy per module by enabling parallel team releases.',
            logo: svgLogos.frontendLogo,
            technologies: [
                { name: "React",       styleKey: 'reactJs' },
                { name: "AWS Cognito", styleKey: 'aws' },
                { name: "Iframe",      styleKey: 'iframe' },
            ],
            responsibilities: [
                'Implemented micro frontend architecture for independently deployable components',
                'Reduced time-to-deploy per module by enabling parallel team releases',
                'Integrated AWS Cognito for secure authentication and role-based access control across multi-tenant dashboards',
                'Developed reusable dashboard UI and cross-module iframe communication',
            ],
            role: 'UI Developer',
            duration: 'Apr 2023 – Oct 2024',
            company: 'Unifo Pvt Ltd',
        },
        {
            accent: '#10B981',
            title: 'Data Migration Microservice',
            about: 'Backend microservice migrating data from DynamoDB to MongoDB using batch processing with OOP/SOLID principles and full API compatibility.',
            logo: svgLogos.dataMigrationLogo,
            technologies: [
                { name: "Node.js",  styleKey: 'nodeJs' },
                { name: "MongoDB",  styleKey: 'mongoDb' },
                { name: "DynamoDB", styleKey: 'dynamoDb' },
            ],
            responsibilities: [
                'Built microservice for DynamoDB to MongoDB migration using batch processing',
                'Applied OOP and SOLID principles for maintainable, scalable architecture',
                'Ensured API compatibility and performance at scale throughout the migration',
            ],
            role: 'Backend Developer',
            duration: 'Apr 2023 – Oct 2024',
            company: 'Unifo Pvt Ltd',
        },
    ],

    Education: [
        {
            degree: 'Bachelor of Technology',
            institution: 'Vignan Institute of Technology and Science',
            duration: '2018 – 2021',
            location: 'Hyderabad',
            cgpa: '7.5 / 10',
        },
    ],

    Certifications: [
        {
            title: 'Certified DevOps Engineer – Associate',
            issuer: 'FLM',
            status: 'In Progress',
            note: 'Expected Q3 2026',
            icon: '🏆',
        },
        {
            title: 'Certified MERN Stack Developer',
            issuer: 'NxtWave',
            status: 'Completed',
            icon: '🎓',
        },
        {
            title: 'First Prize – Project Expo',
            issuer: 'Vignan Institute of Technology and Science',
            status: 'Achievement',
            icon: '🥇',
        },
    ],
};
