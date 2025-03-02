import img_01 from "../../assets/img/blog/blog_01.png";

import read_one from "../../assets/img/blog_new/read_one.png";
import read_two from "../../assets/img/blog_new/read_two.png";
import read_three from "../../assets/img/blog_new/read_three.png";
import read_four from "../../assets/img/blog_new/read_four.png";
import read_five from "../../assets/img/blog_new/read_five.png";
import read_six from "../../assets/img/blog_new/read_six.png";
import read_seven from "../../assets/img/blog_new/read_seven.png";
import read_eight from "../../assets/img/blog_new/read_eight.png";

import sale from "../../assets/img/blog_new/sale_img.png";
import visit from "../../assets/img/blog_new/visit_img.png";

export const blog = [
  {
    id: 1,
    img: img_01,
    name: "blog.one.name",
    text: "blog.one.text",
    size: "blog.one.size",
    isPopular: true,
    read: [
      {
        id: 1,
        name: "blog.one.read.one.name",
        images: [{ id: 1, img: read_one }],
        title: "blog.one.read.one.title",
        description: "blog.one.read.one.description",
      },
      {
        id: 2,
        name: "blog.one.read.two.name",
        images: [{ id: 1, img: read_two }],
        title: "blog.one.read.two.title",
        description: "blog.one.read.two.description",
      },
      {
        id: 3,
        name: "blog.one.read.three.name",
        images: [
          { id: 1, img: read_three },
          { id: 2, img: read_four },
        ],
        title: "blog.one.read.three.title",
        description: "blog.one.read.three.description",
      },
      {
        id: 4,
        name: "blog.one.read.four.name",
        images: [{ id: 1, img: read_five }],
        title: "blog.one.read.four.title",
        description: "blog.one.read.four.description",
      },
      {
        id: 5,
        name: "blog.one.read.five.name",
        images: [
          { id: 1, img: read_six },
          { id: 2, img: read_seven },
          { id: 3, img: read_eight },
        ],
        title: "blog.one.read.five.title",
        description: "blog.one.read.five.description",
      },
      {
        id: 6,
        name: "blog.one.read.six.name",
        title: "blog.one.read.six.title",
      },
    ],
    sale: [
      {
        id: 1,
        img: sale,
        name: "SALE",
        title: "Get 15% discount for your interoir design from Nov 12 - Dec 12",
      },
    ],
    visit: [
      {
        id: 1,
        img: visit,
      },
    ],
  },
];
