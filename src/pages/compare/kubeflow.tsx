import React, { useEffect } from 'react';
import Layout from '../../components/primitives/Layout';
import { useMediaQuery } from 'react-responsive';
import { Box, Grid, Typography } from '@mui/material';
import GradientTypography from '../../components/primitives/GradientTypography.styles'; 
import { Link } from '../../components/primitives/Link.styles';
import TryButton from '../../components/buttons/TryButton';
import CommunityButton from '../../components/buttons/CommunityButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsSpin, faDatabase, faMagnifyingGlass, faServer } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../styles/theme';
import { gray } from '@radix-ui/colors';
import FeaturesTable, { FeatureEntry } from '../../components/FeaturesTable';
import Quotes from '../../components/Quotes';
import { faPython } from '@fortawesome/free-brands-svg-icons';

const features: FeatureEntry[] = [
    {
        name: "Task orchestration",
        aqueductHas: "yes",
        competitorHas: "yes",
    },
    {
        name: "Workflow visualization",
        aqueductHas: "yes",
        competitorHas: "yes",
    },
    {
        name: "Open source",
        aqueductHas: "yes",
        competitorHas: "yes",
    },
    {
        name: "Community-driven development",
        aqueductHas: "ongoing",
        competitorHas: "yes",
    },
    {
        name: "Simple, Python-Native API",
        aqueductHas: 'yes',
        competitorHas: 'no',
    },
    {
        name: "Higher-order control flow",
        aqueductHas: "ongoing",
        competitorHas: "yes"
    },
    {
        name: "Automated data movement",
        aqueductHas: 'yes',
        competitorHas: 'no',
    },
    {
        name: "Data snapshots & versioning",
        aqueductHas: "yes",
        competitorHas: "question",
    },
    {
        name: "Custom metrics and checks",
        aqueductHas: "yes",
        competitorHas: "question",
    },
    {
        name: "Custom notifications",
        aqueductHas: "yes",
        competitorHas: "no",
    },
];

const AirflowComparison: React.FC = () => {
    useEffect(() => {
        document.title = "Kubeflow Comparison | Aqueduct";
    });
  
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <Layout isMobile={isMobile}>
            <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} alignItems="center">
                <Box 
                    flex={1} 
                    mr={isMobile ? 1 : 3} 
                    ml={isMobile ? 1 : 0}
                    textAlign={isMobile ? "center" : "left"}
                >
                    <Typography variant="h2" component="h1" fontWeight="bold">
                        Kubernetes-native,<br />
                        <GradientTypography variant="h2" component="span" display="inline" fontWeight="bold">
                            without any YAML
                        </GradientTypography>
                    </Typography>

                    <Typography variant="h6" mt={2}>
                        Kubeflow's abstractions expose endless complexity, forcing you to 
                        focus on how to manage your infrastructure. With Aqueduct, you can 
                        run workflows seamlessly on Kubernetes without any infrastructure management 
                        or YAML configs.
                    </Typography>

                    <Box display="flex" flexDirection={isMobile ? 'column': 'row' } alignItems="center" mt={3}>
                        <TryButton variant="contained" fontSize='20px' />
                        <Box ml={isMobile ? 0 : 2} mt={isMobile ? 2 : 0}>
                            <CommunityButton variant="outlined" fontSize='20px' />
                        </Box>
                    </Box>
                </Box>

                <Box 
                    mx="auto" 
                    flex={1} 
                    mt={isMobile ? 2 : 0}
                    sx={{ 
                        borderRadius: '8px',
                        backgroundColor: theme.palette.gray.darkGrayOffset,
                        px: isMobile ? 1 : 2,
                        py: 1,
                    }}>
                    <img src="/compare/airflow/main.png" style={{ borderRadius: '8px' }} width="100%" />
                </Box>
            </Box>

            <Box my={isMobile ? 6 : 12} mx="auto">
                <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center">
                    Why&nbsp;
                    <GradientTypography variant="h3" component="span" display="inline" fontWeight="bold">
                        modern ML teams
                    </GradientTypography>
                    &nbsp;prefer Aqueduct
                </Typography>

                <Grid container direction="row" spacing={4} mt={4}>
                    <Grid item xs={isMobile ? 12 : 4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Box sx={{ fontSize: '64px', color: theme.palette.logo.bright2 }}>
                            <FontAwesomeIcon icon={faPython} />
                        </Box>

                        <Typography variant="h4" my={1} textAlign="center">
                            Python-native
                        </Typography>
                        <Typography textAlign="center" color={gray.gray8}>
                            Everything in Aqueduct can be done from your Python environment. No 
                            more YAML configs, Dockerfiles, or pod specs.
                        </Typography>
                    </Grid>

                    <Grid item xs={isMobile ? 12 : 4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Box sx={{ fontSize: '64px', color: theme.palette.logo.bright2 }}>
                            <FontAwesomeIcon icon={faArrowsSpin} />
                        </Box>

                        <Typography variant="h4" my={1} textAlign="center">
                            Built for fast iteration
                        </Typography>
                        <Typography textAlign="center" color={gray.gray8}>
                            Aqueduct's Python-native API allows you to build, test, and deploy ML pipelines
                            in your existing workflows. No more YAML configs, Dockerfiles, or 
                            infrastructure management.
                        </Typography>
                    </Grid>

                    <Grid item xs={isMobile ? 12 : 4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Box sx={{ fontSize: '64px', color: theme.palette.logo.bright2 }}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Box>

                        <Typography variant="h4" my={1} textAlign="center">
                            Deep visibility
                        </Typography>
                        <Typography textAlign="center" color={gray.gray8}>
                            Aqueduct enables you to track what's running, where it's running, and whether it's 
                            working as intended &mdash; all from a single dashboard.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box my={isMobile ? 6 : 10} mx="auto" width="100%">
                <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center">
                    <GradientTypography variant="h3" component="span" display="inline" fontWeight="bold">
                        Aqueduct
                    </GradientTypography>
                    &nbsp;vs. Kubeflow
                </Typography>

                <Box mx="auto" my={3} maxWidth="800px">
                    <FeaturesTable
                        isMobile={isMobile}
                        features={features}
                        competitorHeader={
                            <img
                                src="/compare/kubeflow/kubeflow.jpeg"
                                height={isMobile ? "25px" : "35px"}
                                alt="The Kubeflow logo."
                            />
                        }
                    />
                </Box>
            </Box>

            <Box my={isMobile ? 6 : 10} mx="auto" textAlign="center" maxWidth="900px">
                <GradientTypography variant="h3" fontWeight="bold">
                    Aqueduct + Kubernetes
                </GradientTypography>

                <Typography variant="h6" color={gray.gray8} mt={2}>
                    Use Aqueduct's simple Python API to deploy and monitor workflows on an existing Kubernetes cluster.
                </Typography>

                <Typography mt={2}>
                    Aqueduct is designed to work with a <Link href="/integrations">wide variety of compute systems</Link>, 
                    including Kubernetes. Aqueduct can automatically create Kubernetes pods to deploy your workflow for you
                    and track the execution of your code over time.
                </Typography>
                
                <Typography mt={1}>
                    Learn more about how it works&nbsp;
                    <Link href="https://docs.aqueducthq.com/integrations/using-integrations/compute-integrations">here</Link>.
                </Typography>
            </Box>


            <Box my={isMobile ? 6 : 10} mx="auto">
                <Quotes isMobile={isMobile} />
            </Box>                

            <Box my={isMobile ? 6 : 10} mx="auto" display="flex" flexDirection="column" alignItems="center">
                <GradientTypography variant="h3" mb={3} fontWeight="bold" textAlign="center">
                    Try Aqueduct today
                </GradientTypography>

                <TryButton variant="outlined" fontSize="24px" />
            </Box>
        </Layout>
    );
};

export default AirflowComparison;