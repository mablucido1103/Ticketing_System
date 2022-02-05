import { Button, styled, FormControl, MenuItem, Select, SelectChangeEvent,} from "@mui/material";
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

import React, {useState, ChangeEvent} from "react";
import Head from "next/head";
import { TypeScriptConfig } from "next/dist/server/config-shared";


const TicketCategories = (props, handleDelete) => {

    const input_TicketCategory = props.input_TicketCategory; 
    const chooseTicketCategories = props.chooseTicketCategories;

    const [listOfCategories, set_ListOfCategories] = React.useState<string[]>([]);

        const handleChange = (event: SelectChangeEvent <typeof input_TicketCategory>) => {
            const {
                target: {value},
            }   = event;
            set_ListOfCategories(
                typeof value === 'string' ? value.split(',') : value,
            );
        };
    
       
            
        return(
            <div>
                <Head>
                    <title>Ticket Categories</title>
                </Head>

                <main>
                    <FormControl sx={{m: 1, width: 300}}>
                        <Select
                        multiple
                        value={input_TicketCategory}
                        onChange={handleChange}
                        >
                        <MenuItem
                        key={input_TicketCategory}
                        value={input_TicketCategory}
                        >
                            <ul>
                                {
                                    input_TicketCategory.length >=1 ? input_TicketCategory.map((ticketCategoryItem, idx) => {
                                        return <li key={idx}>{ticketCategoryItem}
                                        <Button
                                        onClick={() => props.handleDelete(ticketCategoryItem)}
                                        color="error"
                                        startIcon={<HighlightOffTwoToneIcon/>}>
                                        </Button>
                                        </li> 
                                                                
                                    })
                                    : "Create Ticket Category."
                                }
                            </ul>
                        </MenuItem>
                        </Select>
                    </FormControl>             
                </main>
            </div>
        );
    
}

export default TicketCategories


