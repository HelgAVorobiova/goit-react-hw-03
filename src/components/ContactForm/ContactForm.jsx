import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from "./ContactForm.module.css"

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'At least 3 characters')
    .max(50, 'Max 50 characters')
    .required('Required field'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/)
    .required('Required field'),
});
export default function ContactForm({ onSubmit }) {
  const initialValues = { name: '', number: '' };
  const handleSubmit = (values, actions) => {
    onSubmit(values.name, values.number);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <label className={css.formLabel}>
          Name
          <Field type="text" name="name" className={css.formField} />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMessage}
          />
        </label>
        <label className={css.formLabel}>
          Number
          <Field
            type="text"
            name="number"
            placeholder="number format XXX-XX-XX"
            className={css.formField}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        </label>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
