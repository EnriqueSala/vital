import {
  onlyPages,
  onlyProjects,
} from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => onlyProjects(data);
// const modifyGrid = (data) => onlyProjects(data)

export default modifyGrid;