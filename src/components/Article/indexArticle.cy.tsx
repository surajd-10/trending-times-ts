import React from 'react'
import Article from './index';

const mockProps = {
  detailArticleLink: 'https://example.com/article1',
  imageData: {
    url: 'https://example.com/image1.jpg',
    caption: 'Image Caption',
  },
  title: 'Sample Article Title',
  className: 'article-card',
};

describe('<Article />', () => {
  it('renders', () => {
    cy.mount(<Article {...mockProps}/>)
  })
})