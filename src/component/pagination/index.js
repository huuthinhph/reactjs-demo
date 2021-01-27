import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './pagination-css';

const PaginationComponent = () => {
  const classes = useStyles();

  const onChange = (event, page) => {
    console.log('onChange', page);
  };

  return (
    <div className={classes.paginationContainer}>
      <Pagination onChange={onChange} count={10} variant="outlined" shape="rounded" />
    </div>
  )
}

export default PaginationComponent;
