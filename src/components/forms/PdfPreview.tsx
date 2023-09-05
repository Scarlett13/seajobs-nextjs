import * as React from "react";
import {
  HiOutlineExternalLink,
  HiOutlineEye,
  HiOutlinePaperClip,
  HiOutlinePhotograph,
  HiX,
} from "react-icons/hi";
import Lightbox from "react-image-lightbox";

import "react-image-lightbox/style.css";

import { FileWithPreview } from "@utils/types/dropzone";
import UnstyledLink from "../links/UnstyledLink";

type FilePreviewProps = {
  file: File;
};

export default function PdfPreview({
  file,
}: FilePreviewProps): React.ReactElement {
  const imagesType = ["application/pdf"];

  const openPdfInNewTab = () => {
    const pdfBlob = new Blob([file], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const newTab = window.open(pdfUrl, "_blank");
    URL.revokeObjectURL(pdfUrl);

    if (!newTab) {
      console.error(
        "The pop-up was blocked. Please allow pop-ups for this site."
      );
    }
  };

  return imagesType.includes(file.type) ? (
    <>
      <li
        className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
        key={file.name}
      >
        <div className="flex w-0 flex-1 items-center">
          <HiOutlinePhotograph
            className="h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          <span className="ml-2 w-0 flex-1 truncate">{file.name}</span>
        </div>
        <div className="ml-4 flex flex-shrink-0 items-center space-x-2">
          <button
            type="button"
            // onClick={() => setIsOpen(true)}
            className="inline-block rounded text-xl font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:ring focus:ring-primary-500"
          >
            <HiOutlineEye />
          </button>
        </div>
      </li>
    </>
  ) : (
    <li
      key={file.name}
      className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
    >
      <div className="flex w-0 flex-1 items-center">
        <HiOutlinePaperClip
          className="h-5 w-5 flex-shrink-0 text-gray-400"
          aria-hidden="true"
        />
        <span className="ml-2 w-0 flex-1 truncate">{file.name}</span>
      </div>
      <div className="ml-4 flex flex-shrink-0 items-center space-x-2">
        <UnstyledLink
          href={"#"}
          onClick={openPdfInNewTab}
          className="rounded text-gray-500 hover:text-gray-700 focus:outline-none focus:ring focus:ring-primary-500"
        >
          <HiOutlineExternalLink size={20} />
        </UnstyledLink>
      </div>
    </li>
  );
}
