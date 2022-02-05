import React from "react";
import Head from "next/head";
import { Typography, Box, Grid, Button, } from "@mui/material";

const ViewTicketPage = () => {
    return( 
        <div>
            <Head>
                <title>View Ticket Page</title>
            </Head>

            <main>
                <div>
                    <Box>
                        <Grid container>
                             <Grid item xs={12} md={12} lg={12}>
                                 <Typography
                                variant="h3"
                                style={{
                                    marginLeft: 150,
                                    marginTop: 170,
                                }}>
                                    Active Tickets:
                                 </Typography>
                                <div
                                style={{
                                    border: '2px solid black',
                                    borderRadius: 10,
                                    width: '80vw',
                                    height: 400,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display:'flex',
                                    margin: 'auto',
                                    marginTop:  40,
                                    backgroundColor: '#F7F8F9'
                                }}>
                                </div>
                                <Typography
                                variant="h3"
                                style={{
                                    marginLeft: 150,
                                    marginTop: 120,
                                }}>
                                    Finished Tickets:
                                 </Typography>
                             </Grid>
                        </Grid>
                    </Box>
                </div>
            </main>
        </div>
    );
}

export default ViewTicketPage