// "use client";

// import React from 'react';
// import Footer from './footer'
// import Header from './header'


// interface LayoutProps{
//     children: React.ReactNode;
// }

// export default function Layout({ children }: LayoutProps){ 
//     return (
//         <>
//         <Header />
//             <div>{children}</div>
//         <Footer />
//         </>
//     )
// }

"use client";

import React from 'react';
import Footer from './footer';
import Header from './header';
import { ThemeProvider } from 'next-themes';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) { 
    return (
        <div className= "bg-primary">
        <ThemeProvider attribute="class">
            <Header />
                <div>{children}</div>
            <Footer />
        </ThemeProvider>
        </div>
    );
}
