import { Grid, Box, Chip } from "@mui/material";
import { makeStyles } from '@mui/styles';
import CustomTypography from "../inputs/CustomTypograpgy";
import { cssStyles } from "../constants/CssStyles";

const useStyles = makeStyles(() => ({
  projectsCard: {
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    width: '100%',
    maxWidth: 485,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '4px',
  },
  chip: {
    fontSize: '14px !important',
    fontWeight: 400,
    color: '#000 !important',
    borderRadius: '16px !important',
    padding: '6px 12px !important',
    '&:hover': {
      backgroundColor: '#e0e0e0 !important',
      border: '#b8b7b7 !important',
    },
    '&.MuiChip-outlined': {
      border: '#2196f3 !important',
    },
  },
  listContainer: {
    textAlign: 'left',
    padding: '0 16px',
  }
}));

const ProjectCard = ({ project }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.projectsCard}>
      {project.logo && (
        <div>
          <img
            src={project.logo}
            alt={project.title}
            style={{ width: 200, height: 200, objectFit: 'contain' }}
          />
        </div>
      )}
      <CustomTypography text={project.title} styles={{ fontSize: '24px', fontWeight: 600 }} />
      <CustomTypography text={project.about} styles={{ fontSize: '16px', fontWeight: 400, maxWidth: '80%' }} />

      {/* Technologies */}
      <Box className={classes.chipContainer}>
        {project.technologies?.map((tech, idx) => (
          <Chip
            key={idx}
            className={classes.chip}
            label={tech.name}
            sx={{
              backgroundColor: cssStyles.chips[tech.styleKey]?.backgroundColor || '#f1f1f1',
              border: `1px solid ${cssStyles.chips[tech.styleKey]?.border || '#d7d5d5'}`,
            }}
            variant="outlined"
          />
        ))}
      </Box>

      {/* Responsibilities */}
      <Box className={classes.listContainer}>
        {project.responsibilities?.map((item, index) => (
          <CustomTypography
            key={index}
            text={`• ${item}`}
            styles={{ fontSize: '14px', color: '#555' }}
          />
        ))}
      </Box>

      {/* Role and Duration */}
      <CustomTypography text={`Role: ${project.role}`} styles={{ fontSize: '14px', fontWeight: 500 }} />
      <CustomTypography text={`Duration: ${project.duration}`} styles={{ fontSize: '14px', fontWeight: 500 }} />
      <CustomTypography text={`Company: ${project.company}`} styles={{ fontSize: '14px', fontWeight: 500 }} />
    </Grid>
  );
};

export default ProjectCard;
