import { makeStyles } from '@material-ui/core/styles';
import useDebounceHook from './debounceHook';
import shuffleArrayFunc from './ShuffleArray';

export const shuffleArray = shuffleArrayFunc;
export const useDebounce = useDebounceHook;

export function randomLocation() {
  return Math.round(Math.random() * 20) - 10;
}

export function getModalStyle() {
  const top = 50 + randomLocation();
  const left = 50 + randomLocation();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const useModalStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    maxHeight: '90%',
    minHeight: '400px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 8,
    overflowY: 'auto',
  },
  formValidationError: {
    color: 'red',
    fontSize: '0.8em',
  },
}));

export function generateTime(date) {
  if (!date) return '';
  let today = new Date(date);
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;
  return `${today}`;
}
