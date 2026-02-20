import { IAchievement } from "@/data/resume";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import ImageCarousel from "../custom-ui/ImageCarousel";

interface AchievementModalProps {
  achievement: IAchievement | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({
  achievement,
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col bg-black border-zinc-800 p-0 overflow-hidden">
        {achievement && (
          <>
            {/* Fixed Header */}
            <div className="px-6 pt-6 pb-4 border-b border-zinc-800">
              <DialogHeader>
                <DialogTitle className="text-2xl font-kanit text-white">
                  {achievement.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400 font-kanit">
                  {achievement.subtitle} • {achievement.date}
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 pt-4 pb-8 space-y-6 scroll-smooth scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
              <div className="w-full">
                <ImageCarousel
                  images={achievement.imgs}
                  title={achievement.title}
                  imageBasePath="/images/resume/accomplishments/"
                />
              </div>

              {achievement.description && (
                <div className="space-y-4 font-kanit">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Description
                    </h3>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AchievementModal;
