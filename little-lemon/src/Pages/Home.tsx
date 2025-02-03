import { homeContent, specials } from './_PageData';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import foodImage from '../Images/restauranfood.jpg';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <div className="top_content">
            <div className="main_content">
              <div className="main_content__inner">
                <h1>{homeContent.title}</h1>
                <h3>{homeContent.subtitle}</h3>
                <p>{homeContent.subcontent}</p>
                <button className="btn">{homeContent.buttonTitle}</button>
              </div>
              <div className="image_container">
                <img src={foodImage} alt="" />
              </div>
            </div>
          </div>
          <div className="bottom_content">
            <div className="title_container">
              <h1>{homeContent.thisWeekTitle}</h1>
              <button className="btn">{homeContent.thisWeekButton}</button>
            </div>
            <div className="card_container">
              {specials.map((item) => {
                return (
                  <Card key={item.title}
                    title={item.title}
                    price={item.price}
                    imgUrl={item.imgUrl}
                    description={item.description}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
