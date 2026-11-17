function About({ image, about }) {
  return (
    <aside className="about">
      <img src= "images/logo.svg" alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}
export default About