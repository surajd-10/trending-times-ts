import { IArticleProps } from "./index.types";

const Article = ({ detailArticleLink, imageData, title, className }: IArticleProps) => {
    return (
        <div data-testid="article" className={className}>
            <a href={detailArticleLink} target="_blank" rel="noreferrer">
                <div className="imageContainer">
                    <img alt={imageData.caption} src={imageData.url} />
                </div>
                <p>{title}</p>
            </a>
        </div>
    )
}

export default Article;