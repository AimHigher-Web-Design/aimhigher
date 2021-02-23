import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../../components/layout';
import Flower from '../../img/illustrations/flower_2.svg';
import Paw from '../../img/illustrations/paw.svg';
import Squiggle from '../../img/illustrations/squiggle.svg';
import styles from './post.module.scss';

const ContactPage = ({ data }) => {
	const {
		title, content, featured, date
	} = data.post;

	return (
		<Layout {...{
			meta: {}
		}}>
			<article className={styles.content}>
				<Squiggle className={styles.squiggle} />
				<h1>{title}</h1>
				<p className={styles.date}>{date}</p>
				<img className={styles.featured} src={featured} />
				<div className={styles.post} dangerouslySetInnerHTML={{ __html: content }} />
				<Flower className={styles.flower} />
				<Paw className={styles.paw} />
			</article>
		</Layout>
	);
};

export const pageQuery = graphql`
	query BlogPostByID($id: String!) {
		post(id: {eq: $id}) {
			featured
			title
			content
			date(formatString: "DD MMM YYYY")
		}
	}
`;

export default ContactPage;
