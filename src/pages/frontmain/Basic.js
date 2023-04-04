/* eslint-disable*/
import { useState } from 'react';



export const Score02 = () => {
    const [order] = useState('asc');
    const [orderBy] = useState('userName');
    const [selected] = useState([]);

    const isSelected = (userName) => selected.indexOf(userName) !== -1;

    return (
        <>
           
        </>
    );
};