
const HeroSection = () => {

    return(
        <>
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, pariatur nihil. Debitis voluptas dolorem molestiae culpa maiores, nobis animi qui.</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="images/amazon.png" alt="amazon" />
                        <img src="images/flipkart.png" alt="flipkart" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="images/shoe_image.png" alt="shoe" />
            </div>    
        </main>   
        </>
    ) 
}
export default HeroSection;