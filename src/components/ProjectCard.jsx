import { Grid, Box, Chip, Divider } from "@mui/material";
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
    flexGrow: 1,
    background: 'linear-gradient(to bottom, #c7d2fe, #a5f3fc, #fdf4ff)'
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
    width: '100%',
    textAlign: 'left',
    padding: '0 16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '4px',
    listStyleType: 'disc',
    paddingLeft: '48px',
    margin: 0
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
      <CustomTypography text={project.title} styles={{ fontSize: '22px', fontWeight: 600 }} />
      <CustomTypography text={project.about} styles={{ fontSize: '16px', fontWeight: 400, maxWidth: '90%' }} />

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
      <Box className={classes.listContainer} component="ul">
        {project.responsibilities?.map((item, index) => (
          <li key={index} style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
            {item}
          </li>
        ))}
      </Box>

      {/* Role and Duration */}
      {/* <CustomTypography text={`Role: ${project.role}`} styles={{ fontSize: '14px', fontWeight: 500 }} />
      <CustomTypography text={`Duration: ${project.duration}`} styles={{ fontSize: '14px', fontWeight: 500 }} /> */}
      <Grid sx={{ marginTop: 'auto', width: '100%' }}>
        <Divider style={{ height: '1px', width: '100%', marginBottom: '4px' }} />
        <CustomTypography text={`Company: ${project.company}`} styles={{ fontSize: '14px', fontWeight: 500, textAlign: 'center' }} />
      </Grid>
    </Grid>
  );
};

export default ProjectCard;
