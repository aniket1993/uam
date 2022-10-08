import React from 'react';
import MaterialTable from 'material-table';
import dept_data from './data.json';
import TableContainer from '@material-ui/core/TableContainer';
const style ={
    whiteSpace: "nowrap",
    minWidth:'100%',
    maxWIdth:'100%',
    overflowX:'auto'
}

export default function UsersTable() {
    
    const [state, setState] = React.useState({
        Header: "Name",
        columns: [
            {
                title: 'ID #',
                field: 'user_id',
                width:200
            },
            {
                title: 'Name',
                field: 'user_name',
                width:200
            },
            {
                title: 'Email Id',
                field: 'user_mail',
                width:200
            },
            {
                title: 'Username',
                field: 'username',
                width:200
            },
            {
                title: 'Mobile #',
                field: 'user_mobile_no',
                width:200
            },
            {
                title: 'Designation',
                field: 'user_designation',
                width:200
            },
            {
                title: 'Department',
                field: 'user_dept',
                width:200
            }, {
                title: 'Reporting To',
                field: 'reporting_to',
                width:200
            }, {
                title: 'Role',
                field: 'user_role',
                width:200
            }, {
                title: 'User Type',
                field: 'user_type',
                width:200
            }, {
                title: 'Created On',
                field: 'user_created',
                width:200
            }, {
                title: 'Edited On',
                field: 'user_edited',
                width:200
            },

        ],
        data: dept_data
    });
    

    return ( 
        <TableContainer style={{"width":"100%"}}>
        <MaterialTable title = "Users Table"
        stickyHeader 
        aria-label="sticky table"
        columns = {
            state.columns
        }
        data = {
            state.data
        }
        editable = {
            {
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return {
                                    ...prevState,
                                    data
                                };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return {
                                        ...prevState,
                                        data
                                    };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return {
                                    ...prevState,
                                    data
                                };
                            });
                        }, 600);
                    }),
            }
        }
        options = {
            {
                selection: true,
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF',
                    position:'sticky'
                },
                width:"100%"

            }
        }
        style={{"width":"100%"}}
        />
        </TableContainer>
    );
}