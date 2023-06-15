import ReactPaginate from "react-paginate";
import "./pagination.css";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <div className="flex-center mt-5">
      <ReactPaginate
        breakLabel="..."
        nextLabel={<MdOutlineArrowRight />}
        previousLabel={<MdOutlineArrowLeft />}
        onPageChange={handlePageClick}
        pageCount={pageCount > 500 ? 500 : pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        renderOnZeroPageCount={null}
        containerClassName="rPagination"
        breakClassName="rPage-item"
        breakLinkClassName="rPage-link"
        nextClassName="rPage-item"
        nextLinkClassName="rPage-link"
        previousClassName="rPage-item"
        previousLinkClassName="rPage-link"
        pageClassName="rPage-item"
        pageLinkClassName="rPage-link"
        activeClassName="active"
      />
    </div>
  );
};

export default Pagination;
