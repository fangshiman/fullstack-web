import React, { useState } from 'react';
import Input from 'components/Input';
import { useFormik } from 'formik';
import Button from 'components/Button';
import { contactSchema } from 'utils';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { addContact } from 'utils/api';
import { updateVal } from './slice';

import './_contact.scss';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
    },
    onSubmit: async values => {
      await addContact(values)
      setLoading(false);
    },
    validationSchema: contactSchema,
  });
  const update = useDebouncedCallback((key: string, val: string) => {
    dispatch(
      updateVal({
        key,
        val,
      })
    );
  });
  const updateStore = (key: string, val: string) => {
    formik.handleChange(key)(val);
    update(key, val);
  };
  const onSubmit = () => {
    setLoading(true);
    formik.handleSubmit();
  };
  return (
    <div className="Contact">
      <div className="Contact container">
        <h6>CONTACT FORM</h6>
        <Input
          placeholder={'First Name'}
          value={formik.values.firstname}
          onChange={(e: string) => updateStore('firstname', e)}
          error={formik.errors.firstname}
        />
        <Input
          placeholder={'Last Name'}
          value={formik.values.lastname}
          onChange={(e: string) => updateStore('lastname', e)}
          error={formik.errors.lastname}
        />
        <Input
          placeholder={'Email'}
          data-testid={'email'}
          value={formik.values.email}
          onChange={(e: string) => updateStore('email', e)}
          error={formik.errors.email}
        />
        <Input
          placeholder={'Message'}
          value={formik.values.message}
          onChange={(e: string) => updateStore('message', e)}
          error={formik.errors.message}
        />
        <Button loading={loading} text={'ADD A CONTACT'} onClick={onSubmit} />
      </div>
    </div>
  );
};

export default ContactForm;
