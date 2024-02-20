import { Button, Col, Input, Row, Typography } from "antd";
import styles from "./TipSelector.module.css";
import { useDispatch } from "react-redux";
import {
  setCustom,
  setError,
  setTip,
  setTotal,
} from "../../store/features/inputSlice";
import { useAppSelector } from "../../store/store";
import { ChangeEvent } from "react";

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
  const priceInput = useAppSelector((state) => state.input.priceInput);
  const peopleInput = useAppSelector((state) => state.input.peopleInput);
  const customValue = useAppSelector((state) => state.input.customValue);
  const dispatch = useDispatch();
  const getResult = (value: number) => {
    if (!priceInput || !peopleInput) {
      alert("Please enter a price and number of people");
      return;
    }
    if (Number(priceInput) <= 0) {
      setError("error");
      return;
    } else {
      setError("");
    }

    if (Number(peopleInput) <= 0) {
      setError("error");
      return;
    } else {
      setError("");
    }

    // tip per person
    const tipFromTotal = (parseInt(priceInput) * value) / 100;
    const tipPerPerson = tipFromTotal / parseInt(peopleInput);
    dispatch(setTip(tipPerPerson));
    // money per person
    const totalMoney = parseInt(priceInput) / parseInt(peopleInput);
    dispatch(setTotal(totalMoney + tipPerPerson));
  };

  const getCustomValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setCustom(value));
    getResult(Number(value));
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
        <Input
          type="number"
          value={customValue}
          onChange={getCustomValue}
          placeholder="Custom"
          className={styles.custom_input}
        ></Input>
      </Row>
    </Col>
  );
};
