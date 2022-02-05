import React, {useState} from "react";
import Head from "next/head";
import Link from "next/link";
import { Typography, TextField, Box, Grid, Button, ButtonGroup, Select, SelectChangeEvent, Paper, styled} from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddIcon from '@mui/icons-material/Add';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import TicketCategories from "./TicketCategories";


const CreateTicketPage = () => {

    const [ticketTitleInput, setTicketTitleInput] = useState("");
    const [ticketMessageInput, setTicketMessageInput] = useState("");

    const [chooseTicketCategories, set_ChooseTicketCategories] = useState([]);

    const [store_TicketInput, set_StoreTicketInput] = useState([]);
    const [store_TicketMessageInput, set_TicketMessageInput] = useState([]);

    const handleTicketTitle = (event) => {
        event.preventDefault();
        setTicketTitleInput(event.target.value);
    };

    const handleTicketMessage = (event) => {
        event.preventDefault();
        setTicketMessageInput(event.target.value);
    };

     //AlertConfiguration
     toast.configure();
     const Item = styled(Paper)(({ theme }) => ({
         ...theme.typography,
         padding: theme.spacing(0),
         margin: 16,
         textAlign: "center",
         width: 50,
         color: theme.palette.text.secondary,
     }));

    function handleSubmit(event) {
        event.preventDefault();
        
        //Alert for new ticket created
        toast.success("New ticket created", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
        });

        const newTicketCreated = {
            id: new Date().getTime().toString(),
            title: ticketTitleInput,
            categories: "",
            ticketMessage: ticketMessageInput,
            status: "Pending",
        }

        setTicketTitleInput("");
        setTicketMessageInput("");
    }

    return(
        <div>
            <Head>
                <title>Create Ticket Page</title>
            </Head>

            <main>
                <div>
                    <Box>
                        <Grid container>
                            <Grid item xs={12} md={12} lg={12}>
                                <ButtonGroup
                                variant="text"
                                size="large"
                                style={{
                                    backgroundColor: 'white',
                                    border: '0px solid white',
                                    marginTop: 180,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex'
                                }}>
                                <Button variant="contained"><a href="">Create Ticket</a></Button>
                                <Button><Link href="./CreateTicketCategoryPage">Create Ticket Category</Link></Button>
                                </ButtonGroup>
                                
                                <form>
                                    <div
                                    style={{
                                        border: '2px solid black',
                                        borderRadius: 10,
                                        width: 300,
                                        height: 400,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        margin: 'auto',
                                        marginTop: 40,
                                        backgroundColor: '#F7F8F9'
                                    }}>
                                    </div>
                                    <Typography
                                    variant="h4"
                                    align="center"
                                    style={{
                                        marginTop: -390
                                    }}>
                                        New Ticket
                                    </Typography>
                                    <TextField
                                    onChange={handleTicketTitle}
                                    value={ticketTitleInput}
                                    variant="outlined"
                                    size="medium"
                                    placeholder="New Ticket Title"
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                    }}
                                    >
                                    </TextField>
                                    <div
                                    style={{
                                        border: '1px solid black',
                                        borderRadius: 10,
                                        width: 200,
                                        height: 100,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        margin: 'auto',
                                        marginTop: 10
                                    }}>
                                        {/* display categories here */}
                                      
                                    </div>
                                    <TextField
                                    onChange={handleTicketMessage}
                                    value={ticketMessageInput}
                                    placeholder="Message"
                                    style={{
                                        margin: 'auto',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        marginTop: 10
                                    }}>
                                    </TextField>

                                    <Button
                                    onClick={handleSubmit}
                                    type="submit"
                                    variant="contained"
                                    startIcon={<AddIcon/>}
                                    style={{
                                        margin: 'auto',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        marginTop: 50,
                                    }}>
                                        Add Ticket
                                    </Button>
                                </form>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </main>
        </div>
    );
}

export default CreateTicketPage;