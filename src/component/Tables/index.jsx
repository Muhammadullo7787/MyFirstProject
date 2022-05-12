import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default ({ list, buy, job, lev, id, nam, act, age, tel, adr }) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {id && (<StyledTableCell>Id</StyledTableCell>)}
                            {nam && (<StyledTableCell>Name</StyledTableCell>)}
                            {tel && (<StyledTableCell >Call</StyledTableCell>)}
                            {adr && (<StyledTableCell >Adress</StyledTableCell>)}
                            {age && (<StyledTableCell >Age</StyledTableCell>)}
                            {buy && (<StyledTableCell >Height&nbsp;(sm)</StyledTableCell>)}
                            {job && (<StyledTableCell >Job</StyledTableCell>)}
                            {lev && (<StyledTableCell >Level</StyledTableCell>)}
                            {act && (<StyledTableCell >Actions</StyledTableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((row) => (
                            <StyledTableRow key={row.name}>
                                {id && (<StyledTableCell >{row.id}</StyledTableCell>)}
                                {nam && (<StyledTableCell component="th" scope="row">
                                <Checkbox value={row.id} />{row.name}
                                </StyledTableCell>)}
                                {tel && (<StyledTableCell >{row.tel}</StyledTableCell>)}
                                {adr && (<StyledTableCell >{row.adres}</StyledTableCell>)}
                                {age && (<StyledTableCell >{row.age}</StyledTableCell>)}
                                {buy && (<StyledTableCell >{row.height}</StyledTableCell>)}
                                {job && (<StyledTableCell >{row.job}</StyledTableCell>)}
                                {lev && (<StyledTableCell >{row.level}</StyledTableCell>)}
                                {act && (<StyledTableCell >
                                    <CardActions>
                                        <Button onClick={() => { console.log(row.id); }} size='medium' variant='contained' color='success' >Edit</Button>
                                        <Button  onClick={() => { console.log(row.level);}} size='medium' variant='contained' color='error' >Delete</Button>
                                    </CardActions>
                                </StyledTableCell>)}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
