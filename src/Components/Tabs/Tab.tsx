import React, { useState } from 'react';
import './_styles.scss'; // import your CSS file for styling

interface TabProps {
    label: string;
    onClick?: () => void;
    isActive?: boolean;
    children?: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({ label, onClick, isActive, children }) => {
    return (
        <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
            <div>{label} </div>
            {isActive && <div className="indicator" />}
        </div>
    );
};

interface TabContainerProps {
    children: React.ReactNode;
}

export const TabContainer: React.FC<TabContainerProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };



    return (
        <div className="tab-container">
            <div className={'child-wrapper'} >
                {React.Children.map(children, (child, index) =>
                    React.cloneElement(child as React.ReactElement<TabProps>, {
                        onClick: () => handleTabClick(index),
                        isActive: activeTab === index,
                    })
                )}
            </div>

            <div className="tab-content">
                {React.Children.map(children, (child: any, index) =>
                    activeTab === index ? child?.props?.children : null
                )}
            </div>
        </div>
    );
};



