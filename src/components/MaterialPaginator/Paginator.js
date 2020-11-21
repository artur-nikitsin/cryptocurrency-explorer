import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import './paginator.scss';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Paginator({ pagesNumber, handleGoToPage, activePage }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(activePage);
  const handleChange = (event, value) => {
    setPage(value);
    handleGoToPage(value);
  };

  return (
    <div className={classes.root}>
      <Typography>{`Page: ${page} of ${pagesNumber}`}</Typography>
      <Pagination
        page={page}
        onChange={handleChange}
        count={pagesNumber}
        showFirstButton
        showLastButton
        variant='outlined'
        shape='rounded'
      />
    </div>
  );
}

Paginator.propTypes = { pagesNumber: PropTypes.number, handleGoToPage: PropTypes.func, activePage: PropTypes.number };

Paginator.defaultProps = { pagesNumber: null, handleGoToPage: null, activePage: null };
