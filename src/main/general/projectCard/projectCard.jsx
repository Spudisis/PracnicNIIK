import s from "./projectCard.module.css";
import shop from "../shop.json";
function ProjectCard(props) {
  let projects = "";
  let outCard = () => {
    let cards = document.querySelector("#cards" + props.type);
    shop.forEach((element) => {
      console.log(element.type);
      if (element.type == props.type) {
        projects +=
          "<div><div className=" +
          s.card +
          "><h3>" +
          element.name +
          "</h3><p className=" +
          s.textCard +
          ">" +
          element.opis +
          "</p></div></div>";
      }
    });
    return (cards.innerHTML += projects);
  };
  setTimeout(() => {
    outCard();
  }, 100);
  return <div id={"cards" + props.type} className={s.cards}></div>;
}

export default ProjectCard;
