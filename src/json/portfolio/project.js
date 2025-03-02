import img_01 from "../../assets/img/portfolio/img_01.png";
import img_02 from "../../assets/img/portfolio/img_02.png";
import img_03 from "../../assets/img/portfolio/img_03.png";
import img_04 from "../../assets/img/portfolio/img_04.png";
import img_05 from "../../assets/img/portfolio/img_05.png";
import img_06 from "../../assets/img/portfolio/img_06.png";
import img_07 from "../../assets/img/portfolio/img_07.png";

export const navigation = [
  {
    id: 1,
    name: "portfolio.navigation.commerical.name",
    sub_Category: [
      {
        id: 1,
        name: "portfolio.navigation.commerical.subcategory.architectural.name",
        types: [
          { id: 1, name: "portfolio.navigation.commerical.subcategory.architectural.types.light" },
          { id: 2, name: "portfolio.navigation.commerical.subcategory.architectural.types.dark" },
          { id: 3, name: "portfolio.navigation.commerical.subcategory.architectural.types.traditional" },
          { id: 4, name: "portfolio.navigation.commerical.subcategory.architectural.types.modern" },
        ],
      },

      {
        id: 2,
        name: "portfolio.navigation.commerical.subcategory.1-2rooms.name",
        types: [
          { id: 1, name: "portfolio.navigation.commerical.subcategory.architectural.types.light" },
          { id: 2, name: "portfolio.navigation.commerical.subcategory.architectural.types.dark" },
          { id: 3, name: "portfolio.navigation.commerical.subcategory.architectural.types.traditional" },
          { id: 4, name: "portfolio.navigation.commerical.subcategory.architectural.types.modern" },
        ],
      },

      {
        id: 3,
        name: "portfolio.navigation.commerical.subcategory.3-4rooms.name",
        types: [
          { id: 1, name: "portfolio.navigation.commerical.subcategory.architectural.types.light" },
          { id: 2, name: "portfolio.navigation.commerical.subcategory.architectural.types.dark" },
          { id: 3, name: "portfolio.navigation.commerical.subcategory.architectural.types.traditional" },
          { id: 4, name: "portfolio.navigation.commerical.subcategory.architectural.types.modern" },
        ],
      },

      {
        id: 4,
        name: "portfolio.navigation.commerical.subcategory.more.name",
        types: [
          { id: 1, name: "portfolio.navigation.commerical.subcategory.architectural.types.light" },
          { id: 2, name: "portfolio.navigation.commerical.subcategory.architectural.types.dark" },
          { id: 3, name: "portfolio.navigation.commerical.subcategory.architectural.types.traditional" },
          { id: 4, name: "portfolio.navigation.commerical.subcategory.architectural.types.modern" },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "portfolio.navigation.residential.name",
    sub_Category: [
      {
        id: 1,
        name: "portfolio.navigation.residential.subcategory.architectural.name",
        types: [
          { id: 1, name: "portfolio.navigation.residential.subcategory.architectural.types.light" },
          { id: 2, name: "portfolio.navigation.residential.subcategory.architectural.types.dark" },
          { id: 3, name: "portfolio.navigation.residential.subcategory.architectural.types.traditional" },
          { id: 4, name: "portfolio.navigation.residential.subcategory.architectural.types.modern" },
        ],
      },

      {
        id: 2,
        name: "portfolio.navigation.residential.subcategory.1-2rooms.name",
        types: [
          { id: 1, name: "portfolio.navigation.residential.subcategory.architectural.types.light" },
          { id: 2, name: "portfolio.navigation.residential.subcategory.architectural.types.dark" },
          { id: 3, name: "portfolio.navigation.residential.subcategory.architectural.types.traditional" },
          { id: 4, name: "portfolio.navigation.residential.subcategory.architectural.types.modern" },
        ],
      },

      {
        id: 3,
        name: "portfolio.navigation.residential.subcategory.3-4rooms.name",
        types: [
          { id: 1, name: "portfolio.navigation.residential.subcategory.architectural.types.light" },
          { id: 2, name: "portfolio.navigation.residential.subcategory.architectural.types.dark" },
          { id: 3, name: "portfolio.navigation.residential.subcategory.architectural.types.traditional" },
          { id: 4, name: "portfolio.navigation.residential.subcategory.architectural.types.modern" },
        ],
      },

      {
        id: 4,
        name: "portfolio.navigation.residential.subcategory.more.name",
        types: [
          { id: 1, name: "portfolio.navigation.residential.subcategory.architectural.types.light" },
          { id: 2, name: "portfolio.navigation.residential.subcategory.architectural.types.dark" },
          { id: 3, name: "portfolio.navigation.residential.subcategory.architectural.types.traditional" },
          { id: 4, name: "portfolio.navigation.residential.subcategory.architectural.types.modern" },
        ],
      },
    ],
  },
];

export const projectsRoom = [
  {
    id: 1,
    title: "portfolio.project.projectroom.living",
  },
  {
    id: 2,
    title: "portfolio.project.projectroom.kitchen",
  },
  {
    id: 3,
    title: "portfolio.project.projectroom.bedroom",
  },
  {
    id: 4,
    title: "portfolio.project.projectroom.bathroom",
  },
  {
    id: 5,
    title: "portfolio.project.projectroom.balcony",
  },
];

export const projects = [
  {
    id: 1,
    categoryId: 1,
    subCategoryId: 1,
    typeId: 1,
    img: img_01,
    hover_Name: "portfolio.projects.one.hovername",
    hover_About: "portfolio.projects.one.hoverabout",
    hover_See: "portfolio.projects.one.hoversee",
    title: "portfolio.projects.one.title",
    subTitle: "portfolio.projects.one.subtitle",
    description: "portfolio.projects.one.description",
    location: "portfolio.projects.one.location",
    size: "portfolio.projects.one.size",
    date: "04 / 2024",
    isFavorite: false,
    images: [
      { id: 1, img: img_01, roomId: 1, isFavorite: false },
      { id: 2, img: img_02, roomId: 2, isFavorite: false },
      { id: 3, img: img_03, roomId: 3, isFavorite: false },
    ],
  },

  {
    id: 2,
    categoryId: 2,
    subCategoryId: 2,
    typeId: 2,
    img: img_04,
    hover_Name: "portfolio.projects.two.hovername",
    hover_About: "portfolio.projects.two.hoverabout",
    hover_See: "portfolio.projects.two.hoversee",
    title: "portfolio.projects.two.title",
    subTitle: "portfolio.projects.two.subtitle",
    description: "portfolio.projects.two.description",
    location: "portfolio.projects.two.location",
    size: "portfolio.projects.two.size",
    date: "04 / 2024",
    isFavorite: false,
    images: [
      { id: 1, img: img_04, roomId: 1, isFavorite: false },
      { id: 2, img: img_05, roomId: 2, isFavorite: false },
      { id: 3, img: img_06, roomId: 3, isFavorite: false },
    ],
  },
  {
    id: 3,
    categoryId: 2,
    subCategoryId: 2,
    typeId: 2,
    img: img_04,
    hover_Name: "portfolio.projects.one.hovername",
    hover_About: "portfolio.projects.one.hoverabout",
    hover_See: "portfolio.projects.one.hoversee",
    title: "portfolio.projects.one.title",
    subTitle: "portfolio.projects.one.subtitle",
    description: "portfolio.projects.one.description",
    location: "portfolio.projects.one.location",
    size: "portfolio.projects.one.size",
    date: "04 / 2024",
    isFavorite: false,
    images: [
      { id: 1, img: img_04, roomId: 1, isFavorite: false },
      { id: 2, img: img_05, roomId: 2, isFavorite: false },
      { id: 3, img: img_06, roomId: 3, isFavorite: false },
    ],
  },
  {
    id: 4,
    categoryId: 2,
    subCategoryId: 2,
    typeId: 2,
    img: img_04,
    hover_Name: "portfolio.projects.one.hovername",
    hover_About: "portfolio.projects.one.hoverabout",
    hover_See: "portfolio.projects.one.hoversee",
    title: "portfolio.projects.one.title",
    subTitle: "portfolio.projects.one.subtitle",
    description: "portfolio.projects.one.description",
    location: "portfolio.projects.one.location",
    size: "portfolio.projects.one.size",
    date: "04 / 2024",
    isFavorite: false,
    images: [
      { id: 1, img: img_04, roomId: 1, isFavorite: false },
      { id: 2, img: img_05, roomId: 2, isFavorite: false },
      { id: 3, img: img_06, roomId: 3, isFavorite: false },
    ],
  },
  {
    id: 5,
    categoryId: 2,
    subCategoryId: 2,
    typeId: 2,
    img: img_02,
    hover_Name: "portfolio.projects.one.hovername",
    hover_About: "portfolio.projects.one.hoverabout",
    hover_See: "portfolio.projects.one.hoversee",
    title: "portfolio.projects.one.title",
    subTitle: "portfolio.projects.one.subtitle",
    description: "portfolio.projects.one.description",
    location: "portfolio.projects.one.location",
    size: "portfolio.projects.one.size",
    date: "04 / 2024",
    isFavorite: false,
    images: [
      { id: 1, img: img_04, roomId: 1, isFavorite: false },
      { id: 2, img: img_05, roomId: 2, isFavorite: false },
      { id: 3, img: img_06, roomId: 3, isFavorite: false },
    ],
  },
  {
    id: 6,
    categoryId: 2,
    subCategoryId: 2,
    typeId: 2,
    img: img_04,
    hover_Name: "portfolio.projects.one.hovername",
    hover_About: "portfolio.projects.one.hoverabout",
    hover_See: "portfolio.projects.one.hoversee",
    title: "portfolio.projects.one.title",
    subTitle: "portfolio.projects.one.subtitle",
    description: "portfolio.projects.one.description",
    location: "portfolio.projects.one.location",
    size: "portfolio.projects.one.size",
    date: "04 / 2024",
    isFavorite: false,
    images: [
      { id: 1, img: img_04, roomId: 1, isFavorite: false },
      { id: 2, img: img_05, roomId: 2, isFavorite: false },
      { id: 3, img: img_06, roomId: 3, isFavorite: false },
    ],
  },
  {
    id: 7,
    categoryId: 2,
    subCategoryId: 2,
    typeId: 2,
    img: img_07,
    hover_Name: "portfolio.projects.one.hovername",
    hover_About: "portfolio.projects.one.hoverabout",
    hover_See: "portfolio.projects.one.hoversee",
    title: "portfolio.projects.one.title",
    subTitle: "portfolio.projects.one.subtitle",
    description: "portfolio.projects.one.description",
    location: "portfolio.projects.one.location",
    size: "portfolio.projects.one.size",
    date: "04 / 2024",
    isFavorite: false,
    images: [
      { id: 1, img: img_04, roomId: 1, isFavorite: false },
      { id: 2, img: img_05, roomId: 2, isFavorite: false },
      { id: 3, img: img_06, roomId: 3, isFavorite: false },
    ],
  },
];

export let isFavorite = []
