import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { Layout } from '../../layout/Layout';
import { useEffect, useState, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { AiOutlineLeft, AiOutlineRight, AiOutlineDown } from 'react-icons/ai';

const PageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
  padding: 4rem 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.lg} {
    gap: 2rem;
    padding: 3rem 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    padding: 2rem 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

const DesktopSidebar = styled.aside`
  width: ${(props) => (props.isExpanded ? '280px' : '0px')};
  flex-shrink: 0;
  position: sticky;
  top: var(--header-offset, 100px);
  height: fit-content;
  max-height: calc(100vh - var(--header-offset, 120px));
  overflow-y: auto;
  overflow-x: hidden;
  border-right: ${(props) => (props.isExpanded ? '1px solid rgba(255, 255, 255, 0.1)' : 'none')};
  padding-right: ${(props) => (props.isExpanded ? '1.5rem' : '0')};
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.isExpanded ? '1' : '0')};

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.1);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255,255,255,0.2);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

const MobileTOCWrapper = styled.div`
  display: none;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-bottom: 2rem;
  position: sticky;
  top: var(--header-offset, 80px);
  z-index: 100;
  
  details {
    padding: 1.5rem;
  }
  
  details[open] summary {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  summary {
    font-size: 1.6rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &::-webkit-details-marker {
      display: none;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
  }
`;

const SidebarTitle = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  position: relative;
  
  /* Make NavList scrollable inside details on mobile */
  .mobile-toc & {
    max-height: 50vh;
    overflow-y: auto;
    padding-right: 1rem;
    
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.2);
      border-radius: 2px;
    }
  }
`;

const NavItem = styled.li`
  margin-bottom: 0.8rem;
  padding-left: ${(props) => (props.level === 'H3' ? '1.2rem' : '0')};

  a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    font-size: 1.4rem;
    line-height: 1.5;
    transition: all 0.2s ease;
    display: block;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-left: 2px solid transparent;
    padding-left: 1rem;
    margin-left: -1rem;

    &:hover {
      color: #945DD6;
      background: rgba(255, 255, 255, 0.03);
    }
    
    &.active {
      color: #13ADC7;
      font-weight: 600;
      border-left: 2px solid #13ADC7;
      background: linear-gradient(90deg, rgba(19, 173, 199, 0.1) 0%, transparent 100%);
    }
  }
`;

const PostContainer = styled.article`
  flex: 1;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  padding: 4rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  min-width: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 2rem 1rem;
    background: transparent;
    border: none;
    backdrop-filter: none;
    border-radius: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem 1rem;
  }
`;

const DesktopToggleBtn = styled.button`
  position: fixed;
  bottom: 3rem;
  left: 3rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(19, 173, 199, 0.2);
  color: #13ADC7;
  border: 1px solid #13ADC7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 900;
  transition: all 0.2s;

  &:hover {
    background: #13ADC7;
    color: white;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

const PostHeader = styled.header`
  margin-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 2rem;
`;

const PostTitle = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: 800;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.8rem;
    background: none;
    -webkit-text-fill-color: #FFFFFF;
    color: #FFFFFF;
  }
`;

const PostDate = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.4rem;
  font-family: 'Space Grotesk', sans-serif;
`;

const PostContent = styled.div`
  font-size: 1.6rem;
  line-height: 1.7;
  color: #d4d6d8;
  font-weight: 400;
  font-family: 'Space Grotesk', sans-serif;
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    color: #fff;
    scroll-margin-top: calc(var(--header-offset, 100px) + 20px);
  }
  
  h2 { font-size: 2.8rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.8rem; }
  h3 { font-size: 2.2rem; }
  h4 { font-size: 1.8rem; }
  
  p {
    margin-bottom: 2rem;
  }
  
  ul, ol {
    margin-bottom: 2rem;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.8rem;
    }
  }
  
  a {
    color: #13ADC7;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.2s;
    
    &:hover {
      border-bottom: 1px solid #13ADC7;
    }
  }
  
  code {
    font-family: 'Fira Code', monospace;
    font-size: 0.85em;
  }
  
  :not(pre) > code {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    color: #FF79C6;
  }
  
  pre {
    background: #0f1624 !important;
    padding: 2rem !important;
    border-radius: 8px;
    margin: 3rem 0;
    overflow-x: auto;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    
    & > code {
      background: transparent !important;
      padding: 0 !important;
      color: #f8f8f2;
      text-shadow: none !important;
      font-size: 1.4rem;
    }
  }

  .copy-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;
    opacity: 0;
    
    &:hover {
      background: #13ADC7;
    }
  }
  
  pre:hover .copy-button {
    opacity: 1;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 2rem 0;
  }
  
  blockquote {
    border-left: 4px solid #945DD6;
    background: rgba(148, 93, 214, 0.05);
    padding: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: #fff;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    
    th, td {
      padding: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 1.4rem;
    }
    th {
      background: rgba(255, 255, 255, 0.05);
      color: #13ADC7;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
    line-height: 1.6;
    
    h1, h2, h3, h4, h5, h6 {
      margin-top: 3rem;
    }
    
    h2 { font-size: 2.4rem; padding-bottom: 0.5rem; }
    h3 { font-size: 2rem; }
    h4 { font-size: 1.8rem; }
    
    pre {
      padding: 1.5rem !important;
      margin: 2rem -1rem;
      border-radius: 4px;
      border-left: none;
      border-right: none;
      
      & > code {
        font-size: 1.4rem;
      }
    }
    
    blockquote {
      padding: 1rem;
      margin: 1.5rem 0;
    }
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 2rem;
  color: #13ADC7;
  text-decoration: none;
  align-items: center;
  font-weight: 600;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #945DD6;
    transform: translateX(-5px);
  }
`;

export default function Post({ postData }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true); // Desktop
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false); // Mobile TOC State
  const observer = useRef(null);
  const sidebarRef = useRef(null); // Ref for sidebar container
  const isScrollingRef = useRef(false); // Ref to track scroll state

  // Lock body scroll when mobile TOC is open
  useEffect(() => {
    if (isMobileTocOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileTocOpen]);


  useEffect(() => {
    Prism.highlightAll();

    // 1. Generate TOC
    const headings = Array.from(document.querySelectorAll('h2, h3'));
    const tocData = headings.map((heading) => ({
      id: heading.id || heading.innerText.toLowerCase().replace(/\s+/g, '-'),
      text: heading.innerText,
      level: heading.tagName,
    }));

    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = heading.innerText.toLowerCase().replace(/\s+/g, '-');
      }
    });
    setToc(tocData);

    // 2. Intersection Observer for Active Section
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      // Find the first intersecting entry
      const visibleEntry = entries.find(entry => entry.isIntersecting);
      if (visibleEntry) {
        setActiveId(visibleEntry.target.id);
      }
    }, {
      rootMargin: '0px 0px -60% 0px', // Adjusted to highlight top area
      threshold: 0.1
    });

    headings.forEach((heading) => observer.current.observe(heading));

    // 3. Copy Button Logic
    const preBlocks = document.querySelectorAll('pre');
    preBlocks.forEach((pre) => {
      if (pre.querySelector('.copy-button')) return;

      const button = document.createElement('button');
      button.className = 'copy-button';
      button.textContent = 'Copy';

      button.addEventListener('click', () => {
        const code = pre.querySelector('code')?.innerText || pre.innerText;
        navigator.clipboard.writeText(code).then(() => {
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = 'Copy';
          }, 2000);
        });
      });
      pre.appendChild(button);
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [postData]);

  // Auto-scroll Sidebar to Active Item (Optimized)
  useEffect(() => {
    if (activeId && sidebarRef.current && !isScrollingRef.current) {
      const activeLink = sidebarRef.current.querySelector(`a.active`);
      if (activeLink) {
        // Check if element is already largely visible to avoid jitter
        const linkRect = activeLink.getBoundingClientRect();
        const sidebarRect = sidebarRef.current.getBoundingClientRect();

        const isVisible = (
          linkRect.top >= sidebarRect.top + 20 &&
          linkRect.bottom <= sidebarRect.bottom - 20
        );

        if (!isVisible) {
          activeLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }, [activeId]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    isScrollingRef.current = true; // Block observer updates temporarily during click scroll
    setActiveId(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileTocOpen(false); // Close mobile TOC on clicking a link
    }

    // Re-enable observer updates after scroll finishes (approx)
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  return (
    <Layout>
      <Head>
        <title>{postData.title} | PMD Nawaz Portfolio</title>
        <meta name="description" content={postData.description} />
      </Head>

      <PageWrapper>
        {/* Desktop Toggle (Show/Hide) */}
        <DesktopToggleBtn onClick={() => setIsSidebarExpanded(!isSidebarExpanded)} title="Toggle TOC">
          {isSidebarExpanded ? <AiOutlineLeft /> : <AiOutlineRight />}
        </DesktopToggleBtn>

        {/* MDN-style Left Sidebar (Desktop - TOC) */}
        <DesktopSidebar isExpanded={isSidebarExpanded} ref={sidebarRef}>
          <SidebarTitle>
            On this page
          </SidebarTitle>
          <NavList>
            {toc.length > 0 ? (
              toc.map((item, index) => (
                <NavItem key={index} level={item.level}>
                  <a
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={activeId === item.id ? 'active' : ''}
                  >
                    {item.text}
                  </a>
                </NavItem>
              ))
            ) : (
              <NavItem>No Content</NavItem>
            )}
          </NavList>
        </DesktopSidebar>

        {/* Mobile Inline TOC */}
        <MobileTOCWrapper className="mobile-toc">
          <details 
            open={isMobileTocOpen} 
            onChange={(e) => setIsMobileTocOpen(e.target.open)}
            onToggle={(e) => setIsMobileTocOpen(e.target.open)}
            onClick={(e) => {
              if (e.target.tagName === 'SUMMARY' || e.target.closest('summary')) {
                 e.preventDefault();
                 setIsMobileTocOpen(!isMobileTocOpen);
              }
            }}
          >
            <summary>
              On this page
              <AiOutlineDown size="1.6rem" />
            </summary>
            <NavList>
              {toc.length > 0 ? (
                toc.map((item, index) => (
                  <NavItem key={index} level={item.level}>
                    <a
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={activeId === item.id ? 'active' : ''}
                    >
                      {item.text}
                    </a>
                  </NavItem>
                ))
              ) : (
                <NavItem>No Content</NavItem>
              )}
            </NavList>
          </details>
        </MobileTOCWrapper>

        <PostContainer>
          <BackLink href="/blogs">← All Posts</BackLink>
          <PostHeader>
            <PostTitle>{postData.title}</PostTitle>
            <PostDate>{postData.date}</PostDate>
          </PostHeader>
          <PostContent dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </PostContainer>
      </PageWrapper>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postData,
    },
  };
}
