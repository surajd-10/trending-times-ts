import { useEffect, useState } from "react";
import "./index.scss";
import { fetchArticles } from "../../models/articles";
import Select from "../../components/select";
import { PERIOD_OPTIONS } from "../../constants/constants";
import ArticleList from "../../containers/ArticlesList";
import { IResult } from "./index.types";

const Home = () => {
    const [period, setPeriod] = useState(7);
    const [articles, setArticles] = useState<IResult[]>([]);

    useEffect(()=>{
        fetchPopularArticles();
    },[period])

    const fetchPopularArticles = async () => {
        try{
            const result = await fetchArticles(period);
            console.log(result);
            setArticles(result.results);
        }catch(error){
            console.error(error);
        }
    }

    return (
        <div className="home">
            <header>
                <h2>NY Times Most Popular Articles</h2>
                <div>
                    <label>
                    Period:    
                    <Select options={PERIOD_OPTIONS} value={period} onChange={(e) => setPeriod(Number(e.target.value))}/>
                    </label>
                </div>
            </header>
            <main>
                <ArticleList articles={articles}/>
            </main>
        </div>
    );
}

export default Home;