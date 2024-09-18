// "use client"

// import "./index.css"
// import * as React from 'react';
// import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import PersonIcon from '@mui/icons-material/Person';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { companyName, primaryColor } from '@/app/utils/data';
// import logo from "../../../public/images/white-logo.jpg"
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { useDispatch, useSelector } from 'react-redux';
// import { profilePicture } from '@/app/core';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { Button } from '@mui/material';
// import ConfirmAlertMUI from './ConfirmAlertMUI';
// import axios from 'axios';
// import { logout, setIsAdminDrawerOpen } from '@/app/redux/user';
// import Badge from '@mui/material/Badge';
// import ForumIcon from '@mui/icons-material/Forum';

// const drawerWidth = 240;

// const openedMixin = (theme: Theme): CSSObject => ({
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: 'hidden',
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: `calc(${theme.spacing(7)} + 1px)`,
//     [theme.breakpoints.up('sm')]: {
//         width: `calc(${theme.spacing(8)} + 1px)`,
//     },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
// }));

// interface AppBarProps extends MuiAppBarProps {
//     open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//         boxSizing: 'border-box',
//         ...(open && {
//             ...openedMixin(theme),
//             '& .MuiDrawer-paper': openedMixin(theme),
//         }),
//         ...(!open && {
//             ...closedMixin(theme),
//             '& .MuiDrawer-paper': closedMixin(theme),
//         }),
//     }),
// );

// export default function MiniDrawerMUI({ children }: any) {

//     const theme = useTheme();
//     const router = useRouter();
//     const dispatch = useDispatch();

//     const state = useSelector((state: any) => state)
//     const currentUser = state?.user
//     const isAdminDrawerOpen = state?.isAdminDrawerOpen

//     // window data

//     const [pathName, setPathName] = React.useState<string | null>(null)

//     React.useEffect(() => {
//         setPathName(window?.location?.pathname)
//     }, [])

//     // drawer

//     const [open, setOpen] = React.useState<any>(isAdminDrawerOpen);
//     const [unReadChats, setUnReadChats] = React.useState<number>(0)

//     const sideBarData = [
//         {
//             label: "Students",
//             route: "/admin/students",
//             similarRoutes: ["/admin/student"],
//             icon: <PersonIcon />
//         },
//         {
//             label: "Support",
//             route: "/admin/support",
//             similarRoutes: ["/admin/support"],
//             icon: <Badge badgeContent={unReadChats} color="primary"><ForumIcon/></Badge>
//         }
//     ]

//     const handleDrawerOpen = () => {
//         setOpen(true);
//         dispatch(setIsAdminDrawerOpen(true))
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//         dispatch(setIsAdminDrawerOpen(false))
//     };

//     // menu

//     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//     const openMenu = Boolean(anchorEl);
//     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl(event?.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     // confirmation alert

//     const [alertData, setAlertdata] = React.useState<any>(null)
//     const [isAlertOpen, setIsAlertOpen] = React.useState<boolean>(false)

//     // loading

//     const [isLoading, setIsLoading] = React.useState<boolean>(false)

//     // logout

//     const _logout = async () => {

//         try {

//             setIsLoading(true)
//             const resp = await axios.post("/api/v1/auth/logout", {}, {
//                 withCredentials: true
//             })
//             setIsLoading(false)
//             dispatch(logout())
//             setAlertdata(null)
//             setIsAlertOpen(false)
//             router?.push("/auth/signin")

//         } catch (error: any) {
//             console.error(error)
//             setIsLoading(false)
//         }

//     }

//     return (
//         <>
//             <ConfirmAlertMUI
//                 open={isAlertOpen}
//                 setOpen={setIsAlertOpen}
//                 title={alertData?.title}
//                 description={alertData?.description}
//                 fun={alertData?.fun}
//                 isLoading={isLoading}
//             />
//             <Box sx={{ display: 'flex' }}>
//                 <CssBaseline />
//                 <AppBar position="fixed" open={open}>
//                     <Toolbar>
//                         <IconButton
//                             color="inherit"
//                             aria-label="open drawer"
//                             onClick={handleDrawerOpen}
//                             edge="start"
//                             sx={{
//                                 marginRight: 5,
//                                 ...(open && { display: 'none' }),
//                             }}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Typography variant="h6" noWrap component="div" className='w-full flex justify-between items-center'>
//                             <div className='flex gap-2 items-start'>
//                                 <p>{companyName}</p>
//                             </div>
//                             <>
//                                 <Button
//                                     id="basic-button"
//                                     aria-controls={open ? 'basic-menu' : undefined}
//                                     aria-haspopup="true"
//                                     aria-expanded={open ? 'true' : undefined}
//                                     onClick={handleClick}
//                                 >
//                                     <div className='flex items-center'>
//                                         <img src={currentUser?.profilePhoto || profilePicture} alt="profile picture"
//                                             className='w-[40px] h-[40px] object-cover object-center rounded-full cursor-pointer'
//                                         />
//                                     </div>
//                                 </Button>
//                                 <Menu
//                                     id="basic-menu"
//                                     anchorEl={anchorEl}
//                                     open={openMenu}
//                                     onClose={handleClose}
//                                     MenuListProps={{
//                                         'aria-labelledby': 'basic-button',
//                                     }}
//                                 >
//                                     <MenuItem onClick={handleClose}
//                                     ><PersonIcon
//                                             sx={{ width: 18, height: 18 }}
//                                         /> <span className='ml-2 pt-[3px]'>Profile</span></MenuItem>
//                                     <MenuItem
//                                         onClick={() => {
//                                             setAlertdata({
//                                                 title: "Logout?",
//                                                 description: "Are you sure you want to logout?. The action cannot be undone",
//                                                 fun: _logout,
//                                             })
//                                             setIsAlertOpen(true)
//                                             handleClose()
//                                         }}
//                                     ><LogoutIcon
//                                             sx={{ width: 18, height: 18 }} /> <span className='ml-2 pt-[3px]'>Logout</span></MenuItem>
//                                 </Menu>
//                             </>
//                         </Typography>
//                     </Toolbar>
//                 </AppBar>
//                 <Drawer variant="permanent" open={open}>
//                     <DrawerHeader>
//                         <div className='flex gap-2 items-center m-auto'>
//                             <Image src={logo} width={30} height={30} objectFit='contain' alt='logo'
//                                 className='rounded-full p-[3px] bg-white w-[30px] h-[30px]'
//                             />
//                             <p>{companyName}</p>
//                         </div>
//                         <IconButton onClick={handleDrawerClose}>
//                             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//                         </IconButton>
//                     </DrawerHeader>
//                     <Divider />
//                     <List sx={{ padding: 0 }}>
//                         {sideBarData?.map((data: any, i: number) => (
//                             <ListItem key={i} disablePadding
//                                 onClick={() => router?.push(data?.route)}
//                                 sx={{
//                                     display: 'block',
//                                     color: pathName === data?.route ? primaryColor : ""
//                                 }}
//                             >
//                                 <ListItemButton
//                                     sx={{
//                                         minHeight: 48,
//                                         justifyContent: open ? 'initial' : 'center',
//                                         px: 2.5,
//                                     }}
//                                 >
//                                     <ListItemIcon
//                                         sx={{
//                                             minWidth: 0,
//                                             mr: open ? 3 : 'auto',
//                                             justifyContent: 'center',
//                                             color: pathName === data?.route ? primaryColor : "",
//                                         }}
//                                     >
//                                         {data?.icon}
//                                     </ListItemIcon>
//                                     <ListItemText primary={data?.label} sx={{
//                                         opacity: open ? 1 : 0
//                                     }} className={`${pathName === data?.route ? "font-bold" : ""}`} />
//                                 </ListItemButton>
//                             </ListItem>
//                         ))}
//                     </List>
//                     <Divider />
//                     {/* <List>
//                     {['All mail', 'Trash', 'Spam'].map((text, index) => (
//                         <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//                             <ListItemButton
//                                 sx={{
//                                     minHeight: 48,
//                                     justifyContent: open ? 'initial' : 'center',
//                                     px: 2.5,
//                                 }}
//                             >
//                                 <ListItemIcon
//                                     sx={{
//                                         minWidth: 0,
//                                         mr: open ? 3 : 'auto',
//                                         justifyContent: 'center',
//                                     }}
//                                 >
//                                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                                 </ListItemIcon>
//                                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//                             </ListItemButton>
//                         </ListItem>
//                     ))}
//                 </List> */}
//                 </Drawer>
//                 <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//                     <DrawerHeader />
//                     {children}
//                 </Box>
//             </Box>
//         </>
//     );
// }