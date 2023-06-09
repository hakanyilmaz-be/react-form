import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import AddressCard from "./cards/AddressCard";
import ContactDetailsCard from "./cards/ContactDetailsCard";
import OrganizationDetailsCard from "./cards/OrganizationDetailsCard";
import "./config-body.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useStore } from "../store";
import { toast } from "react-toastify";

const ConfigBody = () => {
  const [loading, setLoading] = useState(false);

  const { userState, dispatchUser } = useStore();

  const initialValues = {
    isConfirm: userState.isConfirm,
    code: userState.code,
    description: userState.description,
    bankAccount: userState.bankAccount,
    vatAccountNumber: userState.vatAccountNumber,
    companyAccountNumber: userState.companyAccountNumber,
    email: userState.email,
    telephone: userState.telephone,
    website: userState.website,
    streetname: userState.streetname,
    streetnumber: userState.streetnumber,
    postalCode: userState.postalCode,
    city: userState.city,
    country: userState.country,
  };

  const validationSchema = Yup.object({
    isConfirm: Yup.boolean()
      .oneOf([true], "Please confirm the following informations")
      .required("Please confirm the following informations"),
    code: Yup.string().required("Please enter your code"),
    description: Yup.string().required("Please enter description"),
    bankAccount: Yup.string()
      .required()
      .test(
        "includes_",
        "Please enter your Bank Account Number",
        (value) => value && !value.includes("_")
      ),
    vatAccountNumber: Yup.string().required(
      "Please enter your Vat Account Number"
    ),
    companyAccountNumber: Yup.string().required(
      "Please enter your Company Account Number"
    ),
    email: Yup.string().email().required("Please enter a valid email"),
    telephone: Yup.string()
    .required().test(
      "includes_",
      "Please enter a valid telephone number",
      (value) => value && !value.includes("_")
    ),
    website: Yup.string().required("Please enter website"),
    streetname: Yup.string().required("Please enter street name"),
    streetnumber: Yup.string().required("Please enter street number"),
    postalCode: Yup.string().required("Please enter postal code"),
    city: Yup.string().required("Please enter city"),
    country: Yup.string().required("Please enter country"),
  });

  const onSubmit = (values) => {
    setLoading(true);
    try {
      console.log(values);
      dispatchUser(
        {
          type: "UPDATE_USER",
          payload: values,
        }
      );
      setTimeout(() => {
        //It is for user experience - like a connection to fake API
        setLoading(false);
      }, 700);
      toast("✅ Form has been sent successfully", {
        position: "top-left",
        pauseOnHover: true,
      });
    } catch (err) {
      // API errors
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form className="form" noValidate onSubmit={formik.handleSubmit}>
      <Container className="config-body">
        <Row className="g-5">
          <Col md={4}>
            <h3>Organization Details</h3>
            <OrganizationDetailsCard formik={formik} />
          </Col>
          <Col md={4}>
            <h3>Address</h3>
            <AddressCard formik={formik} />
          </Col>
          <Col md={4}>
            <h3>Contact Details</h3>
            <ContactDetailsCard formik={formik} />
          </Col>
        </Row>
      </Container>
      <div className="top-btn">
        <Button
          variant="primary"
          type="submit"
          disabled={!(formik.isValid && formik.dirty)}
        >
          {loading && <Spinner animation="border" size="sm" />} Save
        </Button>
        <Button
          type="button"
          value="Cancel"
          onClick={formik.resetForm}
          disabled={!formik.dirty}
        >
          Cancel
        </Button>
      </div>
      <div className="errMessage">
        {Object.keys(formik.errors).length > 0
          ? "Please fill in all the fields"
          : ""}
      </div>
    </Form>
  );
};

export default ConfigBody;
