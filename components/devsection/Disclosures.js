'use client'
import React, { useEffect, useState } from "react"
import axios from "axios"
import Disclosurelist from "./Disclosurelist"
import Pagination from "./Pagination"

export default function BlogPost({ style, showItem, showPagination }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(showItem)
    const [pagination, setPagination] = useState([])
    const [pages, setPages] = useState(0)
    const paginationItem = 4

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        cratePagination()
    }, [limit, pages, data.length])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/disclosure/`)
            setData(response.data.disclosures)
            setPages(Math.ceil(response.data.disclosures.length / limit))
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    const cratePagination = () => {
        let arr = new Array(Math.ceil(data.length / limit))
            .fill()
            .map((_, idx) => idx + 1)

        setPagination(arr)
        setPages(Math.ceil(data.length / limit))
    }

    const startIndex = currentPage * limit - limit
    const endIndex = startIndex + limit
    const getPaginatedProducts = data.slice(startIndex, endIndex)

    let start = Math.floor((currentPage - 1) / paginationItem) * paginationItem
    let end = start + paginationItem
    const getPaginationGroup = pagination.slice(start, end)

    const next = () => {
        setCurrentPage((page) => page + 1)
    }

    const prev = () => {
        setCurrentPage((page) => page - 1)
    }

    const handleActive = (item) => {
        setCurrentPage(item)
    }

    return (
        <>
            <div dir="ltr" className="container disclosuredevsection" style={{ backgroundColor: '#ECF6FA' }}>
                <div className="dev-disclosure-main">
                    {/* <div className="sidebar__search">
                        <form action="#">
                            <input type="text" placeholder="Search . . ." />
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                    <path d="M19.0002 19.0002L14.6572 14.6572M14.6572 14.6572C15.4001 13.9143 15.9894 13.0324 16.3914 12.0618C16.7935 11.0911 17.0004 10.0508 17.0004 9.00021C17.0004 7.9496 16.7935 6.90929 16.3914 5.93866C15.9894 4.96803 15.4001 4.08609 14.6572 3.34321C13.9143 2.60032 13.0324 2.01103 12.0618 1.60898C11.0911 1.20693 10.0508 1 9.00021 1C7.9496 1 6.90929 1.20693 5.93866 1.60898C4.96803 2.01103 4.08609 2.60032 3.34321 3.34321C1.84288 4.84354 1 6.87842 1 9.00021C1 11.122 1.84288 13.1569 3.34321 14.6572C4.84354 16.1575 6.87842 17.0004 9.00021 17.0004C11.122 17.0004 13.1569 16.1575 14.6572 14.6572Z" stroke="currentcolor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </form>
                    </div> */}
                    <div className="table-container">
                        {/* <select className=" dev-disclosure-form-wrap" name="list">
                            <option value="">Sort By</option>
                            <option value="week">Week</option>
                            <option value="30 Days">30 Days</option>
                            <option value="1-6 month">1-6 month</option>
                        </select> */}
                        {/* <select   className=" dev-disclosure-form-wrap" name="list">
                            <option value="">Year Disclosure</option>
                     {getPaginatedProducts.map(item => (
                            <option key={item._id}value={item.year}>{item.year}</option>
                        ))}
                        </select> */}
                    </div>
                </div>

                {getPaginatedProducts.length === 0 && (
                    <h3>No Products Found </h3>
                )}
                
                <table >
                <thead>
          <tr>
            <th>Disclosures</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
        </thead>
   
                {/* <div className="dev-disclosure-table">
                    <h6>Disclosures</h6>
                    <h6>Date</h6>
                    <h6>Details</h6>
                </div> */}
   
                {getPaginatedProducts.map(item => (
                    <React.Fragment key={item._id}>
                        <tbody className="">
                            {!style && <Disclosurelist item={item} />}
                            {style === 1 && <Disclosurelist item={item} />}
                        </tbody>
                    </React.Fragment>
                ))}
                  
         
       </table>
            </div>
            {showPagination &&
                <Pagination
                    getPaginationGroup={getPaginationGroup}
                    currentPage={currentPage}
                    pages={pages}
                    next={next}
                    prev={prev}
                    handleActive={handleActive}
                />
            }
        </>
    )
}
