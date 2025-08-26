import { Grid, Avatar, Box } from '@mui/material';
import Slider from 'react-slick';
import { makeStyles } from '@mui/styles';
import CustomTypography from '../inputs/CustomTypograpgy';
import { ProfileData } from '../constants/ProfileData';
import ContactCard from './ContactCard';
import ProjectCard from './ProjectCard';
import useMediaQuery from '@mui/material/useMediaQuery';

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
        '@media (max-width:600px)': {
            padding: '32px 8px',
            gap: '12px',
        }
    },
    skillsContainer: {
        padding: '20px',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(to bottom right, #e0e7ff, #f0f9ff)',
        '@media (max-width:600px)': {
            padding: '8px',
        }
    },
    skillCard: {
        display: 'flex !important',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        padding: '8px',
        '@media (max-width:600px)': {
            padding: '4px',
        }
    },
    projectsContainer: {
        display: 'flex !important',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'space-between',
        '@media (max-width:900px)': {
            justifyContent: 'center',
            gap: '12px',
        },
        '@media (max-width:600px)': {
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
        }
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
        '@media (max-width:900px)': {
            width: '45%',
        },
        '@media (max-width:600px)': {
            width: '100%',
        }
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
        { breakpoint: 1100, settings: { slidesToShow: 6 } },
        { breakpoint: 900, settings: { slidesToShow: 4 } },
        { breakpoint: 600, settings: { slidesToShow: 3 } },
        { breakpoint: 400, settings: { slidesToShow: 2 } },
    ],
};

const ViewProfile = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');
    const { About = "", Skills = [], Projects = [] } = ProfileData;

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            spacing={isMobile ? 2 : 4}
            sx={{
                width: isMobile ? '100%' : '90%',
                maxWidth: '1440px',
                margin: 'auto',
                paddingBottom: isMobile ? '32px' : '60px'
            }}
        >
            <Grid className={classes.profileContainer} alignItems="center" spacing={isMobile ? 2 : 4}>
                <Grid item>
                    <Avatar
                        alt="Shiva Kumar Vanam"
                        src="/images/profile.jpg"
                        sx={{
                            width: isMobile ? 120 : 200,
                            height: isMobile ? 120 : 200
                        }}
                    />
                </Grid>
                <Grid item>
                    <CustomTypography
                        text={'Shiva Kumar Vanam'}
                        styles={{ fontSize: isMobile ? '28px' : '44px' }}
                    />
                </Grid>
                <Grid>
                    <CustomTypography
                        text={About}
                        styles={{ fontSize: isMobile ? '15px' : '18px' }}
                    />
                </Grid>
            </Grid>

            <Grid item className={classes.container}>
                <CustomTypography
                    text={'Skills'}
                    styles={{ fontSize: isMobile ? '24px' : '36px' }}
                />
                <Slider {...settings} className={classes.skillsContainer}>
                    {Skills.map((skill) => (
                        <Box
                            key={skill.name}
                            className={classes.skillCard}
                            textAlign="center"
                            p={isMobile ? 1 : 2}
                        >
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                style={{
                                    width: isMobile ? 48 : 80,
                                    height: isMobile ? 48 : 80
                                }}
                            />
                            <CustomTypography
                                text={skill.name}
                                styles={{ fontSize: isMobile ? '13px' : undefined }}
                            />
                        </Box>
                    ))}
                </Slider>
            </Grid>

            <Grid item className={classes.container}>
                <CustomTypography
                    text={'Projects'}
                    styles={{ fontSize: isMobile ? '24px' : '36px' }}
                />
                <Grid className={classes.projectsContainer}>
                    {Projects.map((project) => (
                        <Box key={project.title} className={classes.projectsCard}>
                            <ProjectCard project={project} />
                        </Box>
                    ))}
                </Grid>
            </Grid>

            <ContactCard />
        </Grid>
    );
};

export default ViewProfile;
