
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, Image } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadProps {
  currentImage?: string;
  onImageChange: (imageUrl: string) => void;
  fallback: string;
  className?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ 
  currentImage, 
  onImageChange, 
  fallback, 
  className = "h-24 w-24" 
}) => {
  const [imageUrl, setImageUrl] = useState<string>(currentImage || "");
  const [isUrlInput, setIsUrlInput] = useState<boolean>(false);
  
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };
  
  const handleSaveUrl = () => {
    if (imageUrl) {
      onImageChange(imageUrl);
      setIsUrlInput(false);
      toast.success("Image updated successfully");
    } else {
      toast.error("Please enter a valid image URL");
    }
  };
  
  return (
    <div className="flex flex-col items-center gap-2">
      <Avatar className={`border-4 border-background ${className}`}>
        <AvatarImage src={currentImage || imageUrl} alt={fallback} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      
      {isUrlInput ? (
        <div className="flex gap-2 mt-2 w-full">
          <Input 
            type="text" 
            placeholder="Enter image URL" 
            value={imageUrl}
            onChange={handleUrlChange}
            className="text-sm"
          />
          <Button size="sm" onClick={handleSaveUrl}>Save</Button>
        </div>
      ) : (
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-2 text-xs"
          onClick={() => setIsUrlInput(true)}
        >
          <Upload className="h-3 w-3 mr-1" />
          Upload Image URL
        </Button>
      )}
    </div>
  );
};
