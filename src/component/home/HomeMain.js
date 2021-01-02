

function HomeMain() {
  return (
    <section className="home-intro">
        <div className="btn-left">
            <div className="icon-box">
                <i data-feather="chevron-left"></i>
            </div>
        </div>
        <div className="slide slide-1 active">
            <div className="content">
                <h6>PETIKDUA - 2020</h6>
                <h2>FOOD STORE</h2>
                <p>1 Organie product grown with love</p>
                <button className="btn-shop">SHOP NOW</button>
            </div>
            <div className="icon-down">
                <div className="circle animate__animated animate__bounce"></div>
            </div>
        </div>
        <div className="slide slide-2">
            <div className="content">
                <h6>PETIKDUA - 2020</h6>
                <h2>FOOD STORE</h2>
                <p>2 Organie product grown with love</p>
                <button className="btn-shop">SHOP NOW</button>
            </div>
            <div className="icon-down">
                <div className="circle"></div>
            </div>
        </div>
        <div className="btn-right">
            <div className="icon-box">
                <i data-feather="chevron-right"></i>
            </div>
        </div>
    </section>
  );
}

export default HomeMain;
