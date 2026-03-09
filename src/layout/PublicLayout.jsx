import { Outlet } from 'react-router-dom'
import SideNavBar from '../component/SideNavBar'

export default function PublicLayout() {
  
  return (
    <>
        <SideNavBar>
            <Outlet />
        </SideNavBar>
    </>
  )
}
