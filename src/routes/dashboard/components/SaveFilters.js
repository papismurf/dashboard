import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
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
  <div className="box box-default mb-4">
    <div className="box-header">Apply Filters</div>
    <div className="box-body py-5 text-center">
      <FilterSelection1 />
    </div>
  </div>
)

export default SaveFilters;
