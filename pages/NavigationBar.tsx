import React, { useState } from "react";
import Head from "next/head";
import { Typography, AppBar, Box, Grid, ButtonGroup, Button, Link} from "@mui/material";

const NavigationBar = () => {


const [tickets, setTickets] = useState([]);
    return(
        <div>
            <Head>
                <title>Navigation Bar</title>
            </Head>
            <main>
                <div>
                    <Box>
                        <Grid container>
                            <Grid item xs={12} md={12} lg={12}>
                                <AppBar>
                                    <Typography
                                    variant="h2"  
                                    style={{
                                    marginLeft: 50,
                                    marginTop: 30,
                                    }}>
                                        MT
                                    </Typography>
                                        <ButtonGroup
                                        variant="text"
                                        size="large"
                                        color="primary"
                                        style={{
                                        backgroundColor: 'white',
                                        margin: 'auto',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        }}>
                                            <Button><Link href="./CreateTicketPage">Create</Link></Button>
                                            <Button><Link href="./ViewTicketPage">View</Link></Button>
                                            <Button><Link href="./DeleteTicketPage">Delete</Link></Button>
                                       </ButtonGroup>
                                </AppBar>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </main>
        </div>
        
    );
}

export default NavigationBar;