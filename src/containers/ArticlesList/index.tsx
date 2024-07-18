import { IArticleListProps } from "./index.types"
import "./index.scss";
import Article from "../../components/Article";

const ArticleList=({articles}: IArticleListProps)=>{
    return (
        <div data-testid="article-list" className="articleList">
                    {
                        articles.map((article)=>{
                            const {url, media, title, id} = article;
                            return (
                                <Article key={id} detailArticleLink={url} imageData={{url: media[0]?.["media-metadata"][2].url, caption: media[0]?.caption}} title={title} className="article"/>
                            )
                        })
                    }
                </div>
    )
}

export default ArticleList;