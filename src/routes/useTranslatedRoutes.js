import { useTranslation } from "react-i18next";

 const useTranslatedRoutes = () => {
  const { t } = useTranslation();

  const routes = [
    { id: 1, name: t("menu.home"), path: "/" },
    { id: 2, name: t("menu.portfolio"), path: "/portfolio?page=1" },
    { id: 3, name: t("menu.services & packages"), path: "/service" },
    { id: 4, name: t("menu.work stages"), path: "/work" },
    { id: 5, name: t("menu.about us"), path: "/about" },
    { id: 6, name: t("menu.our blog"), path: "/blog?page=1" },
    { id: 7, name: "", path: "/favs?page=1" },
    { id: 8, name: t("menu.contact us"), path: "/contact" },
  ];

  return routes;
};

export default useTranslatedRoutes;
