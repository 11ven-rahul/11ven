import './custom-step-icon.styles.scss';

import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';

import clsx from 'clsx';

import { makeStyles } from '@mui/styles';
import { sizeHeight } from '@mui/system';

const useStyles = makeStyles(() => ({
    root: {
      alignContent: 'center',
      backgroundColor: '#eaeaf0',
      padding: 8,
      borderRadius: '10px',
    },
    active: {
      color: 'blue',
    },
    completed: {
      color: 'green',
    },
  }));

const CustomStepIcon = (props) => {
    const classes = useStyles();
    const { active, completed } = props;

    const stepIcons = {
      1: <LooksOneIcon />,
      2: <LooksTwoIcon />,
      3: <Looks3Icon />,
      4: <Looks4Icon />
    };

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {stepIcons[String(props.icon)]}
      </div>
    );
};

export default CustomStepIcon;