import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import "./paginator.scss"

const PaginatorBootstrap = ({pagesNumber, activePage, handleChangeRange}) => {

    const handleClick = (e) => {
        e.preventDefault()
    }


    const pageSpace = (page) => {
        return (
            <PaginationItem key={page}>
                <PaginationLink href="#" onClick={handleClick}>
                    ...
                </PaginationLink>
            </PaginationItem>
        )
    }

    const pageWithNumber = (page) => {
        return (
            <PaginationItem key={page} onClick={handleChangeRange(page + 1)} active={activePage - 1 === page}>
                <PaginationLink href="#" onClick={handleClick}>
                    {page + 1}
                </PaginationLink>
            </PaginationItem>)

    }


    const generatePages = (number) => {
        const arrWithPages = [...Array(number).keys()]

         return arrWithPages.map((page) => {
             /* if (page >= 5 && page < pagesNumber - 5) {
                  return pageSpace(page)
              }*/
             return (
                 <PaginationItem key={page} onClick={handleChangeRange(page + 1)} active={activePage - 1 === page}>
                     <PaginationLink href="#" onClick={handleClick}>
                         {page + 1}
                     </PaginationLink>
                 </PaginationItem>)
         })
    }


    return (
        <Pagination className="paginator" aria-label="Page navigation">
            <PaginationItem disabled={activePage === 1} onClick={handleChangeRange(1)}>
                <PaginationLink first href="#"/>
            </PaginationItem>

            <PaginationItem disabled={activePage === 1} onClick={handleChangeRange(activePage - 1)}>
                <PaginationLink previous href="#"/>
            </PaginationItem>

            {generatePages(pagesNumber)}

            <PaginationItem disabled={activePage === pagesNumber} onClick={handleChangeRange(activePage + 1)}>
                <PaginationLink next href="#"/>
            </PaginationItem>
            <PaginationItem disabled={activePage === pagesNumber} onClick={handleChangeRange(pagesNumber)}>
                <PaginationLink last href="#"/>
            </PaginationItem>
        </Pagination>
    );
}

export default PaginatorBootstrap;