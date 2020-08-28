import React from 'react';

class Categories extends React.Component {
  render() {
    const categories = ["Ночные птицы", "Хищные птицы", "Лесные птицы", "Морские птицы", "Певчие птицы", "Красная книга"];
    const listCategory = categories.map((category, index) =>
      <li key={index} className={index === this.props.currentLevel ? "category underline" : "category"}>{category}</li>
    );
    return (
      <div className="categories">
        <ul className="pagination">
          {listCategory}
        </ul>
      </div>  
    )
  }
}

export default Categories;