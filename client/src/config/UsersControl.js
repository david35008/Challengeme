module.exports = {
  columns: [
    {
      field: 'userName',
      headerName: 'UserName',
      width: 140,
    },
    {
      field: 'id',
      headerName: 'Id',
      hide: true,
      width: 65,
    },
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 130,
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 130,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 240,
    },
    {
      field: 'githubAccount',
      headerName: 'Github',
      width: 100,
    },
    {
      field: 'permission',
      headerName: 'Permission',
      width: 125,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone',
      hide: true,
      width: 150,
    },
    {
      field: 'country',
      headerName: 'Country',
      width: 110,
      hide: true,
    },
    {
      field: 'city',
      headerName: 'City',
      width: 110,
      hide: true,
    },
    {
      field: 'BirthDate',
      headerName: 'Birth Date',
      width: 140,
      hide: false,
      valueGetter: (params) => {
        if (params.getValue('birthDate')) {
          return `${new Date(params.getValue('birthDate')).toDateString() || null}`;
        }
        return 'Not mentioned';
      },
    },
    {
      field: 'securityQuestion',
      headerName: 'Security',
      width: 300,
      hide: true,
    },
    {
      field: 'reasonOfRegistration',
      headerName: 'Reason',
      width: 150,
      hide: true,
    },
    {
      field: 'Created',
      headerName: 'Created',
      width: 150,
      hide: false,
      valueGetter: (params) => {
        if (params.getValue('createdAt')) {
          return `${new Date(params.getValue('createdAt')).toDateString() || null}`;
        }
        return 'Not mentioned';
      },
    },
    {
      field: 'Updated',
      headerName: 'Updated',
      width: 150,
      hide: true,
      valueGetter: (params) => {
        if (params.getValue('updatedAt')) {
          return `${new Date(params.getValue('updatedAt')).toDateString() || null}`;
        }
        return 'Not mentioned';
      },
    },
    {
      field: 'Deleted',
      headerName: 'Deleted',
      width: 150,
      hide: true,
      valueGetter: (params) => {
        if (params.getValue('deletedAt')) {
          return `${new Date(params.getValue('deletedAt')).toDateString() || null}`;
        }
        return 'Not Deleted';
      },
    },
  ],
};
