import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={`flex flex-col min-h-screen `}>
            <Header />
            <main className="flex-grow">{children} </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
