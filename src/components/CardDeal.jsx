import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Lorem ipsum dolor sit amet consectetur{" "}
        <br className="sm:block hidden" /> adipisicing elit.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        quidem magnam excepturi sapiente dolor rerum?
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
