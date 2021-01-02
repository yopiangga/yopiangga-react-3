import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";


export default function ContactForm(){
    return(
    <section className="contact-form">
        <div className="content">
            <div className="description">
                <div className="address">
                    <h4>Address</h4>
                    <p>RT 14 RW 05 Desa Gambyok
                    Kecamatan Grogol, Kabupaten Kediri
                    Jawa Timur 64151</p>
                </div>
                <div className="phone">
                    <h4>Phone</h4>
                    <p>0823 3041 0865</p>
                </div>
                <div className="email">
                    <h4>Email</h4>
                    <p>yopiangga@petikdua.store</p>
                </div>
                <div className="media-sosial">
                    <FiFacebook color="#333333" size="24px" onclick="window.location.href='https://www.facebook.com/alfian.prisma.yopiangga'"></FiFacebook>
                    <FiInstagram color="#333333" size="24px" onclick="window.location.href='https://www.instagram.com/alfian_prisma_yopiangga/'"></FiInstagram>
                    <FiTwitter color="#333333" size="24px" onclick="window.location.href='https://twitter.com/AlfianPrisma'"></FiTwitter>
                    <FiLinkedin color="#333333" size="24px" onclick="window.location.href='https://www.linkedin.com/in/alfian-prisma-yopiangga-a954251a8/'"></FiLinkedin>
                </div>
            </div>
            <div className="form">
                <div className="title" id="mobile">
                    <h2>Form Contact me</h2>
                </div>
                <form action="">
                    <div className="form-group">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Subject" />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <textarea rows="15" placeholder="Message"></textarea>
                    </div>
                    <button className="btn-send">SEND US NOW</button>
                </form>
            </div>
        </div>
    </section>
    );
}