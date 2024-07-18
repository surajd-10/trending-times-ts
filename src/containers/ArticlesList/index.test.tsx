import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from '.';

describe('ArticleList component', () => {
  const mockArticles = [
    {
        "uri": "nyt://article/1e79f976-e56c-58fb-9701-71511eb3742c",
        "url": "https://www.nytimes.com/2024/07/12/opinion/jennifer-lopez-this-is-me-now.html",
        "id": 100000009564661,
        "asset_id": 100000009564661,
        "source": "New York Times",
        "published_date": "2024-07-12",
        "updated": "2024-07-15 20:58:21",
        "section": "Opinion",
        "subsection": "",
        "nytdsection": "opinion",
        "adx_keywords": "Content Type: Personal Profile;Pop and Rock Music;Actors and Actresses;Hispanic-Americans;Documentary Films and Programs;Lopez, Jennifer;Affleck, Ben",
        "column": null,
        "byline": "By Yarimar Bonilla",
        "type": "Article",
        "title": "I Can’t Revel in J. Lo’s Fall From Grace",
        "abstract": "The notion that you, too, can rise from the Barrio to Hollywood through sheer grit doesn’t speak to a generation disillusioned with the myth of meritocracy.",
        "des_facet": [
          "Content Type: Personal Profile",
          "Pop and Rock Music",
          "Actors and Actresses",
          "Hispanic-Americans",
          "Documentary Films and Programs"
        ],
        "org_facet": [],
        "per_facet": [
          "Lopez, Jennifer",
          "Affleck, Ben"
        ],
        "geo_facet": [],
        "media": [
          {
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "Hector Vivas/Getty",
            "approved_for_syndication": 1,
            "media-metadata": [
              {
                "url": "https://static01.nyt.com/images/2024/07/13/multimedia/12bonilla-fhzq/12bonilla-fhzq-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/13/multimedia/12bonilla-fhzq/12bonilla-fhzq-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/13/multimedia/12bonilla-fhzq/12bonilla-fhzq-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440
              }
            ]
          }
        ],
        "eta_id": 0
      },
      {
        "uri": "nyt://article/8d81be7d-a901-5e88-9a2f-ebb6b0a870e9",
        "url": "https://www.nytimes.com/article/shooting-trump-rally.html",
        "id": 100000009570363,
        "asset_id": 100000009570363,
        "source": "New York Times",
        "published_date": "2024-07-14",
        "updated": "2024-07-17 18:09:58",
        "section": "U.S.",
        "subsection": "Politics",
        "nytdsection": "u.s.",
        "adx_keywords": "Assassinations and Attempted Assassinations;United States Politics and Government;Presidential Election of 2024;Trump, Donald J;Crooks, Thomas Matthew (2003-24);Butler (Pa)",
        "column": null,
        "byline": "By Michael Levenson",
        "type": "Article",
        "title": "What We Know About the Assassination Attempt Against Trump",
        "abstract": "The former president was holding a rally when he said he was shot in his ear. Two people, including the suspected gunman, were killed and two were critically injured.",
        "des_facet": [
          "Assassinations and Attempted Assassinations",
          "United States Politics and Government",
          "Presidential Election of 2024"
        ],
        "org_facet": [],
        "per_facet": [
          "Trump, Donald J",
          "Crooks, Thomas Matthew (2003-24)"
        ],
        "geo_facet": [
          "Butler (Pa)"
        ],
        "media": [
          {
            "type": "image",
            "subtype": "photo",
            "caption": "People leave the rally in Butler, Pa., on Saturday after the attack on Mr. Trump.",
            "copyright": "Eric Lee/The New York Times",
            "approved_for_syndication": 1,
            "media-metadata": [
              {
                "url": "https://static01.nyt.com/images/2024/08/13/multimedia/13election-live-what-we-know-shooting-lwjt/13election-live-what-we-know-shooting-lwjt-thumbStandard.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75
              },
              {
                "url": "https://static01.nyt.com/images/2024/08/13/multimedia/13election-live-what-we-know-shooting-lwjt/13election-live-what-we-know-shooting-lwjt-mediumThreeByTwo210.jpg",
                "format": "mediumThreeByTwo210",
                "height": 140,
                "width": 210
              },
              {
                "url": "https://static01.nyt.com/images/2024/08/13/multimedia/13election-live-what-we-know-shooting-lwjt/13election-live-what-we-know-shooting-lwjt-mediumThreeByTwo440.jpg",
                "format": "mediumThreeByTwo440",
                "height": 293,
                "width": 440
              }
            ]
          }
        ],
        "eta_id": 0
      },
  ];

  it('renders articles correctly', () => {
    const { getByTestId, getAllByTestId } = render(<ArticleList articles={mockArticles} />);
    const articleListElement = getByTestId('article-list');
    const articleElements = getAllByTestId('article');
    
    expect(articleListElement).toBeInTheDocument();
    expect(articleElements).toHaveLength(mockArticles.length);

    // You can add more assertions based on your component structure
  });
});

