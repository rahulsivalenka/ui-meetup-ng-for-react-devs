import { Field, Form, Formik } from 'formik';
import React from 'react';
import yup from 'yup';

const INITIAL_VALUES = {
  name: '',
};

const VALIDATION_SCHEMA = yup.schema({
  name: yup.string().required(''),
});

const MyComp = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log('form submitted with values', values);
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting, isValid }) => (
        <Form>
          <Field name="name" required />
          {errors.name && touched.name && errors.name}

          <button type="submit" disabled={isSubmitting || !isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
