import React, { useEffect, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import network from '../../../services/network';
import AddTeam from '../../../components/Modals/AddTeam';
import AddTeamMembers from '../../../components/Modals/AddTeamMembers';

function Row({ row, getAllTeams, handleAddMemberModal }) {
  const [open, setOpen] = useState(false);

  const removeUserFromTeam = useCallback(
    async (userId) => {
      const isDeleteOk = prompt('Are you sure you want to remove this user?');
      if (isDeleteOk) {
        await network.delete(
          `/api/v1/teams/remove-user/${row.id}?userId=${userId}`,
        );
        getAllTeams();
      }
    },
    [row.id, getAllTeams],
  );

  const changeUserPermissionOnTeam = useCallback(
    async (userId, permission) => {
      const newPermission = permission === 'student' ? 'teacher' : 'student';
      const isChangeOk = prompt(`Change permission to ${newPermission}?`);
      if (isChangeOk) {
        await network.patch(`/api/v1/teams/permission/${row.id}`, {
          userId,
          permission: newPermission,
        });
        getAllTeams();
      }
    },
    [row.id, getAllTeams],
  );

  const deleteTeam = useCallback(
    async (teamId) => {
      const isDeleteOk = prompt('Are you sure you want to delete this team?');
      if (isDeleteOk) {
        await network.delete(`/api/v1/teams/remove-team/${teamId}`);
        getAllTeams();
      }
    },
    [getAllTeams],
  );

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.externalId}</TableCell>
        <TableCell>{new Date(row.createdAt).toLocaleString()}</TableCell>
        <TableCell>
          <Button onClick={() => deleteTeam(row.id)}>Delete Team</Button>
        </TableCell>
        <TableCell>
          <Button onClick={() => handleAddMemberModal(row.id)}>
            Add Team Members
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Team Members
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>User Id</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Permission</TableCell>
                    <TableCell />
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.userName}</TableCell>
                      <TableCell>{user.UserTeam.permission}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => changeUserPermissionOnTeam(
                            user.id,
                            user.UserTeam.permission,
                          )}
                        >
                          Change Permission
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => removeUserFromTeam(user.id)}>
                          Remove User
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function TeamsControl() {
  const [allTeams, setAllTeams] = useState([]);
  const [openNewTeamModal, setOpenNewTeamModal] = useState(false);
  const [teamNameForMember, setTeamNameForMember] = useState('');
  const [openAddMemberModal, setOpenAddMemberModal] = useState(false);

  const getAllTeams = useCallback(async () => {
    try {
      const { data } = await network.get('/api/v1/teams/all-teams');
      setAllTeams(data);
    } catch (error) {
      console.error('Failed to fetch teams', error);
    }
  }, []);

  const handleAddMemberModal = (teamId) => {
    setTeamNameForMember(teamId);
    setOpenAddMemberModal(true);
  };

  useEffect(() => {
    getAllTeams();
  }, [getAllTeams]);

  return (
    <Box className="generic-page" sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Teams Management Area
      </Typography>
      <AddTeam
        open={openNewTeamModal}
        setOpen={setOpenNewTeamModal}
        getAllTeams={getAllTeams}
      />
      <AddTeamMembers
        open={openAddMemberModal}
        setOpen={setOpenAddMemberModal}
        getAllTeams={getAllTeams}
        teamId={teamNameForMember}
      />
      <Button
        variant="outlined"
        sx={{ mb: 2 }}
        onClick={() => setOpenNewTeamModal(true)}
      >
        Add New Team
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>External Id</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {allTeams.map((team) => (
              <Row
                key={team.id}
                row={team}
                getAllTeams={getAllTeams}
                handleAddMemberModal={handleAddMemberModal}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TeamsControl;
