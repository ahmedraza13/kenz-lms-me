"use client"

import "./Header.css"
import logo from "../../../public/images/logo-white.png"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HiMenuAlt3 } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { useSelector } from "react-redux"
import { useRouter } from "next/navigation";
import Image from "next/image"


const RightMenuBar = ({ options }: any) => {

  const router = useRouter()

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Register", path: "/auth" },
  ]

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event?.currentTarget)

  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <div className="rightMenuBar">
        {options?.map((option: any, i: number) => <IconButton key={i} onClick={() => router.push(option?.path)}>{option?.label}</IconButton>)}
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <HiMenuAlt3 />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {menuOptions.map((option: any, i: number) => (
            <MenuItem key={i} onClick={() => {
              router.push(option?.path)
              handleClose()
            }}>
              {option?.label}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  )

}

const CenterMenuBar = ({ options }: any) => {

  const router = useRouter()

  const [hoveredOption, setHoveredOption] = useState<any>(null);

  const handleClick = (hover: boolean, path: string) => {
    if (!hover) router.push(path)
  }

  const handleMouseOver = (index: number) => {
    setHoveredOption(index);
  };

  const handleMouseOut = () => {
    setHoveredOption(null);
  };

  return (
    <>
      <div className="centerMenuBar">
        {options?.map((option: any, i: number) => (
          <React.Fragment key={i}>
            <div
              className="menuItem"
              onMouseOver={() => handleMouseOver(i)}
              onMouseOut={handleMouseOut}
            >
              <p onClick={() => handleClick(option?.hover, option?.path)}>
                {option?.label}
                {option?.hover && <IoIosArrowDown />}

                {option?.hover && hoveredOption === i && (
                  <div className="dropdownMenu-sts">
                    {option?.options?.map((subOption: any, j: number) => (
                      <p
                        key={j}
                        onClick={() => router.push(subOption?.path)}
                      >
                        {subOption?.label}
                        <IoMdArrowForward />
                      </p>
                    ))}
                  </div>
                )}

              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

const Header = () => {

  const currentUser = useSelector((state: any) => state?.user)
  const router = useRouter()

  const rightMenuBarOptions = [
    { path: "/favourites", label: <FaRegHeart /> },
    { path: "/cart", label: <BsCart /> },
    { path: "/notifications", label: <FaRegBell /> },
    { path: "/profile", label: <RiAccountCircleLine /> },
  ]

  const centerMenuBarOptions = [
    {
      label: "Channels", hover: true, options: [
        { label: "Enterprise", path: "/enterprise" },
        { label: "Thought Leaders", path: "/thought-leaders" },
        { label: "Sustainable Business", path: "/sustainable-business" },
      ]
    },
    {
      label: "Courses", hover: true, options: [
        { label: "Current Courses", path: "/current-courses" },
        { label: "Upcoming Courses", path: "/upcoming-courses" },
      ]
    },
    {
      label: "Dashboard", hover: false, path: "/dashboard"
    },
    {
      label: "School & Partners", hover: false, path: "/partners"
    },
  ]

  return (
    <>
      <div className="header">
        <Image src={logo} alt="logo" width={100} height={100}  />
        <CenterMenuBar options={centerMenuBarOptions} />
        {
          currentUser?.isLogin ?
            <RightMenuBar options={rightMenuBarOptions} />
            :
            <Button style={{ backgroundColor: "#fefefe", paddingLeft: "4em", paddingRight: "4em" }} onClick={() => router.push("/auth")}>User</Button>
        }
      </div>
    </>
  )
}

export default Header