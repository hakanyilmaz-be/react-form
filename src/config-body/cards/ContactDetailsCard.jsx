import React from "react";
import { Form } from "react-bootstrap";
import { InputMask } from 'primereact/inputmask';
        

const ContactDetailsCard = ({ formik }) => {
  return (
    <>
      <Form.Group className="mb-3" onChange={formik.handleChange}>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          {...formik.getFieldProps("email")}
          isInvalid={formik.touched.email && formik.errors.email}
          isValid={formik.touched.email && !formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" onChange={formik.handleChange}>
        <Form.Label>Telephone</Form.Label>
        <Form.Control
          type="text"
          as={InputMask}
          mask="9999-99-99-99"
          {...formik.getFieldProps("telephone")}
          isInvalid={formik.touched.telephone && formik.errors.telephone}
          isValid={formik.touched.telephone && !formik.errors.telephone}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.telephone}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" onChange={formik.handleChange}>
        <Form.Label>Website</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("website")}
          isInvalid={formik.touched.website && formik.errors.website}
          isValid={formik.touched.website && !formik.errors.website}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.website}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export default ContactDetailsCard;
