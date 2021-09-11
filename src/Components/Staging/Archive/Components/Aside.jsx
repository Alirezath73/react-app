const Aside = () => {
  return (
    <aside className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
      <section className="aside-section filter-by-category">
        <header>
          <h3> دسته بندی موضوعات </h3>
        </header>
        <div className="inner">
          <ul>
            <li>
              <input type="checkbox" name="" id="cat-1" />
              <label for="cat-1"> برنامه نویسی وب </label>
            </li>
            <li>
              <input type="checkbox" name="" id="cat-2" />
              <label for="cat-2"> برنامه نویسی موبایل </label>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  );
};

export default Aside;
