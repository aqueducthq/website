import { Box, Grid, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GradientTypography from '../components/primitives/GradientTypography.styles';
import Layout from '../components/primitives/Layout';
import { gray } from '@radix-ui/colors';
import GradientButton from '../components/primitives/GradientButton.styles';
import { graphql } from 'gatsby';

type TeamCardProps = {
    imgPath: string;
    name: string;
    title: string;
    bio: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imgPath, name, title, bio }) => {
    const [displayBio, setDisplayBio] = useState(false);

    return (
        <Grid item py={1} px={3} sx={{ background: displayBio? gray.gray11 : 'transparent', position: displayBio ? 'static' : 'relative', borderRadius: '4px' }}>
            <Box 
                onMouseOver={() => setDisplayBio(true)} 
                onMouseOut={() => setDisplayBio(false)}
            >
                <img src={imgPath} height="200px" style={{ borderRadius: '4px' }}/>
            </Box>
            <Box p={1} sx={{ textAlign: 'center'}} mt="-4px">
                <Typography variant='h6' color="white">{name}</Typography>
                <Typography variant='body2' color={gray.gray8}>{title}</Typography>
            </Box>
            <Box 
                sx={{
                    display: displayBio ? 'block' : 'none',
                    position: 'absolute',
                    backgroundColor: gray.gray11,
                    color: 'white',
                    width: '200px',
                    zIndex: 2,
                    px: 3,
                    pt: 1,
                    pb: 2,
                    ml: '-24px',
                    borderRadius: '4px',
                    textAlign: 'center',
                }}
            >
                    <Typography variant="body1" color="white">
                        {bio}
                    </Typography>

            </Box>
        </Grid>
    );
};

type TeamPageProps = {
    data: {
        allMarkdownRemark: {
            nodes: {
                frontmatter: {
                    image: string;
                    name: string;
                    title: string;
                    order: number;
                };
                rawMarkdownBody: string;
            }[];
        };
    };
};

const TeamPage: React.FC<TeamPageProps> = ({ data }) => {
    useEffect(() => {
        document.title = "Team | Aqueduct";
    });

   
    // TODO(vikram): Turn this into a more general sorting function so we don't have to hardcode the order
    // in the markdown files.
    const teamSorted = data.allMarkdownRemark.nodes.sort((tm1, tm2) => {
        return tm1.frontmatter.order - tm2.frontmatter.order;
    });

    const teamCards = teamSorted.map((teamMember) => {
        return (
            <TeamCard
                imgPath={teamMember.frontmatter.image}
                name={teamMember.frontmatter.name}
                title={teamMember.frontmatter.title}
                bio={teamMember.rawMarkdownBody}
            />
        );
    });
    
    return (
        <Layout>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h2" component="h1" fontWeight="bold" textAlign="center">
                    Meet the team&nbsp;
                    <GradientTypography variant="h2" component="span" fontWeight="bold">
                        behind Aqueduct
                    </GradientTypography>
                </Typography>

                <Box sx={{ maxWidth: '800px', my: 4 }}>
                    <Typography variant="h6" textAlign="center" my={3}>
                        Aqueduct was founded in 2020 by a team of Berkeley Computer Science professors and PhDs.
                        We believe that running machine learning in the cloud is simply too difficult.
                        This infrastructure complexity is drastically cutting the impact machine learning could have.
                    </Typography>

                    <Typography variant="h6" textAlign="center" >
                        We're laser-focused on building the simplest infrastructure possible to help machine
                        learning teams be more productive.
                    </Typography>
                </Box>

                <Box my={3}>
                    <Typography variant="body1" textTransform="uppercase" letterSpacing={2} color={gray.gray10} textAlign="center">
                        Backed by top venture firms
                    </Typography>

                    <Grid container direction="row" alignItems="center" justifyContent="center" spacing={5} my={2}>
                        <Grid item flex={1} maxWidth="30%">
                            <img src="/investors/redpoint.png" width="100%" style={{ filter: 'invert(100%) grayscale(100%)' }} />
                        </Grid>
                        
                        <Grid item flex={1} maxWidth="30%">
                            <img src="/investors/the-house-fund.png" width="100%" style={{ filter: 'invert(100%) grayscale(100%)' }} />
                        </Grid>
                        
                        <Grid item flex={1} maxWidth="30%">
                            <img src="/investors/essence.png" width="100%" style={{ filter: 'invert(100%) grayscale(100%)' }} />
                        </Grid>
                    </Grid>
                </Box>

                <Box my={3}>
                    <Typography variant="body1" textTransform="uppercase" letterSpacing={2} color={gray.gray10} textAlign="center">
                        The Team
                    </Typography>

                    {/* TODO(vikram): Connect this to CMS. */}
                    <Grid container direction="row" alignItems="center" justifyContent="center" spacing={3} my={2}>
                        {teamCards}
                        {/* <TeamCard imgPath='/team/vikram.png' name="Vikram Sreekanti" title="Co-founder & CEO" bio="" />
                        <TeamCard imgPath='/team/cgwu.png' name="Chenggang Wu" title="Co-founder & CTO" bio="" />
                        <TeamCard imgPath='/team/joeyg.png' name="Joey Gonzalez" title="Co-founder & VP, Product" bio="" />
                        <TeamCard imgPath='/team/jmh.png' name="Joe Hellerstein" title="Co-founder & Chief Scientist" bio="" />
                        <TeamCard imgPath='/team/suresh.png' name="Suresh Ravoor" title="VP, Engineering" bio="Suresh has been in engineering leadership at several startups and large companies like VMware, Cisco for ~28 years. He was most recently leading Engineering at SupportLogic (AI/ML for support) and at Springpath (hyper-converged infrastructure) before that (acq. Cisco)." />
                        <TeamCard imgPath='/team/will.png' name="Will Crosier" title="Head of Growth" bio="Will joined the team in January 2022 after spending 2 years at Enlyft. Previously, he worked KeyBank and has a degree in Finance from Washington State." />
                        <TeamCard imgPath='/team/andre.png' name="Andre Giron" title="Software Engineer" bio="Andre joined the team in August 2021 after spending a year at Joy and working at a number of companies, small & large. He has a BS from GeorgiaTech." />
                        <TeamCard imgPath='/team/eunice.png' name="Eunice Chan" title="Software Engineer" bio="Eunice has an MS and BS in EECS from Cal and joined Aqueduct in February 2022. She was previously at Walmart Labs. She is also pursuing her PhD at UIUC." />
                        <TeamCard imgPath='/team/hari.png' name="Hari Subbaraj" title="Software Engineer" bio="Hari has a BS and an MS from Cal, where he worked extensively in prediction infrastructure. He worked at LeapYear before joining the team in July 2021." />
                        <TeamCard imgPath='/team/kenxu.png' name="Kenneth Xu" title="Software Engineer" bio="Kenneth has a BS and MS from Stanford, and he spent 4 years at Dropbox, working on the file system infrastructure team, before joining Aqueduct in June 2021." />
                        <TeamCard imgPath='/team/saurav.png' name="Saurav Chhatrapati" title="Software Engineer" bio="Saurav has an MS and BS in EECS from Cal and joined Aqueduct in June 2021." />
                        <TeamCard imgPath='/team/wei.png' name="Wei Chen" title="Software Engineer" bio="Wei was the first engineer to join the team, having spent 4 years in the AI Infra team for Meta's voice assistant. Prior to that, Wei received his BS at Michigan and his MS at Stanford." /> */}
                    </Grid>
                </Box>

                <Box my={10} display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h3" fontWeight="bold">Join the Team</Typography>
                    <Typography variant="body1" color={gray.gray6} my={2}>
                        We're looking for team members who are excited about simplifying machine learning infrastructure.
                    </Typography>

                    <Link href="https://jobs.aqueducthq.com" sx={{ textDecoration: 'none' }}>
                        <GradientButton variant="outlined" sx={{ fontSize: '24px', mt: 3 }}>
                            See Open Roles →
                        </GradientButton>
                    </Link>
                </Box>
            </Box>
        </Layout>
    );
};

export const teamQuery = graphql`
    {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    image
                    name
                    title
                }
                rawMarkdownBody
            }
        }
    }
`;

export default TeamPage;