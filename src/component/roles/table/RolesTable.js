import React from 'react';
import MaterialTable from 'material-table';
import dept_data from './data.json';
export default function RolesTable() {
    const [state, setState] = React.useState({
        columns: [{
                title: 'Role Name',
                field: 'role_name',
                width:200
            },
            {
                title: 'Role Type',
                field: 'role_type',
                width:200
            },
            {
                title: 'Description',
                field: 'description',
                width:400
            },
            {
                title: 'Employee',
                field: 'emp_no',
                width:200
            },
            {
                title: 'Created by',
                field: 'created_by',
                width:200
            },
            {
                title: 'Modified by',
                field: 'modified_by',
                width:200
            },
            
        ],
        data: dept_data
    });

    return ( <
        MaterialTable title = "Roles Table"
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
        options={{
            selection: true,
            headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
            }
          }}
        />
    );
}