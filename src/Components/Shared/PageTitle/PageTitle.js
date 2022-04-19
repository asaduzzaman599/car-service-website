import React from 'react';
import { Helmet, HelmetData } from 'react-helmet-async';

const PageTitle = ({title,children}) => {
    return (
        <>
            <Helmet>
                <title>{title} - Car Service</title>
            </Helmet>
            {children}
        </>
    );
};

export default PageTitle;