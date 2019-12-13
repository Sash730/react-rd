// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Container from "@material-ui/core/Container";
// // import Tabs from '@material-ui/core/Tabs';
// // import Tab from '@material-ui/core/Tab';
// import Button from '@material-ui/core/Button';
// // import IconButton from '@material-ui/core/IconButton';
// // import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "@reach/router";
//
// const styles = {
//     root: {
//         flexGrow: 1,
//     },
//     flex: {
//         flex: 1,
//     },
//     menuButton: {
//         marginLeft: -12,
//         marginRight: 20,
//     },
// };
//
// function NavBar(props) {
//     const { classes } = props;
//     return (
//         <div className={classes.root}>
//             <AppBar color="default" position="static">
//                 <Container lg>
//                 <Toolbar>
//                     {/*<Typography variant="title" color="inherit" className={classes.flex}>*/}
//                     {/*    Title*/}
//                     {/*</Typography>*/}
//                     {/*<Button component={Link} to="/istream" color="inherit">Login</Button>*/}
//                 <Button>Default</Button>
//                 <Button>Primary</Button>
//                 <Button>Secondary</Button>
//                 <Button>Disabled</Button>
//                 <Button>Link</Button>
//                 </Toolbar>
//                 </Container>
//             </AppBar>
//         </div>
//     );
// }
//
// NavBar.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(NavBar);

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { grey } from "@material-ui/core/colors";
// import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        color: grey,
        textDecoration: "none"
    },
}));

export default function NavBar(props) {
    const classes = useStyles();
    const { sections } = props;
    const isActive = ({ isCurrent }) => {
        return isCurrent ? { className: "active" } : null
    };

    return (
            <Toolbar className={classes.toolbar}>
                <Typography
                    component="h2"
                    variant="h6"
                    color="textSecondary"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    r-dash
                {sections.map(section => (
                    <Link
                        color="inherit"
                        to={section.state}
                        noWrap
                        key={section.title}
                        className={classes.toolbarLink}
                        getProps={isActive}
                    >
                        {section.title}
                    </Link>
                ))}
                </Typography>
                <Button variant="outlined" size="small">
                    Log out
                </Button>
            </Toolbar>
    );
}

NavBar.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};

// import React,  { Component } from 'react';
// import withStyles from '@material-ui/styles/withStyles';
// import { Link } from '@reach/router';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Toolbar from '@material-ui/core/Toolbar';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import { makeStyles } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// // import { Link as MaterialLink } from '@material-ui/core'
// import Menu from './Menu';
// import Button from "@material-ui/core/Button";
// import SimpleMenu from "./DropdownMenu";
// // const logo = require('../images/logo.svg');
//
// const styles = theme => ({
//     appBar: {
//         position: 'relative',
//         boxShadow: 'none',
//         borderBottom: `1px solid ${theme.palette.grey['100']}`,
//         backgroundColor: 'white'
//     },
//     inline: {
//         display: 'inline'
//     },
//     flex: {
//         display: 'flex',
//         [theme.breakpoints.down('sm')]: {
//             display: 'flex',
//             justifyContent: 'space-evenly',
//             alignItems: 'center'
//         }
//     },
//     link: {
//         textDecoration: 'none',
//         color: 'inherit'
//     },
//     productLogo: {
//         // display: 'inline-block',
//         borderRight: `1px solid ${theme.palette.grey['A100']}`,
//         marginLeft: 100,
//         padding: 20,
//         [theme.breakpoints.up('md')]: {
//             paddingTop: '1.5em'
//         },
//         [theme.breakpoints.down('sm')]: {
//             border: 'none'
//         }
//     },
//     tagline: {
//         display: 'inline-block',
//         marginLeft: 10,
//         [theme.breakpoints.up('md')]: {
//             paddingTop: '0.8em'
//         }
//     },
//     iconContainer: {
//         display: 'none',
//         [theme.breakpoints.down('sm')]: {
//             display: 'block'
//         }
//     },
//     iconButton: {
//         // float: 'right'
//     },
//     tabContainer: {
//         // marginLeft: 30,
//         display: 'flex',
//         // float: 'left',
//         [theme.breakpoints.down('sm')]: {
//             display: 'none'
//         }
//     },
//     tabItem: {
//         paddingTop: 20,
//         // paddingBottom: 20,
//         minWidth: 'auto'
//     },
//     tabLogout: {
//         float: 'right'
//     },
//     outlinedButton: {
//         textTransform: 'uppercase',
//         // float: 'right',
//         // marginRight: 100,
//         margin: theme.spacing(1)
//     },
//     topBar: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         // alignItems: 'center'
//     }
// })
//
// const useStyles = makeStyles(theme => ({
//     appBar: {
//         position: 'relative',
//         boxShadow: 'none',
//         borderBottom: `1px solid ${theme.palette.grey['100']}`,
//         backgroundColor: 'white'
//     },
//     inline: {
//         display: 'inline'
//     },
//     flex: {
//         display: 'flex',
//         [theme.breakpoints.down('sm')]: {
//             display: 'flex',
//             justifyContent: 'space-evenly',
//             alignItems: 'center'
//         }
//     },
//     link: {
//         textDecoration: 'none',
//         color: 'inherit'
//     },
//     productLogo: {
//         display: 'inline-block',
//         borderRight: `1px solid ${theme.palette.grey['A100']}`,
//         marginLeft: 100,
//         padding: 20,
//         [theme.breakpoints.up('md')]: {
//             paddingTop: '1.5em'
//         },
//         [theme.breakpoints.down('sm')]: {
//             border: 'none'
//         }
//     },
//     tagline: {
//         display: 'inline-block',
//         marginLeft: 10,
//         [theme.breakpoints.up('md')]: {
//             paddingTop: '0.8em'
//         }
//     },
//     iconContainer: {
//         display: 'none',
//         [theme.breakpoints.down('sm')]: {
//             display: 'block'
//         }
//     },
//     iconButton: {
//         // float: 'right'
//     },
//     tabContainer: {
//         // marginLeft: 30,
//         display: 'flex',
//         // float: 'left',
//         [theme.breakpoints.down('sm')]: {
//             display: 'none'
//         }
//     },
//     tabItem: {
//         paddingTop: 20,
//         paddingBottom: 20,
//         minWidth: 'auto'
//     },
//     tabLogout: {
//         float: 'right'
//     },
//     outlinedButton: {
//         textTransform: 'uppercase',
//         // float: 'right',
//         marginRight: 100,
//         margin: theme.spacing(1)
//     },
//     topBar: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//     }
// }));
// function Topbar() {
//
//     const styles = useStyles();
//     const [value, setValue] = React.useState(0);
//
//     const handleTabChange = index => {
//         setValue(index);
//     };
//     const MyLink = React.forwardRef((props, ref) => (
//         <Link
//             {...props}
//             getProps={({ isPartiallyCurrent }) => {
//                 // the object returned here is passed to the
//                 // anchor element's props
//                 if (isPartiallyCurrent) {
//                     handleTabChange(props.index);
//                 }
//             }}
//         />
//     ));
//
//     return (
//         <AppBar position="absolute" color="default" className={useStyles.appBar}>
//             <Toolbar>
//                 <Grid container spacing={10} alignItems="baseline">
//                     <Grid item xs={12} className={styles.flex}>
//                         <Grid item xs={12} md={3}>
//                             {/*<div className={useStyles.iconContainer}>*/}
//                             {/*  <IconButton onClick={this.mobileMenuOpen} className={useStyles.iconButton} color="inherit"*/}
//                             {/*              aria-label="Menu">*/}
//                             {/*    <MenuIcon/>*/}
//                             {/*  </IconButton>*/}
//                             {/*</div>*/}
//                             <div className={styles.productLogo}>
//                                 <Typography>
//                                     Rapi-Dasboard
//                                 </Typography>
//                             </div>
//                         </Grid>
//                         <Grid item xs={12} md={9}>
//                             {/*<SwipeableDrawer anchor="right" open={this.state.menuDrawer} onClose={this.mobileMenuClose} onOpen={this.mobileMenuOpen}>*/}
//                             {/*  <AppBar title="Menu" />*/}
//                             {/*  <List>*/}
//                             {/*    {Menu.map((item, index) => (*/}
//                             {/*        <ListItem component={Link} to={item.pathname} button key={item.label}>*/}
//                             {/*          <ListItemText primary={item.label} />*/}
//                             {/*        </ListItem>*/}
//                             {/*    ))}*/}
//                             {/*    <ListItem component={Link} href='/logout' to='/logout' button key='Logout'>*/}
//                             {/*      <ListItemText primary='Logout' />*/}
//                             {/*    </ListItem>*/}
//                             {/*  </List>*/}
//                             {/*</SwipeableDrawer>*/}
//                             {/*<div className={useStyles.tabContainer}>*/}
//                             <div className={styles.topBar}>
//                                 <Tabs
//                                     indicatorColor="primary"
//                                     textColor="primary"
//                                     value={value}
//                                     onChange={(e, val) => {
//                                         setValue(val);
//                                         console.log(value);
//                                     }}
//                                 >
//                                     {Menu.map((item, index) => (
//                                         <Tab key={index} component={MyLink} // {item.subRoutes ? SimpleMenu : MyLink}
//                                              index={index}
//                                              item={item} to={item.pathname}
//                                              classes={{root: styles.tabItem}} label={item.label}
//                                              onClick={(e) => e.stopPropagation()}
//                                         />
//                                     ))}
//                                 </Tabs>
//                                 <Button variant="outlined" className={styles.outlinedButton}>
//                                     Logout
//                                 </Button>
//                             </div>
//
//                             {/*</div>*/}
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Toolbar>
//         </AppBar>
//     )
// }
//
// export default withStyles(styles)(Topbar)
//
