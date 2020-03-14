import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const AntTabs = withStyles({
  root: {
    color: "#939393"
  },
  indicator: {
    height: "4px",
    backgroundColor: "#2AC3D8"
  }
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontSize: "20px",
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: "TT Commons",
    "&:hover": {
      color: "#2AC3D8",
      opacity: 1
    },
    "&$selected": {
      color: "#2AC3D8",
    },
    "&:focus": {
      color: "#2AC3D8"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(3)
  },
  demo1: {
  },
}));

function SectionTabList({tabTitle1, tabTitle2, tabTitle3, onClickTab1, onClickTab2, onClickTab3,}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label={tabTitle1} onClick={onClickTab1}/>
          <AntTab label={tabTitle2} onClick={onClickTab2}/>
          <AntTab label={tabTitle3} onClick={onClickTab3}/>
        </AntTabs>
      </div>
    </div>
  );


}

SectionTabList.defaultProps = {
    tabTitle1:'Today',
    tabTitle2:'Week',
    tabTitle3:'Month',
}
export default SectionTabList;