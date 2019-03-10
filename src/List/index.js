import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    color: 'blue',
  },
};

@hot
@withStyles(styles)
class List extends React.Component {
  state = {
    count: 1,
  };

  /**
   * Increment count by 1
   * Try to modify crement number and understand HMR.
   */
  handleClick = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }

  render() {
    const { classes } = this.props;
    const { count } = this.state;

    return (
      <div>
        <div className={classes.root}>Colour is set by JSS.</div>
        <ul>
          <li><Link to="/detail">Redirect and lazy load detail page</Link></li>
        </ul>
        <div>
          <button onClick={this.handleClick} type="button">
            Click me, then modify count increment number to see HMR:
          </button>
          {count}
        </div>
      </div>
    );
  }
}

List.propTypes = {
  classes: PropTypes.object,
};

export default List;
