// Work.js

function Work({ title, link, imageSrc, description }) {
  return (
    <section className="work top">
      <h3>{title}</h3>
      <a href={link}>
        <img src={imageSrc} alt={`${title} image`} width="300" height="200" />
      </a>
      <p>
        {description}
      </p>
    </section>
  );
}

export default Work;