import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mainNav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    '& ul': {
      listStyleType: 'none',
      display: 'flex',
      padding: 0,
      width: '60%',
      justifyContent: 'space-between',
      '& li': {
        width: '20%',
        border: '1px solid red',
        borderRadius: '5px',
        '& a': {
          textDecoration: 'none !important',
          color: 'red',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '6px 0px',
        }
      }
    }
  },
  font: {
    fontFamily: 'Josefin Sans',
  },
}));
