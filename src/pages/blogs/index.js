import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import { getSortedPostsData } from '../../lib/posts';

import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents';

const BlogContainer = styled.section`
  padding: 4rem 2rem;
  margin: 0 auto;
  max-width: 1200px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 3rem 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem 1rem;
    width: 100%;
  }
`;

const BlogHeader = styled(SectionTitle)`
  margin-bottom: 3rem;
  text-align: center;
  font-size: 3.5rem;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  padding: 2rem 0;
  
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 1.5rem;
  }
`;

const BlogCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(148, 93, 214, 0.4);
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem;
  }
`;

const BlogTitle = styled.h2`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.3;
  color: #FFFFFF;
  margin-bottom: 1rem;
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #945DD6;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
`;

const BlogDate = styled.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1.5rem;
  font-family: 'Space Grotesk', sans-serif;
`;

const BlogDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  flex-grow: 1;
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;

const ReadMore = styled(Link)`
  color: #13ADC7;
  font-weight: 600;
  font-size: 1.5rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  transition: all 0.3s ease;
  margin-top: auto;
  
  &:hover {
    color: #945DD6;
    transform: translateX(5px);
  }
`;

import { Layout } from '../../layout/Layout';

export default function Blogs({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blogs | PMD Nawaz Portfolio</title>
        <meta name="description" content="Read the latest updates and articles from PMD Nawaz." />
      </Head>
      <BlogContainer>
        <BlogHeader>Latest Blogs</BlogHeader>
        <BlogGrid>
          {allPostsData.map(({ id, date, title, description }) => (
            <BlogCard key={id}>
              <BlogTitle>
                <Link href={`/blogs/${id}`}>{title}</Link>
              </BlogTitle>
              <BlogDate>{date}</BlogDate>
              <BlogDescription>{description}</BlogDescription>
              <ReadMore href={`/blogs/${id}`}>Read More &rarr;</ReadMore>
            </BlogCard>
          ))}
        </BlogGrid>
        {allPostsData.length === 0 && (
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>No blogs found.</p>
        )}
      </BlogContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
