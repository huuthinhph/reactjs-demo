import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  titleContent: {
    textAlign: 'center',
    '& p': {
      fontSize: 25,
      fontWeight: 'bold',
    }
  },
}));
