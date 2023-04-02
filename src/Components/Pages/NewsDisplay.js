import { useEffect, useState } from 'react';
import Loader from '../Loader';
import './newsDisplay.css';

function NewsDisplay() {
    

    const [loading, setLoading] = useState(false);
    const [newsData, setNewsData] = useState([]);
    

// ---------------------------Fetch news api data------------------------
    useEffect(() => {
        const abortController = new AbortController();

        const fetchNewsData = async () => {
            try {
                setLoading(true);
                const getData = await fetch("https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=8f868d2ff8ba4e4e867c1a84d4f8e237", {signal: abortController.signal}).then((getData) => getData.json());
                setNewsData(getData?.articles);
                setLoading(false);
            }

            catch (err) {
                console.log(err);
            }
        };

        fetchNewsData();

        return () => {
            abortController.abort();
          };

    }, []);



    return (
        <>
            <div className='news-wrapper'>
                <h1 className='text-center'>Top Headlines</h1>
                {loading ? (<Loader />) : (newsData.map((data, index) => (
                    <div className='news-card' key={index}>
                        <div className='card-content'>
                            <div><img src={data?.urlToImage} alt='news'></img></div>
                            <div className='content'>
                                <h3>{data?.title}</h3>
                                <h6>{data?.author}</h6>
                                <p>{data?.description}</p>
                            </div>
                        </div>
                    </div>
                )))

                }
            </div>
        </>
    )
};
export default NewsDisplay;