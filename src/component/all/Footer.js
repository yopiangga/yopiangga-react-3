
import photo1 from '../../assets/images/photo-1.png';
import photo2 from '../../assets/images/photo-2.png';
import photo3 from '../../assets/images/photo-3.png';
import photo4 from '../../assets/images/photo-4.png';

import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";


function Footer(){
    return(
    <section className="footer">
        <div className="content">
            <div className="body">
                <div className="contact">
                    <h4>Contact</h4>
                    <h6 onclick="window.location.href='https://g.page/yopiangga-web-app-design?share'">Kediri, Jawa Timur - Indonesia</h6>
                    <h6 onclick="window.location.href=''">0823 3041 0865</h6>
                    <h6 onclick="window.location.href=''">yopiangga@petikdua.store</h6>
                    <h6 onclick="window.location.href='http://petikdua.store/'">www.petikdua.store</h6>
                    <div className="media-sosial" id="desktop">
                        <FiFacebook color="#8EB359" size="24px" onclick="window.location.href='https://www.facebook.com/alfian.prisma.yopiangga'"></FiFacebook>
                        <FiInstagram color="#8EB359" size="24px" onclick="window.location.href='https://www.instagram.com/alfian_prisma_yopiangga/'"></FiInstagram>
                        <FiTwitter color="#8EB359" size="24px" onclick="window.location.href='https://twitter.com/AlfianPrisma'"></FiTwitter>
                        <FiLinkedin color="#8EB359" size="24px" onclick="window.location.href='https://www.linkedin.com/in/alfian-prisma-yopiangga-a954251a8/'"></FiLinkedin>
                    </div>
                </div>
                <div className="information">
                    <h4>Information</h4>
                    <h6 onclick="window.location.href=''">New Products</h6>
                    <h6 onclick="window.location.href=''">Hot Products</h6>
                    <h6 onclick="window.location.href=''">Our Blog</h6>
                    <h6 onclick="window.location.href=''">About Our Shop</h6>
                </div>
                <div className="navigation">
                    <h4>Navigation</h4>
                    <h6 onclick="window.location.href='dashboard.html'">Dashboard</h6>
                    <h6 onclick="window.location.href='about-us.html'">About Us</h6>
                    <h6 onclick="window.location.href='products.html'">Product</h6>
                    <h6 onclick="window.location.href='testimonials.html'">Testimonials</h6>
                    <h6 onclick="window.location.href='contact.html'">Contact</h6>
                </div>
                <div className="photo">
                    <h4>Photo in Instagram</h4>
                    <div className="image">
                        <img src={photo1} alt="" />
                        <img src={photo2} alt="" />
                        <img src={photo3} alt="" />
                        <img src={photo4} alt="" />
                    </div>
                </div>
                <div className="media-sosial" id="mobile">
                    <FiFacebook color="#8EB359" size="24px" onclick="window.location.href='https://www.facebook.com/alfian.prisma.yopiangga'"></FiFacebook>
                    <FiInstagram color="#8EB359" size="24px" onclick="window.location.href='https://www.instagram.com/alfian_prisma_yopiangga/'"></FiInstagram>
                    <FiTwitter color="#8EB359" size="24px" onclick="window.location.href='https://twitter.com/AlfianPrisma'"></FiTwitter>
                    <FiLinkedin color="#8EB359" size="24px" onclick="window.location.href='https://www.linkedin.com/in/alfian-prisma-yopiangga-a954251a8/'"></FiLinkedin>
                </div>
            </div>
            <div className="copyright">
                <h4>Copyright @ 2020 Petikdua - All Right Reserved</h4>
            </div>
        </div>
    </section>
    );
}


export default Footer;