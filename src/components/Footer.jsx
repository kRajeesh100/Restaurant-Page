import React from 'react'

function Footer() {
  return (
  
        <footer style={styles.footer}>
          <div style={styles.container}>
            <div style={styles.section}>
              <h2>Contact Us</h2>
              <p>Email: <a href="mailto:contact@ineedfood.com" style={styles.link}>contact@ineedfood.com</a></p>
              <p>Phone: <a href="tel:+12345678900" style={styles.link}>+1-234-567-8900</a></p>
              <p>Address: 123 Food Street, Flavor Town, USA</p>
            </div>
            <div style={styles.section}>
              <h2>Follow Us</h2>
              <p>
                <a href="https://facebook.com/ineedfood" target="_blank" rel="noopener noreferrer" style={styles.link}>Facebook</a>
                <a href="https://twitter.com/ineedfood" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a>
                <a href="https://instagram.com/ineedfood" target="_blank" rel="noopener noreferrer" style={styles.link}>Instagram</a>
              </p>
            </div>
            <div style={styles.section}>
              <h2>Quick Links</h2>
              <p>
                <a href="/home" style={styles.link}>Home</a>
                <a href="/about" style={styles.link}>About Us</a>
                <a href="/menu" style={styles.link}>Menu</a>
                <a href="/blog" style={styles.link}>Blog</a>
                <a href="/contact" style={styles.link}>Contact</a>
                <a href="/faqs" style={styles.link}>FAQs</a>
              </p>
            </div>
            <div style={styles.section}>
              <h2>Newsletter</h2>
              <p>Stay updated with our latest recipes and offers. Subscribe to our newsletter:</p>
              <div style={styles.newsletter}>
                <input type="email" placeholder="Your Email" style={styles.input} />
                <button style={styles.button}>Subscribe</button>
              </div>
            </div>
          </div>
          <div style={styles.section}>
            <a href="/privacy-policy" style={styles.link}>Privacy Policy</a> | 
            <a href="/terms-of-service" style={styles.link}>Terms of Service</a>
          </div>
          <div>
            <p>&copy; 2024 I NeeD FooD. All Rights Reserved.</p>
          </div>
        </footer>
      );
    }
    
    const styles = {
      footer: {
        backgroundColor: '#333',
        color: 'white',
        padding: '20px 0',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '0 20px',
      },
      section: {
        flex: '1 1 200px',
        margin: '10px',
        minWidth: '200px',
      },
      link: {
        color: '#FFA500',
        margin: '0 10px',
      },
      input: {
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        marginRight: '10px',
        flex: '1',
      },
      button: {
        padding: '10px 20px',
        backgroundColor: '#FFA500',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      },
      newsletter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      '@media (min-width: 600px)': {
        newsletter: {
          flexDirection: 'row',
        },
      },
    };
    
    export default Footer;
    
 
