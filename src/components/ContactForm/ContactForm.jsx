import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
export default function ContactForm({ handleSubmit }) {
  const ids = useId();

  const initialValues = {
    id: '',
    name: '',
    number: '',
  };
  //   function handleSubmit(values, actions) {
  //     console.log(values);
  //     actions.resetForm();
  //   }

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.wrapper}>
        <label htmlFor={`${ids}-name`}>Name</label>
        <Field
          autoComplete="on"
          className={css.field}
          id={`${ids}-name`}
          type="text"
          name="name"
        />
        <ErrorMessage className={css.error} name="name" component="sup" />
        <label htmlFor={`${ids}-number`}>Number</label>
        <Field
          autoComplete="on"
          className={css.field}
          id={`${ids}-number`}
          type="text"
          name="number"
        />
        <ErrorMessage className={css.error} name="number" component="sup" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
