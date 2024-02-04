import { Flex, Input, Typography } from "antd";
import styles from "./BillCounter.module.css";
import { TipSelector } from "../tipSelector/TipSelector";
import { PeopleCounter } from "../peopleCounter/PeopleCounter";
import { ResultContainer } from "../resultContainer/ResultContainer";

export const BillCounter = () => {
  const { Paragraph } = Typography;
  return (
    <Flex className={styles.bill_holder}>
      <Flex className={styles.bill_container}>
        <Paragraph>Bill</Paragraph>
        <Input placeholder="Enter price"></Input>
        <TipSelector />
        <PeopleCounter />
      </Flex>
      <ResultContainer />
    </Flex>
  );
};
