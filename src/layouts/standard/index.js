import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

//Resources
import Pages from '../../data/pageContent.js';
import Logo from '../../img/logo.png';

const Meta = ({name, description, slug, image}) => {
    let siteUrl = 'https://aimhigherweb.design/';

    if (!image) {
        image = Logo;
    }
 
    return (
        <Helmet>
            <title>{name}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={siteUrl + slug} />

            {/* Facebook */}
            <meta property="og:url" content={siteUrl + slug} />
            
            <meta property="og:title" content={name} />
            <meta property="og:image" content={image} />
            <meta property="og:description" content={description} />

            {/* Twitter */}
            <meta name="twitter:url" content={siteUrl + slug} />
            <meta name="twitter:title" content={name} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}

const StandardPage = ({location}) => {
    let pageSlug = location.pathname;
        pageSlug = pageSlug.replace(/^\//, '');
    let details = Pages[pageSlug].meta;

    console.log(details);

        return (
            <div className="content">
                <Meta {...details} />
                <h1>{Pages[pageSlug].title}</h1>
                {Pages[pageSlug].content}
            </div>
        );
};

export default StandardPage;