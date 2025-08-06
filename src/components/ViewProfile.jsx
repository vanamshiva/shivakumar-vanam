import { Grid, Avatar, Box } from '@mui/material';
import Slider from 'react-slick';
import { makeStyles } from '@mui/styles';
import CustomTypography from '../inputs/CustomTypograpgy';
import { ProfileData } from '../constants/ProfileData';
import ContactCard from './ContactCard';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        display: 'flex !important',
        flexDirection: 'column',
        gap: '32px',
    },
    profileContainer: {
        width: '100%', 
        background: "linear-gradient(to bottom, #e0e7ff, #dbeafe, #f3e8ff)",
        padding: '60px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '20px',
        borderRadius: '16px',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
    },
    skillsContainer: {
        background: 'white',
        padding: '20px',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(to bottom right, #e0e7ff, #f0f9ff)'
    },
    skillCard: {
        display: 'flex !important',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        padding: '8px',
    },
    projectsContainer: {
        display: 'flex !important',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'space-between',
    },
    projectsCard: {
        background: '#fff7ed',
        display: 'flex !important',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        width: '25%',
        flexGrow: 1,
    }
}));

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
};

const ViewProfile = () => {
    const classes = useStyles();
    const { About = "", Skills = [], Projects = [] } = ProfileData

    return (
        <Grid container direction="column" alignItems="center" spacing={4} sx={{ width: '90%', maxWidth: '1440px', margin: 'auto', paddingBottom: '60px' }}>
            <Grid className={classes.profileContainer} alignItems="center" spacing={4}>
                <Grid item>
                    <Avatar
                        alt="Shiva Kumar Vanam"
                        src="/images/profile.jpg"
                        sx={{ width: 200, height: 200 }}
                    />
                </Grid>

                <Grid item>
                    <CustomTypography text={'Shiva Kumar Vanam'} styles={{ fontSize: '44px' }} />
                </Grid>

                <Grid>
                    <CustomTypography text={About} styles={{ fontSize: '18px' }} />
                </Grid>
            </Grid>

            <Grid item className={classes.container}>
                <CustomTypography text={'Skills'} styles={{ fontSize: '36px' }} />
                <Slider {...settings} className={classes.skillsContainer}>
                    {Skills.map((skill) => (
                        <Box key={skill.name} className={classes.skillCard} textAlign="center" p={2}>
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                style={{ width: 80, height: 80 }}
                            />
                            <CustomTypography text={skill.name} />
                        </Box>
                    ))}
                </Slider>
            </Grid>

            <Grid item className={classes.container}>
                <CustomTypography text={'Projects'} styles={{ fontSize: '36px' }} />
                <Grid className={classes.projectsContainer}>
                    {Projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </Grid>
            </Grid>

            <ContactCard />
        </Grid>
    );
};

export default ViewProfile;
