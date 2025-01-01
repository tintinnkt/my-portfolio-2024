import { Image, Pagination } from "@nextui-org/react"; // Import your pagination component
import { useState } from "react";
import { getImagePath } from "../utils/getImagePath";

const ImagesWithPagination: React.FC<{
  imagesPath: string;
  imgPerpage?: number;
}> = ({ imagesPath, imgPerpage }) => {
  const imagesPerPage = imgPerpage; // Number of images per page
  const allImages = getImagePath(imagesPath); // Get all images
  const totalPages = Math.ceil(allImages.length / (imagesPerPage || 1));

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the images for the current page
  const paginatedImages = allImages.slice(
    (currentPage - 1) * (imagesPerPage || 1),
    currentPage * (imagesPerPage || 1),
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Display Images */}
      <div className="flex flex-wrap items-center justify-center gap-10 p-1">
        {paginatedImages.map((imagePath, index) => (
          <Image
            key={index}
            alt={`Image ${index + 1}`}
            height={400}
            src={imagePath}
            className="hover:scale-110"
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        initialPage={2}
        loop
        showControls
        color="warning"
        total={totalPages}
        onChange={handlePageChange}
        className="px-4 pt-6"
      />
    </div>
  );
};

export default ImagesWithPagination;
