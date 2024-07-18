import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Article from '.';

const mockProps = {
  detailArticleLink: 'https://example.com/article1',
  imageData: {
    url: 'https://example.com/image1.jpg',
    caption: 'Image Caption',
  },
  title: 'Sample Article Title',
  className: 'article-card',
};

describe('Article component', () => {
  test('renders article correctly', () => {
    const { getByText, getByAltText } = render(<Article {...mockProps} />);

    // Verify article title
    const titleElement = getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();

    // Verify detail article link
    const detailLink = getByText(mockProps.title).closest('a');
    expect(detailLink).toHaveAttribute('href', mockProps.detailArticleLink);
    expect(detailLink).toHaveAttribute('target', '_blank');
    expect(detailLink).toHaveAttribute('rel', 'noreferrer');

    // Verify image data
    const imageElement = getByAltText(mockProps.imageData.caption);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockProps.imageData.url);

    // Verify className applied
    const articleCard = getByText(mockProps.title).closest('.article-card');
    expect(articleCard).toBeInTheDocument();
  });
});
