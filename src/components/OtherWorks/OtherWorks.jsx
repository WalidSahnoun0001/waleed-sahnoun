import './other-works.css'
import StaticJobsFilter from '../../assets/static-jobs-filter.png'
import QuranPlayer from '../../assets/Quran-Player.png'
import ProductPage from '../../assets/product-page.png'
import RedditApi from '../../assets/Reddit-Api-Article-Titles-App.png'
import TodoApp from '../../assets/Todo-App.png'
import XOGame from '../../assets/XO-GAME.png'


function OtherWorks() {

    const images = [
        {id: 1, src: QuranPlayer, title: "Quran Player", tech: "Vue 3", link: "https://walidsahnoun0001.github.io/quran-player-vuejs/"},
        {id: 2, src: ProductPage, title: "Ecommerce Product Page", tech: "ReactJs", link: "https://walidsahnoun0001.github.io/ecommerce-product-page-react-vite/"},
        {id: 3, src: RedditApi, title: "Reddit Api Article Titles", tech: "ReactJs", link: "https://walidsahnoun0001.github.io/reddit-api-get-article-titles-app-reactjs/"},
        {id: 4, src: TodoApp, title: "Todo App", tech: "Reactjs", link: "https://walidsahnoun0001.github.io/todo-app-reactjs-vite/"},
        {id: 5, src: XOGame, title: "XO GAME", tech: "Vue 3", link: "https://walidsahnoun0001.github.io/xo-game-vue3-vite/"},
        {id: 6, src: StaticJobsFilter, title: "Static Jobs Filter", tech: "ReactJs", link: "https://walidsahnoun0001.github.io/static-jobs-filter-react-vite/"},
    ]

  return (
    <section className="other-works">
            <h2>Other Works</h2>

            <div className="all-other-works">
                {
                    images.map((anOther) => (
                        <div className="an-other-work" key={anOther.id}>
                            <a href={anOther.link} target="_blank">
                                <div className="overlay"></div>
                                    <figure>
                                        <img src={anOther.src} alt="" />
                                    </figure>
                                <div className="work-info">
                                    <h3>{anOther.title}</h3>
                                    <div className="tech">
                                        <span>{anOther.tech}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
    </section>
  )
}

export default OtherWorks