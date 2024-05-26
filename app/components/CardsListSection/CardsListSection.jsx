import Styles from "./CardsListSection.module.css";
import { CardList } from "./CardList";
import { CardsSlider } from "./CardsSlider";

export const CardsListSection = (props) => {
  return (
    <section className={Styles["list-section"]}>
      {props.type === "slider" ? (
        <>
          <h2 className={Styles["list-section__title"]} id={props.id}>
            {props.title}
          </h2>
          <CardsSlider data={props.data} />
        </>
      ) : (
        <CardList data={props.data} title={props.title} />
      )}
    </section>
  );
};
