import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/logo.png" alt="Logo" className="App-logo" />
        <h1>Club Ibn Khaldoun</h1>
        <p className="intro-text">
          Bienvenue sur le site officiel du Club Ibn Khaldoun de la Faculté des Sciences Ben M'sik.
        </p>
      </header>

      <nav className="navbar">
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#mission">Mission</a></li>
          <li><a href="#activities">Activités</a></li>
          <li><a href="#resources">gallery</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>
      </nav>

      <section id="about" className="section wow-section">
        <h2>À propos</h2>
        <p>
          Le Club Ibn Khaldoun est une association d’étudiants dédiée à l'enrichissement académique et à l'animation de la vie universitaire au sein de la Faculté des Sciences Ben M’sik. Nous avons pour vocation de fédérer les étudiants autour de valeurs d'entraide, de partage de connaissances et de développement personnel, afin de renforcer la dynamique de notre communauté universitaire.
        </p>
        <p>
          Notre équipe, composée de jeunes talents motivés, œuvre chaque jour pour offrir des opportunités de croissance et d'épanouissement, tant sur le plan académique que personnel. Nous croyons fermement en l'importance d’un environnement inclusif et enrichissant pour le bien-être de chaque membre de notre communauté.
        </p>
      </section>

      <section id="mission" className="section wow-section">
        <h2>Notre Mission</h2>
        <p>
          Notre mission est de contribuer activement au développement intellectuel et professionnel des étudiants, en leur offrant une plateforme pour acquérir des compétences pratiques et théoriques dans divers domaines académiques. À travers nos événements, conférences et ateliers, nous visons à stimuler la curiosité, l’innovation et la collaboration au sein de la faculté.
        </p>
        <p>
          Nous nous engageons à promouvoir un environnement propice à l’échange d'idées et à la croissance personnelle, où chaque étudiant peut s'épanouir et préparer au mieux son avenir professionnel. Nous aspirons à être un acteur clé de l'amélioration continue de la vie étudiante à la Faculté des Sciences Ben M’sik.
        </p>
      </section>

      <section id="activities" className="section wow-section">
        <h2>Nos Activités</h2>
        <ul>
          <li>Organisation de séminaires et conférences animées par des experts académiques et professionnels.</li>
          <li>Ateliers pratiques sur des compétences essentielles : gestion du temps, leadership, développement de carrière, etc.</li>
          <li>Création de groupes de discussion et de réflexion autour des sujets académiques et socio-économiques d'actualité.</li>
          <li>Participation à des événements interuniversitaires pour renforcer les liens entre étudiants de différentes facultés et universités.</li>
          <li>Activités culturelles et sociales pour favoriser l'intégration et la convivialité entre les étudiants de la faculté.</li>
        </ul>
      </section>
      <section id="resources" className="resources">
  <div className="container">
    <h2>Gallery</h2>
    <div className="gallery-grid">
      <img src="images/image1.jpg" alt="Image 1" />
      <img src="images/image2.jpg" alt="Image 2" />
      <img src="images/image3.jpg" alt="Image 3" />
      <img src="images/image4.jpg" alt="Image 4" />
      <img src="images/image5.jpg" alt="Image 5" />
      <img src="images/image6.jpg" alt="Image 6" />
    </div>
  </div>
</section>
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contactez-nous</h2>
          <p><strong>N'hésitez pas à nous contacter via notre email ou nos réseaux sociaux!</strong></p>

          {/* Informations de contact avec des icônes */}
          <ul>
            <li><a href="mailto:club.ibnkhaldoun@fsbm.ma"><i className="fas fa-envelope"></i> club.ibnkhaldoun@fsbm.ma</a></li>
            <li><a href="https://instagram.com/club.ibnkhaldoun" target="_blank"><i className="fab fa-instagram"></i> @club.ibnkhaldoun</a></li>
            <li><a href="https://facebook.com/club.ibnkhaldoun" target="_blank"><i className="fab fa-facebook"></i> Club Ibn Khaldoun FSBM</a></li>
          </ul>

          {/* Formulaire de contact */}
          <form action="#" method="post" className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" required placeholder="Votre Nom" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="Votre Email" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Adresse</label>
              <input type="text" id="address" name="address" placeholder="Votre Adresse (Optionnel)" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Votre Message"></textarea>
            </div>
            <button type="submit" className="btn">Envoyer Message</button>
          </form>
        </div>

        <div className="map-container">
          {/* Carte Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.4905454412537!2d-7.544054525450598!3d33.56661057334369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda633261bbe100f%3A0xe48b03dd8c6794a0!2sFacult%C3%A9%20des%20Sciences%20Ben%20M%E2%80%99Sick!5e0!3m2!1sfr!2sma!4v1744851293649!5m2!1sfr!2sma"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
     



      <footer>
        <p>&copy; 2025 Club Ibn Khaldoun - Faculté des Sciences Ben M'sik</p>
      </footer>
    </div>
  );
}
export default App;