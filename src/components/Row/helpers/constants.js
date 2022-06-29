const constants = {
  row_img_width: 202.6,
  row_img_height: 300,
  row_img_per_page: 6.4,
};

// we derive new values which depend on old values above
const derivedConstants = {
  // img imported from backend
  img_width: constants.row_img_width * 5,
  img_height: constants.row_img_height * 5,

  // row_imgs_per_page:/
};

export { constants, derivedConstants };
