import React from "react";
import { Form } from "react-bootstrap";

const AddressCard = ({ formik }) => {
  return (
    <>
      <Form.Group className="mb-3" onChange={formik.handleChange}>
        <Form.Label>Street Name</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("streetname")}
          isInvalid={formik.touched.streetname && formik.errors.streetname}
          isValid={formik.touched.streetname && !formik.errors.streetname}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.streetname}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" onChange={formik.handleChange}>
        <Form.Label>Street Number</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("streetnumber")}
          isInvalid={formik.touched.streetnumber && formik.errors.streetnumber}
          isValid={formik.touched.streetnumber && !formik.errors.streetnumber}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.streetnumber}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" onChange={formik.handleChange}>
        <Form.Label>Postal Code</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("postalCode")}
          isInvalid={formik.touched.postalCode && formik.errors.postalCode}
          isValid={formik.touched.postalCode && !formik.errors.postalCode}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.postalCode}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" onChange={formik.handleChange}>
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("city")}
          isInvalid={formik.touched.city && formik.errors.city}
          isValid={formik.touched.city && !formik.errors.city}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.city}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" onChange={formik.handleChange}>
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("country")}
          isInvalid={formik.touched.country && formik.errors.country}
          isValid={formik.touched.country && !formik.errors.country}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.country}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export default AddressCard;
