import React, { useState } from 'react';
import { 
  ProjectsContainer,
  List,
  ListItem,
  ProjectImage,
  VisibilityBadge,
  ListContainer,
  ListTitle,
  ListParagraph,
  TechStack,
  TechTag,
  MoreTagsIndicator,
  HiddenTags,
  ProjectActions,
  ActionButton,
  CategoryContainer,
  CategoryButton,
  CategoryDescription,
  ProjectCounter,
  ShowMoreButton
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects, projectCategories } from '../../constants/constants';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('portfolios');
  const [showAll, setShowAll] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Sort projects by complexity and skills
  const sortProjectsByComplexity = (projectList) => {
    const complexityScore = (project) => {
      let score = 0;
      
      // Language complexity scoring
      if (project.github?.language === 'TypeScript') score += 10;
      else if (project.github?.language === 'Go') score += 9;
      else if (project.github?.language === 'Python') score += 8;
      else if (project.github?.language === 'JavaScript') score += 7;
      
      // Size scoring (larger projects get more points)
      const sizeNum = parseFloat(project.github?.size?.replace(/[^0-9.]/g, ''));
      if (sizeNum > 50) score += 10;
      else if (sizeNum > 10) score += 7;
      else if (sizeNum > 1) score += 5;
      else score += 3;
      
      // Tech stack complexity
      if (project.tags.includes('AI')) score += 8;
      if (project.tags.includes('WebRTC')) score += 8;
      if (project.tags.includes('Docker')) score += 6;
      if (project.tags.includes('Go')) score += 7;
      if (project.tags.includes('TypeScript')) score += 6;
      if (project.tags.includes('React Native')) score += 6;
      if (project.tags.includes('System Design')) score += 7;
      if (project.tags.includes('Microservices')) score += 7;
      
      // Recency bonus (newer projects get slight boost)
      const year = new Date(project.github?.created).getFullYear();
      if (year >= 2025) score += 3;
      else if (year >= 2024) score += 2;
      
      return score;
    };
    
    return [...projectList].sort((a, b) => complexityScore(b) - complexityScore(a));
  };

  const currentProjects = sortProjectsByComplexity(projects[activeCategory] || []);
  const displayedProjects = showAll ? currentProjects : currentProjects.slice(0, 6); // Show 6 projects initially
  const currentCategory = projectCategories.find(cat => cat.id === activeCategory);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setShowAll(false);
  };

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Featured Projects</SectionTitle>
      <SectionText>
        A curated showcase of my most impactful work - prioritized by technical complexity, innovation, and real-world application.
      </SectionText>
      
      <CategoryContainer>
        {projectCategories.map((category) => (
          <CategoryButton
            key={category.id}
            active={activeCategory === category.id}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.name}
            <ProjectCounter>({projects[category.id]?.length || 0})</ProjectCounter>
          </CategoryButton>
        ))}
      </CategoryContainer>

      {currentCategory && (
        <CategoryDescription>{currentCategory.description}</CategoryDescription>
      )}

      <ProjectsContainer>
        <List>
          {displayedProjects.map((project, index) => (
            <ListItem key={project.id}>
              <VisibilityBadge visibility={project.github?.visibility || 'PUBLIC'}>
                {project.github?.visibility || 'PUBLIC'}
              </VisibilityBadge>
              <ProjectImage src={project.image} alt={project.title} />
              <ListContainer>
                <ListTitle>{project.title}</ListTitle>
                <ListParagraph>{project.description}</ListParagraph>
                
                <TechStack>
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <TechTag key={i}>{tag}</TechTag>
                  ))}
                  {project.tags.length > 3 && (
                    <MoreTagsIndicator
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      +{project.tags.length - 3} more
                      <HiddenTags show={hoveredProject === project.id}>
                        <TechStack>
                          {project.tags.slice(3).map((tag, i) => (
                            <TechTag key={i}>{tag}</TechTag>
                          ))}
                        </TechStack>
                      </HiddenTags>
                    </MoreTagsIndicator>
                  )}
                </TechStack>
                
                <ProjectActions>
                  {project.visit && (
                    <ActionButton 
                      href={project.visit} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      primary
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6"/>
                        <path d="M10 14 21 3"/>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      </svg>
                      Live Demo
                    </ActionButton>
                  )}
                  {project.source && (
                    <ActionButton 
                      href={project.source} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m16 18 6-6-6-6"/>
                        <path d="m8 6-6 6 6 6"/>
                      </svg>
                      Code
                    </ActionButton>
                  )}
                </ProjectActions>
              </ListContainer>
            </ListItem>
          ))}
        </List>
      </ProjectsContainer>

      {currentProjects.length > 6 && (
        <ShowMoreButton onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less Projects' : `View remaining ${currentProjects.length - 6} project(s)`}
        </ShowMoreButton>
      )}

      <SectionDivider colorAlt />
    </Section>
  );
};

export default Projects;