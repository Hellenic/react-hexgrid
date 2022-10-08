import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HexGrid, Hexagon } from "../..";
import { GameLayout } from "./GameLayout";
import { TilesLayout } from "./TilesLayout";
export default {
    title: "Example/DragAndDrop",
    component: Hexagon,
};
const Template = (args, { argTypes }) => {
    return (_jsxs("div", Object.assign({ className: "app" }, { children: [_jsx("h2", { children: "Drag & drop" }), _jsx("p", { children: "Drag tiles from the right-side grid and drop them to the left grid." }), _jsx("p", { children: "You can also drag & drop them within the left board, but not back to the right side." }), _jsx("p", { children: _jsx("small", { children: "TilesLayout (on the right) does not handle `onDrop` and `onDragOver` and that's why it's not possible to drop anything on these tiles. GameLayout (on the left) handles all the events, so it's possible to start a drag as well as drop tiles. It also implements custom check to disallow drop on certain tiles, like the ones that are blocked or already have content in them." }) }), _jsxs(HexGrid, Object.assign({ width: 1600, height: 1000, viewBox: "-50 -50 100 100" }, { children: [_jsx(GameLayout, {}), _jsx(TilesLayout, {})] }))] })));
};
export const Default = Template.bind({});
//# sourceMappingURL=drag-and-drop.story-disabled.js.map