import React from 'react'
import { useSelector } from 'react-redux'
import  type { RootState } from '../store'
import { Navigate } from 'react-router-dom'

export const withAuth = (Component: React.ComponentType) => {
    return (props: React.ComponentProps<typeof Component>) => {
        const user = useSelector((state: RootState) => state.user.user)
        if (!user){
            return <Navigate to="/login" />
        }
        return <Component {...props} />
    }
}