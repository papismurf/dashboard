import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from "@material-ui/icons/Save";
import classNames from "classnames";


const styles = theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function FilterSelection(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" size="small">
        <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
        Save
      </Button>

    </div>
    );
}

FilterSelection.propTypes = {
  classes: PropTypes.object.isRequired,
};

const FilterSelection1 = withStyles(styles)(FilterSelection);

const SaveFilters = () => (

<article className="article">
  <div className="row">
    <div className="col-xl-6">
      <div className="box box-v1 mb-6">
        <div className="box-header">Apply Filters</div>

        <div className="box-body">
          <FilterSelection1 />
        </div>

      </div>
    </div>
  </div>
</article>
)

export default SaveFilters;
