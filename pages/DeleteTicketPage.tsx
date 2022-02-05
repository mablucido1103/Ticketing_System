import React from "react";
import Head from "next/head";
import { Box, Typography, Grid} from "@mui/material";

const DeleteTicketPage = () => {
    return (
        <div>
            <Head>
                <title>Delete Ticket Page</title>
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
                                    Delete Tickets:
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
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </main>
        </div>
    );
}

export default DeleteTicketPage