import { Box } from '@mui/material';
import { ProfileData } from '../../constants/ProfileData';
import SectionTitle from '../ui/SectionTitle';
import SectionWrapper from '../ui/SectionWrapper';
import ProjectCard from '../ui/ProjectCard';

const ProjectsSection = () => {
  const { Projects = [] } = ProfileData;

  return (
    <SectionWrapper id="projects" bg="#ffffff">
      <SectionTitle>Projects</SectionTitle>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
        gap: { xs: 2, md: 2.5 },
      }}>
        {Projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Box>
    </SectionWrapper>
  );
};

export default ProjectsSection;
