const styles = {
  /* layout */
  position: "absolute",
  height: "100%",
  width: "4%",
  zIndex: 2,

  /* design */
  border: "none",
};

const rightStyle = {
  /* layout */
  top: "0",
  right: "0",
  background:
    "linear-gradient(90deg, rgba(20,20,20,0.01) 0%, rgba(20,20,20,0.1) 100%)",
};

const leftStyle = {
  /* layout */
  top: "0",
  left: "0",
  background:
    "linear-gradient(90deg, rgba(20,20,20,0.1) 0%, rgba(20,20,20,0.01) 100%)",
};

export { styles, rightStyle, leftStyle };
