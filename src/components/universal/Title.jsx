import React from 'react';

/**
 * Reusable title compoent for various pages
 * @param {*} title - The title to be displayed 
 * @returns <h1> element with the provided title
 * @author Lavanya Rao
 */
function Title({ title }) {
    return <h1 className="page-title">{title}</h1>;
}

export default Title;