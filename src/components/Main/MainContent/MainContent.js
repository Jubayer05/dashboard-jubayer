import React, { useEffect, useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import axios from 'axios';
import './MainContent.css';
import ReactPaginate from 'react-paginate';

const MainContent = () => {
  const [user, setUser] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 5;
  const pagesVisited = pageNumber * userPerPage;

  const profileData = user
    .slice(pagesVisited, pagesVisited + userPerPage)
    .map((item) => (
      <div className="main__body" key={item.id}>
        <p className="main__owner main__profile">
          <img className="owner__image" src={item.avatar} alt="Image1" />
          {item.first_name} {item.last_name}
        </p>
        <p className="main__endDate">3/5/2020</p>
        <p className="main__profit profit">$355</p>
        <p className="main__loss loss">$120</p>
        <p className="main__phone">(659)545454554</p>
      </div>
    ));

  const pageCount = Math.ceil(user.length / userPerPage);

  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users`)
      .then((response) => setUser(response.data.data));
  }, []);
  return (
    <div className="main__content">
      <div className="main__header">
        <p className="main__owner">Owner</p>
        <p className="main__endDate">End Date</p>
        <p className="main__profit">Profits</p>
        <p className="main__loss">Losses</p>
        <p className="main__phone">Phone</p>
      </div>
      <div>
        {profileData}
        <div className="main__bottom">
          <ReactPaginate
            previousLabel={<ChevronLeftIcon className="bottom__icon" />}
            nextLabel={
              <ChevronRightIcon className="bottom__icon pagination__next" />
            }
            pageCount={pageCount}
            containerClassName="pagination__container"
            onPageChange={pageChange}
            pageClassName="pageClassName"
            activeClassName="activeClassName"
          />
          <p className="pagination__text">
            of <span className="activeClassName">{pageCount}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
