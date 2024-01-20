import React, { useState, useEffect, useCallback } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import network from '../../services/network';
import { columns } from '../../config/UsersControl';
import EditUserDialog from '../Dialogs/UserDashboard';
import '../../styles/MultipleRowSelection.css';

export default function SingleRowSelectionGrid() {
  const [allUsers, setAllUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

  const getAllUsers = useCallback(async () => {
    const { data: allUsersFromServer } = await network.get(
      '/api/v1/users/admin',
    );
    setAllUsers(allUsersFromServer);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  const data = {
    columns: [
      {
        field: '',
        headerName: '',
        width: 65,
        valueGetter: () => 'Edit',
      },
      ...columns,
    ],
    rows: [...allUsers],
  };

  return (
    <div className="Multiple-Row-Selection-data-grid">
      <DataGrid
        {...data}
        loading={data.rows.length === 0}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        onCellHover={(data) => {
          if (data.value !== 'Edit') return;
          data.element.style.cursor = 'pointer';
        }}
        onCellClick={(data) => {
          if (data.value === 'Edit') {
            setSelectedUser(data.row.id);
            setOpenDialog(true);
          }
        }}
      />
      {openDialog && (
        <EditUserDialog
          getAllUsers={getAllUsers}
          selectedUser={selectedUser}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        />
      )}
    </div>
  );
}
