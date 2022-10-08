import React from 'react';
import MaterialTable from 'material-table';
import dept_data from './data.json';
import LeftsideNav from '../../access/LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import './DepartmentTable.css';

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [{
                title: 'Department Name',
                field: 'dept_name',
                width:200,
                // render:
                lookup:{
                    Administration: <Link to={{
                        pathname:"/access"
                    }}>Administration</Link>,
                    HumanResource:'Human Resource',
                }
                
            },
            {
                title: 'Department Type',
                field: 'dept_type',
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
                width:100

            },
            {
                title: 'Created by',
                field: 'created_by',
                width:150

            },
            {
                title: 'Modified by',
                field: 'modified_by',
                width:150

            },
            
        ],
        data: dept_data
    });

    return ( <
        MaterialTable title = "Department Table"
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
                color: '#FFF',
                position:'sticky',
                top:'0',
            },
            tableLayout:"auto",           
          }}
          
          
        />
    );
}