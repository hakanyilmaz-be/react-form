import React from "react";
import { Form } from "react-bootstrap";
import { InputMask } from 'primereact/inputmask';

const OrganizationDetailsCard = ({ formik }) => {
  return (
    <>
      <Form.Group className="mb-3" onChange={formik.handleChange}>
        <Form.Check
          type="checkbox"
          label="I confirm the following informations"
          {...formik.getFieldProps("isConfirm")}
          isInvalid={formik.touched.isConfirm && formik.errors.isConfirm}
          isValid={formik.touched.isConfirm && !formik.errors.isConfirm}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.isConfirm}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" onChange={formik.handleChange}>
        <Form.Label>Code</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("code")}
          isInvalid={formik.touched.code && formik.errors.code}
          isValid={formik.touched.code && !formik.errors.code}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.code}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" onChange={formik.handleChange}>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("description")}
          isInvalid={formik.touched.description && formik.errors.description}
          isValid={formik.touched.description && !formik.errors.description}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.description}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" onChange={formik.handleChange}>
        <Form.Label>Bank Account Number</Form.Label>
        <Form.Control
          type="text"
          as={InputMask}
          mask="9999-9999-9999"
          {...formik.getFieldProps("bankAccount")}
          isInvalid={formik.touched.bankAccount && formik.errors.bankAccount}
          isValid={formik.touched.bankAccount && !formik.errors.bankAccount}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.bankAccount}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" onChange={formik.handleChange}>
        <Form.Label>Vat Account Number</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("vatAccountNumber")}
          isInvalid={
            formik.touched.vatAccountNumber && formik.errors.vatAccountNumber
          }
          isValid={
            formik.touched.vatAccountNumber && !formik.errors.vatAccountNumber
          }
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.vatAccountNumber}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" onChange={formik.handleChange}>
        <Form.Label>Company Account Number</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("companyAccountNumber")}
          isInvalid={
            formik.touched.companyAccountNumber &&
            formik.errors.companyAccountNumber
          }
          isValid={
            formik.touched.companyAccountNumber &&
            !formik.errors.companyAccountNumber
          }
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.companyAccountNumber}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export default OrganizationDetailsCard;
