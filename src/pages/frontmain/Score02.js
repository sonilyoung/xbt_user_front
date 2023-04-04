/* eslint-disable*/
import PropTypes from 'prop-types';
import { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';

import 'antd/dist/antd.css';

// material-ui
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Badge} from 'antd';

// project import
import Dot from 'components/@extended/Dot';

function createData(no,year,baseline,baselineLearning,cutScore,resultScore,resultData,diary) {
    return { no,year,baseline,baselineLearning,cutScore,resultScore,resultData,diary};
}

const rows = [
    createData(
        1,
        '2023',
        <span>1차</span>,
        1,
        60,
        80,
        <span>합격</span>,
        <span>2023-03-10</span>
    ),
    createData(
        1,
        '2023',
        <span>1차</span>,
        1,
        60,
        80,
        <span>합격</span>,
        <span>2023-03-10</span>
    ),
    createData(
        1,
        '2023',
        <span>1차</span>,
        1,
        60,
        80,
        <span>합격</span>,
        <span>2023-03-10</span>
    )
];


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'no',
        align: 'center',
        disablePadding: false,
        label: 'no'
    },    
    {
        id: 'year',
        align: 'center',
        disablePadding: false,
        label: '교육 년도'
    },
    {
        id: 'baseline',
        align: 'center',
        disablePadding: true,
        label: '차수'
    },
    {
        id: 'baselineLearning',
        align: 'center',
        disablePadding: false,
        label: '학습 차수'
        // },
        // {
        //     id: 'aper',
        //     align: 'center',
        //     disablePadding: false,
        //     label: '정답률'
    },
    {
        id: 'cutScore',
        align: 'center',
        disablePadding: false,
        label: '과락 점수'
    },
    {
        id: 'resultScore',
        align: 'center',
        disablePadding: false,
        label: '취득 점수'
    },
    {
        id: 'resultData',
        align: 'center',
        disablePadding: false,
        label: '결과'
    },    
    {
        id: 'diary',
        align: 'center',
        disablePadding: false,
        label: '학습 일지'
    },    
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        style={{ fontSize: '14px', background: 'rgb(221 219 219)' }}
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

OrderTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
    let color;
    let title;

    switch (status) {
        case 0:
            color = 'warning';
            title = 'Pending';
            break;
        case 1:
            color = 'success';
            title = 'Approved';
            break;
        case 2:
            color = 'error';
            title = 'Rejected';
            break;
        default:
            color = 'primary';
            title = 'None';
    }

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Dot color={color} />
            <Typography>{title}</Typography>
        </Stack>
    );
};

OrderStatus.propTypes = {
    status: PropTypes.number
};

// ==============================|| ORDER TABLE ||============================== //

export const Score02 = () => {
    const [order] = useState('asc');
    const [orderBy] = useState('userName');
    const [selected] = useState([]);

    const isSelected = (userName) => selected.indexOf(userName) !== -1;

    return (
        <>
            <Box>
                <TableContainer
                    sx={{
                        width: '100%',
                        overflowX: 'auto',
                        position: 'relative',
                        display: 'block',
                        maxWidth: '100%',
                        '& td, & th': { whiteSpace: 'nowrap' }
                    }}
                >
                    <Table
                        aria-labelledby="tableTitle"
                        sx={{
                            '& .MuiTableCell-root:first-of-type': {
                                pl: 2
                            },
                            '& .MuiTableCell-root:last-of-type': {
                                pr: 3
                            }
                        }}
                    >
                        <OrderTableHead order={order} orderBy={orderBy} />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
                                const isItemSelected = isSelected(row.no);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.no}
                                        selected={isItemSelected}
                                    >
                                        <TableCell align="center" style={{ width: '12%', fontSize: '14px' }}>
                                            {row.no}
                                        </TableCell>
                                        <TableCell align="center" style={{ width: '12%', fontSize: '14px' }}>
                                            {row.year}
                                        </TableCell>
                                        <TableCell align="center" style={{ width: '12%', fontSize: '14px' }}>
                                            {row.baseline}
                                        </TableCell> 
                                        <TableCell align="center" style={{ width: '12%', fontSize: '14px' }}>
                                            {row.baselineLearning}
                                        </TableCell>                                     

                                        <TableCell align="center" style={{ width: '12%', fontSize: '14px' }}>
                                            <Badge
                                                count={row.cutScore.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                color="#faad14"
                                                overflowCount={9999}
                                            />
                                            {/* {row.totalcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
                                        </TableCell>
                                        {/* <TableCell align="center">{row.aper}%</TableCell> */}
                                        <TableCell align="center" style={{ width: '12%', fontSize: '14px' }}>
                                            <Badge
                                                count={row.resultScore.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                color="#52c41a"
                                                overflowCount={9999}
                                            />
                                            {/* {row.bcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
                                        </TableCell>
                                        <TableCell align="center" style={{ width: '12%', fontSize: '14px' }}>
                                            <font color="#52c41a">{row.resultData}</font>
                                        </TableCell>
                                        <TableCell align="center" style={{ width: '12%', fontSize: '14px' }}>
                                            {row.diary}
                                        </TableCell>                                      
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>        
        </>
    );
};