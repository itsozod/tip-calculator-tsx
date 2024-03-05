import { Button, Col, Input, Row, Typography } from "antd";
import styles from "./TipSelector.module.css";
import { ChangeEvent } from "react";
import { FormikValues } from "formik";

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

export const TipSelector = ({ formik }: FormikValues) => {
  const { Paragraph } = Typography;

  const getResult = (value: number) => {
    if (formik.values.priceInput && formik.values.peopleInput) {
      const tipFromTotal = (Number(formik.values.priceInput) * value) / 100;
      const tipPerPerson = tipFromTotal / Number(formik.values.peopleInput);
      formik.handleChange({
        target: { name: "tip", value: tipPerPerson.toFixed(2) },
      });

      const money =
        parseInt(formik.values.priceInput) /
          parseInt(formik.values.peopleInput) +
        tipPerPerson;
      formik.setFieldValue("total", money.toFixed(2));
    }
  };

  const getCustomValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    formik.handleChange({ target: { name: "customValue", value: value } });
    if (formik.values.priceInput && formik.values.peopleInput) {
      if (value) {
        getResult(Number(value));
      } else {
        formik.handleChange({ target: { name: "tip", value: 0 } });
        formik.handleChange({ target: { name: "total", value: 0 } });
      }
    }
  };
  return (
    <Col className={styles.row}>
      <Paragraph>Select a tip %</Paragraph>
      <Row className={styles.col}>
        {buttons.map((btn) => {
          return (
            <Button
              htmlType="submit"
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
          name="customValue"
          value={formik.values.customValue}
          onChange={getCustomValue}
          placeholder="Custom"
          className={styles.custom_input}
        ></Input>
      </Row>
    </Col>
  );
};
