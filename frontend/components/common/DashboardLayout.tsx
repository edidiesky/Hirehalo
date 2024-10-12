import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
const DashboardLayout = ({ children, sidebarlinks }: { children: React.ReactNode, sidebarlinks?: { id: number; tab: { title: string; path: string; icon: React.JSX.Element; }; list: never[]; }[] }) => {
    return <div className="w-full flex items-start">
        {/* sidebar */}
        <DashboardSidebar sidebarlinks={sidebarlinks} />
        <div className="w-full flex flex-col gap-8">
            <DashboardHeader/>
            {/* header */}
            {children}
        </div>
    </div>
}


export default DashboardLayout;