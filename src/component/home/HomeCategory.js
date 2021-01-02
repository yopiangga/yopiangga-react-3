

import fruits from '../../assets/images/fruit.png';
import vegetables from '../../assets/images/vegetable.png';
import seafoods from '../../assets/images/seafood.png';
import garlics from '../../assets/images/garlic.png';
import meets from '../../assets/images/meet.png';

function HomeCategory(){
    return (
            <section className="home-category">
            <div className="content">
                <div className="title">
                    <h2>WELCOME TO PETIKDUA</h2>
                    <h6>- A food store -</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt reiciendis unde iste, harum, autem nam odit ipsum doloribus quae dolorum veritatis. Debitis quam quidem, amet praesentium dolorem velit recusandae.</p>
                </div>
                <div className="body">
                    <div className="category category-1">
                        <div className="category-img">
                            <img src={fruits} alt=""></img>
                        </div>
                        <div className="category-body">
                            <h5>Fruits</h5>
                            <h6>(9 items)</h6>
                        </div>
                    </div>
                    <div className="category category-2">
                        <div className="category-img">
                            <img src={vegetables} alt=""></img>
                        </div>
                        <div className="category-body">
                            <h5>Vegetables</h5>
                            <h6>(9 items)</h6>
                        </div>
                    </div>
                    <div className="category category-3">
                        <div className="category-img">
                            <img src={seafoods} alt=""></img>
                        </div>
                        <div className="category-body">
                            <h5>Sea foods</h5>
                            <h6>(9 items)</h6>
                        </div>
                    </div>
                    <div className="category category-4">
                        <div className="category-img">
                            <img src={garlics} alt=""></img>
                        </div>
                        <div className="category-body">
                            <h5>Garlics</h5>
                            <h6>(9 items)</h6>
                        </div>
                    </div>
                    <div className="category category-5">
                        <div className="category-img">
                            <img src={meets} alt=""></img>
                        </div>
                        <div className="category-body">
                            <h5>Meets</h5>
                            <h6>(9 items)</h6>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}


export default HomeCategory;