import Link from 'next/link';
import styled from 'styled-components';
import { Layout } from '../layout/Layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10rem 2rem;
  min-height: 60vh;
  text-align: center;
  background: radial-gradient(circle at 50% 50%, #1f2a40 0%, #0f1624 100%);
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  margin-bottom: 2rem;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 300;
`;

const HomeButton = styled(Link)`
  padding: 1.5rem 4rem;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  border-radius: 50px;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.3s ease;
  box-shadow: 0px 4px 20px rgba(0,0,0,0.3);

  &:hover {
    opacity: 0.8;
  }
`;

const RedirectMessage = styled.p`
    margin-top: 2rem;
    color: #13ADC7;
    font-size: 1.6rem;
`;

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        // Check if the user was trying to access a blog path
        if (router.asPath.includes('/blogs/')) {
            // Optional: Auto redirect after 3 seconds?
            // setTimeout(() => router.push('/blogs'), 3000); 
        }
    }, [router.asPath]);

    const isBlogPath = router.asPath.includes('/blogs');

    return (
        <Layout>
            <Container>
                <Title>404</Title>
                <Subtitle>
                    {isBlogPath
                        ? "The blog post you seem to be looking for doesn't exist."
                        : "Oops! We can't find that page."}
                </Subtitle>

                {isBlogPath ? (
                    <HomeButton href="/blogs">Go to All Blogs</HomeButton>
                ) : (
                    <HomeButton href="/">Back to Home</HomeButton>
                )}

                {isBlogPath && (
                    <RedirectMessage>You might have followed a broken link or the post was renamed.</RedirectMessage>
                )}
            </Container>
        </Layout>
    );
}
