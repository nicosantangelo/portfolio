export const locations = {
  home() {
    return "/";
  },
  blog(name: string = "") {
    const baseUrl = "/blog";
    return baseUrl + (name ? `/${name}` : "");
  },
  links() {
    return "/links";
  },
};
