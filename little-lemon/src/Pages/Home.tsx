import { homeContent, specials } from './_PageData';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import '../dist/css/Home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="home_wrapper">
          <div className="top_content">
            <div className="content">
              <h1>{homeContent.title}</h1>
              <h3>{homeContent.subtitle}</h3>
              <p>{homeContent.subcontent}</p>
              <button className="btn">{homeContent.buttonTitle}</button>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div className="bottom_content">
            <div className="title_container">
              <h1>{homeContent.thisWeekTitle}</h1>
              <button className="btn">{homeContent.thisWeekButton}</button>
            </div>
            <div className="card_wrapper">
              <div className="card_container">
                {specials.map((item) => {
                  return (
                    <Card
                      title={item.title}
                      price={item.price}
                      imgUrl={item.imgUrl}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

/* 



*/
