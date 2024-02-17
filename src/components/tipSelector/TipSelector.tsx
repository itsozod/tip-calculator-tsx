import { Button, Col, Input, Row, Typography } from "antd";
import styles from "./TipSelector.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setTip, setTotal } from "../../store/features/inputSlice";

const buttons = [
  {
    id: 1,
    value: 5,
  },
  {
    id: 2,
    value: 10,
  },
  {
    id: 3,
    value: 15,
  },
  {
    id: 4,
    value: 25,
  },
  {
    id: 5,
    value: 50,
  },
];

export const TipSelector = () => {
  const { Paragraph } = Typography;
  const priceInput = useSelector((state) => state.input.priceInput);
  const peopleInput = useSelector((state) => state.input.peopleInput);
  const dispatch = useDispatch();
  const getResult = (value: number) => {
    if (!priceInput || !peopleInput) {
      alert("Please enter a price and number of people");
      return;
    }
    // tip per person
    const tipFromTotal = (priceInput * value) / 100;
    const tipPerPerson = tipFromTotal / peopleInput;
    dispatch(setTip(tipPerPerson));
    // money per person
    const totalMoney = priceInput / peopleInput;
    dispatch(setTotal(totalMoney + tipPerPerson));
  };
  return (
    <Col className={styles.row}>
      <Paragraph>Select a tip %</Paragraph>
      <Row className={styles.col}>
        {buttons.map((btn) => {
          return (
            <Button
              key={btn.id}
              value={btn.value}
              className={styles.tip_btn}
              onClick={() => getResult(btn.value)}
            >
              {btn.value}%
            </Button>
          );
        })}
        <Input type="number" placeholder="Custom"></Input>
      </Row>
    </Col>
  );
};
