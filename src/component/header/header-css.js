import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  iconButton: {
    padding: 10,
  },
  formSearch: {
    width: '60%',
    display: 'flex',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 40,
    '& a': {
      textDecoration: 'none',
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    width: '100%'
  },
}));
