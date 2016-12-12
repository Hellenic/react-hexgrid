/*
  Supported actions by the HexGrid.
  These could be Redux actions as well, if you wish.
*/
export const onMouseEnter = (hex, event) => {
  console.log('onMouseEnter', hex, event);
}
export const onMouseLeave = (hex, event) => {
  console.log('onMouseLeave', hex, event);
}
export const onDragStart = (hex, event) => {
  event.dataTransfer.setData('hex', JSON.stringify(hex));
  console.log('onDragStart', hex, event);
}
export const onDragEnd = (hex, event) => {
  console.log('onDragEnd', hex, event);
}
export const onDragOver = (hex, event) => {
  event.preventDefault();
  console.log('onDragOver', hex, event);
}
export const onDrop = (hex, event) => {
  event.preventDefault();
  let target = JSON.parse(event.dataTransfer.getData('hex'));
  console.log('onDrop', hex, event, target);
}
