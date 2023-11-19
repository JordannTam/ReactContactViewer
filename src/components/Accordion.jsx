import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Box } from '@mui/material';

export default function BasicAccordion(promps) {

    if (!promps.contacts){
        return (<Box>Loading...</Box>)
    }
    return (
        <>
            <Box padding='20px' marginTop='50px' display='flex' flexDirection='column' rowGap='15px'>
                {
                    promps.contacts.map(contact => (
                        <Accordion key={contact.id}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel-content"
                            id="panel-header"
                            >
                            <Box display='flex' flexDirection='row' columnGap='10px'>
                                <Avatar></Avatar>
                                <Typography marginTop='5px' gutterBottom variant='h6' >{contact.name}</Typography>
                            </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box display='flex' flexDirection='column'>
                                    <Typography gutterBottom variant='body1' >
                                        <b>Phone:</b> {contact.phone}
                                    </Typography>
                                    <Typography gutterBottom variant='body1' >
                                        <b>Username:</b> {contact.username}
                                    </Typography>
                                    <Typography gutterBottom variant='body1' >
                                        <b>Email:</b> {contact.email}
                                    </Typography>
                                    <Typography gutterBottom variant='body1' >
                                        <b>Website:</b> {contact.website}
                                    </Typography>
                                    <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel-company-content"
                                        id="panel-company-header"
                                        >
                                        <Box display='flex' flexDirection='row' columnGap='10px'>
                                            <Typography marginTop='5px' gutterBottom variant='h6' >Company</Typography>
                                        </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography gutterBottom variant='body2' >
                                            <b>Name:</b> {contact.company.name}
                                        </Typography>
                                        <Typography gutterBottom variant='body2' >
                                            <b>bs:</b> {contact.company.bs}
                                        </Typography>
                                        <Typography gutterBottom variant='body2' >
                                            <b>Catch Phrase:</b> {contact.company.catchPhrase}
                                        </Typography>

                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion >
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel-address-content"
                                        id="panel-address-header"
                                        >
                                        <Box display='flex' flexDirection='row' columnGap='10px'>
                                            <Typography marginTop='5px' gutterBottom variant='h6' >Address</Typography>
                                        </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography gutterBottom variant='body2' >
                                            <b>Street:</b> {contact.address.street}
                                        </Typography>
                                        <Typography gutterBottom variant='body2' >
                                            <b>Suite:</b> {contact.address.suite}
                                        </Typography>
                                        <Typography gutterBottom variant='body2' >
                                            <b>City:</b> {contact.address.city}
                                        </Typography>
                                        <Typography gutterBottom variant='body2' >
                                            <b>Zip Code:</b> {contact.address.zipcode}
                                        </Typography>
                                        <Typography gutterBottom variant='body2' >
                                            <b>Geographic:</b> {contact.address.geo.lat}, {contact.address.geo.lng} 
                                        </Typography>

                                        </AccordionDetails>
                                    </Accordion>

                                </Box>
                            </AccordionDetails>
                        </Accordion>
    
                    ))
                }
            </Box>
        </>
    );
}
