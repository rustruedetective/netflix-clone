import stylesConstants from "../../../globalStyles/stylesConstants";

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
  background: `linear-gradient(90deg, rgba(${stylesConstants.main_black_rgba},0.01) 0%, rgba(${stylesConstants.main_black_rgba},0.1) 100%)`,
};

const leftStyle = {
  /* layout */
  top: "0",
  left: "0",
  background: `linear-gradient(90deg, rgba(${stylesConstants.main_black_rgba},0.1) 0%, rgba(${stylesConstants.main_black_rgba},0.01) 100%)`,
};

const iconStyle = {
  color: stylesConstants.sign_page_grey_light,
  height: "40px",
  width: "40px",
};

export { styles, rightStyle, leftStyle, iconStyle };
