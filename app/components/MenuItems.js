import { useState, useEffect } from 'react';
import { handleScroll } from '@/utils/handleScroll';

const MenuItems = ({ setIsOpen }) => {
    const [activeSection, setActiveSection] = useState('');
    const menuItems = [
        { name: 'home', link: 'home' },
        { name: 'projects', link: 'projects' },
        { name: 'aboutMe', link: 'about' },
        { name: 'contactMe', link: 'contact' },
    ];

    const handleScrollEvent = () => {
        const offset = 100; // Adjust this value to match your fixed topbar height
        let found = false;
        
        menuItems.forEach(item => {
            const targetElement = document.getElementById(item.link);
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                const elementTop = rect.top;
                const elementBottom = rect.bottom;
    
                if (item.link === 'contact') {
                    // For Contact section, check if it's in viewport but not at the top
                    if (elementTop < window.innerHeight && elementBottom > 0 && elementTop > offset) {
                        setActiveSection(item.link);
                        found = true;
                    }
                } else {
                    // For other sections, use the original logic
                    if (elementTop <= offset && elementTop >= -offset && !found) {
                        setActiveSection(item.link);
                        found = true;
                    }
                }
            }
        });
    };

    const handleClick = (e, item, setIsOpen) => {
        if (window.matchMedia('(max-width: 700px)').matches) {
            setIsOpen(false);
        }
        handleScroll(e, item)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEvent);
        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, );

    return (
        <>
            {menuItems.map((item) => (
                <a
                    href={`#${item.link}`}
                    key={item.name}
                    className={`mr-12 text-xl md:text-sm transition-all hover:delay-50 ease-in-out ${
                        activeSection === item.link ? 'font-bold' : 'hover:font-bold'
                    }`}
                    onClick={(e) => handleClick(e, item.link, setIsOpen)}
                >
                    <span className="text-purple">#</span>{item.name}
                </a>
            ))}
        </>
    );
};

export default MenuItems;
