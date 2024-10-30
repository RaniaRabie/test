/*
- File Name:themes.jsx
- Author: rania rabie
- Date of Creation: 17/9/2024
- Versions Information: 1.0.0
- Dependencies: modes
- Contributors: rania rabie 
- Last Modified Date: 17/10/2024
- Description : Dark mode
*/
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          
        }
      : {
          // palette values for dark mode
          
          
        }),
  },
});
  