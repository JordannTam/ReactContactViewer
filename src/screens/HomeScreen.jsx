import React, { useEffect, useState } from "react";
import SideBar from '../components/SideBar'
import Accordion from '../components/Accordion'
const HomeScreen = () => {

    const [contacts, setContacts] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {setContacts(data);console.log(data);})
        .catch(error => console.error('Error fetching contacts:', error));  
    }, [])

    return (
        <>
            <SideBar />
            <Accordion contacts={contacts} />
        </>
    )
}

export default HomeScreen