// import React, { useState } from "react";
// import Header from "./components/Header";
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
// function Page() {
//   const [pdf, setPdf] = useState<File | null>(null);
// const [image, setImage] = useState<File | null>(null);
//   const [showPdfContents, setShowPdfContents] = useState(false);
//   const [showImageContents, setShowImageContents] = useState(false);

//   const handlePdfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "application/pdf") {
//       setPdf(file);
//     } else {
//       alert("Please upload a PDF file");
//       event.target.value = null;
//     }
//   };

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "image/jpeg") {
//       setImage(file);
//     } else {
//       alert("Please upload a JPEG image file");
//       event.target.value = null;
//     }
//   };

//   const handleShowPdfContents = () => {
//     setShowPdfContents(true);
//   };

//   const handleShowImageContents = () => {
//     setShowImageContents(true);
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         <Tabs defaultValue="account" className="w-[400px]">
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="pdf">Upload PDF</TabsTrigger>
//             <TabsTrigger value="image">Upload image</TabsTrigger>
//             <TabsTrigger value="camera">Use camera</TabsTrigger>
//           </TabsList>
//           <TabsContent value="pdf">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Upload PDF</CardTitle>
//               </CardHeader>

//               <CardContent className="space-y-2">
//                 <div className="space-y-1">
//                   <Label htmlFor="name">PDF</Label>
//                   <Input id="pdf" type="file" accept=".pdf" onChange={handlePdfChange}/>
//                 </div>
//                 {showPdfContents && pdf && (
//                   <div>
//                     <h3>PDF Contents:</h3>
//                     <p>Filename: {pdf.name}</p>
//                     <p>File size: {pdf.size} bytes</p>
//                     <embed src={URL.createObjectURL(pdf)} type="application/pdf" width="100%" height="500px" />
//                   </div>
//                 )}
//               </CardContent>

//               <CardFooter>
//                 <Button onClick={handleShowPdfContents} disabled={!pdf} className="ml-auto">Show contents</Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>

//           <TabsContent value="image">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Upload Image</CardTitle>
//               </CardHeader>

//               <CardContent className="space-y-2">
//               <div className="space-y-1">
//                   <Label htmlFor="image">Image</Label>
//                   <Input id="image" type="file" accept="image/jpeg" onChange={handleImageChange} />
//                 </div>
//                 {showImageContents && image && (
//                   <div>
//                     <h3>Image Contents:</h3>
//                     <p>Filename: {image.name}</p>
//                     <p>File size: {image.size} bytes</p>
//                     <Image src={URL.createObjectURL(image)} alt="Uploaded image" style={{ maxWidth: "100%", maxHeight: "500px" }} />
//                   </div>
//                 )}
//               </CardContent>

//               <CardFooter>
//                 <Button className="ml-auto" onClick={handleShowImageContents} disabled={!image}>
//                   Show contents
//                 </Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>

//           <TabsContent value="camera">
//             <Card>
//               <CardContent className="space-y-2">
//                 <TypographyH2>Give access to Camera</TypographyH2>
//               </CardContent>
//               <CardFooter>
//                 <Button className="ml-auto">Show contents</Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default Page;

"use client";
// import React, { useState } from "react";
// import Header from "./components/Header";
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

// function Page() {
//   const [pdf, setPdf] = useState<File | null>(null);
//   const [image, setImage] = useState<File | null>(null);
//   const [showPdfContents, setShowPdfContents] = useState(false);
//   const [showImageContents, setShowImageContents] = useState(false);

//   const handlePdfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "application/pdf") {
//       setPdf(file);
//     } else {
//       alert("Please upload a PDF file");
//       if (event.target) {
//         event.target.value = "";
//       }
//     }
//   };

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "image/jpeg") {
//       setImage(file);
//     } else {
//       alert("Please upload a JPEG image file");
//       if (event.target) {
//         event.target.value = "";
//       }
//     }
//   };

//   const handleShowPdfContents = () => {
//     setShowPdfContents(true);
//   };

//   const handleShowImageContents = () => {
//     setShowImageContents(true);
//   };

//   return (
//     <div>
//       <Header />
//       <div>
//         <Tabs defaultValue="account" className="w-[400px]">
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="pdf">Upload PDF</TabsTrigger>
//             <TabsTrigger value="image">Upload image</TabsTrigger>
//             <TabsTrigger value="camera">Use camera</TabsTrigger>
//           </TabsList>
//           <TabsContent value="pdf">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Upload PDF</CardTitle>
//               </CardHeader>

//               <CardContent className="space-y-2">
//                 <div className="space-y-1">
//                   <Label htmlFor="pdf">PDF</Label>
//                   <Input
//                     id="pdf"
//                     type="file"
//                     accept=".pdf"
//                     onChange={handlePdfChange}
//                   />
//                 </div>
//                 {showPdfContents && pdf && (
//                   <div>
//                     <h3>PDF Contents:</h3>
//                     <p>Filename: {pdf.name}</p>
//                     <p>File size: {pdf.size} bytes</p>
//                     <embed
//                       src={URL.createObjectURL(pdf)}
//                       type="application/pdf"
//                       width="100%"
//                       height="500px"
//                     />
//                   </div>
//                 )}
//               </CardContent>

//               <CardFooter>
//                 <Button
//                   className="ml-auto"
//                   onClick={handleShowPdfContents}
//                   disabled={!pdf}
//                 >
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
//                   <Input
//                     id="image"
//                     type="file"
//                     accept="image/jpeg"
//                     onChange={handleImageChange}
//                   />
//                 </div>
//                 {showImageContents && image && (
//                   <div>
//                     <p>Filename: {image.name}</p>
//                     <p>File size: {image.size} bytes</p>
//                     <Image
//                       src={URL.createObjectURL(image)}
//                       alt="Uploaded image"
//                       width={400}
//                       height={500}
//                       style={{
//                         maxWidth: "100%",
//                         maxHeight: "500px",
//                         objectFit: "contain",
//                       }}
//                     />
//                   </div>
//                 )}
//               </CardContent>

//               <CardFooter>
//                 <Button
//                   className="ml-auto"
//                   onClick={handleShowImageContents}
//                   disabled={!image}
//                 >
//                   Show contents
//                 </Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>

//           <TabsContent value="camera">
//             <Card>
//               <CardContent className="space-y-2">
//                 <TypographyH2>Give access to Camera</TypographyH2>
//               </CardContent>
//               <CardFooter>
//                 <Button className="ml-auto">Show contents</Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default Page;



// import React, { useState } from "react";
// import Header from "./components/Header";
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

// function Page() {
//   const [pdf, setPdf] = useState<File | null>(null);
//   const [image, setImage] = useState<File | null>(null);
//   const [showContent, setShowContent] = useState(false);
//   const [contentType, setContentType] = useState<"pdf" | "image" | null>(null);

//   const handlePdfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "application/pdf") {
//       setPdf(file);
//       setContentType("pdf");
//     } else {
//       alert("Please upload a PDF file");
//       if (event.target) {
//         event.target.value = "";
//       }
//     }
//   };

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "image/jpeg") {
//       setImage(file);
//       setContentType("image");
//     } else {
//       alert("Please upload a JPEG image file");
//       if (event.target) {
//         event.target.value = "";
//       }
//     }
//   };

//   const handleShowContents = () => {
//     setShowContent(true);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="flex-grow flex flex-col items-center justify-center p-4">
//         <Tabs defaultValue="pdf" className="w-[400px] mb-8">
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="pdf">Upload PDF</TabsTrigger>
//             <TabsTrigger value="image">Upload image</TabsTrigger>
//             <TabsTrigger value="camera">Use camera</TabsTrigger>
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
//                 <TypographyH2>Give access to Camera</TypographyH2>
//               </CardContent>
//               <CardFooter>
//                 <Button className="ml-auto">Show contents</Button>
//               </CardFooter>
//             </Card>
//           </TabsContent>
//         </Tabs>

//         {showContent && (
//           <div className="w-full max-w-3xl">
//             {contentType === "pdf" && pdf && (
//               <div>
//                 <h3 className="text-xl font-bold mb-2">PDF Contents:</h3>
//                 <p>Filename: {pdf.name}</p>
//                 <p>File size: {pdf.size} bytes</p>
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
//                 <h3 className="text-xl font-bold mb-2">Image Contents:</h3>
//                 <p>Filename: {image.name}</p>
//                 <p>File size: {image.size} bytes</p>
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
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Page;



// import React, { useState } from "react";
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

// function Page() {
//   const [pdf, setPdf] = useState<File | null>(null);
//   const [image, setImage] = useState<File | null>(null);
//   const [showContent, setShowContent] = useState(false);
//   const [contentType, setContentType] = useState<"pdf" | "image" | null>(null);

//   const handlePdfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "application/pdf") {
//       setPdf(file);
//       setContentType("pdf");
//     } else {
//       alert("Please upload a PDF file");
//       if (event.target) {
//         event.target.value = "";
//       }
//     }
//   };

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === "image/jpeg") {
//       setImage(file);
//       setContentType("image");
//     } else {
//       alert("Please upload a JPEG image file");
//       if (event.target) {
//         event.target.value = "";
//       }
//     }
//   };

//   const handleShowContents = () => {
//     setShowContent(true);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="p-4 text-center bg-white">
//         <TypographyH2 className="text-center tracking-wide border-none py-3 m-0">ConsumeWise</TypographyH2>
//       </header>
//       <div className="flex-grow flex flex-col items-center p-4">
//         <Tabs defaultValue="pdf" className="w-[400px]">
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="pdf">Upload PDF</TabsTrigger>
//             <TabsTrigger value="image">Upload image</TabsTrigger>
//             <TabsTrigger value="camera">Use camera</TabsTrigger>
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
//                 <TypographyH2>Give access to Camera</TypographyH2>
//               </CardContent>
//               <CardFooter>
//                 <Button className="ml-auto">Show contents</Button>
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
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Page;




import React, { useState, useRef } from "react";
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
import { TypographyH2 } from "./components/TypographyH2";
import Image from "next/image";
import Header from "./components/Header";

function Page() {
  const [pdf, setPdf] = useState<File | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [cameraImage, setCameraImage] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [contentType, setContentType] = useState<"pdf" | "image" | "camera" | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

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
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        // Draw the current video frame onto the canvas
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageDataUrl = canvasRef.current.toDataURL("image/jpeg");
        setCameraImage(imageDataUrl);
        setIsCameraActive(false);
  
        // Safely stop the camera stream
        const stream = videoRef.current.srcObject;
        if (stream instanceof MediaStream) {
          stream.getTracks().forEach((track) => track.stop());
        }
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex flex-col items-center p-4">
        <Tabs defaultValue="pdf" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pdf">Upload PDF</TabsTrigger>
            <TabsTrigger value="image">Upload image</TabsTrigger>
            <TabsTrigger value="camera" onClick={startCamera}>Use camera</TabsTrigger>
          </TabsList>

          <TabsContent value="pdf">
            <Card>
              <CardHeader>
                <CardTitle>Upload PDF</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="pdf">PDF</Label>
                  <Input id="pdf" type="file" accept=".pdf" onChange={handlePdfChange} />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto" onClick={handleShowContents} disabled={!pdf}>
                  Show contents
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="image">
            <Card>
              <CardHeader>
                <CardTitle>Upload Image</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="image">Image</Label>
                  <Input id="image" type="file" accept="image/jpeg" onChange={handleImageChange} />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto" onClick={handleShowContents} disabled={!image}>
                  Show contents
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="camera">
            <Card>
              <CardContent className="space-y-2">
                <TypographyH2>Camera</TypographyH2>
                {isCameraActive ? (
                  <div className="flex flex-col items-center">
                    <video ref={videoRef} autoPlay className="border rounded-lg w-full h-auto" />
                    <canvas ref={canvasRef} width={400} height={500} className="hidden" />
                  </div>
                ) : (
                  cameraImage && (
                    <div className="mt-4 flex justify-center">
                      <Image
                        src={cameraImage}
                        alt="Captured photo"
                        width={400}
                        height={500}
                        style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "contain" }}
                      />
                    </div>
                  )
                )}
              </CardContent>
              <CardFooter>
                {isCameraActive ? (
                  <Button className="ml-auto" onClick={capturePhoto}>Capture Photo</Button>
                ) : (
                  <Button className="ml-auto" onClick={handleShowContents} disabled={!cameraImage}>
                    Show contents
                  </Button>
                )}
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {showContent && (
          <div className="w-full max-w-3xl mt-8">
            {contentType === "pdf" && pdf && (
              <div>
                <h3 className="text-xl font-bold mb-2">PDF Contents:</h3>
                <embed
                  src={URL.createObjectURL(pdf)}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                  className="mt-4"
                />
              </div>
            )}
            {contentType === "image" && image && (
              <div>
                <div className="mt-4 flex justify-center">
                  <Image
                    src={URL.createObjectURL(image)}
                    alt="Uploaded image"
                    width={400}
                    height={500}
                    style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "contain" }}
                  />
                </div>
              </div>
            )}
            {contentType === "camera" && cameraImage && (
              <div>
                <div className="mt-4 flex justify-center">
                  <Image
                    src={cameraImage}
                    alt="Captured photo"
                    width={400}
                    height={500}
                    style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "contain" }}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;