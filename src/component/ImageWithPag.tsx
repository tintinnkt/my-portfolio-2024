import { Image, Pagination } from "@nextui-org/react"; // Import your pagination component
import { useState } from "react";
import { getImagePath } from "../utils/getImagePath";

const ImagesWithPagination: React.FC<{ imagesPath: string }> = ({
  imagesPath,
}) => {
  const imagesPerPage = 1; // Number of images per page
  const allImages = getImagePath(imagesPath); // Get all images
  const totalPages = allImages.length;

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the images for the current page
  const paginatedImages = allImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage,
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Display Images */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {paginatedImages.map((imagePath, index) => (
          <Image
            key={index}
            alt={`Image ${index + 1}`}
            isZoomed
            height={400}
            src={imagePath}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        initialPage={1}
        total={totalPages}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default ImagesWithPagination;
