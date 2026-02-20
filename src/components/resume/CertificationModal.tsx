import { ICertification } from "@/data/resume";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import ImageCarousel from "../projects/ImageCarousel";
import LandingButton from "../custom-ui/LandingButton";
import Link from "next/link";

interface CertificationModalProps {
  certification: ICertification | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CertificationModal: React.FC<CertificationModalProps> = ({
  certification,
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col bg-black border-zinc-800 p-0 overflow-hidden">
        {certification && (
          <>
            {/* Fixed Header */}
            <div className="px-6 pt-6 pb-4 border-b border-zinc-800">
              <DialogHeader>
                <DialogTitle className="text-2xl font-kanit text-white">
                  {certification.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400 font-kanit">
                  {certification.subtitle} • {certification.date}
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 pt-4 pb-8 space-y-6 scroll-smooth scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
              <div className="w-full">
                <ImageCarousel
                  images={certification.imgs}
                  title={certification.title}
                  imageBasePath="/images/resume/certifications/"
                />
              </div>

              {certification.description && (
                <div className="space-y-4 font-kanit">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Description
                    </h3>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                        {certification.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Fixed Footer */}
            {certification.url && (
              <div className="px-6 py-4 border-t border-zinc-800 flex gap-3">
                <Link
                  href={certification.url}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  <LandingButton className="py-2 px-4 text-white bg-black active:bg-secondary-clicked">
                    <p>View Certificate</p>
                  </LandingButton>
                </Link>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CertificationModal;
