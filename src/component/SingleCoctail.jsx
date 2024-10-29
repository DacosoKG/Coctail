export default function SingleCoctail({ name, img, category, type }) {
  return (
    <>
      <div className="cocktail-item">
        <div className="img-wrapper">
          <img src={img} alt="" />
          <p className="category-type">{category}</p>
        </div>
        <p className="cocktail-name">
          {name}
          <span className="alcohol-type">{type}</span>
        </p>
      </div>
    </>
  );
}
