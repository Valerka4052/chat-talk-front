import {  Wrapper,  Form,  Title,  Input,  Error,  InputWrapper,  ShowPasswordBtn,} from './ForgotPasswordLink.styled';
import { Formik } from 'formik';
import { AuthBtn} from '@/components/Buttons';
import { validations } from '@/utils/Schemas';
import { Lock } from '@/images/svg';
import { OffEyeIcon, OnEyeIcon } from '@/images/reactIcons';
import { useEffect, useState } from 'react';
import { confirmPassword } from '../../../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Loader } from '../../../../utils/Loader';
import { FormFieldError } from '../../../FormFieldError/FormFieldError';

export const ForgotPasswordLink = ({onOpenRecieved}) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    setToken(token);
  }, []);

  return (
    <Wrapper>
      <>
        <Formik
          validationSchema={validations.recoveryPasswordSchema}
          initialValues={{ password: '', confirmPassword: '' }}
          onSubmit={async (values, { setSubmitting }) => {
            setLoading(true)
            if (values.password !== values.confirmPassword) {
              alert("passwords in the fields do not match")
              setSubmitting(false);
             
            } else {
              const credentials = { new_password: values.password, token };
              const result = await dispatch(confirmPassword(credentials));
              if (result.meta.requestStatus === "fulfilled") {
                onOpenRecieved();
              }
              setLoading(false)
              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Title>New Password</Title>
              <InputWrapper>
                <Lock />
                <Input
                  type={isShowPassword ? 'text' : 'password'}
                  name="password"
                  secureTextEntry={!isShowPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                  error = {Boolean(errors.password && touched.password)}
                />
                <ShowPasswordBtn
                  type="button"
                  onClick={() => setIsShowPassword(prev => !prev)}
                >
                  {isShowPassword ? (
                    <OnEyeIcon size={18} />
                  ) : (
                    <OffEyeIcon size={18} />
                  )}
                </ShowPasswordBtn>
              </InputWrapper>
              <Error>
                {errors.password && touched.password && < FormFieldError title={errors.password}/>}
              </Error>
              <Title>New Password</Title>
              <InputWrapper>
                <Lock />
                <Input
                  type={isShowConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  secureTextEntry={!isShowConfirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  placeholder="Enter password again"
                  error = {Boolean(errors.confirmPassword && touched.confirmPassword)}
                />
                <ShowPasswordBtn
                  type="button"
                  onClick={() => setIsShowConfirmPassword(prev => !prev)}
                >
                  {isShowConfirmPassword ? (
                    <OnEyeIcon size={18} />
                  ) : (
                    <OffEyeIcon size={18} />
                  )}
                </ShowPasswordBtn>
              </InputWrapper>
              <Error>
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                < FormFieldError title={errors.confirmPassword}/>}
              </Error>
              <AuthBtn disabled={loading} from={"recovey-password"} />
            </Form>
          )}
        </Formik>
      </>
      {loading && <Loader />}
    </Wrapper>
  );
};

ForgotPasswordLink.propTypes = { onOpenRecieved: PropTypes.func, }

