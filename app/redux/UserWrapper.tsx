import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { login, logout } from "./user"
import { redirect } from 'next/navigation'
import { isDynamicCoursePath } from '../utils/functions'

const UserWrapper = ({ children }: any) => {

    const dispatch = useDispatch()

    const currentUser = useSelector((state: any) => state?.user)
    const isLogin = useSelector((state: any) => state?.isLogin)
    const [pathName, setPathName] = useState<string | null>(null)

    useEffect(() => {
        setPathName(window?.location?.pathname)
    }, [])

    useEffect(() => {

        const fetchUser = async () => {

            try {

                const response = await axios.get('/api/v1/profile', { withCredentials: true });
                dispatch(login(response?.data?.data?.userData))

            } catch (error) {
                console.error(error);
                dispatch(logout())
            }

        };

        fetchUser()

    }, [pathName, dispatch])

    const authGuard = () => {

        const adminRoutes = [
            "/admin/students",
            "/admin/support",
        ]

        const userRoutes = [
            `/student/${currentUser?._id}`,
            `/support`
        ]

        const publicRoutes = [
            "/",
            "/auth",
            "/auth/signin",
            "/auth/signup",
            "/auth/forgot-password",
            "/auth/forgot-password-complete",
            "/current-courses",
        ]

        if (!pathName) return

        const isPublicPath = publicRoutes?.includes(pathName) || isDynamicCoursePath(pathName)
        const isAdminPath = adminRoutes?.includes(pathName)
        const isUserPath = userRoutes?.includes(pathName)

        if (isLogin == true && isPublicPath) {

            if (currentUser?.isAdmin && !isAdminPath) {
                redirect("/admin/students")
            } else if (!currentUser?.isAdmin && !isUserPath) {
                redirect(`/student/${currentUser?._id}`)
            }

        } else if (isLogin == false && !isPublicPath) {
            if (isDynamicCoursePath(pathName)) return
            redirect("/auth/signin")
        } else if (currentUser?.isAdmin && !isAdminPath) {
            redirect("/admin/students")
        } else if (!currentUser?.isAdmin && isAdminPath) {
            redirect(`/student/${currentUser?._id}`)
        }

    }

    useEffect(() => {
        authGuard()
    }, [currentUser, dispatch])

    return <>{children}</>
}

export default UserWrapper