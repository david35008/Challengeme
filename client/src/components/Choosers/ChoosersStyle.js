export const customStyles = {
  option: (provided) => ({
    ...provided,
    borderBottom: '1px dotted black',
    color: 'blue',
    backgroundColor: 'white',
    height: '100%',
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: 'neutral30',
  }),
};

export const labelsChooserStyle = {
  option: (provided) => ({
    ...provided,
    color: 'black',
    fontWeight: 'bold',
    width: 170,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    height: 30,
    ':hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  }),
  menu: (provided) => ({
    ...provided,
    width: 400,
    paddingLeft: 10,
    backgroundColor: 'rgba(255, 255, 255,0.8)',
    paddingBottom: 10,
  }),
  menuList: (provided) => ({
    ...provided,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }),
  control: (provided) => ({
    ...provided,
    width: 400,
  }),
};
