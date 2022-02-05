import React, {useState, ChangeEvent} from "react";
import Head from "next/head";
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography, Grid, TextField, Button, ButtonGroup, Link, Paper, styled } from "@mui/material";
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TicketCategories from "./TicketCategories";


const CreateTicketCategoryPage = () => {

    const [inputTicketCategory, setTicketInputCategory] = useState("");
    const [input_TicketCategory, set_TicketInputCategory] = useState([]);

    //for alert configuration..
    toast.configure();
    const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography,
    width: 50,
    color: theme.palette.text.secondary,
    }));

    const handleChange = (event) => {
        event.preventDefault()
        setTicketInputCategory(event.target.value);

    };

    const handleSubmit = (event) => {
        event.preventDefault()
        set_TicketInputCategory([
            inputTicketCategory,
            ...input_TicketCategory,
        ]);
        //Alert for new created ticket category
        toast.success("Created new category", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
        })
        setTicketInputCategory("");
    };

    const handleDelete = (ticketCategoryItem) => {
        const updatedList = input_TicketCategory.filter(ticketCategory => input_TicketCategory.indexOf(ticketCategory)
         != input_TicketCategory.indexOf(ticketCategoryItem))
        set_TicketInputCategory(updatedList)

        //Alert for deleting a ticket category
        toast.success("Deleted category", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 1000,
        })
    };

    return(
        <div>
            <Head>
                <title>Create Ticket Category Page</title>
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
                                <Button><Link href="CreateTicketPage">Create Ticket</Link></Button>
                                <Button variant="contained">Create Ticket Category</Button>
                                </ButtonGroup>
                            <form>
                                <div
                                style={{
                                    border: '2px solid black',
                                    borderRadius: 10,
                                    width: 300,
                                    height: 200,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    margin: 'auto',
                                    marginTop: 40,
                                    backgroundColor: '#F7F8F9'
                                }}>
                                </div>
                                <Typography
                                align="center"
                                variant="h5"
                                style={{
                                    marginTop: -190
                                }}>
                                    New Ticket Category
                                </Typography>
                                <TextField
                                required
                                value={inputTicketCategory}
                                placeholder="Ticket category"
                                onChange={handleChange}
                                style={{
                                    margin: 'auto',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    display: 'flex',
                                    marginTop: 10
                                }}>
                                </TextField>

                                <Button

                                onClick={handleSubmit}
                                type={"submit"}
                                value={"newTicketCategory"}
                                variant="contained"
                                size="large"
                                startIcon={<AddIcon/>}
                                style={{
                                    margin: 'auto',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    marginTop: 30
                                }}>
                                    Add new category
                                </Button>

                            </form>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <div
                                style={{
                                    border: '2px solid black',
                                    borderRadius: 10,
                                    width: 400,
                                    height: 200,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    margin: 'auto',
                                    marginTop: 60,
                                    backgroundColor: '#F7F8F9'
                                }}
                                >

                                <TicketCategories input_TicketCategory={input_TicketCategory} handleDelete={handleDelete}></TicketCategories>

                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </main>
        </div>
    );
}

export default CreateTicketCategoryPage