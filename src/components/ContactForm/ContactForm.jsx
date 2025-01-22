import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Мінімальна кількість - 3 символи')
    .max(50, 'Максимальна кількість - 50 символів')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/)
    .required('Required'),
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
      <Form>
        <label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
