"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Header from "./components/Header";
import { Upload, Camera, File } from "lucide-react";

type ContentType = "pdf" | "image" | "camera" | null;

function Page() {
  const [pdf, setPdf] = useState<File | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [cameraImage, setCameraImage] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [contentType, setContentType] = useState<ContentType>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  useEffect(() => {
    if (contentType === "camera") {
      startCamera();
    } else {
      stopCamera();
    }
  }, [contentType]);

  const handlePdfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setPdf(file);
      setContentType("pdf");
      setImageSrc(null);
      setCameraImage(null);
    } else {
      alert("Please upload a PDF file");
      event.target.value = "";
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setContentType("image");
      setImageSrc(URL.createObjectURL(file));
      setPdf(null);
      setCameraImage(null);
    } else {
      alert("Please upload a valid image file");
      event.target.value = "";
    }
  };

  const startCamera = async () => {
    setCameraError(null);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        console.log("Attempting to start camera...");
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play().catch(e => console.error("Error playing video:", e));
          };
          setIsCameraActive(true);
          console.log("Camera started successfully");
        } else {
          throw new Error("Video reference is not available");
        }
      } catch (err) {
        console.error("Error accessing the camera:", err);
        if (err instanceof Error) {
          setCameraError(`Failed to access the camera: ${err.message}`);
        } else {
          setCameraError('Failed to access the camera');
        }
        setIsCameraActive(false);
      }
    } else {
      console.error("getUserMedia is not supported in this browser");
      setCameraError("Your browser doesn't support camera access");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
    console.log("Camera stopped");
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext("2d")?.drawImage(videoRef.current, 0, 0);
      const imageDataUrl = canvas.toDataURL("image/jpeg");
      setCameraImage(imageDataUrl);
      setImageSrc(imageDataUrl);
      setContentType("camera");
      stopCamera();
      console.log("Photo captured");
    } else {
      console.error("Video element is not available for capturing");
      setCameraError("Failed to capture photo. Please try again.");
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col items-center p-8">
        <Card className="w-full max-w-3xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Document Upload Center
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="pdf"
              className="w-full"
              onValueChange={(value) => {
                console.log("Tab changed to:", value);
                setContentType(value as ContentType);
              }}
            >
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="pdf">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload PDF
                </TabsTrigger>
                <TabsTrigger value="image">
                  <File className="mr-2 h-4 w-4" />
                  Upload Image
                </TabsTrigger>
                <TabsTrigger value="camera">
                  <Camera className="mr-2 h-4 w-4" />
                  Use Camera
                </TabsTrigger>
              </TabsList>

              <TabsContent value="pdf">
                <div className="space-y-4">
                  <Label htmlFor="pdf" className="text-lg font-semibold">
                    Select PDF File
                  </Label>
                  <Input
                    id="pdf"
                    type="file"
                    accept=".pdf"
                    onChange={handlePdfChange}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold"
                  />
                </div>
              </TabsContent>

              <TabsContent value="image">
                <div className="space-y-4">
                  <Label htmlFor="image" className="text-lg font-semibold">
                    Select Image File
                  </Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold"
                  />
                </div>
              </TabsContent>

              <TabsContent value="camera">
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">
                    Camera Capture
                  </Label>
                  <div className="relative aspect-video w-full">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className={`w-full h-full object-cover rounded-lg ${isCameraActive ? '' : 'hidden'}`}
                    />
                    {!isCameraActive && !cameraImage && (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                        <Camera className="h-12 w-12 text-gray-400" />
                      </div>
                    )}
                    {cameraImage && (
                      <Image
                        src={cameraImage}
                        alt="Captured photo"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    )}
                  </div>
                  {cameraError && (
                    <div className="text-red-500 text-sm">{cameraError}</div>
                  )}
                  <Button
                    onClick={() => {
                      console.log("Camera button clicked");
                      isCameraActive ? capturePhoto() : startCamera();
                    }}
                    className="w-full"
                  >
                    {isCameraActive ? "Capture Photo" : "Start Camera"}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={() => {
                console.log("Show Contents clicked");
                setShowContent(true);
              }}
              disabled={!pdf && !image && !cameraImage}
            >
              Show Contents
            </Button>
          </CardFooter>
        </Card>

        {showContent && (
          <Card className="w-full max-w-3xl mt-8 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {contentType === "pdf"
                  ? "PDF Contents"
                  : contentType === "image"
                  ? "Uploaded Image"
                  : "Captured Photo"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {contentType === "pdf" && pdf && (
                <embed
                  src={URL.createObjectURL(pdf)}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                  className="rounded-lg shadow-md"
                />
              )}
              {imageSrc &&
                (contentType === "image" || contentType === "camera") && (
                  <div className="flex justify-center">
                    <Image
                      src={imageSrc}
                      alt={
                        contentType === "image"
                          ? "Uploaded image"
                          : "Captured photo"
                      }
                      width={400}
                      height={300}
                      objectFit="contain"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default Page;
