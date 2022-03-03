import React from 'react';

export default function Heading({ children, ...rest }){
    return (
        <h2 className="text-5xl font-bold"> {children}</h2>
    )
}
