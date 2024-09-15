"use client";
// import React, { useState, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { TypographyH2 } from "./components/TypographyH2";
// import Image from "next/image";
// import Header from "./components/Header";

// function Page() {
//   const [pdf, setPdf] = useState<File | null>(null);
//   const [image, setImage] = useState<File | null>(null);
//   const [cameraImage, setCameraImage] = useState<string | null>(null);
//   const [showContent, setShowContent] = useState(false);
//   const [contentType, setContentType] = useState<"pdf" | "image" | "camera" | null>(null);

//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const [isCameraActive, setIsCameraActive] = useState(false);

//   const handlePdfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "application/pdf") {
//       setPdf(file);
//       setContentType("pdf");
//     } else {
//       alert("Please upload a PDF file");
//       event.target.value = "";
//     }
//   };

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "image/jpeg") {
//       setImage(file);
//       setContentType("image");
//     } else {
//       alert("Please upload a JPEG image file");
//       event.target.value = "";
//     }
//   };

//   const handleShowContents = () => {
//     setShowContent(true);
//   };

//   const startCamera = async () => {
//     setIsCameraActive(true);
//     setContentType("camera");
//     if (navigator.mediaDevices && videoRef.current) {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current.srcObject = stream;
//     }
//   };

//   const capturePhoto = () => {
//     if (videoRef.current && canvasRef.current) {
//       const context = canvasRef.current.getContext("2d");
//       if (context) {
//         // Draw the current video frame onto the canvas
//         context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
//         const imageDataUrl = canvasRef.current.toDataURL("image/jpeg");
//         setCameraImage(imageDataUrl);
//         setIsCameraActive(false);

//         // Safely stop the camera stream
//         const stream = videoRef.current.srcObject;
//         if (stream instanceof MediaStream) {
//           stream.getTracks().forEach((track) => track.stop());
//         }
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="flex-grow flex flex-col items-center p-4">
//         <Tabs defaultValue="pdf" className="w-[400px]">
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="pdf">Upload PDF</TabsTrigger>
//             <TabsTrigger value="image">Upload image</TabsTrigger>
//             <TabsTrigger value="camera" onClick={startCamera}>Use camera</TabsTrigger>
//           </TabsList>

//           <TabsContent value="pdf">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Upload PDF</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 <div className="space-y-1">
//                   <Label htmlFor="pdf">PDF</Label>
//                   <Input id="pdf" type="file" accept=".pdf" onChange={handlePdfChange} />
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button className="ml-auto" onClick={handleShowContents} disabled={!pdf}>
//                   Show contents
//                 </Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>

//           <TabsContent value="image">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Upload Image</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 <div className="space-y-1">
//                   <Label htmlFor="image">Image</Label>
//                   <Input id="image" type="file" accept="image/jpeg" onChange={handleImageChange} />
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button className="ml-auto" onClick={handleShowContents} disabled={!image}>
//                   Show contents
//                 </Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>

//           <TabsContent value="camera">
//             <Card>
//               <CardContent className="space-y-2">
//                 <TypographyH2>Camera</TypographyH2>
//                 {isCameraActive ? (
//                   <div className="flex flex-col items-center">
//                     <video ref={videoRef} autoPlay className="border rounded-lg w-full h-auto" />
//                     <canvas ref={canvasRef} width={400} height={500} className="hidden" />
//                   </div>
//                 ) : (
//                   cameraImage && (
//                     <div className="mt-4 flex justify-center">
//                       <Image
//                         src={cameraImage}
//                         alt="Captured photo"
//                         width={400}
//                         height={500}
//                         style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "contain" }}
//                       />
//                     </div>
//                   )
//                 )}
//               </CardContent>
//               <CardFooter>
//                 {isCameraActive ? (
//                   <Button className="ml-auto" onClick={capturePhoto}>Capture Photo</Button>
//                 ) : (
//                   <Button className="ml-auto" onClick={handleShowContents} disabled={!cameraImage}>
//                     Show contents
//                   </Button>
//                 )}
//               </CardFooter>
//             </Card>
//           </TabsContent>
//         </Tabs>

//         {showContent && (
//           <div className="w-full max-w-3xl mt-8">
//             {contentType === "pdf" && pdf && (
//               <div>
//                 <h3 className="text-xl font-bold mb-2">PDF Contents:</h3>
//                 <embed
//                   src={URL.createObjectURL(pdf)}
//                   type="application/pdf"
//                   width="100%"
//                   height="600px"
//                   className="mt-4"
//                 />
//               </div>
//             )}
//             {contentType === "image" && image && (
//               <div>
//                 <div className="mt-4 flex justify-center">
//                   <Image
//                     src={URL.createObjectURL(image)}
//                     alt="Uploaded image"
//                     width={400}
//                     height={500}
//                     style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "contain" }}
//                   />
//                 </div>
//               </div>
//             )}
//             {contentType === "camera" && cameraImage && (
//               <div>
//                 <div className="mt-4 flex justify-center">
//                   <Image
//                     src={cameraImage}
//                     alt="Captured photo"
//                     width={400}
//                     height={500}
//                     style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "contain" }}
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Page;

// import React, { useState, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { TypographyH2 } from "./components/TypographyH2";
// import Image from "next/image";
// import Header from "./components/Header";
// import { Upload, Camera, File } from "lucide-react";

// function Page() {
//   const [pdf, setPdf] = useState(null);
//   const [image, setImage] = useState(null);
//   const [cameraImage, setCameraImage] = useState(null);
//   const [showContent, setShowContent] = useState(false);
//   const [contentType, setContentType] = useState(null);

//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [isCameraActive, setIsCameraActive] = useState(false);

//   const handlePdfChange = (event) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "application/pdf") {
//       setPdf(file);
//       setContentType("pdf");
//     } else {
//       alert("Please upload a PDF file");
//       event.target.value = "";
//     }
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "image/jpeg") {
//       setImage(file);
//       setContentType("image");
//     } else {
//       alert("Please upload a JPEG image file");
//       event.target.value = "";
//     }
//   };

//   const handleShowContents = () => {
//     setShowContent(true);
//   };

//   const startCamera = async () => {
//     setIsCameraActive(true);
//     setContentType("camera");
//     if (navigator.mediaDevices && videoRef.current) {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current.srcObject = stream;
//     }
//   };

//   const capturePhoto = () => {
//     if (videoRef.current && canvasRef.current) {
//       const context = canvasRef.current.getContext("2d");
//       if (context) {
//         context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
//         const imageDataUrl = canvasRef.current.toDataURL("image/jpeg");
//         setCameraImage(imageDataUrl);
//         setIsCameraActive(false);

//         const stream = videoRef.current.srcObject;
//         if (stream instanceof MediaStream) {
//           stream.getTracks().forEach((track) => track.stop());
//         }
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       <Header />
//       <div className="flex-grow flex flex-col items-center p-8">
//         <Card className="w-full max-w-3xl shadow-lg">
//           <CardHeader>
//             <CardTitle className="text-3xl font-bold text-center text-indigo-700">Document Upload Center</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Tabs defaultValue="pdf" className="w-full">
//               <TabsList className="grid w-full grid-cols-3 mb-8">
//                 <TabsTrigger value="pdf" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
//                   <Upload className="mr-2 h-4 w-4" />
//                   Upload PDF
//                 </TabsTrigger>
//                 <TabsTrigger value="image" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
//                   <File className="mr-2 h-4 w-4" />
//                   Upload Image
//                 </TabsTrigger>
//                 <TabsTrigger value="camera" onClick={startCamera} className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
//                   <Camera className="mr-2 h-4 w-4" />
//                   Use Camera
//                 </TabsTrigger>
//               </TabsList>

//               <TabsContent value="pdf">
//                 <div className="space-y-4">
//                   <Label htmlFor="pdf" className="text-lg font-semibold text-gray-700">Select PDF File</Label>
//                   <Input id="pdf" type="file" accept=".pdf" onChange={handlePdfChange} className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
//                 </div>
//               </TabsContent>

//               <TabsContent value="image">
//                 <div className="space-y-4">
//                   <Label htmlFor="image" className="text-lg font-semibold text-gray-700">Select Image File</Label>
//                   <Input id="image" type="file" accept="image/jpeg" onChange={handleImageChange} className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
//                 </div>
//               </TabsContent>

//               <TabsContent value="camera">
//                 <div className="space-y-4">
//                   <TypographyH2 className="text-2xl font-bold text-gray-800">Camera Capture</TypographyH2>
//                   {isCameraActive ? (
//                     <div className="flex flex-col items-center">
//                       <video ref={videoRef} autoPlay className="border rounded-lg w-full h-auto shadow-md" />
//                       <canvas ref={canvasRef} width={400} height={500} className="hidden" />
//                     </div>
//                   ) : (
//                     cameraImage && (
//                       <div className="mt-4 flex justify-center">
//                         <Image
//                           src={cameraImage}
//                           alt="Captured photo"
//                           width={400}
//                           height={500}
//                           style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "contain" }}
//                           className="rounded-lg shadow-md"
//                         />
//                       </div>
//                     )
//                   )}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </CardContent>
//           <CardFooter className="flex justify-end">
//             {contentType === "camera" && isCameraActive ? (
//               <Button onClick={capturePhoto} className="bg-indigo-600 hover:bg-indigo-700 text-white">Capture Photo</Button>
//             ) : (
//               <Button onClick={handleShowContents} disabled={!pdf && !image && !cameraImage} className="bg-indigo-600 hover:bg-indigo-700 text-white">
//                 Show Contents
//               </Button>
//             )}
//           </CardFooter>
//         </Card>

//         {showContent && (
//           <Card className="w-full max-w-3xl mt-8 shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-2xl font-bold text-indigo-700">
//                 {contentType === "pdf" ? "PDF Contents" : contentType === "image" ? "Uploaded Image" : "Captured Photo"}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               {contentType === "pdf" && pdf && (
//                 <embed
//                   src={URL.createObjectURL(pdf)}
//                   type="application/pdf"
//                   width="100%"
//                   height="600px"
//                   className="rounded-lg shadow-md"
//                 />
//               )}
//               {(contentType === "image" && image) || (contentType === "camera" && cameraImage) && (
//                 <div className="flex justify-center">
//                   <Image
//                     src={contentType === "image" ? URL.createObjectURL(image) : cameraImage}
//                     alt={contentType === "image" ? "Uploaded image" : "Captured photo"}
//                     width={400}
//                     height={500}
//                     style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "contain" }}
//                     className="rounded-lg shadow-md"
//                   />
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Page

// import React, { useState, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { TypographyH2 } from "./components/TypographyH2";
// import Image from "next/image";
// import Header from "./components/Header";
// import { Upload, Camera, File } from "lucide-react";

// function Page() {
//   const [pdf, setPdf] = useState(null);
//   const [image, setImage] = useState(null);
//   const [cameraImage, setCameraImage] = useState(null);
//   const [showContent, setShowContent] = useState(false);
//   const [contentType, setContentType] = useState(null);

//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [isCameraActive, setIsCameraActive] = useState(false);

//   const handlePdfChange = (event) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "application/pdf") {
//       setPdf(file);
//       setContentType("pdf");
//     } else {
//       alert("Please upload a PDF file");
//       event.target.value = "";
//     }
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "image/jpeg") {
//       setImage(file);
//       setContentType("image");
//     } else {
//       alert("Please upload a JPEG image file");
//       event.target.value = "";
//     }
//   };

//   const handleShowContents = () => {
//     setShowContent(true);
//   };

//   const startCamera = async () => {
//     setIsCameraActive(true);
//     setContentType("camera");
//     if (navigator.mediaDevices && videoRef.current) {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current.srcObject = stream;
//     }
//   };

//   const capturePhoto = () => {
//     if (videoRef.current && canvasRef.current) {
//       const context = canvasRef.current.getContext("2d");
//       if (context) {
//         context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
//         const imageDataUrl = canvasRef.current.toDataURL("image/jpeg");
//         setCameraImage(imageDataUrl);
//         setIsCameraActive(false);

//         const stream = videoRef.current.srcObject;
//         if (stream instanceof MediaStream) {
//           stream.getTracks().forEach((track) => track.stop());
//         }
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
//       <Header />
//       <div className="flex-grow flex flex-col items-center p-8">
//         <Card className="w-full max-w-3xl shadow-lg bg-white">
//           <CardHeader>
//             <CardTitle className="text-3xl font-bold text-center text-amber-800">Document Upload Center</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Tabs defaultValue="pdf" className="w-full">
//               <TabsList className="grid w-full grid-cols-3 mb-8">
//                 <TabsTrigger value="pdf" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
//                   <Upload className="mr-2 h-4 w-4" />
//                   Upload PDF
//                 </TabsTrigger>
//                 <TabsTrigger value="image" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
//                   <File className="mr-2 h-4 w-4" />
//                   Upload Image
//                 </TabsTrigger>
//                 <TabsTrigger value="camera" onClick={startCamera} className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
//                   <Camera className="mr-2 h-4 w-4" />
//                   Use Camera
//                 </TabsTrigger>
//               </TabsList>

//               <TabsContent value="pdf">
//                 <div className="space-y-4">
//                   <Label htmlFor="pdf" className="text-lg font-semibold text-amber-900">Select PDF File</Label>
//                   <Input id="pdf" type="file" accept=".pdf" onChange={handlePdfChange} className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
//                 </div>
//               </TabsContent>

//               <TabsContent value="image">
//                 <div className="space-y-4">
//                   <Label htmlFor="image" className="text-lg font-semibold text-amber-900">Select Image File</Label>
//                   <Input id="image" type="file" accept="image/jpeg" onChange={handleImageChange} className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
//                 </div>
//               </TabsContent>

//               <TabsContent value="camera">
//                 <div className="space-y-4">
//                   <TypographyH2 className="text-2xl font-bold text-amber-900">Camera Capture</TypographyH2>
//                   {isCameraActive ? (
//                     <div className="flex flex-col items-center">
//                       <video ref={videoRef} autoPlay className="border rounded-lg w-full h-auto shadow-md" />
//                       <canvas ref={canvasRef} width={400} height={500} className="hidden" />
//                     </div>
//                   ) : (
//                     cameraImage && (
//                       <div className="mt-4 flex justify-center">
//                         <Image
//                           src={cameraImage}
//                           alt="Captured photo"
//                           width={400}
//                           height={500}
//                           style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "contain" }}
//                           className="rounded-lg shadow-md"
//                         />
//                       </div>
//                     )
//                   )}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </CardContent>
//           <CardFooter className="flex justify-end">
//             {contentType === "camera" && isCameraActive ? (
//               <Button onClick={capturePhoto} className="bg-amber-600 hover:bg-amber-700 text-white">Capture Photo</Button>
//             ) : (
//               <Button onClick={handleShowContents} disabled={!pdf && !image && !cameraImage} className="bg-amber-600 hover:bg-amber-700 text-white">
//                 Show Contents
//               </Button>
//             )}
//           </CardFooter>
//         </Card>

//         {showContent && (
//           <Card className="w-full max-w-3xl mt-8 shadow-lg bg-white">
//             <CardHeader>
//               <CardTitle className="text-2xl font-bold text-amber-800">
//                 {contentType === "pdf" ? "PDF Contents" : contentType === "image" ? "Uploaded Image" : "Captured Photo"}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               {contentType === "pdf" && pdf && (
//                 <embed
//                   src={URL.createObjectURL(pdf)}
//                   type="application/pdf"
//                   width="100%"
//                   height="600px"
//                   className="rounded-lg shadow-md"
//                 />
//               )}
//               {(contentType === "image" && image) || (contentType === "camera" && cameraImage) && (
//                 <div className="flex justify-center">
//                   <Image
//                     src={contentType === "image" ? URL.createObjectURL(image) : cameraImage}
//                     alt={contentType === "image" ? "Uploaded image" : "Captured photo"}
//                     width={400}
//                     height={500}
//                     style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "contain" }}
//                     className="rounded-lg shadow-md"
//                   />
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Page;
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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  useEffect(() => {
    if (contentType === "image" && image) {
      setImageSrc(URL.createObjectURL(image));
    } else if (contentType === "camera" && cameraImage) {
      setImageSrc(cameraImage);
    } else {
      setImageSrc(null);
    }
  }, [contentType, image, cameraImage]);

  const handlePdfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setPdf(file);
      setContentType("pdf");
    } else {
      alert("Please upload a PDF file");
      event.target.value = "";
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "image/jpeg") {
      setImage(file);
      setContentType("image");
    } else {
      alert("Please upload a JPEG image file");
      event.target.value = "";
    }
  };

  const handleShowContents = () => {
    setShowContent(true);
  };

  const startCamera = async () => {
    setIsCameraActive(true);
    setContentType("camera");
    if (navigator.mediaDevices && videoRef.current) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Error accessing the camera:", err);
        alert("Failed to access the camera. Please check your permissions.");
        setIsCameraActive(false);
        setContentType(null);
      }
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        const imageDataUrl = canvasRef.current.toDataURL("image/jpeg");
        setCameraImage(imageDataUrl);
        setIsCameraActive(false);

        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
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
            <Tabs defaultValue="pdf" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="pdf">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload PDF
                </TabsTrigger>
                <TabsTrigger value="image">
                  <File className="mr-2 h-4 w-4" />
                  Upload Image
                </TabsTrigger>
                <TabsTrigger value="camera" onClick={startCamera}>
                  <Camera className="mr-2 h-4 w-4" />
                  Use Camera
                </TabsTrigger>
              </TabsList>

              <TabsContent value="pdf">
                <div className="space-y-4">
                  <Label
                    htmlFor="pdf"
                    className="text-lg font-semibold text-black"
                  >
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
                    accept="image/jpeg"
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
                  {isCameraActive ? (
                    <div className="flex flex-col items-center">
                      <video
                        ref={videoRef}
                        autoPlay
                        className="border rounded-lg w-full h-auto shadow-md"
                      />
                      <canvas
                        ref={canvasRef}
                        width={400}
                        height={300}
                        className="hidden"
                      />
                      <Button onClick={capturePhoto} className="mt-4">
                        Capture Photo
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={startCamera} className="w-full">
                      Start Camera
                    </Button>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={handleShowContents}
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
              {imageSrc && (
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
                    style={{
                      maxWidth: "100%",
                      maxHeight: "600px",
                      objectFit: "contain",
                    }}
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
