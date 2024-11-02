/*
- File Name: Sidebar.jsx
- Author: rania rabie
- Date of Creation: 17/9/2024
- Versions Information: 1.0.0
- Dependencies:
  {
  REACT , 
  DndContext file
  }
- Contributors: rania rabie
- Last Modified Date: 17/10/2024
- Description : sidebar of roadmap that drag and drop nodes
*/
import React from "react";
import { useDnD } from "./DnDContext";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

export default function Sidebar() {
  const [_, setType] = useDnD();

  const onDragStart = (event, nodeType) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  // because of the onDragStart being triggered for the entire <aside> the text dragged with me
  // add this function preventDrag to prevent dragging
  const preventDrag = (event) => {
    event.preventDefault(); // Prevent text drag
  };
  const theme = useTheme()
  return (
    <aside>
      <div className="description" onDragStart={preventDrag}>
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        Input Node
      </div>

      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>

      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
      >
        Output Node
      </div>

      <Box>
        <Typography>
          <TipsAndUpdatesIcon fontSize="small" sx={{color: "#ffd517"}} /> quick tips:
        </Typography>
        <div>- to delete an edge or a node select it and click "backspace"</div>
        <div>- to change node proterties click on it and toggle between properties and links </div>
      </Box>
    </aside>
  );
}
