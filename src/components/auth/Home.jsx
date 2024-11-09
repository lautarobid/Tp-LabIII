import React from 'react';
import './components/Home/Home.css'; // Asegúrate de tener este archivo para estilos personalizados

const Home = () => {
  return (
    <div>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">LOGITRANSPORTE</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nuevo Viaje</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Historial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Seguimiento</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sección de historia */}
      <div className="historia-container">
        <div className="container text-left text-white">
          <h2>Nuestra Historia</h2>
          <h3>LOGITRANSPORTE</h3>
          <p>
            LogiTransporte comenzó en 1980, pero su origen se remonta a los años 50, cuando Jorge Martínez, con una simple camioneta, inició el transporte de mercancías en San Antonio de Areco.
            Junto a su esposa Ana, enfrentaron largas rutas y desafíos, y en 1972 compraron su primer camión, un Mercedes-Benz L1114, lo que les permitió crecer poco a poco.
          </p>
          <p>
            Establecieron su primera sede en Pilar, con lo que se convirtió en un nuevo punto clave para sus operaciones. A lo largo de los años, LogiTransporte amplió su flota y adoptó nuevas tecnologías de logística.
          </p>
          <p>
            Hoy en día, con más de 300 empleados y una flota de todo tipo de vehículos, LogiTransporte sigue avanzando, con la misma dedicación y compromiso que Jorge y Ana tuvieron desde el principio.
          </p>
          <p>
            <strong>Rol Cliente</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;