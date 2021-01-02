import $ from 'jquery';

function btnMenuDown(){
    $('nav .content .menu').removeClass('active');
}

function Subscribe(){
    return(
        <section className="subscribe" onClick={btnMenuDown}>
            <div className="content">
                <div className="title">
                    <h2>Subscribe To Our Newsletter</h2>
                </div>
                <div className="body">
                    <form action="">
                        <input type="text" name="email" placeholder="Enter your e-mail" />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;