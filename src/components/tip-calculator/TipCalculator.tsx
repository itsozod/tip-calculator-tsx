import { Flex } from "antd";
import styles from "./TipCalculator.module.css";
import { BillCounter } from "../billCounter/BillCounter";

export const TipCalculator = () => {
  return (
    <>
      <Flex className={styles.tip_calculator}>
        <BillCounter />
      </Flex>
    </>
  );
};
