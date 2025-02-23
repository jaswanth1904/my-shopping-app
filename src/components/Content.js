import React from 'react';
import Carousel from './Carousel';
import './Content.css';

function Content() {
  return (
    <div className="content">
      {/* Carousel (Image Slider) */}
      <Carousel />

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <a href="/fashion" className="category-item">
            <img src="https://i.pinimg.com/736x/fc/7f/1f/fc7f1f7095eb733cda53bfe7823bec65.jpg" alt="Fashion" />
            <h4>Fashion</h4>
          </a>
          <a href="/electronics" className="category-item">
            <img src="https://i.pinimg.com/736x/2f/b2/20/2fb220d6b67bd2b0e0f780056d163f8d.jpg" alt="Electronics" />
            <h4>Electronics</h4>
          </a>
          <a href="/kids" className="category-item">
            <img src="https://i.pinimg.com/736x/95/54/ea/9554eaff0bf844d1202ed0b521f49e30.jpg" alt="Kids" />
            <h4>Kids</h4>
          </a>
          <a href="/furniture" className="category-item">
            <img src="https://i.pinimg.com/736x/f0/c9/e9/f0c9e9c07c26f7273d3616f7aef246e7.jpg" alt="Furniture" />
            <h4>Furniture</h4>
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="product-list">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <a href="/mens-fashion" className="product-item">
            <img src="https://i.pinimg.com/736x/cb/79/14/cb7914a63816a6cc06d204976e50b35e.jpg" alt="Men's Fashion" />
            <h4>Apple</h4>
            <p>$99.99</p>
          </a>
          <a href="/womens-fashion" className="product-item">
            <img src="https://i.pinimg.com/736x/88/0e/0f/880e0f51f8e1f5ad4c9519845cc7566d.jpg" alt="Women's Fashion" />
            <h4>Men Fashion</h4>
            <p>$89.99</p>
          </a>
          <a href="/electronics" className="product-item">
            <img src="https://i.pinimg.com/736x/eb/d8/4a/ebd84aee9bd1feddce359d9803236f4b.jpg" alt="Electronics" />
            <h4>Electronics</h4>
            <p>$199.99</p>
          </a>
          <a href="/kids" className="product-item">
            <img src="https://i.pinimg.com/736x/ff/b6/4c/ffb64c4583301233a7290b5f45a58c24.jpg" alt="Kids" />
            <h4>Kids</h4>
            <p>$49.99</p>
          </a>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="reviews">
        <h2>Customer Reviews</h2>
        <div className="review-grid">
          <div className="review-item">
            <p>"Great products and fast delivery! Highly recommend!"</p>
            <h4>- Swarna Bhanu</h4>
          </div>
          <div className="review-item">
            <p>"Excellent quality and customer service. Will shop again!"</p>
            <h4>- John Doe</h4>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="additional-content">
        <h2>More About Us</h2>
        <p>We strive to provide the best shopping experience with a wide range of products and excellent customer service.</p>
      </section>

      {/* New Section: Join Us for Updates */}
<section className="join-us">
  <h2>Join Us for Updates</h2>
  <p>Stay up to date with the latest news, tips, and insights. Subscribe now to receive exclusive content and updates.</p>
  <div className="join-form">
    <input type="email" placeholder="Enter your email" />
    <button type="submit">Subscribe</button>
  </div>
</section>


      {/* New Section: FAQs */}
      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>What is your return policy?</h4>
            <p>We offer a 30-day return policy for all our products. Please contact our customer service for more details.</p>
          </div>
          <div className="faq-item">
            <h4>How can I track my order?</h4>
            <p>You can track your order using the tracking number provided in your order confirmation email.</p>
          </div>
        </div>
      </section>

      {/* New Section: Testimonials */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-grid">
          <div className="testimonial-item">
            <p>"I love shopping here! The quality of the products is excellent, and the customer service is top-notch."</p>
            <h4>- Jane Smith</h4>
          </div>
          <div className="testimonial-item">
            <p>"The best online shopping experience I've had. Fast delivery and great prices."</p>
            <h4>- Robert Johnson</h4>
          </div>
        </div>
      </section>
       {/* Blog/Content Section */}
       <section className="blog">
        <h2>Latest Articles</h2>
        <div className="blog-grid">
          <div className="blog-item">
            <h3>How to Choose the Best Products</h3>
            <p>Discover expert buying guides for top-quality purchases.</p>
          </div>
          <div className="blog-item">
            <h3>Latest Trends in Online Shopping</h3>
            <p>Stay updated with the newest shopping trends and offers.</p>
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="promotions">
        <h2>Exclusive Offers</h2>
        <p>Get up to 50% off on selected items! Limited-time deals.</p>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest deals and promotions.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section>

      {/* FAQs Section */}
      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>What are your shipping policies?</h4>
          <p>We offer free shipping on orders above $50.</p>
        </div>
        <div className="faq-item">
          <h4>What is your return policy?</h4>
          <p>You can return products within 30 days of purchase.</p>
        </div>
      </section>

      {/* Account Management */}
      <section className="account-management">
        <h2>Account Management</h2>
        <p>Manage your profile, order history, and wishlist.</p>
      </section>

      {/* Live Chat/Support Section */}
      <section className="live-chat">
        <h2>Need Help?</h2>
        <button>Chat with Support</button>
      </section>
    </div>
  );
};
      
export default Content;
