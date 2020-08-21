const home = () => {
  const view = `
  <div class="home">
    <div class="homePurpose">
      <img src="../assets/pagInicioPropo.png" alt="Imagen proposito">
      <div class="homePurpose_text">
        <h3>Nuestro Propósito</h3>
        <p>Ser un puente entre médicos y/o psicólogos voluntarios y mujeres que necesiten esta ayuda profesional y no tengan los medios o recursos para tal fin. Creemos que la salud es un derecho que no debería depender de tu economía o país de origen. </p>
      </div>
    </div>
    <div class="homeWoman">
      <img src="../assets/pagInicioMujer.png" alt="Mujer">
      <div class="homeWoman_text">
        <h3>Para mujeres</h3>
        <p>¿Necesitas una consulta y no puedes acceder a un sistema de salud digno?</p>
        <p>Es un espacio seguro para ti.</p>
        <button class="home_button">Regístrate</button>
      </div>
    </div>
    <div class="homeDoctor">
      <img src="../assets/humaaans.png" alt="Doctor">
      <div class="homeDoctor_text">
        <h3>¿Eres médico y/o psicólogo?</h3>
        <p>¿Te sientes identificado con nuestro propósito de ayudar?</p>
        <p>Sé voluntario</p>
        <button class="home_button">Regístrate</button>
      </div>
    </div>
    <div class="homeDonate">
      <h3>¿Quieres donar?</h3>
      <p>¿Deseas apoyar a las mujeres que necesitan de algún tratamiento?</p>
      <button class="home_button">Donar</button>
    </div>
  </div>
  `;
  
  const container = document.createElement('section');
  container.innerHTML = view;
  return container
}

export default home;