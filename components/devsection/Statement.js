'use client'
import React, { useEffect, useState } from "react";
import axios from "axios"; // Ensure axios is imported
import Statementlist from "./Statementlist";
import Pagination from "./Pagination";

export default function Statement({ style, showItem, showPagination }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]); // State for fetched data

    const showLimit = showItem; // Items per page
    const paginationItem = 4; // Number of pages to display in pagination group

    // Fetch data from API on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/disclosure/`);
                setData(response.data.disclosures); // Set fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs once on mount

    const totalPages = Math.ceil(data.length / showLimit); // Calculate total pages

    const getPaginatedProducts = data.slice(
        (currentPage - 1) * showLimit,
        currentPage * showLimit
    ); // Get current page data

    const getPaginationGroup = Array.from(
        { length: paginationItem },
        (_, idx) => idx + 1 + Math.floor((currentPage - 1) / paginationItem) * paginationItem
    ).filter((page) => page <= totalPages); // Generate pagination group

    const next = () => currentPage < totalPages && setCurrentPage((page) => page + 1); // Go to next page
    const prev = () => currentPage > 1 && setCurrentPage((page) => page - 1); // Go to previous page
    const handleActive = (item) => setCurrentPage(item); // Set active page

    return (
        <>
            <div>
                {getPaginatedProducts.length === 0 ? (
                    <h3>No Products Found</h3>
                ) : (
                    getPaginatedProducts.map((item) => (
                        <div key={item.id} className="statement-main">
                            <Statementlist item={item} style={style} />
                        </div>
                    ))
                )}
            </div>

            {showPagination && (
                <Pagination
                    getPaginationGroup={getPaginationGroup}
                    currentPage={currentPage}
                    pages={totalPages}
                    next={next}
                    prev={prev}
                    handleActive={handleActive}
                />
            )}
        </>
    );
}
