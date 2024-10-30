// import React, { useContext, useEffect, useState } from "react";
// import TextField from "@mui/material/TextField";
// import {
//   Box,
//   Button,
//   Stack,
//   MenuItem,
//   Select,
//   FormControl,
//   Tooltip,
// } from "@mui/material";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { useEdgesState, useNodesState } from "@xyflow/react";
// import { RoadmapContext } from "./RoadmapContext";

// export default function RoadmapDetails() {
//   const {
//     roadmapCategory,
//     setRoadmapCategory,
//     roadmapName,
//     setRoadmapName,
//     roadmapDescription,
//     setRoadmapDescription,
//     imageUrl,
//     setImageUrl,
//   } = useContext(RoadmapContext);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const { id } = useParams();
//   const [nodes, setNodes] = useNodesState([]);
//   const [edges, setEdges] = useEdgesState([]);

//   const [categoryError, setCategoryError] = useState(false); // Separate state for category error
//   const [categoryClicked, setCategoryClicked] = useState(false);

//   const [roadmapNameClicked, setRoadmapNameClicked] = useState(false);
//   const [roadmapNameError, setRoadmapNameError] = useState(false); // Separate state for roadmap name error

//   // Function to update a roadmap
//   const updateRoadmap = async () => {
//     try {
//       const parsedRoadmap = JSON.stringify({
//         roadmapCategory,
//         roadmapName,
//         roadmapDescription,
//         imageUrl,
//         nodes,
//         edges,
//       });

//       await axios.put(
//         `https://careerguidance.runasp.net/api/Dashboard/Update/${id}`,
//         {
//           roadmapData: parsedRoadmap,
//         }
//       );

//       console.log("Roadmap updated successfully.");
//     } catch (error) {
//       console.error("Error updating roadmap:", error);
//     }
//   };

//   const handleCreateClick = () => {
//     setCategoryClicked(true);
//     setRoadmapNameClicked(true);
//     const categoryHasError = roadmapCategory === "";
//     const nameHasError = roadmapName === "";

//     setCategoryError(categoryHasError);
//     setRoadmapNameError(nameHasError);

//     if (!categoryHasError && !nameHasError) {
//       navigate("/create");
//     }
//   };

//   const handleCategoryChange = (e) => {
//     setRoadmapCategory(e.target.value);
//     const hasError = e.target.value === "";
//     setCategoryError(hasError);
//     setCategoryClicked(hasError); // Show tooltip if empty
//   };

//   const handleRoadmapNameChange = (e) => {
//     setRoadmapName(e.target.value);
//     const hasError = e.target.value === "";
//     setRoadmapNameError(hasError);
//     setRoadmapNameClicked(hasError); // Show tooltip if empty
//   };

//   const handleContinueClick = async () => {
//     await updateRoadmap();
//     navigate(`/create/${id}`);
//   };

//   useEffect(() => {
//     setRoadmapCategory("");
//     setRoadmapName("");
//     setRoadmapDescription("");
//     setImageUrl("");
//     if (location.state) {
//       const {
//         roadmapCategory,
//         roadmapName,
//         roadmapDescription,
//         imageUrl,
//         nodes,
//         edges,
//       } = location.state;
//       setRoadmapCategory(roadmapCategory || "");
//       setRoadmapName(roadmapName || "");
//       setRoadmapDescription(roadmapDescription || "");
//       setImageUrl(imageUrl || "");
//       setNodes(nodes || []);
//       setEdges(edges || []);
//     }
//   }, [
//     location.state,
//     setRoadmapCategory,
//     setRoadmapName,
//     setRoadmapDescription,
//     setImageUrl,
//     setNodes,
//     setEdges,
//   ]);

//   const isCreatePath = location.pathname === "/details";
//   const isUpdatePath = location.pathname.startsWith("/details/");

//   return (
//     <Box sx={{ width: "80%", m: "auto", mt: 2 }}>
//       <Stack direction={"column"} alignItems={"center"} sx={{ my: 2 }}>
//         {/* Category Select */}
//         <Box sx={{ mb: 2 }}>
//           <label className="roadmapCategory">Roadmap Category</label>
//           <br />
//           <FormControl variant="outlined" error={categoryError} sx={{ mt: 1 }}>
//             <Tooltip
//               title={
//                 categoryClicked && categoryError
//                   ? "This field is required."
//                   : ""
//               }
//               arrow
//               open={categoryClicked && categoryError} // Show tooltip for category
//               disableHoverListener={!categoryError}
//             >
//               <span>
//                 <Select
//                   labelId="roadmap-category-label"
//                   value={roadmapCategory}
//                   onChange={handleCategoryChange}
//                   sx={{
//                     backgroundColor: "#D9D9D9",
//                     borderRadius: "10px",
//                     width: "350px",
//                     height: "45px",
//                   }}
//                 >
//                   <MenuItem value="">Select a category</MenuItem>
//                   <MenuItem value="Web Development">Web Development</MenuItem>
//                   <MenuItem value="Network">Network</MenuItem>
//                 </Select>
//               </span>
//             </Tooltip>
//           </FormControl>
//         </Box>

//         {/* Roadmap Name */}
//         <Box>
//           <label className="roadmapName">Roadmap Name</label>
//           <br />
//           <FormControl
//             variant="outlined"
//             error={roadmapNameError}
//             sx={{ mt: 1 }}
//           >
//             <Tooltip
//               title={
//                 roadmapNameClicked && roadmapNameError
//                   ? "This field is required."
//                   : ""
//               }
//               arrow
//               open={roadmapNameClicked && roadmapNameError} // Show tooltip for roadmap name
//               disableHoverListener={!roadmapNameError}
//             >
//               <span>
//                 <TextField
//                   id="outlined-basic"
//                   variant="outlined"
//                   autoComplete="off"
//                   value={roadmapName}
//                   onChange={handleRoadmapNameChange}
//                   error={roadmapNameError} // Ensure this is linked to the correct error state
//                   sx={{
//                     mt: 1,
//                     "& .MuiOutlinedInput-root": {
//                       backgroundColor: "#D9D9D9",
//                       border: "none",
//                       width: "350px",
//                       height: "45px",
//                       borderRadius: "10px",
//                       fontSize: "18px",
//                     },
//                   }}
//                 />
//               </span>
//             </Tooltip>
//           </FormControl>
//         </Box>

//         {/* Roadmap Description */}
//         <Box sx={{ my: 2 }}>
//           <label className="roadmapDescription">Roadmap Description</label>
//           <br />
//           <TextField
//             id="outlined-multiline-flexible"
//             multiline
//             value={roadmapDescription}
//             onChange={(e) => setRoadmapDescription(e.target.value)}
//             sx={{
//               mt: 1,
//               "& .MuiOutlinedInput-root": {
//                 backgroundColor: "#D9D9D9",
//                 width: "350px",
//                 minHeight: "130px",
//                 borderRadius: "10px",
//                 alignItems: "flex-start",
//               },
//             }}
//           />
//         </Box>

//         {/* Image URL */}
//         <Box>
//           <label className="roadmapImageUrl">Image URL</label>
//           <br />
//           <TextField
//             id="outlined-image-url"
//             variant="outlined"
//             placeholder="Paste image URL here"
//             value={imageUrl}
//             onChange={(e) => setImageUrl(e.target.value)}
//             sx={{
//               my: 1,
//               "& .MuiOutlinedInput-root": {
//                 backgroundColor: "#D9D9D9",
//                 border: "none",
//                 width: "350px",
//                 height: "45px",
//                 borderRadius: "10px",
//                 fontSize: "18px",
//               },
//             }}
//           />
//         </Box>

//         {/* Image Preview */}
//         {imageUrl && (
//           <Box>
//             <img
//               src={imageUrl}
//               alt="Preview"
//               width="200"
//               style={{ display: "block", margin: "auto" }}
//             />
//           </Box>
//         )}

//         {/* Buttons */}
//         {isCreatePath && (
//           <Button
//             variant="contained"
//             onClick={handleCreateClick}
//             sx={{ width: "200px", display: "block", m: "auto", my: 2 }}
//           >
//             Create
//           </Button>
//         )}
//         {isUpdatePath && (
//           <Button
//             onClick={handleContinueClick}
//             variant="contained"
//             sx={{ my: 2, cursor: "pointer" }}
//           >
//             Continue
//           </Button>
//         )}
//       </Stack>
//     </Box>
//   );
// }

import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  Stack,
  MenuItem,
  Select,
  FormControl,
  Tooltip,
} from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEdgesState, useNodesState } from "@xyflow/react";
import { RoadmapContext } from "./RoadmapContext";

export default function RoadmapDetails() {
  const {
    roadmapCategory,
    setRoadmapCategory,
    roadmapName,
    setRoadmapName,
    roadmapDescription,
    setRoadmapDescription,
    imageUrl,
    setImageUrl,
  } = useContext(RoadmapContext);

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);
  const [errors, setErrors] = useState({
    category: false,
    name: false,
    description: false,
    image: false,
  });
  const [touched, setTouched] = useState({
    category: false,
    name: false,
    description: false,
    image: false,
  });

  const updateRoadmap = async () => {
    try {
      const parsedRoadmap = JSON.stringify({
        roadmapCategory,
        roadmapName,
        roadmapDescription,
        imageUrl,
        nodes,
        edges,
      });

      await axios.put(
        `https://careerguidance.runasp.net/api/Dashboard/Update/${id}`,
        {
          roadmapData: parsedRoadmap,
        }
      );

      console.log("Roadmap updated successfully.");
    } catch (error) {
      console.error("Error updating roadmap:", error);
    }
  };

  const validateFields = () => {
    const newErrors = {
      category: roadmapCategory === "",
      name: roadmapName === "",
      description: roadmapDescription === "",
      image: imageUrl === "",
    };

    setErrors(newErrors);
    return newErrors;
  };

  const handleCreateClick = () => {
    setTouched({ category: true, name: true, description: true, image: true });
    const hasErrors = validateFields();

    if (!hasErrors.category && !hasErrors.name && !hasErrors.description && !hasErrors.image) {
      navigate("/create");
    }
  };

  const handleCategoryChange = (e) => {
    setRoadmapCategory(e.target.value);
    setErrors((prev) => ({ ...prev, category: e.target.value === "" }));
  };

  const handleRoadmapNameChange = (e) => {
    setRoadmapName(e.target.value);
    setErrors((prev) => ({ ...prev, name: e.target.value === "" }));
  };

  const handleRoadmapDescriptionChange = (e) => {
    setRoadmapDescription(e.target.value);
    setErrors((prev) => ({ ...prev, description: e.target.value === "" }));
  };

  const handleRoadmapImageChange = (e) => {
    setImageUrl(e.target.value);
    setErrors((prev) => ({ ...prev, image: e.target.value === "" }));
  };

  const handleContinueClick = async () => {
    setTouched({ category: true, name: true, description: true, image: true });
    const hasErrors = validateFields();

    if (!hasErrors.category && !hasErrors.name && !hasErrors.description && !hasErrors.image) {
      await updateRoadmap();
      navigate(`/create/${id}`);
    }
  };

  useEffect(() => {
    setRoadmapCategory("");
    setRoadmapName("");
    setRoadmapDescription("");
    setImageUrl("");
    if (location.state) {
      const {
        roadmapCategory,
        roadmapName,
        roadmapDescription,
        imageUrl,
        nodes,
        edges,
      } = location.state;
      setRoadmapCategory(roadmapCategory || "");
      setRoadmapName(roadmapName || "");
      setRoadmapDescription(roadmapDescription || "");
      setImageUrl(imageUrl || "");
      setNodes(nodes || []);
      setEdges(edges || []);
    }
  }, [
    location.state,
    setRoadmapCategory,
    setRoadmapName,
    setRoadmapDescription,
    setImageUrl,
    setNodes,
    setEdges,
  ]);

  const isCreatePath = location.pathname === "/details";
  const isUpdatePath = location.pathname.startsWith("/details/");

  return (
    <Box sx={{ width: "80%", m: "auto", mt: 2 }}>
      <Stack direction={"column"} alignItems={"center"} sx={{ my: 2 }}>
        {/* Category Select */}
        <Box sx={{ mb: 2 }}>
          <label className="roadmapCategory">Roadmap Category</label>
          <br />
          <FormControl
            variant="outlined"
            error={errors.category}
            sx={{ mt: 1 }}
          >
            <Tooltip
              title={
                touched.category && errors.category
                  ? "This field is required."
                  : ""
              }
              arrow
              open={touched.category && errors.category}
              disableHoverListener={!errors.category}
            >
              <span>
                <Select
                  labelId="roadmap-category-label"
                  value={roadmapCategory}
                  onChange={handleCategoryChange}
                  sx={{
                    backgroundColor: "#D9D9D9",
                    borderRadius: "10px",
                    width: "350px",
                    height: "45px",
                  }}
                >
                  <MenuItem value="">Select a category</MenuItem>
                  <MenuItem value="Web Development">Web Development</MenuItem>
                  <MenuItem value="Network">Network</MenuItem>
                </Select>
              </span>
            </Tooltip>
          </FormControl>
        </Box>

        {/* Roadmap Name */}
        <Box>
          <label className="roadmapName">Roadmap Name</label>
          <br />
          <FormControl variant="outlined" error={errors.name} sx={{ mt: 1 }}>
            <Tooltip
              title={
                touched.name && errors.name ? "This field is required." : ""
              }
              arrow
              open={touched.name && errors.name}
              disableHoverListener={!errors.name}
            >
              <span>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={roadmapName}
                  onChange={handleRoadmapNameChange}
                  autoComplete="off"
                  error={errors.name}
                  sx={{
                    mt: 1,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#D9D9D9",
                      border: "none",
                      width: "350px",
                      height: "45px",
                      borderRadius: "10px",
                      fontSize: "18px",
                    },
                  }}
                />
              </span>
            </Tooltip>
          </FormControl>
        </Box>

        {/* Roadmap Description */}
        <Box sx={{ my: 2 }}>
          <label className="roadmapDescription">Roadmap Description</label>
          <br />
          <FormControl
            variant="outlined"
            error={errors.description}
            sx={{ mt: 1 }}
          >
            <Tooltip
              title={
                touched.description && errors.description
                  ? "This field is required."
                  : ""
              }
              arrow
              open={touched.description && errors.description}
              disableHoverListener={!errors.description}
            >
              <span>
                <TextField
                  id="outlined-multiline-flexible"
                  multiline
                  value={roadmapDescription}
                  onChange={handleRoadmapDescriptionChange}
                  error={errors.description}
                  sx={{
                    mt: 1,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#D9D9D9",
                      width: "350px",
                      minHeight: "130px",
                      borderRadius: "10px",
                      alignItems: "flex-start",
                    },
                  }}
                />
              </span>
            </Tooltip>
          </FormControl>
        </Box>

        {/* Image URL */}
        <Box>
          <label className="roadmapImageUrl">Image URL</label>
          <br />
          <FormControl
            variant="outlined"
            error={errors.image}
            sx={{ mt: 1 }}
          >
            <Tooltip
              title={
                touched.image && errors.image
                  ? "This field is required."
                  : ""
              }
              arrow
              open={touched.image && errors.image}
              disableHoverListener={!errors.image}
            >
              <span>
          <TextField
            id="outlined-image-url"
            variant="outlined"
            placeholder="Paste image URL here"
            value={imageUrl}
            onChange={handleRoadmapImageChange}
            error={errors.image}
            sx={{
              my: 1,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#D9D9D9",
                border: "none",
                width: "350px",
                height: "45px",
                borderRadius: "10px",
                fontSize: "18px",
              },
            }}
          />
          </span>
            </Tooltip>
          </FormControl>
        </Box>

        {/* Image Preview */}
        {imageUrl && (
          <Box>
            <img
              src={imageUrl}
              alt="Preview"
              width="200"
              style={{ display: "block", margin: "auto" }}
            />
          </Box>
        )}

        {/* Buttons */}
        {isCreatePath && (
          <Button
            variant="contained"
            onClick={handleCreateClick}
            sx={{ width: "200px", display: "block", m: "auto", my: 2 }}
          >
            Create
          </Button>
        )}
        {isUpdatePath && (
          <Button
            onClick={handleContinueClick}
            variant="contained"
            sx={{ my: 2, cursor: "pointer" }}
          >
            Continue
          </Button>
        )}
      </Stack>
    </Box>
  );
}