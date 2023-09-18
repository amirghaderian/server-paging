import _ from "lodash";
const Pagination = ({ pages, setPage, activePage }) => {
    const prevPage = ()=>{
        setPage((oldPage)=>{
            if(oldPage===1)return pages;
            else{
                return oldPage -1
            }
            })
    }

    const nextPage = ()=>{
        setPage((oldPage)=>{
            if(oldPage===pages)return 1;
            else{
                return oldPage +1
            }
            })
    }
  return (
    <nav>
      <ul className="pagination d-flex justify-content-center mt-5" dir="rtl">
        <li className="page-item" onClick={prevPage}>
          <a href="#">قبلی</a>
        </li>
        {_.times(pages, (index) => {
          return (
            <li
              key={"pagination-" + index}
              onClick={()=>setPage(index+1)}
              className={`page-item ${
                index + 1 === activePage ? "active" : ""
              }`}
            >
              <a className="page-link" href="#">{index+1}</a>
            </li>
          );
        })}

        <li className="page-item" onClick={nextPage}>
          <a href="#">بعدی</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
