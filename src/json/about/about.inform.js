import women from "../../assets/img/about_img/our_team_women.png";
import one_man from "../../assets/img/about_img/our_team_one_man.png";
import two_man from "../../assets/img/about_img/our_team_two_man.png";
import three_man from "../../assets/img/about_img/our_team_three_man.png";
import { useTranslation } from "react-i18next";

export const team = [
  {
    id: 1,
    img: women,
    name: "about.team.one.name",
    description: "about.team.one.description",
  },
  {
    id: 2,
    img: one_man,
    name: "about.team.two.name",
    description: "about.team.two.description",
  },
  {
    id: 3,
    img: two_man,
    name: "about.team.three.name",
    description: "about.team.three.description",
  },
  {
    id: 4,
    img: three_man,
    name: "about.team.four.name",
    description: "about.team.four.description",
  },
  {
    id: 5,
    img: women,
    name: "about.team.five.name",
    description: "about.team.five.description",
  },
  {
    id: 6,
    img: two_man,
    name: "about.team.six.name",
    description: "about.team.six.description",
  }
];

export function AnswerComponent() {
  const [t] = useTranslation();

  const answer = [
    {
      id: 1,
      name: t("about.answers.one.name"),
      text: t("about.answers.one.description"),
    },
    {
      id: 2,
      name: t("about.answers.two.name"),
      text: t("about.answers.two.description"),
    },
    {
      id: 3,
      name: t("about.answers.three.name"),
      text: t("about.answers.three.description"),
    },
    {
      id: 4,
      name: t("about.answers.four.name"),
      text: t("about.answers.four.description"),
    },
  ];

  return answer;
}
